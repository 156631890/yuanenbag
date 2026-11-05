import { officeAddress, officeHours, officeLabel, hoursLabel } from './office-info'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Download, Mail, X } from 'lucide-react'
import { bags, brand, tx, type Lang } from './data'
import { href } from './routes'
import { styleOptions, usageOptions } from './catalog-data'
import { trackEnquiry } from './analytics'

export default function Enquiry({lang,bag,onBagChange}:{lang:Lang;bag:string;onBagChange:(value:string)=>void}) {
  const t=(en:string,zh:string,es?:string)=>tx(en,zh,es)[lang]
  const [brief,setBrief]=useState('')
  const [sending,setSending]=useState(false)
  const [sent,setSent]=useState('')
  const [error,setError]=useState('')
  const inFlight=useRef(false)
  const form=useRef<HTMLFormElement>(null)
  const status=useRef<HTMLDivElement>(null)
  const dialog=useRef<HTMLDialogElement>(null)
  const isIBC=bag==='insulated-ibc-covers'
  const isCage=bag==='insulated-roll-cage-covers'
  const isPallet=bag==='insulated-pallet-covers'
  const isBubbleRoll=bag==='foil-bubble-insulation-rolls'
  const isRoll=bag==='epe-foam-foil-insulation-rolls'||isBubbleRoll
  const isMaterialProduct=isIBC||isCage||isPallet||isRoll
  const selectedBag=bags.find(item=>item.slug===bag)
  // Keep every existing value available; put common packaging choices first.
  const preferredStyles=['handle','zipper','ultrasonic','foldable']
  const preferredUses=['thermal','supermarket','shopping','promotion']
  const orderedStyles=[...styleOptions.filter(([id])=>preferredStyles.includes(id)),...styleOptions.filter(([id])=>!preferredStyles.includes(id))]
  const orderedUses=[...usageOptions.filter(([id])=>preferredUses.includes(id)),...usageOptions.filter(([id])=>!preferredUses.includes(id))]
  const dimensionLabel=isIBC?t('IBC external W × D × H above pallet deck (include unit)','吨桶外宽 × 外深 × 托盘面以上高度（注明单位）','IBC: ancho × fondo × altura desde plataforma (unidad)'):isCage?t('Cage external W × D × H above deck (include unit)','笼车外宽 × 外深 × 底座以上高度（注明单位）','Carro: ancho × fondo × altura desde plataforma (unidad)'):isRoll?t('Roll width W (m), length L (m), thickness T (mm)','卷宽 W（m）、卷长 L（m）、厚度 T（mm）','Ancho W (m), longitud L (m), espesor T (mm)'):isPallet?t('Loaded pallet W × D × H (include unit)','整托货堆宽 × 深 × 高（注明单位）','Carga del palé: ancho × fondo × alto (indique unidad)'):selectedBag?.type==='cooler'
    ? t('Dimensions (W × D × H; include unit)','尺寸（宽 × 深 × 高；注明单位）','Medidas (ancho × fondo × alto; indique unidad)')
    : selectedBag?.type==='ice'
      ? t('Dimensions (W × H × T; include unit)','尺寸（宽 × 高 × 厚；注明单位）','Medidas (ancho × alto × grosor; indique unidad)')
      : t('Dimensions (state order and unit)','尺寸（注明顺序和单位）','Medidas (indique orden y unidad)')
  const dimensionExample=isIBC?t('Include cage projections; locate cap and valve separately','计入框架突出件；另列桶盖和阀门位置','Incluya salientes; detalle tapa y válvula aparte'):isCage?t('Include hinges and handles; exclude castors','计入铰链和把手；不计脚轮','Incluya bisagras y asas; excluya ruedas'):isRoll?t('State roll or sheet dimensions and units','注明卷材或裁片尺寸及单位','Indique medidas de rollo o lámina y unidades'):isPallet?t('Maximum load dimensions; height above pallet deck','货堆最大外廓；高度从托盘面起算','Medidas máximas; altura desde la plataforma'):selectedBag?.type==='ice'
    ? t('e.g. W 15 × H 20 cm (empty)','例如 宽 15 × 高 20 cm（空袋）','p. ej. ancho 15 × alto 20 cm (vacío)')
    : t('e.g. W 380 × D 100 × H 400 mm (external)','例如 宽 380 × 深 100 × 高 400 mm（外尺寸）','p. ej. ancho 380 × fondo 100 × alto 400 mm (exterior)')
  useEffect(()=>{if(brief)dialog.current?.showModal()},[brief])
  function prepare() {
    if(!form.current?.reportValidity())return
    const data=new FormData(form.current)
    const labels:Record<string,string>={name:t('Name','姓名'),email:t('Email','邮箱'),company:t('Company','公司'),bag:isMaterialProduct?t('Product','产品','Producto'):t('Bag format','袋型'),style:t('Requested style','期望袋型','Formato solicitado'),usage:t('Intended use','预期用途','Uso previsto'),quantity:t('Quantity','数量'),dimensions:dimensionLabel,destination:t('Destination','目的地'),details:t('Project details','详细需求')}
    trackEnquiry('enquiry_draft_prepared')
    const lines=Object.entries(labels).filter(([key])=>!isMaterialProduct||!['style','usage'].includes(key)).map(([key,label])=>{
      let value=String(data.get(key)||'').trim()
      if(key==='style')value=styleOptions.find(([id])=>id===value)?.[1][lang]||t('To discuss','待讨论')
      if(key==='usage')value=usageOptions.find(([id])=>id===value)?.[1][lang]||t('To discuss','待讨论')
      if(key==='bag')value=bags.find(b=>b.slug===value)?.name[lang]||t('To discuss','待讨论')
      return `${label}: ${value||'—'}`
    })
    setBrief(`YUANEN — ${isIBC?t('IBC COVER ENQUIRY','吨桶保温罩需求单','CONSULTA DE FUNDA IBC'):isCage?t('ROLL CAGE COVER ENQUIRY','笼车保温罩需求单','CONSULTA DE FUNDA PARA CARRO'):isRoll?t('INSULATION ROLL ENQUIRY','保温卷材需求单','CONSULTA DE ROLLOS AISLANTES'):isPallet?t('PALLET COVER ENQUIRY','托盘保温罩需求单','CONSULTA DE FUNDA PARA PALÉ'):t('CUSTOM BAG ENQUIRY','包装袋定制需求单')}\n\n${lines.join('\n\n')}\n\n${sent ? `Reference: ${sent}` : t('Draft only. This file has not been sent. Final specifications, pricing and availability require confirmation.','仅为需求草稿，尚未发送。最终规格、报价与供应情况需要确认。')}`)
  }
  async function send(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(inFlight.current||sent)return
    const data=new FormData(event.currentTarget)
    const payload={...Object.fromEntries(data.entries()),lang,consent:data.get('consent')==='on'}
    inFlight.current=true;setSending(true);setError('')
    const controller=new AbortController()
    const timeout=setTimeout(()=>controller.abort(),65000)
    try {
      const response=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:controller.signal})
      const result=await response.json().catch(()=>null)
      if(!response.ok||result?.ok!==true||typeof result.reference!=='string') {
        setError(response.status===429
          ?t('Too many attempts. Please wait 10 minutes or contact us directly below.','提交次数较多，请等候 10 分钟，或通过下方邮箱、WhatsApp 联系我们。','Demasiados intentos. Espere 10 minutos o contáctenos directamente abajo.')
          :t('Your enquiry could not be confirmed as sent. Your details are still here. Please contact us by email or WhatsApp below.','未能确认询盘发送成功，填写内容已保留。请通过下方邮箱或 WhatsApp 联系我们。','No se pudo confirmar el envío. Sus datos se conservan. Contáctenos por correo o WhatsApp abajo.'))
        return
      }
      setSent(result.reference)
      trackEnquiry('enquiry_sent')
    } catch {
      setError(t('The connection was interrupted. Delivery is unconfirmed; your details are still here. Contact us below before resending to avoid duplicates.','连接中断，暂时无法确认发送结果，填写内容已保留。请先通过下方联系方式核实，避免重复提交。','La conexión se interrumpió y el envío no está confirmado. Sus datos se conservan. Contáctenos antes de reenviar para evitar duplicados.'))
    } finally {
      clearTimeout(timeout);inFlight.current=false;setSending(false)
      requestAnimationFrame(()=>status.current?.focus())
    }
  }
  function download() {
    trackEnquiry('enquiry_brief_download')
    const url=URL.createObjectURL(new Blob(['\uFEFF'+brief],{type:'text/plain;charset=utf-8'}))
    const a=document.createElement('a');a.href=url;a.download=`yuanen-enquiry-${lang}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)
  }
  return <div className="enquiry-layout">
    <div className="enquiry-intro"><span className="eyebrow">{t('YOUR PACKAGING REQUIREMENTS','从需求开始')}</span><h1>{t('Request an Insulated Packaging Quote','保温冷链包装定制询价','Solicitar cotización de embalaje térmico')}</h1><p className="lead">{t('A few details now. A clearer conversation about your packaging next.','先明确几个细节，让接下来的包装沟通更有方向。')}</p></div>
    <form ref={form} className="enquiry-form" onSubmit={send} onChange={()=>{if(sent)setSent('');if(error)setError('')}} aria-busy={sending}>
      <fieldset disabled={sending} className="enquiry-fields">
      <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
      <div className="form-heading"><span>01 — {t('YOUR DETAILS','联系信息')}</span><span>{t('* Required','* 必填')}</span></div>
      <div className="field-row"><label>{t('Your name *','姓名 *')}<input name="name" autoComplete="name" required maxLength={80}/></label><label>{t('Work email *','工作邮箱 *')}<input name="email" type="email" autoComplete="email" required maxLength={160}/></label></div>
      <div className="form-heading spaced"><span>02 — {t('YOUR PROJECT','项目需求')}</span></div>
      <div className="field-row"><label>{isMaterialProduct?t('Product *','产品 *','Producto *'):t('Bag format *','袋型 *')}<select name="bag" value={bag} onChange={e=>onBagChange(e.target.value)} required><option value="">{t('Select a bag format','请选择袋型')}</option>{bags.map(b=><option key={b.slug} value={b.slug}>{b.short[lang]}</option>)}<option value="custom">{t('Other / help me choose','其他 / 需要选型建议')}</option></select></label><label>{isRoll?t('Quantity (rolls or sheets; specify in details) *','数量（卷或片，请在需求中注明）*','Cantidad (rollos o láminas; indique en detalles) *'):t('Estimated quantity (pieces) *','预计数量（件）*')}<input name="quantity" type="number" min="1" step="1" max="100000000" required placeholder={t('e.g. 3000','例如 3000')}/></label></div>
      <label>{t('Delivery country / region *','交货国家 / 地区 *')}<input name="destination" autoComplete="country-name" required maxLength={100}/></label>
      {(isRoll||isCage||isIBC)&&<label>{dimensionLabel}<input name="dimensions" maxLength={100} placeholder={dimensionExample}/></label>}{isPallet&&<><label>{dimensionLabel}<input name="dimensions" maxLength={100} placeholder={dimensionExample}/></label><p className="form-note">{t("Include wrapping and overhang. Exclude pallet height. Leave blank if not yet measured; we will confirm fitting clearance separately.","计入缠膜与突出部分，不含托盘本体高度。尚未测量可留空，套入余量另行确认。","Incluya film y salientes, sin la altura del palé. Si aún no tiene medidas, deje en blanco; la holgura se confirma por separado.")}</p></>}<details className="enquiry-optional"><summary>{t('Additional details (optional)','补充资料（选填）','Detalles adicionales (opcionales)')}</summary>
      <label>{t('Company','公司')}<input name="company" autoComplete="organization" maxLength={140}/></label>
      {!isMaterialProduct&&<div className="field-row"><label>{t('Requested style','期望袋型','Formato solicitado')}<select name="style"><option value="">{t('To discuss','待讨论')}</option>{orderedStyles.map(([id,label])=><option key={id} value={id}>{label[lang]}</option>)}</select></label><label>{t('Intended use','预期用途','Uso previsto')}<select name="usage"><option value="">{t('To discuss','待讨论')}</option>{orderedUses.map(([id,label])=><option key={id} value={id}>{label[lang]}</option>)}</select></label></div>}
      {!isMaterialProduct&&<div className="field-row"><label>{dimensionLabel}<input name="dimensions" maxLength={100} placeholder={dimensionExample}/></label></div>}
      </details>
      <label>{t('Tell us about your project *','详细需求 *')}<textarea name="details" rows={5} required minLength={10} maxLength={3000} placeholder={isIBC?t('IBC model, external envelope, cap and valve positions, connection clearance, laminate, quantity and destination.','吨桶型号、外廓、桶盖与阀门位置、接头余量、复合材料、数量及目的地。','Modelo IBC, contorno, tapa y válvula, espacio de conexiones, laminado, cantidad y destino.'):isCage?t('Cage model, external envelope, front access, wheel and brake clearance, laminate, quantity and destination.','笼车型号、外廓、前帘开口、脚轮与刹车余量、复合材料、数量及目的地。','Modelo, contorno exterior, acceso frontal, espacio de ruedas y frenos, laminado, cantidad y destino.'):isBubbleRoll?t('Rolls or sheets, quantity unit, facing and bubble construction, dimensions, core, destination and target date.','整卷或裁片、数量单位、面层与气泡结构、尺寸、纸芯、目的地与目标日期。','Rollos o láminas, unidad, cara y burbujas, medidas, núcleo, destino y fecha.'):isRoll?t('Rolls or cut sheets, quantity unit, facing and foam requirements, dimensions, core, destination and target date.','整卷或裁片、数量单位、面层及泡棉要求、尺寸、纸芯、目的地与目标日期。','Rollos o láminas, unidad, cara reflectante, espuma, medidas, núcleo, destino y fecha.'):isPallet?t('Goods, route and exposure time, ambient conditions, open-bottom fit, material preferences, sample or production quantity and target date. Unknown details can be discussed.','货物类别、路线与暴露时间、环境条件、开放底部适配、材料要求、样品或批量需求及目标日期。未知信息可沟通确认。','Mercancía, ruta, tiempo de exposición, ambiente, base abierta, material, muestras o producción y fecha. Los datos pendientes pueden acordarse.'):t('Materials, printing, intended use, target delivery date and any testing requirements…','材质、印刷、用途、目标交期及测试要求……')}/></label>
      <label className="check-field"><input name="consent" type="checkbox" required/><span>{t('I have read the ','我已阅读')}<a href={href('/privacy/',lang)} target="_blank" rel="noreferrer">{t('privacy information','隐私说明')}</a>{t(' and agree to be contacted about this enquiry.','，并同意就本次询价接收联系。',' y acepto que me contacten sobre esta consulta.')}</span></label>
      <div className="button-row"><button className="button primary" type="submit" disabled={sending||Boolean(sent)}>{sending?t('Sending…','正在发送…','Enviando…'):sent?t('Enquiry sent','已提交询盘','Consulta enviada'):t('Send enquiry','发送询盘','Enviar consulta')}<ArrowUpRight size={18}/></button><button className="button outline" type="button" onClick={prepare} disabled={sending}>{t('Preview / download brief','预览 / 下载需求单','Ver / descargar consulta')}</button></div>
      </fieldset>
      <div ref={status} tabIndex={-1} role={error?'alert':'status'} aria-live="polite" className="enquiry-status">
        {sent&&<><strong>{t('Thank you. Our mail server has accepted your enquiry.','感谢您，邮件服务器已接收本次询盘。','Gracias. Nuestro servidor de correo ha aceptado su consulta.')}</strong><p>{t('Our team will reply to your email after reviewing the requirements. Keep this reference for follow-up:','我们将核对需求后回复您的邮箱。请保留此编号以便查询：','Nuestro equipo revisará los requisitos y responderá a su correo. Guarde esta referencia:')} {sent}</p></>}
        {error&&<p>{error}</p>}
        {error&&<div className="button-row"><a className="button outline" href={`mailto:${brand.email}`} onClick={()=>trackEnquiry('enquiry_email_open')}><Mail size={18}/>{brand.email}</a><a className="button outline" href={`https://wa.me/${brand.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer">WhatsApp</a></div>}
      </div>
      <p className="form-note">{t('Your requirements are sent to our team by email. Prices, specifications and delivery dates require written confirmation.','需求将通过邮件提交给我们。价格、规格及交期以书面确认为准。','Sus requisitos se envían a nuestro equipo por correo. Precios, especificaciones y plazos requieren confirmación por escrito.')}</p>
    </form>
    <aside className="enquiry-contact"><div className="contact-facts"><p>{officeLabel[lang]}<strong>{officeAddress[lang]}</strong></p><p>{hoursLabel[lang]}<strong>{officeHours[lang]}</strong></p><p>{t('COMPANY','企业')}<strong>{lang === 'en' ? 'Wenzhou Yuanen Crafts Co., Ltd.' : brand.chineseName}</strong></p><p>{t('Telephone','联系电话','Teléfono')}{brand.phones.map(phone=><a key={phone} href={`tel:${phone.replace(/\s/g,'')}`}>{phone}</a>)}</p>{brand.email&&<p>{t('Email','邮箱')}<a href={`mailto:${brand.email}`}>{brand.email}</a></p>}{brand.whatsapp&&<p>WHATSAPP<a href={`https://wa.me/${brand.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer">{brand.whatsapp}</a></p>}</div><p className="small muted">{t('Send your requirements directly to our team. You can also download a copy for your records.','填写需求后可直接提交给我们，也可下载需求单留存。','Envíe sus requisitos directamente a nuestro equipo o descargue una copia.')}</p></aside>
    <dialog ref={dialog} className="brief-dialog" onClose={()=>setBrief('')} aria-labelledby="brief-title"><button className="icon-button close-dialog" onClick={()=>dialog.current?.close()} aria-label={t('Close','关闭')}><X/></button><div className="success-icon"><Check/></div><h2 id="brief-title">{t('Your brief is ready.','需求单已生成。')}</h2><p>{sent?t('Save a copy of your submitted enquiry.','保存已提交询盘的副本。','Guarde una copia de la consulta enviada.'):t('Review and save your draft. It has not been sent.','请核对并保存草稿。需求单尚未发送。')}</p><textarea aria-label={t('Enquiry draft','询价草稿')} value={brief} readOnly rows={13}/><div className="button-row"><button className="button primary" onClick={download}><Download size={18}/>{t('Download brief','下载需求单')}</button>{brand.email&&<a className="button outline" onClick={()=>trackEnquiry('enquiry_email_open')} href={`mailto:${brand.email}?subject=${encodeURIComponent(isIBC?t('IBC cover enquiry — YUANEN','吨桶保温罩询价 — 远恩','Consulta de funda IBC — YUANEN'):isCage?t('Roll cage cover enquiry — YUANEN','笼车保温罩询价 — 远恩','Consulta de funda para carro — YUANEN'):isPallet?t('Pallet cover enquiry — YUANEN','托盘保温罩询价 — 远恩','Consulta de funda para palé — YUANEN'):t('Custom bag enquiry — YUANEN','包装袋定制询价 — 远恩'))}&body=${encodeURIComponent(brief)}`}><Mail size={18}/>{t('Open email app','打开邮件应用')}</a>}</div></dialog>
  </div>
}
