import {tx,type Lang} from './data'
import {FAQ} from './BuyerResources'
import {href} from './routes'
import copy from './beverage-details.json'
export default function BeverageDetails({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <>
   <section className="detail-block" id="beverage-cup-layout"><div className="detail-block-heading"><span>09</span><h2>{t('Cup layout and divider selection','杯型排列与分隔选配','Distribución de vasos y separadores')}</h2></div><div className="function-grid">{copy[lang].sections.map(section=><div key={section.title}><h3>{section.title}</h3><p>{section.body}</p></div>)}</div></section>
   <section className="detail-block" id="beverage-questions"><div className="detail-block-heading"><span>10</span><h2>{t('Beverage bag order questions','饮品配送包采购问答','Preguntas de pedidos para bebidas')}</h2></div><FAQ lang={lang} items={copy.en.faqs.map((_,i)=>({q:tx(copy.en.faqs[i].question,copy.zh.faqs[i].question,copy.es.faqs[i].question),a:tx(copy.en.faqs[i].answer,copy.zh.faqs[i].answer,copy.es.faqs[i].answer)}))}/></section>
   <section className="detail-block" id="beverage-quote"><div className="detail-block-heading"><span>11</span><h2>{t('Prepare your sample enquiry','准备样品询价','Prepare su consulta de muestra')}</h2></div><p>{copy[lang].order}</p><p>{copy[lang].performance}</p><a className="text-link" href={href('/products/self-seal-non-woven-milk-tea-bags/',lang)}>{t('Compare lightweight milk-tea packaging','对比轻型奶茶包装袋','Comparar embalaje ligero para bebidas')}</a></section>
 </>
}
