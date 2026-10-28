import index from './editorial-routes.json'
import type { EditorialArticle } from './editorial'

export type EditorialRoute = Pick<EditorialArticle, 'kind' | 'slug' | 'title'>
export const editorialArticles = index as EditorialRoute[]
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
