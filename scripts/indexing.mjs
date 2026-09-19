// Vercel previews must remain excluded even when a production flag is copied.
export function isIndexable(env) {
  return env.SITE_INDEXABLE?.trim() === 'true' && (!env.VERCEL_ENV || env.VERCEL_ENV === 'production')
}
