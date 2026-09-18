import { tx, type Lang } from './data'
export const factoryPhotos = {
  building: {file:'company-profile',box:'827 506 940 701',width:1920,height:1232,title:tx('YUANEN factory building','远恩工厂外观')},
  production: {file:'production-workshops',box:'252 250 905 508',width:1920,height:762,title:tx('Insulated packaging production workshop','保温包装生产车间')},
  converting: {file:'production-workshops',box:'1166 252 498 505',width:1920,height:762,title:tx('Insulation material processing','保温材料加工区')},
  sewing: {file:'manufacturing-capabilities',box:'202 284 347 349',width:1920,height:851,title:tx('Bag assembly and sewing','袋体缝制与组装')},
  materials: {file:'manufacturing-capabilities',box:'594 284 347 349',width:1920,height:851,title:tx('Insulation material rolls','保温材料备料')},
  office: {file:'manufacturing-capabilities',box:'985 284 347 349',width:1920,height:851,title:tx('YUANEN office','远恩办公区')},
  warehouse: {file:'manufacturing-capabilities',box:'1379 284 347 349',width:1920,height:851,title:tx('Packed goods in storage','成品仓储')},
}
export default function FactoryPhoto({photo,lang,className=''}:{photo:keyof typeof factoryPhotos;lang:Lang;className?:string}) {
  const p=factoryPhotos[photo]
  return <svg className={`factory-photo ${className}`} viewBox={p.box} role="img" aria-label={p.title[lang]} preserveAspectRatio="xMidYMid slice"><title>{p.title[lang]}</title><image href={`${import.meta.env.BASE_URL}images/factory/${p.file}.webp`} width={p.width} height={p.height}/></svg>
}
