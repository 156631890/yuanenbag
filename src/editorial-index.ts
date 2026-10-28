import type { EditorialArticle } from './editorial'
import { archivePageCount, archivePath, articlePath } from './editorial-route-data'

export type EditorialSummary = Pick<EditorialArticle, 'kind' | 'slug' | 'publishedAt' | 'updatedAt' | 'title' | 'description'>
// Production archives already contain their current page's translated cards.
// Reuse them during hydration; server rendering and an empty client/dev root
// still load the complete metadata index. Language/pagination links navigate.
const renderedCards = import.meta.env.SSR ? [] : [...document.querySelectorAll<HTMLAnchorElement>('a[data-editorial-card][data-editorial-kind]')]
const currentPage = renderedCards.length > 0
const index: EditorialSummary[] = currentPage ? renderedCards.map(card => {
  const title = card.querySelector('h3')!.textContent!
  const description = card.querySelector('p')!.textContent!
  return {
    kind: card.dataset.editorialKind as EditorialArticle['kind'],
    slug: card.dataset.editorialCard!,
    publishedAt: card.querySelector('time')!.dateTime,
    title: { en: title, zh: title, es: title },
    description: { en: description, zh: description, es: description },
  }
}) : (await import('./editorial-index.json')).default as EditorialSummary[]
export const editorialArticles = index.slice().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug))
export const guideArticles = editorialArticles.filter(article => article.kind === 'guide')
export const industryArticles = editorialArticles.filter(article => article.kind === 'industry')
export const articlesPerPage = 12
export { archivePageCount, archivePath, articlePath }
export const articlesOnPage = (kind: EditorialArticle['kind'], page: number) => {
  const articles = kind === 'guide' ? guideArticles : industryArticles
  return currentPage ? articles : articles.slice((page - 1) * articlesPerPage, page * articlesPerPage)
}
