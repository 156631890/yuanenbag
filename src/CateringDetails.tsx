import {tx,type Lang} from './data'
import {FAQ} from './BuyerResources'
import copy from './catering-details.json'
export default function CateringDetails({lang}:{lang:Lang}){const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang];return <>
<section className="detail-block" id="catering-tray-fit"><div className="detail-block-heading"><span>09</span><h2>{t('Plan your tray packing layout','餐盘装载方案','Distribución de bandejas')}</h2></div><div className="function-grid">{copy[lang].sections.map(section=><div key={section.title}><h3>{section.title}</h3><p>{section.body}</p></div>)}</div></section>
<section className="detail-block" id="catering-questions"><div className="detail-block-heading"><span>10</span><h2>{t('Catering order questions','餐盘配送采购问答','Preguntas de pedidos para catering')}</h2></div><FAQ lang={lang} items={copy.en.faqs.map((_,i)=>({q:tx(copy.en.faqs[i].question,copy.zh.faqs[i].question,copy.es.faqs[i].question),a:tx(copy.en.faqs[i].answer,copy.zh.faqs[i].answer,copy.es.faqs[i].answer)}))}/></section>
</> }
