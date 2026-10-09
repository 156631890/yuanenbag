import index from './editorial-index.json'
import type { EditorialArticle } from './editorial'

export type EditorialSummary = Pick<EditorialArticle, 'kind' | 'slug' | 'publishedAt' | 'updatedAt' | 'title' | 'description' | 'image'>
export const editorialArticles = (index as EditorialSummary[]).slice().sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug))
export const guideArticles = editorialArticles.filter(article => article.kind === 'guide')
export const industryArticles = editorialArticles.filter(article => article.kind === 'industry')
export const articlesPerPage = 12
export const archivePageCount = (kind: EditorialArticle['kind']) => {
  const count = kind === 'guide' ? guideArticles.length : industryArticles.length
  return kind === 'guide' ? Math.max(1, Math.ceil(count / articlesPerPage)) : Math.ceil(count / articlesPerPage)
}
export const archivePath = (kind: EditorialArticle['kind'], page = 1) => {
  const root = kind === 'guide' ? '/guides/' : '/industry-news/'
  return page === 1 ? root : `${root}page/${page}/`
}
export const articlePath = (article: Pick<EditorialArticle, 'kind' | 'slug'>) => `${archivePath(article.kind)}${article.slug}/`
export const articlesOnPage = (kind: EditorialArticle['kind'], page: number) =>
  (kind === 'guide' ? guideArticles : industryArticles).slice((page - 1) * articlesPerPage, page * articlesPerPage)
