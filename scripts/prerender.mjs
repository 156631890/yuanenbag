import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { render, paths, notFoundPaths } from '../.ssr/entry-server.js'
import { loadEnv } from 'vite'
import { isIndexable } from './indexing.mjs'
import { analyticsMeasurementId } from './analytics-config.mjs'
import Beasties from 'beasties'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const clientManifest = JSON.parse(await readFile(new URL('../dist/.vite/manifest.json', import.meta.url), 'utf8'))
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder')
if (!template.includes('<!--page-head-->')) throw new Error('Missing metadata placeholder')
const env = {...loadEnv('production',process.cwd(),'SITE_'),...process.env}
const indexable = isIndexable(env)
const measurementId = analyticsMeasurementId(env)
const base = (env.SITE_BASE_PATH || '/').replace(/\/$/, '')
const criticalStyles = new Beasties({
  path: resolve('dist'),
  publicPath: `${base}/`,
  preload: 'media',
  noscriptFallback: true,
  pruneSource: false,
  fonts: false,
  // Consent UI is client-rendered; preserve relational selectors the extractor cannot match.
  allowRules: [/^\.analytics-/, /:has\(/],
  logLevel: 'error',
})
const urls = []
for (const path of [...paths, ...notFoundPaths]) {
  const result = render(path, indexable)
  const relative = path.slice(base.length)
  const isNotFound = notFoundPaths.includes(path)
  const target = isNotFound ? resolve('dist', `.${relative.replace(/404\/$/,'404.html')}`) : resolve('dist', `.${relative}`, 'index.html')
  await mkdir(dirname(target), {recursive:true})
  const preloadFiles = new Set()
  function preloadModule(key) {
    const module = clientManifest[key]
    if (!module) throw new Error(`Missing client module: ${key}`)
    if (preloadFiles.has(module.file)) return
    preloadFiles.add(module.file)
    for (const dependency of module.imports || []) preloadModule(dependency)
  }
  if (result.clientModule) preloadModule(result.clientModule)
  const modulePreloads = [...preloadFiles].map(file=>`\n    <link rel="modulepreload" crossorigin href="${base}/${file}" />`).join('')
  const html = template.replace('lang="en"', `lang="${result.lang}"`).replace('<!--page-head-->', result.head + modulePreloads + (!isNotFound && measurementId ? `\n    <meta name="ga4-measurement-id" content="${measurementId}" />` : '')).replace('<!--app-html-->', result.html)
  await writeFile(target, await criticalStyles.process(html))
  if (!isNotFound) urls.push(result.url)
}
const site = new URL(urls[0]).origin
await writeFile(resolve('dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable ? urls.map(url=>`  <url><loc>${url}</loc></url>`).join('\n') : ''}\n</urlset>\n`)
await writeFile(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n${indexable ? `Sitemap: ${site}${base}/sitemap.xml\n` : ''}`)
await writeFile(resolve('dist/.nojekyll'), '')
console.log(`Prerendered ${paths.length} multilingual pages + ${notFoundPaths.length} localized 404 pages. Indexing: ${indexable ? 'enabled' : 'disabled for preview'}.`)
