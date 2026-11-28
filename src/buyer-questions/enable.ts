export function enableBuyerQuestions(page: HTMLElement) {
  const events = new AbortController();
  const options = {signal: events.signal};
  const controls = page.querySelector<HTMLDivElement>('[data-qa-controls]')!;
  const search = controls.querySelector<HTMLInputElement>('input')!;
  const topic = controls.querySelector<HTMLSelectElement>('[data-topic-filter]')!;
  const role = controls.querySelector<HTMLSelectElement>('[data-role-filter]')!;
  const count = page.querySelector<HTMLElement>('[data-qa-count]')!;
  const empty = page.querySelector<HTMLElement>('[data-qa-empty]')!;
  const groups = [...page.querySelectorAll<HTMLElement>('[data-qa-topic]')];
  const normalize = (text: string) => text.toLowerCase().normalize('NFKD')
    .replace(/\p{M}/gu, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const rows = groups.map(group => ({
    group,
    questions: [...group.querySelectorAll<HTMLDetailsElement>('[data-qa-question]')].map(details => ({
      details,
      text: normalize(details.textContent + ' ' + details.dataset.aliases)
    }))
  }));

  function filter() {
    const words = normalize(search.value).split(' ').filter(Boolean);
    let matches = 0;
    for (const {group, questions} of rows) {
      let groupMatches = 0;
      for (const {details, text} of questions) {
        const show = (!topic.value || topic.value === group.dataset.qaTopic)
          && (!role.value || role.value === details.dataset.qaRole)
          && words.every(word => text.includes(word));
        details.hidden = !show;
        groupMatches += Number(show);
      }
      group.hidden = groupMatches === 0;
      matches += groupMatches;
    }
    count.textContent = count.dataset.label!.replace('{n}', String(matches));
    empty.hidden = matches > 0;
  }

  function reset() {
    search.value = '';
    topic.value = '';
    role.value = '';
    filter();
  }

  function reveal(hash: string) {
    if (!hash || hash.length < 2) return;
    const target = document.getElementById(hash.slice(1));
    if (!target || !page.contains(target)) return;
    const answer = target.closest<HTMLDetailsElement>('details[data-qa-question]');
    if (target.closest('[hidden]')) reset();
    if (answer) answer.open = true;
  }

  search.addEventListener('input', filter, options);
  topic.addEventListener('change', filter, options);
  role.addEventListener('change', filter, options);
  controls.querySelector('button')!.addEventListener('click', () => {
    reset();
    search.focus();
  }, options);
  page.addEventListener('click', event => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    if (link) reveal(link.hash);
  }, options);
  window.addEventListener('hashchange', () => reveal(location.hash), options);
  filter();
  reveal(location.hash);
  controls.hidden = false;
  count.hidden = false;
  return () => events.abort();
}
