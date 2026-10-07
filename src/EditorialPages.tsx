import { ArrowUpRight } from 'lucide-react'
import { bags, tx, type Lang } from './data'
import { GuideCards } from './BuyerResources'
import { archivePageCount, archivePath, articlePath, articlesOnPage, industryArticles, type EditorialArticle } from './editorial'
import { href } from './routes'

const labels = {
  guide: tx('Buying guides', '采购指南', 'Guías de compra'),
  industry: tx('Industry news', '行业动态', 'Actualidad del sector'),
}

const dateLabel = (value: string, lang: Lang) => new Intl.DateTimeFormat({ en: 'en-GB', zh: 'zh-CN', es: 'es' }[lang], {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
}).format(new Date(`${value}T00:00:00Z`))

function Breadcrumbs({ lang, items }: { lang: Lang; items: { label: string; path?: string }[] }) {
  return <nav className="breadcrumbs" aria-label={tx('Breadcrumb', '面包屑导航', 'Ruta de navegación')[lang]}>
    <a href={href('/', lang)}>{tx('Home', '首页', 'Inicio')[lang]}</a>
    {items.map((item, index) => <span key={index}><span aria-hidden="true">/</span>{item.path ? <a href={href(item.path, lang)}>{item.label}</a> : <span aria-current="page">{item.label}</span>}</span>)}
  </nav>
}

function ArticleCards({ lang, articles }: { lang: Lang; articles: EditorialArticle[] }) {
  return <div className="editorial-grid">{articles.map(article => <a className="editorial-card" href={href(articlePath(article), lang)} key={article.slug}>
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

export function EditorialDetail({ lang, article }: { lang: Lang; article: EditorialArticle }) {
  const related = article.relatedProducts.map(slug => bags.find(bag => bag.slug === slug)!)
  const updated = article.updatedAt || article.publishedAt
  return <article className="container page-section article editorial-article">
    <Breadcrumbs lang={lang} items={[{ label: labels[article.kind][lang], path: archivePath(article.kind) }, { label: article.title[lang] }]} />
    <header className="article-header"><span className="eyebrow">YUANEN / {labels[article.kind][lang]}</span><h1>{article.title[lang]}</h1><p className="lead">{article.intro[lang]}</p>
      <p className="article-meta"><a href={href('/about/', lang)}>{tx('By YUANEN', '远恩编写', 'Por YUANEN')[lang]}</a> · {tx('Published', '发布于', 'Publicado')[lang]} <time dateTime={article.publishedAt}>{dateLabel(article.publishedAt, lang)}</time>{updated !== article.publishedAt && <> · {tx('Updated', '更新于', 'Actualizado')[lang]} <time dateTime={updated}>{dateLabel(updated, lang)}</time></>}</p>
      {article.kind === 'industry' && <p className="article-meta">{tx('Event date', '事件日期', 'Fecha del hecho')[lang]}: <time dateTime={article.eventDate}>{dateLabel(article.eventDate!, lang)}</time> · {tx('Market', '适用市场', 'Mercado')[lang]}: {article.market?.[lang]}</p>}
    </header>
    {article.image && <figure className="editorial-image"><img src={`${import.meta.env.BASE_URL}${article.image.file}`} alt={article.image.alt[lang]} loading="lazy" /><figcaption>{article.image.caption[lang]}{article.image.kind === 'illustration' && ` · ${tx('Illustration', '示意图', 'Ilustración')[lang]}`}</figcaption></figure>}
    {article.sections.map((section, index) => <section key={index} className="editorial-body-section"><h2>{section.heading[lang]}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph[lang]}</p>)}{section.bullets && <ul>{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet[lang]}</li>)}</ul>}</section>)}
    {related.length > 0 && <section className="editorial-related"><h2>{tx('Related products', '相关产品', 'Productos relacionados')[lang]}</h2><div className="related-links">{related.map(bag => <a href={href(`/products/${bag.slug}/`, lang)} key={bag.slug}>{bag.short[lang]}<ArrowUpRight size={16} /></a>)}</div></section>}
    <section className="guide-sources"><h2>{tx('Sources and scope', '资料来源与适用范围', 'Fuentes y alcance')[lang]}</h2>
      <p>{tx('YUANEN prepared this article with AI assistance. Check the cited source and confirm product specifications for your order. This article is not a product test report or a regulatory certification.', '本文由远恩借助 AI 整理。请核对所引资料，并按您的订单确认产品规格。本文不是产品测试报告或法规认证。', 'YUANEN preparó este artículo con ayuda de IA. Consulte las fuentes y confirme las especificaciones de su pedido. Este artículo no es un informe de ensayo ni una certificación.')[lang]}</p>
      {article.sources.length > 0 && <ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title[lang]}</a>{source.publishedAt && <> · <time dateTime={source.publishedAt}>{dateLabel(source.publishedAt, lang)}</time></>}</li>)}</ul>}
      <div className="related-links"><a href={href('/about/', lang)}>{tx('About YUANEN', '了解远恩', 'Acerca de YUANEN')[lang]}<ArrowUpRight size={16} /></a><a href={href('/contact/', lang)}>{tx('Discuss your specification', '沟通您的采购规格', 'Consultar su especificación')[lang]}<ArrowUpRight size={16} /></a></div>
    </section>
    <a className="button primary" href={href('/contact/', lang)}>{tx('Prepare an enquiry', '准备询价', 'Preparar una consulta')[lang]}<ArrowUpRight size={18} /></a>
  </article>
}
