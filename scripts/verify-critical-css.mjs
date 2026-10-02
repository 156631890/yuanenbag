import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { paths, notFoundPaths } from '../.ssr/entry-server.js'

for (const path of [...paths, ...notFoundPaths]) {
  const file = path.endsWith('/404/') ? `dist${path.replace(/404\/$/, '404.html')}` : `dist${path}index.html`
  const html = await readFile(file, 'utf8')
  const critical = html.match(/<style[^>]*>([\s\S]*?)<\/style>/)?.[1]
  assert(critical?.includes('.header'), `Missing initial header styles: ${path}`)
  assert(critical.includes('.analytics-consent'), `Consent styles must not depend on deferred CSS: ${path}`)
  assert(critical.includes('.bag-visual:has(.generated-product)'), `Relational image layout rules must survive extraction: ${path}`)
  assert(html.includes('media="print" onload="this.media=\'all\'"'), `CSS must load without blocking initial paint: ${path}`)
  const fallback = html.match(/<noscript><link[^>]*href="([^"]+\.css)"[^>]*><\/noscript>/)?.[1]
  assert(fallback, `Missing stylesheet fallback without JavaScript: ${path}`)
  const local = fallback.replace(/^\/yuanenbag\//, '/')
  await access(`dist${local}`)
}
const home = await readFile('dist/index.html', 'utf8')
const homeStyles = home.match(/<style[^>]*>([\s\S]*?)<\/style>/)[1]
assert(homeStyles.includes('.cold-chain-hero'), 'The homepage hero must be styled before JavaScript.')
assert(homeStyles.includes('@media'), 'Initial styles must cover responsive layouts.')
console.log(`Critical CSS verified for ${paths.length + notFoundPaths.length} pages: initial layout, consent UI, deferred stylesheet and no-JavaScript fallback.`)
