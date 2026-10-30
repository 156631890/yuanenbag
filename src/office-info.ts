import type { Lang } from './data'

// Address: Tianyancha company/3174402211, checked 2026-10-30.
// Office hours confirmed by the company in this conversation on 2026-10-30.
export const officeAddress: Record<Lang, string> = {
  en: '11th Floor, Building 5, Caihong Smart Entrepreneurship Park, Longgang, Wenzhou, Zhejiang, China',
  zh: '浙江省温州市龙港市彩虹智慧创业园5幢11层',
  es: 'Planta 11, edificio 5, Parque de Emprendimiento Inteligente Caihong, Longgang, Wenzhou, Zhejiang, China',
}
export const officeHours: Record<Lang, string> = {
  en: 'Monday–Saturday, 08:00–18:00 · Beijing time (UTC+8)',
  zh: '周一至周六 08:00–18:00 · 北京时间（UTC+8）',
  es: 'Lunes a sábado, 08:00–18:00 · Hora de Pekín (UTC+8)',
}
export const officeLabel: Record<Lang, string> = { en: 'Office address', zh: '办公地址', es: 'Dirección de la oficina' }
export const hoursLabel: Record<Lang, string> = { en: 'Business hours', zh: '营业时间', es: 'Horario de atención' }
