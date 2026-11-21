import index from './editorial-routes.json'
import type { EditorialArticle } from './editorial'

export type EditorialRoute = Pick<EditorialArticle, 'kind' | 'slug' | 'title'>
// Every navigation loads a document (main.tsx); static HTML already carries its title.
// SSR and the empty development root still need the complete translated metadata.
const renderedTitle = import.meta.env.SSR ? '' : document.querySelector('#root main')
  ? document.title.replace(/ \| (YUANEN|远恩)$/, '') : ''
export const editorialArticles: EditorialRoute[] = renderedTitle
  ? index.map(article => ({ ...article, kind: article.kind as EditorialArticle['kind'],
      title: { en: renderedTitle, zh: renderedTitle, es: renderedTitle } }))
  : (await import('./editorial-index.json')).default as EditorialRoute[]
export const industryArticles = editorialArticles.filter(article => article.kind === 'industry')
export const archivePageCount = (kind: EditorialArticle['kind']) => {
  const count = editorialArticles.filter(article => article.kind === kind).length
  return kind === 'guide' ? Math.max(1, Math.ceil(count / 12)) : Math.ceil(count / 12)
}
export const archivePath = (kind: EditorialArticle['kind'], page = 1) => {
  const root = kind === 'guide' ? '/guides/' : '/industry-news/'
  return page === 1 ? root : `${root}page/${page}/`
}
export const articlePath = (article: Pick<EditorialArticle, 'kind' | 'slug'>) => `${archivePath(article.kind)}${article.slug}/`
