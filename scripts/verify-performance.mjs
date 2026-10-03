import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'
import { paths, notFoundPaths } from '../.ssr/entry-server.js'

const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'))
const imageManifest = JSON.parse(await readFile('src/responsive-image-manifest.json', 'utf8'))
const imageCandidates = Object.values(imageManifest).flatMap(image=>image.variants.map(variant=>variant.file))
const entry = await readFile(`dist/${manifest['index.html'].file}`, 'utf8')
for (const file of imageCandidates) {
  assert(!entry.includes(file), 'The initial script must reuse page image attributes instead of embedding the global image manifest.')
}
const routeModules = ['src/CatalogBrowser.tsx','src/Enquiry.tsx','src/ProductSections.tsx','src/SelectionGuide.tsx']
for (const key of routeModules) {
  assert(manifest[key]?.isDynamicEntry, `Missing separate page module: ${key}`)
  assert.notEqual(manifest[key].file, manifest['index.html'].file)
}
let largestInitialBytes = 0
for (const path of [...paths,...notFoundPaths]) {
  const file = path.endsWith('/404/') ? `dist${path.replace(/404\/$/, '404.html')}` : `dist${path}index.html`
  const html = await readFile(file,'utf8')
  const initialScripts = new Set([
    ...[...html.matchAll(/<script\b[^>]*src="([^"]+\.js)"/g)].map(match=>match[1]),
    ...[...html.matchAll(/<link\b[^>]*rel="modulepreload"[^>]*href="([^"]+\.js)"/g)].map(match=>match[1]),
  ])
  let bytes = 0, gzipBytes = 0
  for (const source of initialScripts) {
    assert(source.startsWith('/') && source.includes('/assets/'), `Unexpected script URL: ${source}`)
    const local = source.slice(source.lastIndexOf('/assets/'))
    await access(`dist${local}`)
    const data = await readFile(`dist${local}`)
    bytes += data.length
    gzipBytes += gzipSync(data,{level:9}).length
  }
  largestInitialBytes = Math.max(largestInitialBytes,bytes)
  assert(bytes <= 700_000, `Initial scripts exceed the 700 kB budget: ${path} (${bytes})`)
  assert(gzipBytes <= 210_000, `Compressed initial scripts exceed the 210 kB budget: ${path}`)
  assert(!html.includes('<!--$!-->'), `Static page content suspended during rendering: ${path}`)
  const needed = path.endsWith('/products/') ? 'src/CatalogBrowser.tsx'
    : path.includes('/products/') && !path.includes('/collections/') ? 'src/ProductSections.tsx'
    : path.endsWith('/contact/') ? 'src/Enquiry.tsx'
    : /\/guides\/(bag-material-comparison|ice-pack-selection)\/$/.test(path) ? 'src/SelectionGuide.tsx'
    : undefined
  for (const key of routeModules) {
    assert.equal([...initialScripts].some(source=>source.endsWith(`/${manifest[key].file}`)), key===needed, `Incorrect page module preload: ${path} (${key})`)
  }
}
const routes = JSON.parse(await readFile('vercel.json','utf8')).routes
const cacheRule = routes.find(route=>route.src?.startsWith('/assets/'))
assert(cacheRule?.continue)
assert.equal(cacheRule.headers['Cache-Control'],'public, max-age=31536000, immutable')
const pattern = new RegExp(`^${cacheRule.src}$`)
for (const module of Object.values(manifest)) {
  assert(pattern.test(`/${module.file}`), `Versioned script is not covered by the cache rule: ${module.file}`)
  for (const css of module.css || []) assert(pattern.test(`/${css}`))
}
assert(!pattern.test('/index.html') && !pattern.test('/assets/app.js'), 'Only versioned assets may receive immutable caching.')
console.log(`Performance checks passed for ${paths.length+notFoundPaths.length} pages: page-specific preloads, complete static content, cache rules and an initial script maximum of ${largestInitialBytes} bytes.`)
