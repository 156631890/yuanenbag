import { tx, type Lang } from './data'
import { FAQ } from './BuyerResources'
import copy from './meal-prep-details.json'

export default function MealPrepDetails({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <>
  <section className="detail-block" id="meal-prep-layout"><div className="detail-block-heading"><span>09</span><h2>{t('Plan your meal container layout','备餐餐盒装载方案','Distribución de recipientes')}</h2></div><div className="function-grid">{copy[lang].sections.map(section=><div key={section.title}><h3>{section.title}</h3><p>{section.body}</p></div>)}</div></section>
  <section className="detail-block" id="meal-prep-questions"><div className="detail-block-heading"><span>10</span><h2>{t('Meal prep order questions','备餐包采购问答','Preguntas de pedidos')}</h2></div><FAQ lang={lang} items={copy.en.faqs.map((_,i)=>({q:tx(copy.en.faqs[i].question,copy.zh.faqs[i].question,copy.es.faqs[i].question),a:tx(copy.en.faqs[i].answer,copy.zh.faqs[i].answer,copy.es.faqs[i].answer)}))}/></section>
 </>
}
