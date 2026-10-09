export type AnalyticsChoice = 'granted' | 'denied'
type AnalyticsWindow = Window & {
  dataLayer?: IArguments[]
  gtag?: (...args: unknown[]) => void
}
const storageKey = 'yuanen-analytics-choice'
let choice: AnalyticsChoice | null = null
let activeId = ''
let initialized = false

export function analyticsId() {
  if (typeof window === 'undefined' || window.location.hostname !== 'yuanenbag.com') return ''
  const id = document.querySelector<HTMLMetaElement>('meta[name="ga4-measurement-id"]')?.content || ''
  return /^G-[A-Z0-9]{6,20}$/.test(id) && !document.querySelector('meta[name="robots"][content*="noindex"]') ? id : ''
}
export function analyticsChoice(): AnalyticsChoice | null {
  try {
    const saved = window.localStorage.getItem(storageKey)
    choice = saved === 'granted' || saved === 'denied' ? saved : null
  } catch { /* A denied storage permission must not interrupt the enquiry form. */ }
  return choice
}
export function setAnalyticsChoice(value: AnalyticsChoice) {
  choice = value
  try { window.localStorage.setItem(storageKey, value) } catch { /* Keep this choice for the current page. */ }
  const id = analyticsId()
  if (!id) return
  const win = window as AnalyticsWindow
  Object.assign(win, { [`ga-disable-${id}`]: value !== 'granted' })
  if (value === 'granted') startAnalytics()
  else {
    activeId = ''
    win.gtag?.('consent', 'update', { analytics_storage: 'denied' })
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim()
      if (name === '_ga' || name === `_ga_${id.slice(2)}`) {
        for (const domain of ['', '; Domain=yuanenbag.com', '; Domain=.yuanenbag.com']) {
          document.cookie = `${name}=; Max-Age=0; Path=/${domain}; SameSite=Lax; Secure`
        }
      }
    }
  }
}
export function startAnalytics() {
  const id = analyticsId()
  if (!id || analyticsChoice() !== 'granted' || activeId) return
  const win = window as AnalyticsWindow
  activeId = id
  Object.assign(win, { [`ga-disable-${id}`]: false })
  win.dataLayer ||= []
  win.gtag ||= function (..._args: unknown[]) { win.dataLayer!.push(arguments) }
  const page = {
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_title: document.title,
    page_referrer: safeReferrer(),
  }
  if (!initialized) {
    initialized = true
    win.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' })
    win.gtag('js', new Date())
    win.gtag('config', id, { ...page, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_domain: 'yuanenbag.com' })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    script.referrerPolicy = 'origin'
    document.head.append(script)
  } else win.gtag('consent', 'update', { analytics_storage: 'granted' })
  win.gtag('event', 'page_view', { ...page, send_to: id })
}
function safeReferrer() {
  try { return document.referrer ? new URL(document.referrer).origin : '' } catch { return '' }
}
export function trackEnquiry(event: 'enquiry_sent' | 'enquiry_draft_prepared' | 'enquiry_brief_download' | 'enquiry_email_open') {
  if (!activeId || choice !== 'granted') return
  if (!['enquiry_sent', 'enquiry_draft_prepared', 'enquiry_brief_download', 'enquiry_email_open'].includes(event)) return
  // Only the action is recorded. No form values, mailto link or generated brief.
  const win = window as AnalyticsWindow
  win.gtag?.('event', event, { send_to: activeId })
}
