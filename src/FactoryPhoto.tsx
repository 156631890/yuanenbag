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

const currentPhotos:Partial<Record<keyof typeof factoryPhotos,{file:string;title:ReturnType<typeof tx>}>>={
 production:{file:'longgang-production',title:tx('Longgang factory — production workshop','龙港新厂 · 生产车间','Fábrica de Longgang — taller de producción')},
 converting:{file:'longgang-converting',title:tx('Longgang factory — material processing','龙港新厂 · 材料加工','Fábrica de Longgang — procesamiento')},
 materials:{file:'taizhou-materials',title:tx('Taizhou factory — insulation materials','台州工厂 · 保温材料','Fábrica de Taizhou — materiales aislantes')},
 warehouse:{file:'longgang-warehouse',title:tx('Longgang factory — packed goods','龙港新厂 · 成品存放','Fábrica de Longgang — productos embalados')},
 office:{file:'taizhou-production',title:tx('Taizhou factory — production workshop','台州工厂 · 生产车间','Fábrica de Taizhou — taller de producción')}
}
for(const [key,value] of Object.entries(currentPhotos))factoryPhotos[key as keyof typeof factoryPhotos].title=value.title

export default function FactoryPhoto({photo,lang,className=''}:{photo:keyof typeof factoryPhotos;lang:Lang;className?:string}) {
  const current=currentPhotos[photo]
  if(current)return <img className={`factory-photo ${className}`} src={`${import.meta.env.BASE_URL}images/factory/2026/${current.file}.webp`} alt={current.title[lang]} width="1800" height="1200" loading="lazy"/>
  const p=factoryPhotos[photo]
  return <svg className={`factory-photo ${className}`} viewBox={p.box} role="img" aria-label={p.title[lang]} preserveAspectRatio="xMidYMid slice"><title>{p.title[lang]}</title><image href={`${import.meta.env.BASE_URL}images/factory/${p.file}.webp`} width={p.width} height={p.height}/></svg>
}
