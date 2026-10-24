import { tx, type Lang } from './data'
import { href } from './routes'
export const labels = {
  guide: tx('Buying guides', '采购指南', 'Guías de compra'),
  industry: tx('Industry news', '行业动态', 'Actualidad del sector'),
}

export const dateLabel = (value: string, lang: Lang) => new Intl.DateTimeFormat({ en: 'en-GB', zh: 'zh-CN', es: 'es' }[lang], {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
}).format(new Date(`${value}T00:00:00Z`))

export function Breadcrumbs({ lang, items }: { lang: Lang; items: { label: string; path?: string }[] }) {
  return <nav className="breadcrumbs" aria-label={tx('Breadcrumb', '面包屑导航', 'Ruta de navegación')[lang]}>
    <a href={href('/', lang)}>{tx('Home', '首页', 'Inicio')[lang]}</a>
    {items.map((item, index) => <span key={index}><span aria-hidden="true">/</span>{item.path ? <a href={href(item.path, lang)}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</span>)}
  </nav>
}

