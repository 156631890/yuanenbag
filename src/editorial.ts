import { bags, guides, languages, type Text } from './data'

export type EditorialArticle = {
  kind: 'guide' | 'industry'
  slug: string
  publishedAt: string
  updatedAt?: string
  eventDate?: string
  market?: Text
  title: Text
  description: Text
  intro: Text
  sections: { heading: Text; paragraphs: Text[]; bullets?: Text[] }[]
  sources: { title: Text; url: string; publishedAt?: string }[]
  relatedProducts: string[]
  image: { file: string; alt: Text; caption: Text; kind: 'product' | 'illustration' }
}

// Only published articles belong in articles/. Keep drafts outside this directory.
const modules = import.meta.glob<{ default: EditorialArticle }>('./articles/*.ts', { eager: true })
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const validDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`)) && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value
const requireText = (value: Text, field: string) => {
  for (const lang of languages) if (!value?.[lang]?.trim()) throw new Error(`Missing ${lang} ${field}`)
}

const seen = new Set(guides.map(guide => guide.slug))
export const editorialArticles = Object.values(modules).map(module => module.default).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug))
for (const article of editorialArticles) {
  if (!['guide', 'industry'].includes(article.kind) || !slugPattern.test(article.slug) || seen.has(article.slug)) throw new Error(`Invalid or duplicate editorial slug: ${article.slug}`)
  seen.add(article.slug)
  if (!validDate(article.publishedAt) || (article.updatedAt && (!validDate(article.updatedAt) || article.updatedAt < article.publishedAt))) throw new Error(`Invalid article date: ${article.slug}`)
  for (const field of ['title', 'description', 'intro'] as const) requireText(article[field], `${field}: ${article.slug}`)
  if (!article.sections?.length) throw new Error(`Missing article sections: ${article.slug}`)
  for (const section of article.sections) {
    requireText(section.heading, `heading: ${article.slug}`)
    if (!section.paragraphs?.length) throw new Error(`Missing section text: ${article.slug}`)
    for (const paragraph of section.paragraphs) requireText(paragraph, `paragraph: ${article.slug}`)
    for (const bullet of section.bullets || []) requireText(bullet, `bullet: ${article.slug}`)
  }
  if (!article.sources?.length) throw new Error(`Missing sources: ${article.slug}`)
  if (article.kind === 'industry' && (!article.eventDate || !validDate(article.eventDate) || article.eventDate > article.publishedAt || !article.market || !article.sources.some(source => source.publishedAt))) throw new Error(`Industry article needs a dated source, event date and market: ${article.slug}`)
  if (article.market) requireText(article.market, `market: ${article.slug}`)
  for (const source of article.sources || []) {
    requireText(source.title, `source title: ${article.slug}`)
    if (!source.url.startsWith('https://') || (source.publishedAt && (!validDate(source.publishedAt) || source.publishedAt > article.publishedAt))) throw new Error(`Invalid source: ${article.slug}`)
  }
  for (const slug of article.relatedProducts || []) if (!bags.some(bag => bag.slug === slug)) throw new Error(`Unknown related product ${slug}: ${article.slug}`)
  if (!article.image) throw new Error(`Missing article image: ${article.slug}`)
  requireText(article.image.alt, `image alt: ${article.slug}`)
  requireText(article.image.caption, `image caption: ${article.slug}`)
  if (!article.image.file.startsWith('images/') || article.image.file.includes('..')) throw new Error(`Invalid image path: ${article.slug}`)
}

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
export const articlePath = (article: EditorialArticle) => `${archivePath(article.kind)}${article.slug}/`
export const articlesOnPage = (kind: EditorialArticle['kind'], page: number) =>
  (kind === 'guide' ? guideArticles : industryArticles).slice((page - 1) * articlesPerPage, page * articlesPerPage)
