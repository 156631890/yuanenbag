import { ArrowUpRight } from 'lucide-react'
import { guides, tx, type Lang } from './data'
import { href } from './routes'
import { GuideMeta } from './BuyerResources'
import ArticleFigure from './ArticleFigure'
import ArticleSections from './ArticleSections'
import content from './revised-guides/materials'

export default function ExpandedGuide({ lang }: { lang: Lang }) {
  const guide = guides.find(g => g.slug === 'insulated-bag-materials')!
  return <article className="container page-section article purchasing-guide editorial-article">
    <nav className="breadcrumbs" aria-label={tx('Breadcrumb', '面包屑导航', 'Ruta de navegación')[lang]}><a href={href('/', lang)}>{tx('Home', '首页', 'Inicio')[lang]}</a><span aria-hidden="true">/</span><a href={href('/guides/', lang)}>{tx('Buying guides', '采购指南', 'Guías de compra')[lang]}</a><span aria-hidden="true">/</span><span aria-current="page">{guide.title[lang]}</span></nav>
    <header className="article-header"><span className="eyebrow">{guide.label[lang]}</span><h1>{guide.title[lang]}</h1><p className="lead">{content.intro[lang]}</p><GuideMeta lang={lang} guide={guide} /></header>
    <ArticleFigure image={content.image} lang={lang} eager />
    <ArticleSections sections={content.sections} lang={lang} />
    <section className="guide-sources"><h2>{tx('Sources and scope', '资料来源与适用范围', 'Fuentes y alcance')[lang]}</h2>
      <ul>{content.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title[lang]}</a></li>)}</ul>
      <p>{tx('Confirm the selected construction and supply scope with the agreed sample and written order. No temperature duration, certification or completed test is claimed here.', '所选结构及供货范围以确认样品和书面订单为准。本文不声明保温时长、认证或已完成测试。', 'Confirme construcción y suministro mediante muestra y pedido. No se declara duración térmica, certificación ni ensayo realizado.')[lang]}</p>
    </section>
    <div className="related-links"><a href={href('/guides/nonwoven-basis-weight-thickness-bag-mass/',lang)}>{tx('Basis weight, thickness and bag mass', '克重、厚度与整袋重量', 'Gramaje, espesor y masa de la bolsa')[lang]}</a><a href={href('/guides/foil-metallised-lining-specification/',lang)}>{tx('Specify the silver facing', '银色面层规格核对', 'Especifique la cara plateada')[lang]}</a></div>
    <a className="button primary" href={href('/contact/',lang)}>{tx('Discuss your specification', '沟通采购规格', 'Consultar su especificación')[lang]}<ArrowUpRight size={18}/></a>
  </article>
}
