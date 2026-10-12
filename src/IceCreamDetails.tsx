import {tx,type Lang} from './data'
import {FAQ} from './BuyerResources'
import {href} from './routes'
import copy from './ice-cream-details.json'
export default function IceCreamDetails({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <>
  <section className="detail-block" id="ice-cream-packout"><div className="detail-block-heading"><span>09</span><h2>{t('Tub fit and frozen pack-out planning','桶体适配与冷冻装载规划','Ajuste de tarrina y embalaje congelado')}</h2></div><div className="function-grid">{copy[lang].sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.body}</p></div>)}</div></section>
  <section className="detail-block" id="ice-cream-questions"><div className="detail-block-heading"><span>10</span><h2>{t('Ice cream carrier order questions','冰淇淋配送包采购问答','Preguntas de pedido para helado')}</h2></div><FAQ lang={lang} items={copy.en.faqs.map((_,i)=>({q:tx(copy.en.faqs[i].question,copy.zh.faqs[i].question,copy.es.faqs[i].question),a:tx(copy.en.faqs[i].answer,copy.zh.faqs[i].answer,copy.es.faqs[i].answer)}))}/></section>
  <section className="detail-block" id="ice-cream-quote"><div className="detail-block-heading"><span>11</span><h2>{t('Prepare your sample enquiry','准备样品询价','Prepare su consulta de muestra')}</h2></div><p>{copy[lang].order}</p><p>{copy[lang].performance}</p><a className="text-link" href={href('/products/square-zipper-cake-cooler/',lang)}>{t('Compare the existing square zip cooler','对比现有方形拉链保温包','Comparar la bolsa cuadrada existente')}</a></section>
 </>
}
