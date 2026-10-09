import { lazy } from 'react'
import { EditorialDetail } from './EditorialPages'
import type { EditorialArticle } from './editorial'
import type { Lang } from './data'

const modules = import.meta.glob<{ default: EditorialArticle }>('./articles/*.ts')
const articlePages = Object.fromEntries(Object.entries(modules).map(([path, load]) => [path, lazy(async () => {
  const { default: article } = await load()
  return { default: ({ lang }: { lang: Lang }) => <EditorialDetail lang={lang} article={article} /> }
})]))

export default function EditorialArticlePage({ lang, slug }: { lang: Lang; slug: string }) {
  const Article = articlePages[`./articles/${slug}.ts`]
  if (!Article) throw new Error(`Unknown editorial article: ${slug}`)
  return <Article lang={lang} />
}
