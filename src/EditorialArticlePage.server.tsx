import { EditorialDetail } from './EditorialPages'
import { editorialArticles } from './editorial'
import type { Lang } from './data'

export default function EditorialArticlePage({ lang, slug }: { lang: Lang; slug: string }) {
  const article = editorialArticles.find(article => article.slug === slug)
  if (!article) throw new Error(`Unknown editorial article: ${slug}`)
  return <EditorialDetail lang={lang} article={article} />
}
