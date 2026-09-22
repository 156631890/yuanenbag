import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Download, Mail, X } from 'lucide-react'
import { bags, brand, tx, type Lang } from './data'
import { href } from './routes'
import { styleOptions, usageOptions } from './catalog-data'

export default function Enquiry({lang}:{lang:Lang}) {
  const t=(en:string,zh:string,es?:string)=>tx(en,zh,es)[lang]
  const [bag,setBag]=useState('')
  const [brief,setBrief]=useState('')
  const dialog=useRef<HTMLDialogElement>(null)
  useEffect(()=>{const selected=new URLSearchParams(window.location.search).get('bag');if(selected&&bags.some(b=>b.slug===selected))setBag(selected)},[])
  useEffect(()=>{if(brief)dialog.current?.showModal()},[brief])
  function prepare(event:FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data=new FormData(event.currentTarget)
    const labels:Record<string,string>={name:t('Name','姓名'),email:t('Email','邮箱'),company:t('Company','公司'),bag:t('Bag format','袋型'),style:t('Requested style','期望袋型','Formato solicitado'),usage:t('Intended use','预期用途','Uso previsto'),quantity:t('Quantity','数量'),dimensions:t('Dimensions (W × H × D, cm)','尺寸（宽 × 高 × 侧宽，cm）'),destination:t('Destination','目的地'),details:t('Project details','详细需求')}
    const lines=Object.entries(labels).map(([key,label])=>{
      let value=String(data.get(key)||'').trim()
      if(key==='style')value=styleOptions.find(([id])=>id===value)?.[1][lang]||t('To discuss','待讨论')
      if(key==='usage')value=usageOptions.find(([id])=>id===value)?.[1][lang]||t('To discuss','待讨论')
      if(key==='bag')value=bags.find(b=>b.slug===value)?.name[lang]||t('To discuss','待讨论')
      return `${label}: ${value||'—'}`
    })
    setBrief(`YUANEN — ${t('CUSTOM BAG ENQUIRY','包装袋定制需求单')}\n\n${lines.join('\n\n')}\n\n${t('Draft only. This file has not been sent. Final specifications, pricing and availability require confirmation.','仅为需求草稿，尚未发送。最终规格、报价与供应情况需要确认。')}`)
  }
  function download() {
    const url=URL.createObjectURL(new Blob(['\uFEFF'+brief],{type:'text/plain;charset=utf-8'}))
    const a=document.createElement('a');a.href=url;a.download=`yuanen-enquiry-${lang}.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)
  }
  return <div className="enquiry-layout">
    <div className="enquiry-intro"><span className="eyebrow">{t('YOUR PACKAGING REQUIREMENTS','从需求开始')}</span><h1>{t('Request an Insulated Packaging Quote','保温冷链包装定制询价','Solicitar cotización de embalaje térmico')}</h1><p className="lead">{t('A few details now. A clearer conversation about your packaging next.','先明确几个细节，让接下来的包装沟通更有方向。')}</p><div className="contact-facts"><p>{t('BASED IN','所在地')}<strong>{t('Wenzhou, China','中国 · 温州')}</strong></p><p>{t('COMPANY','企业')}<strong>{brand.chineseName}</strong></p><p>{t('Telephone','联系电话','Teléfono')}{brand.phones.map(phone=><a key={phone} href={`tel:${phone.replace(/\s/g,'')}`}>{phone}</a>)}</p>{brand.email&&<p>{t('Email','邮箱')}<a href={`mailto:${brand.email}`}>{brand.email}</a></p>}{brand.whatsapp&&<p>WHATSAPP<a href={`https://wa.me/${brand.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noreferrer">{brand.whatsapp}</a></p>}</div><p className="small muted">{t('Prefer to get your details ready first? Prepare and download your brief below.','想先整理好资料？填写表单后即可生成并下载需求单。')}</p></div>
    <form className="enquiry-form" onSubmit={prepare}>
      <div className="form-heading"><span>01 — {t('YOUR DETAILS','联系信息')}</span><span>{t('* Required','* 必填')}</span></div>
      <div className="field-row"><label>{t('Your name *','姓名 *')}<input name="name" autoComplete="name" required maxLength={80}/></label><label>{t('Work email *','工作邮箱 *')}<input name="email" type="email" autoComplete="email" required maxLength={160}/></label></div>
      <label>{t('Company','公司')}<input name="company" autoComplete="organization" maxLength={140}/></label>
      <div className="form-heading spaced"><span>02 — {t('YOUR PROJECT','项目需求')}</span></div>
      <div className="field-row"><label>{t('Bag format *','袋型 *')}<select name="bag" value={bag} onChange={e=>setBag(e.target.value)} required><option value="">{t('Select a bag format','请选择袋型')}</option>{bags.map(b=><option key={b.slug} value={b.slug}>{b.short[lang]}</option>)}<option value="custom">{t('Other / help me choose','其他 / 需要选型建议')}</option></select></label><label>{t('Estimated quantity (pieces) *','预计数量（件）*')}<input name="quantity" type="number" min="1" step="1" max="100000000" required placeholder={t('e.g. 3000','例如 3000')}/></label></div>
      <div className="field-row"><label>{t('Requested style','期望袋型','Formato solicitado')}<select name="style"><option value="">{t('To discuss','待讨论')}</option>{styleOptions.map(([id,label])=><option key={id} value={id}>{label[lang]}</option>)}</select></label><label>{t('Intended use','预期用途','Uso previsto')}<select name="usage"><option value="">{t('To discuss','待讨论')}</option>{usageOptions.map(([id,label])=><option key={id} value={id}>{label[lang]}</option>)}</select></label></div>
      <div className="field-row"><label>{t('Width × height × depth (cm)','宽 × 高 × 侧宽（cm）')}<input name="dimensions" maxLength={100} placeholder={t('e.g. 38 × 40 × 10','例如 38 × 40 × 10')}/></label><label>{t('Delivery country / region *','交货国家 / 地区 *')}<input name="destination" autoComplete="country-name" required maxLength={100}/></label></div>
      <label>{t('Tell us about your project *','详细需求 *')}<textarea name="details" rows={5} required minLength={10} maxLength={3000} placeholder={t('Materials, printing, intended use, target delivery date and any testing requirements…','材质、印刷、用途、目标交期及测试要求……')}/></label>
      <label className="check-field"><input type="checkbox" required/><span>{t('I have read the ','我已阅读')}<a href={href('/privacy/',lang)} target="_blank" rel="noreferrer">{t('privacy information','隐私说明')}</a>{t(' and understand this step prepares a draft.','，并了解这一步将生成需求草稿。')}</span></label>
      <button className="button primary" type="submit">{t('Prepare my enquiry','生成询价需求单')}<ArrowUpRight size={18}/></button>
      <p className="form-note">{brand.email?t('Review your brief before opening your email app. Nothing is sent automatically.','核对需求后可打开邮件应用，网站不会自动发送。'):t('Downloadable enquiry brief. Online delivery is not available yet; your details stay in this page.','当前支持下载需求单，在线发送尚未启用；填写的信息仅保留在当前页面。')}</p>
    </form>
    <dialog ref={dialog} className="brief-dialog" onClose={()=>setBrief('')} aria-labelledby="brief-title"><button className="icon-button close-dialog" onClick={()=>dialog.current?.close()} aria-label={t('Close','关闭')}><X/></button><div className="success-icon"><Check/></div><h2 id="brief-title">{t('Your brief is ready.','需求单已生成。')}</h2><p>{t('Review and save your draft. It has not been sent.','请核对并保存草稿。需求单尚未发送。')}</p><textarea aria-label={t('Enquiry draft','询价草稿')} value={brief} readOnly rows={13}/><div className="button-row"><button className="button primary" onClick={download}><Download size={18}/>{t('Download brief','下载需求单')}</button>{brand.email&&<a className="button outline" href={`mailto:${brand.email}?subject=${encodeURIComponent(t('Custom bag enquiry — YUANEN','包装袋定制询价 — 远恩'))}&body=${encodeURIComponent(brief)}`}><Mail size={18}/>{t('Open email app','打开邮件应用')}</a>}</div></dialog>
  </div>
}
