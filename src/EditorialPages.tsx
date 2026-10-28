import { ArrowUpRight } from 'lucide-react'
import { tx, type Lang } from './data'
import { GuideCards } from './BuyerResources'
import { archivePageCount, archivePath, articlePath, articlesOnPage, industryArticles, type EditorialSummary } from './editorial-index'
import type { EditorialArticle } from './editorial'
import { responsiveImage } from './responsive-images'
import { href } from './routes'

import { labels, dateLabel, Breadcrumbs } from './EditorialLayout'
// Prerender all card images for no-JavaScript use. Hydration reuses that page's
// image attributes instead of downloading every article's trilingual image index.
// An empty client-only/dev root loads the full index as an on-demand fallback.
const renderedCardImages = import.meta.env.SSR ? [] : [...document.querySelectorAll<HTMLImageElement>('img[data-editorial-slug][data-editorial-file]')]
const cardImages: Record<string, Pick<EditorialArticle['image'], 'file' | 'alt'>> = renderedCardImages.length
  ? Object.fromEntries(renderedCardImages.map(image => [image.dataset.editorialSlug!, { file: image.dataset.editorialFile!, alt: { en: image.alt, zh: image.alt, es: image.alt } }]))
  : (await import('./editorial-images.json')).default

function ArticleCards({ lang, articles }: { lang: Lang; articles: EditorialSummary[] }) {
  return <div className="editorial-grid">{articles.map(article => <a className="editorial-card" href={href(articlePath(article), lang)} key={article.slug}>
    <img data-editorial-slug={article.slug} data-editorial-file={cardImages[article.slug].file} className="editorial-card-image" src={`${import.meta.env.BASE_URL}${cardImages[article.slug].file}`} alt={cardImages[article.slug].alt[lang]} {...responsiveImage(cardImages[article.slug].file, '(max-width:650px) calc(100vw - 80px), (max-width:1150px) 40vw, 480px')} loading="lazy" />
    <span className="eyebrow">{labels[article.kind][lang]} · <time dateTime={article.publishedAt}>{dateLabel(article.publishedAt, lang)}</time></span>
    <h3>{article.title[lang]}</h3>
    <p>{article.description[lang]}</p>
    <span className="text-link">{tx('Read article', '阅读文章', 'Leer artículo')[lang]}<ArrowUpRight size={16} /></span>
  </a>)}</div>
}

function Pagination({ lang, kind, page }: { lang: Lang; kind: EditorialArticle['kind']; page: number }) {
  const total = archivePageCount(kind)
  if (total < 2) return null
  return <nav className="editorial-pagination" aria-label={tx('Article pages', '文章分页', 'Páginas de artículos')[lang]}>
    {Array.from({ length: total }, (_, index) => index + 1).map(number => <a key={number} href={href(archivePath(kind, number), lang)} aria-current={number === page ? 'page' : undefined}>{number}</a>)}
  </nav>
}

export function GuidesArchive({ lang, page = 1 }: { lang: Lang; page?: number }) {
  const articles = articlesOnPage('guide', page)
  return <section className="container page-section">
    <Breadcrumbs lang={lang} items={page === 1 ? [{ label: tx('Resources', '采购指南', 'Recursos')[lang] }] : [{ label: labels.guide[lang], path: '/guides/' }, { label: `${tx('Page', '第', 'Página')[lang]} ${page}` }]} />
    <div className="page-intro"><span className="eyebrow">{tx('KNOW YOUR PACKAGING', '了解您的包装', 'CONOZCA SU EMBALAJE')[lang]}</span>
      <h1>{tx('Insulated Packaging Buying Guides', '保温冷链包装采购指南', 'Guías de compra de embalajes térmicos')[lang]}{page > 1 ? ` · ${page}` : ''}</h1>
      <p className="lead">{tx('Material comparisons and purchasing checklists for custom bags and insulated packaging.', '面向包装袋与保温包装项目的材质对比及采购需求清单。', 'Comparaciones de materiales y listas de compra para bolsas personalizadas y embalaje térmico.')[lang]}</p>
    </div>
    {page === 1 && <><h2>{tx('Choose a buying guide', '选择采购指南', 'Elija una guía de compra')[lang]}</h2><GuideCards lang={lang} /></>}
    {articles.length > 0 && <section className="editorial-section" aria-label={tx('More buying articles', '更多采购文章', 'Más artículos de compra')[lang]}>
      <h2>{tx('More buying articles', '更多采购文章', 'Más artículos de compra')[lang]}</h2><ArticleCards lang={lang} articles={articles} />
    </section>}
    <Pagination lang={lang} kind="guide" page={page} />
    {page === 1 && industryArticles.length > 0 && <div className="editorial-crosslink"><a className="text-link" href={href('/industry-news/', lang)}>{tx('Read industry news', '查看行业动态', 'Ver actualidad del sector')[lang]}<ArrowUpRight size={17} /></a></div>}
  </section>
}

export function IndustryArchive({ lang, page = 1 }: { lang: Lang; page?: number }) {
  return <section className="container page-section">
    <Breadcrumbs lang={lang} items={page === 1 ? [{ label: labels.industry[lang] }] : [{ label: labels.industry[lang], path: '/industry-news/' }, { label: `${tx('Page', '第', 'Página')[lang]} ${page}` }]} />
    <div className="page-intro"><span className="eyebrow">YUANEN / {tx('SOURCE-LED UPDATES', '基于来源的更新', 'ACTUALIZACIONES CON FUENTES')[lang]}</span>
      <h1>{labels.industry[lang]}{page > 1 ? ` · ${page}` : ''}</h1>
      <p className="lead">{tx('Updates relevant to insulated packaging buyers, with original sources, dates and market scope.', '与保温包装采购相关的行业变化，注明原始来源、日期和适用市场。', 'Cambios relevantes para compradores de embalaje térmico, con fuentes originales, fechas y ámbito geográfico.')[lang]}</p>
    </div>
    <ArticleCards lang={lang} articles={articlesOnPage('industry', page)} />
    <Pagination lang={lang} kind="industry" page={page} />
    <div className="editorial-crosslink"><a className="text-link" href={href('/guides/', lang)}>{tx('Browse buying guides', '查看采购指南', 'Ver guías de compra')[lang]}<ArrowUpRight size={17} /></a></div>
  </section>
}

