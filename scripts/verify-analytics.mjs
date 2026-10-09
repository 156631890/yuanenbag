import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { analyticsMeasurementId } from './analytics-config.mjs'

const id = 'G-TEST123456'
let caseNumber = 0
async function fixture({ hostname = 'yuanenbag.com', measurementId = id, noindex = false, saved = null, blockedStorage = false } = {}) {
  const scripts = [], cookies = [], storage = new Map(saved ? [['yuanen-analytics-choice', saved]] : [])
  globalThis.window = {
    location: { hostname, origin: `https://${hostname}`, pathname: '/contact/', search: '?email=private@example.test#brief' },
    localStorage: {
      getItem: key => { if (blockedStorage) throw new Error('Storage blocked'); return storage.get(key) || null },
      setItem: (key, value) => { if (blockedStorage) throw new Error('Storage blocked'); storage.set(key, value) },
    },
  }
  globalThis.document = {
    title: 'Request an Insulated Packaging Quote | YUANEN',
    referrer: 'https://example.test/from?email=private@example.test#private',
    querySelector: selector => selector.includes('ga4-measurement-id') ? { content: measurementId } : noindex ? {} : null,
    createElement: () => ({}),
    head: { append: script => scripts.push(script) },
    get cookie() { return `_ga=123; _ga_TEST123456=456; unrelated=kept` },
    set cookie(value) { cookies.push(value) },
  }
  const analytics = await import(`../src/analytics.ts?case=${caseNumber++}`)
  return { analytics, scripts, cookies, storage, commands: () => (window.dataLayer || []).map(args => Array.from(args)) }
}
try {
  assert.equal(analyticsMeasurementId({ VERCEL_ENV: 'production', SITE_GA4_MEASUREMENT_ID: id }), id)
  assert.equal(analyticsMeasurementId({ VERCEL_ENV: 'production' }), 'G-TEESSYWLKE')
  assert.equal(analyticsMeasurementId({ VERCEL_ENV: 'production', SITE_GA4_MEASUREMENT_ID: '' }), '')
  for (const env of [{}, { VERCEL_ENV: 'preview' }, { VERCEL_ENV: 'development' }, { VERCEL_ENV: 'production', SITE_BASE_PATH: '/yuanenbag/' }]) {
    assert.equal(analyticsMeasurementId({ SITE_GA4_MEASUREMENT_ID: id, ...env }), '')
  }
  assert.throws(() => analyticsMeasurementId({ SITE_GA4_MEASUREMENT_ID: '<script>' }))
  for (const options of [{}, { saved: 'denied' }, { measurementId: '' }, { measurementId: '<script>' }, { hostname: 'localhost', saved: 'granted' }, { hostname: 'preview.vercel.app', saved: 'granted' }, { noindex: true, saved: 'granted' }]) {
    const f = await fixture(options)
    f.analytics.startAnalytics()
    f.analytics.trackEnquiry('enquiry_draft_prepared')
    assert.equal(f.scripts.length, 0, `Analytics loaded before consent or outside production: ${JSON.stringify(options)}`)
    assert.equal(f.commands().length, 0)
  }
  const f = await fixture()
  f.analytics.setAnalyticsChoice('granted')
  assert.equal(f.scripts.length, 1)
  assert.equal(f.scripts[0].src, `https://www.googletagmanager.com/gtag/js?id=${id}`)
  assert.equal(f.scripts[0].referrerPolicy, 'origin')
  const config = f.commands().find(command => command[0] === 'config')[2]
  assert.equal(config.page_location, 'https://yuanenbag.com/contact/')
  assert.equal(config.page_referrer, 'https://example.test')
  assert.equal(config.send_page_view, false)
  assert.equal(config.allow_google_signals, false)
  f.analytics.startAnalytics()
  assert.equal(f.commands().filter(command => command[1] === 'page_view').length, 1)
  for (const action of ['enquiry_sent', 'enquiry_draft_prepared', 'enquiry_brief_download', 'enquiry_email_open']) {
    f.analytics.trackEnquiry(action, { name: 'Private Test', email: 'private@example.test', details: 'private project text' })
  }
  f.analytics.trackEnquiry('generate_lead')
  assert.equal(f.commands().filter(command => command[0] === 'event').length, 5)
  assert(!JSON.stringify(f.commands()).includes('private'))
  const eventCount = f.commands().filter(command => command[0] === 'event').length
  f.analytics.setAnalyticsChoice('denied')
  f.analytics.trackEnquiry('enquiry_draft_prepared')
  assert.equal(f.commands().filter(command => command[0] === 'event').length, eventCount)
  assert.equal(window[`ga-disable-${id}`], true)
  assert.equal(f.cookies.length, 6)
  assert(f.cookies.every(cookie => !cookie.startsWith('unrelated=')))
  f.analytics.setAnalyticsChoice('granted')
  assert.equal(f.scripts.length, 1)
  assert.equal(window[`ga-disable-${id}`], false)
  const remembered = await fixture({ saved: 'granted' })
  remembered.analytics.startAnalytics()
  assert.equal(remembered.scripts.length, 1)
  const blocked = await fixture({ blockedStorage: true })
  blocked.analytics.startAnalytics()
  assert.equal(blocked.scripts.length, 0)
  blocked.analytics.setAnalyticsChoice('granted')
  assert.equal(blocked.scripts.length, 1)
  const enquiry = await readFile('src/Enquiry.tsx', 'utf8')
  assert(!enquiry.includes("trackEnquiry('generate_lead')"), 'A prepared draft must not be counted as a sent lead.')
  console.log('Analytics checks passed: production/consent gates, query redaction, action-only events, opt-out, cookie cleanup and unavailable storage.')
} finally {
  delete globalThis.window
  delete globalThis.document
}
