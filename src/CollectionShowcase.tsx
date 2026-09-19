import { ArrowUpRight } from 'lucide-react'
import { bags, tx, type Lang } from './data'
import { href } from './routes'
import { ProductMedia } from './Catalog'

const groups=[
  {image:'402',slug:'self-adhesive-foil-bags',en:'Foil insulation',zh:'铝箔保温系列',es:'Aislamiento de aluminio',detail:['Adhesive · Open-top · Gusseted','带胶 · 平口 · 立体','Autoadhesivo · Abierto · Con base']},
  {image:'499',slug:'self-seal-non-woven-delivery-bags',en:'Branded takeaway',zh:'无纺布外卖系列',es:'Comida para llevar',detail:['Tea · Coffee · Meals','奶茶 · 咖啡 · 餐饮','Té · Café · Comidas']},
  {image:'537',slug:'upright-grocery-cooler',en:'Insulated cooler bags',zh:'保温包系列',es:'Bolsas térmicas',detail:['Bakery · Grocery · Delivery','烘焙 · 商超 · 配送','Pastelería · Supermercado · Reparto']},
  {image:'473',slug:'self-absorbing-ice-packs',en:'Complete the cold chain',zh:'蓄冷冰袋系列',es:'Acumuladores de frío',detail:['Water-fill · Absorbing · Ice sheets','注水 · 自吸 · 冰格','Rellenables · Absorción · Láminas']},
]
export default function CollectionShowcase({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <section className="section container collection-showcase"><div className="section-heading"><div><span className="eyebrow">YUANEN / COLLECTION 2026</span><h2>{t('Made for what you carry.','每一种装载，都有合适的包装。','Un embalaje para cada contenido.')}</h2><p>{t('Explore four core ranges, with product visualizations, construction details and a clear path to customization.','四大核心系列，结合产品场景与结构细节，找到适合您业务的定制起点。','Explore cuatro gamas con visualizaciones, detalles de construcción y opciones de personalización.')}</p></div><a className="text-link" href={href('/products/',lang)}>{t(`Explore all ${bags.length} products & ranges`,`查看全部 ${bags.length} 个产品与系列`,`Ver los ${bags.length} productos y gamas`)}<ArrowUpRight size={18}/></a></div><div className="collection-grid">{groups.map((g,i)=><a href={href(`/products/${g.slug}/`,lang)} className="collection-tile" key={g.slug}><div className="collection-image"><ProductMedia bag={bags.find(b=>b.slug===g.slug)!} lang={lang}/><span>0{i+1}</span></div><div className="collection-title"><h3>{t(g.en,g.zh,g.es)}</h3><ArrowUpRight size={25}/></div><p>{t(g.detail[0],g.detail[1],g.detail[2])}</p></a>)}</div></section>
}
