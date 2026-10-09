import { brand, tx, type Lang } from './data'
import { href } from './routes'

export default function ContentPolicy({ lang }: { lang: Lang }) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  return <article className="container page-section article">
    <nav className="breadcrumbs" aria-label={t('Breadcrumb', '面包屑导航', 'Ruta de navegación')}><a href={href('/', lang)}>{t('Home', '首页', 'Inicio')}</a><span><span aria-hidden="true">/</span><span aria-current="page">{t('Content information', '内容说明', 'Información sobre el contenido')}</span></span></nav>
    <h1>{t('How we prepare website content', '网站内容制作说明', 'Cómo preparamos el contenido del sitio')}</h1>
    <p className="article-meta">{t('Updated 9 October 2026', '更新于 2026 年 10 月 9 日', 'Actualizado el 9 de octubre de 2026')}</p>
    <h2>{t('Articles and sources', '文章与资料来源', 'Artículos y fuentes')}</h2>
    <p>{t('YUANEN uses product information and cited sources to prepare buying guides and industry updates. AI and automation tools assist with research, drafting and translation. The scheduled publishing process does not include human review of every article. Automated checks do not replace that review.', '远恩根据产品资料及所引来源制作采购指南和行业动态，并使用 AI 与自动化工具辅助研究、写作和翻译。定时发布流程不包含逐篇人工审核，自动检查不能替代人工审核。', 'YUANEN prepara guías de compra y noticias del sector a partir de información de productos y fuentes citadas. Las herramientas de IA y automatización ayudan en la investigación, redacción y traducción. El proceso de publicación programada no incluye revisión humana de cada artículo. Las comprobaciones automáticas no sustituyen esa revisión.')}</p>
    <h2>{t('Illustrations', '示意图', 'Ilustraciones')}</h2>
    <p>{t('Editorial covers marked as illustrations are AI-generated visuals. They show a packaging category or industry setting and are not photographs of an actual YUANEN order, factory, test or reported event. Use the confirmed sample and agreed specifications to assess a product.', '标为示意图的文章封面由 AI 生成，用于展示包装品类或行业环境，不是远恩实际订单、工厂、测试或新闻事件的现场照片。判断具体产品时，请以确认样品和约定规格为准。', 'Las portadas marcadas como ilustraciones son imágenes generadas con IA. Representan un tipo de embalaje o un entorno del sector, no fotografías de un pedido real de YUANEN, una fábrica, una prueba o el hecho descrito. Evalúe el producto con la muestra confirmada y las especificaciones acordadas.')}</p>
    <h2>{t('Product decisions and corrections', '产品确认与更正', 'Confirmación de productos y correcciones')}</h2>
    <p>{t('Articles provide purchasing information, not product test reports or regulatory certification. Confirm dimensions, construction and destination requirements before ordering. If you find an error, send the page URL and the disputed information to us.', '文章提供采购参考，不构成产品测试报告或法规认证。下单前请确认尺寸、结构及目的地要求。如发现错误，请将页面网址和需要核对的内容发送给我们。', 'Los artículos ofrecen información de compra, no informes de ensayo ni certificaciones. Confirme medidas, construcción y requisitos del destino antes de pedir. Si encuentra un error, envíenos la URL de la página y la información que necesita comprobar.')}</p>
    <a href={`mailto:${brand.email}`}>{brand.email}</a>
  </article>
}
