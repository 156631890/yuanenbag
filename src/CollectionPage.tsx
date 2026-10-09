import { guides, tx, type Bag, type Lang } from './data'
import { collections, collectionFor, collectionProducts, type Collection } from './collections'
import { href } from './routes'
import { ProductCard } from './Catalog'
import CakeBagFitGuide from './CakeBagFitGuide'

export function CollectionLinks({lang}:{lang:Lang}) {
  return <nav className="seo-collection-links" aria-label={tx('Product selection guides','产品系列选型','Selección de productos')[lang]}>{collections.map(c=><a key={c.slug} href={href(`/collections/${c.slug}/`,lang)}>{c.name[lang]} <span>↗</span></a>)}</nav>
}
export function ProductBuyingLinks({bag,lang}:{bag:Bag;lang:Lang}) {
  const c=collectionFor(bag)
  const guide=guides.find(g=>g.slug===(c?.guide||'custom-bag-order-checklist'))!
  return <aside className="seo-buying-links">{bag.slug === 'square-zipper-cake-cooler' ? <CakeBagFitGuide lang={lang} /> : <div><h2>{tx('Compare formats before ordering','订购前比较袋型与规格','Compare formatos antes de pedir')[lang]}</h2><p>{bag.considerations[0][lang]}</p></div>}<div className="related-links">{c&&<a href={href(`/collections/${c.slug}/`,lang)}>{c.name[lang]} ↗</a>}<a href={href(`/guides/${guide.slug}/`,lang)}>{guide.title[lang]} ↗</a><a href={href('/guides/custom-bag-order-checklist/',lang)}>{tx('Quantity, samples & quotation checklist','数量、打样与询价清单','Cantidad, muestras y cotización')[lang]} ↗</a></div></aside>
}
export default function CollectionPage({collection:c,lang}:{collection:Collection;lang:Lang}) {
  const products=collectionProducts(c),guide=guides.find(g=>g.slug===c.guide)!
  const isEnglishCooler=c.slug==='custom-cooler-bags' && lang==='en'
  const checks=isEnglishCooler ? [
    'Share the packed length, width and height, with a photo or sketch showing how the contents will sit inside the bag.',
    'State the order quantity, logo requirements and delivery destination. If you have a required arrival date, include it in your enquiry.',
    'Confirm the materials, opening and carry handles on a finished sample before approving bulk production.',
  ] : c.checks.map(check=>check[lang])
  return <section className="container page-section seo-collection"><nav className="breadcrumbs" aria-label={tx('Breadcrumb','面包屑导航','Ruta de navegación')[lang]}><a href={href('/',lang)}>{tx('Home','首页','Inicio')[lang]}</a><span>/</span><a href={href('/products/',lang)}>{tx('Products','产品中心','Productos')[lang]}</a><span>/</span><span aria-current="page">{c.name[lang]}</span></nav><header className="page-intro"><span className="eyebrow">YUANEN / {tx('PRODUCT SELECTION','产品选型','SELECCIÓN DE PRODUCTOS')[lang]}</span><h1>{c.name[lang]}</h1><p className="lead">{c.description[lang]}</p></header><div className="answer-box"><h2>{tx('Which format should you choose?','如何选择合适的款式？','¿Qué formato elegir?')[lang]}</h2><p>{c.answer[lang]}</p></div><h2>{tx('Compare the range','比较本系列产品','Compare la gama')[lang]}</h2><div className="table-scroll"><table className="seo-comparison"><thead><tr>{[tx('Product','产品','Producto'),tx('Typical use','常见用途','Uso habitual'),tx('First detail to check','优先核对','Primera comprobación')].map(h=><th key={h.en}>{h[lang]}</th>)}</tr></thead><tbody>{products.map(b=><tr key={b.slug}><th scope="row"><a href={href(`/products/${b.slug}/`,lang)}>{b.short[lang]}</a></th><td>{b.use[lang]}</td><td>{b.considerations[0][lang]}</td></tr>)}</tbody></table></div><div className="product-grid">{products.map((bag,index)=><ProductCard key={bag.slug} bag={bag} lang={lang} index={index}/>)}</div>
    <section className="detail-section">
      <h2>{isEnglishCooler ? 'Prepare your custom cooler bag enquiry' : tx('Prepare your bulk order specification','准备批量采购规格','Prepare la especificación de compra')[lang]}</h2>
      {isEnglishCooler && <p>Choose a bag format above and send the dimensions of the items you plan to pack. Include the full cake box, meal container or grocery load, plus any coolant packs.</p>}
      <ol className="seo-checks">{checks.map(check=><li key={check}>{check}</li>)}</ol>
      {c.slug==='foil-insulated-packaging' && <p className="foil-enquiry-brief">
        {tx('For a bulk enquiry, send the selected format, usable dimensions, order quantity, printing requirements and delivery destination. Include artwork if printing is needed, and state your required arrival date.','批量询盘请提供所选袋型、可用尺寸、订单数量、印刷要求和交货目的地。需要印刷时请提供图稿，并说明要求到货日期。','Para una consulta de compra al por mayor, indique el formato elegido, las medidas útiles, la cantidad, los requisitos de impresión y el destino de entrega. Si necesita impresión, envíe el diseño e indique la fecha de llegada requerida.')[lang]}{' '}
        {tx('Use the','请参照','Consulte la')[lang]}{' '}<a href={href('/guides/custom-bag-order-checklist/',lang)}>{tx('custom bag order checklist','定制袋采购清单','lista de compra de bolsas a medida')[lang]}</a>{tx(' to prepare the details; its quantity and lead-time examples apply only to the products named there.','准备资料；其中的数量和交期示例仅适用于清单中列明的产品。',' para preparar los detalles; los ejemplos de cantidades y plazos se aplican solo a los productos indicados allí.')[lang]}
      </p>}
      {isEnglishCooler && <p>MOQ and timing depend on the selected bag and specification. The <a href={href('/guides/custom-bag-order-checklist/',lang)}>custom bag order checklist</a> explains what to prepare; its published quantity and lead-time examples apply only to the products named there.</p>}
      <div className="related-links">
        <a href={href(`/guides/${guide.slug}/`,lang)}>{guide.title[lang]} ↗</a>
        <a href={href('/quality/',lang)}>{tx('Check documentation scope','核对出口与检测资料范围','Revisar alcance documental')[lang]} ↗</a>
        <a href={href('/customization/',lang)}>{tx('Sampling & customization process','打样与定制流程','Muestreo y personalización')[lang]} ↗</a>
      </div>
      <a className="button primary" href={href('/contact/',lang)}>{isEnglishCooler ? 'Send your cooler bag requirements' : tx('Request a specification-based quote','按规格获取采购报价','Solicitar cotización según especificación')[lang]} ↗</a>
    </section>
    <CollectionLinks lang={lang}/></section>
}
