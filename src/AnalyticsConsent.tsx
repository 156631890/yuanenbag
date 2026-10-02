import { useEffect, useState } from 'react'
import { tx, type Lang } from './data'
import { href } from './routes'
import { analyticsChoice, analyticsId, setAnalyticsChoice, startAnalytics, type AnalyticsChoice } from './analytics'
import './analytics-consent.css'

export default function AnalyticsConsent({ lang, showSettings }: { lang: Lang; showSettings: boolean }) {
  const [enabled, setEnabled] = useState(false)
  const [open, setOpen] = useState(false)
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  useEffect(() => {
    if (!analyticsId()) return
    setEnabled(true)
    setOpen(analyticsChoice() === null)
    startAnalytics()
  }, [])
  function choose(value: AnalyticsChoice) {
    setAnalyticsChoice(value)
    setOpen(false)
  }
  if (!enabled) return null
  return <>
    {showSettings && <div className="container analytics-settings"><button className="text-link" onClick={() => setOpen(true)}>{t('Change analytics preference', '更改访问统计偏好', 'Cambiar preferencia de estadísticas')}</button></div>}
    {open && <section className="analytics-consent" aria-label={t('Optional visitor statistics', '可选访问统计', 'Estadísticas de visitas opcionales')}>
      <p>{t('May we use Google Analytics to understand visits and enquiry actions? Your enquiry details are excluded. Your choice will be saved on this device.', '是否允许使用 Google Analytics 了解页面访问与询盘操作？统计不包含您填写的询盘内容，选择会保存在此设备上。', '¿Permite Google Analytics para conocer visitas y acciones de consulta? No incluye los datos de su consulta. Guardaremos su elección en este dispositivo.')}</p>
      <div className="analytics-actions"><button className="button outline" onClick={() => choose('denied')}>{t('No thanks', '暂不允许', 'No, gracias')}</button><button className="button primary" onClick={() => choose('granted')}>{t('Allow statistics', '允许统计', 'Permitir estadísticas')}</button><a href={href('/privacy/', lang)}>{t('Privacy information', '隐私说明', 'Información de privacidad')}</a></div>
    </section>}
  </>
}
