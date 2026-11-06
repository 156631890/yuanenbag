import { guides, tx, type Bag, type Lang } from './data'
import { collections, collectionFor, type Collection } from './collections'
import { href } from './routes'
import CakeBagFitGuide from './CakeBagFitGuide'

export function CollectionLinks({lang}:{lang:Lang}) {
  return <nav className="seo-collection-links" aria-label={tx('Product selection guides','产品系列选型','Selección de productos')[lang]}>{collections.map(c=><a key={c.slug} href={href(`/collections/${c.slug}/`,lang)}>{c.name[lang]} <span>↗</span></a>)}</nav>
}
export function ProductBuyingLinks({bag,lang}:{bag:Bag;lang:Lang}) {
  const c=collectionFor(bag)
  const guide=guides.find(g=>g.slug===(c?.guide||'custom-bag-order-checklist'))!
  return <aside className="seo-buying-links">{bag.slug === 'square-zipper-cake-cooler' ? <CakeBagFitGuide lang={lang} /> : <div><h2>{['insulated-drum-covers','insulated-ibc-covers','insulated-roll-cage-covers','insulated-pallet-covers','epe-foam-foil-insulation-rolls','foil-bubble-insulation-rolls'].includes(bag.slug)?tx('Compare packaging and specifications','比较包装结构与采购规格','Compare embalajes y especificaciones')[lang]:tx('Compare formats before ordering','订购前比较袋型与规格','Compare formatos antes de pedir')[lang]}</h2><p>{bag.considerations[0][lang]}</p></div>}<div className="related-links">{c&&<a href={href(`/collections/${c.slug}/`,lang)}>{c.name[lang]} ↗</a>}<a href={href(`/guides/${guide.slug}/`,lang)}>{guide.title[lang]} ↗</a><a href={href('/guides/custom-bag-order-checklist/',lang)}>{tx('Quantity, samples & quotation checklist','数量、打样与询价清单','Cantidad, muestras y cotización')[lang]} ↗</a></div></aside>
}
