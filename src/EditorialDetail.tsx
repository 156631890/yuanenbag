import { ArrowUpRight } from 'lucide-react'
import { bags, tx, type Lang } from './data'
import type { EditorialArticle } from './editorial'
import { archivePath } from './editorial-index'
import { responsiveImage } from './responsive-images'
import { href } from './routes'
import { labels, dateLabel, Breadcrumbs } from './EditorialLayout'

export function EditorialDetail({ lang, article }: { lang: Lang; article: EditorialArticle }) {
  const related = article.relatedProducts.map(slug => bags.find(bag => bag.slug === slug)!)
  const updated = article.updatedAt || article.publishedAt
  return <article className="container page-section article editorial-article">
    <Breadcrumbs lang={lang} items={[{ label: labels[article.kind][lang], path: archivePath(article.kind) }, { label: article.title[lang] }]} />
    <header className="article-header"><span className="eyebrow">YUANEN / {labels[article.kind][lang]}</span><h1>{article.title[lang]}</h1><p className="lead">{article.intro[lang]}</p>
      <p className="article-meta"><a href={href('/about/', lang)}>{tx('By YUANEN', '远恩编写', 'Por YUANEN')[lang]}</a> · {tx('Published', '发布于', 'Publicado')[lang]} <time dateTime={article.publishedAt}>{dateLabel(article.publishedAt, lang)}</time>{updated !== article.publishedAt && <> · {tx('Updated', '更新于', 'Actualizado')[lang]} <time dateTime={updated}>{dateLabel(updated, lang)}</time></>}</p>
      {article.kind === 'industry' && <p className="article-meta">{tx('Event date', '事件日期', 'Fecha del hecho')[lang]}: <time dateTime={article.eventDate}>{dateLabel(article.eventDate!, lang)}</time> · {tx('Market', '适用市场', 'Mercado')[lang]}: {article.market?.[lang]}</p>}
    </header>
    <figure className="editorial-image"><img src={`${import.meta.env.BASE_URL}${article.image.file}`} alt={article.image.alt[lang]} {...responsiveImage(article.image.file, '(max-width:650px) calc(100vw - 36px), (max-width:1150px) 75vw, 1000px')} loading="eager" fetchPriority="high" /><figcaption>{article.image.caption[lang]}</figcaption></figure>
    {article.sections.map((section, index) => <section key={index} className="editorial-body-section"><h2>{section.heading[lang]}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph[lang]}</p>)}{section.bullets && <ul>{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet[lang]}</li>)}</ul>}{section.table && <div className="editorial-table-scroll" role="region" aria-label={section.table.caption[lang]} tabIndex={0}><table><caption>{section.table.caption[lang]}</caption><thead><tr>{section.table.columns.map((column, columnIndex) => <th scope="col" key={columnIndex}>{column[lang]}</th>)}</tr></thead><tbody>{section.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cellIndex}>{cell[lang]}</th> : <td key={cellIndex}>{cell[lang]}</td>)}</tr>)}</tbody></table></div>}</section>)}
    {related.length > 0 && <section className="editorial-related"><h2>{tx('Related products', '相关产品', 'Productos relacionados')[lang]}</h2><div className="related-links">{related.map(bag => <a href={href(`/products/${bag.slug}/`, lang)} key={bag.slug}>{bag.short[lang]}<ArrowUpRight size={16} /></a>)}</div></section>}
    <section className="guide-sources"><h2>{tx('Sources and scope', '资料来源与适用范围', 'Fuentes y alcance')[lang]}</h2>
      <p>{tx('Check the cited sources. Product specifications are subject to order confirmation and the agreed sample. This article is not a product test report or a regulatory certification.', '请核对所引资料。具体产品规格以订单确认和样品为准。本文不是产品测试报告或法规认证。', 'Consulte las fuentes citadas. Las especificaciones dependen de la confirmación del pedido y de la muestra acordada. Este artículo no es un informe de ensayo ni una certificación.')[lang]}</p>
      {article.sources.length > 0 && <ul>{article.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title[lang]}</a>{source.publishedAt && <> · <time dateTime={source.publishedAt}>{dateLabel(source.publishedAt, lang)}</time></>}</li>)}</ul>}
      <div className="related-links"><a href={href('/content-policy/', lang)}>{tx('Content information', '内容说明', 'Información sobre el contenido')[lang]}<ArrowUpRight size={16} /></a><a href={href('/about/', lang)}>{tx('About YUANEN', '了解远恩', 'Acerca de YUANEN')[lang]}<ArrowUpRight size={16} /></a><a href={href('/contact/', lang)}>{tx('Discuss your specification', '沟通您的采购规格', 'Consultar su especificación')[lang]}<ArrowUpRight size={16} /></a></div>
    </section>
    <a className="button primary" href={href('/contact/', lang)}>{tx('Prepare an enquiry', '准备询价', 'Preparar una consulta')[lang]}<ArrowUpRight size={18} /></a>
  </article>
}
