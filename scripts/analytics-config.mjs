export function analyticsMeasurementId(env) {
  // A measurement ID is public. The default belongs only to this website.
  const id = (env.SITE_GA4_MEASUREMENT_ID ?? 'G-TEESSYWLKE').trim()
  if (id && !/^G-[A-Z0-9]{6,20}$/.test(id)) throw new Error('SITE_GA4_MEASUREMENT_ID must be a GA4 measurement ID, e.g. G-XXXXXXXXXX.')
  return env.VERCEL_ENV === 'production' && (!env.SITE_BASE_PATH || env.SITE_BASE_PATH === '/') ? id : ''
}
