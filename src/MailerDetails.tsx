import {tx,type Lang} from './data'

export default function MailerDetails({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <section className="detail-block" id="mailer-pack-out"><div className="detail-block-heading"><span>09</span><h2>{t('Insulated mailer selection','保温邮寄包装选型','Selección para envíos aislados')}</h2></div><p>{t('For small parcels, check this self-seal pouch together with the filled container and outer box. Allow space for the adhesive flap and any coolant. Test loading, corners and closure with a filled sample; a foil finish alone does not establish cushioning or thermal duration.','用于小件邮寄包装时，应将本自粘封口袋与装好后的容器及外箱一并核对，为封口翻边和冰源预留空间。通过装载样品检查装入、边角和封口；铝箔外观本身不能证明缓冲效果或保温时长。','Para pequeños paquetes, revise esta bolsa autoadhesiva con el recipiente lleno y la caja exterior. Reserve espacio para la solapa y el refrigerante. Compruebe carga, esquinas y cierre con una muestra llena; el acabado de aluminio no acredita amortiguación ni duración térmica.')}</p></section>
}
