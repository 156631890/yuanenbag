import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import sharp from 'sharp'
import { loadEnv } from 'vite'
import { analyticsMeasurementId } from './analytics-config.mjs'
import { paths, notFoundPaths } from '../.ssr/entry-server.js'

const manifest = JSON.parse(await readFile('src/responsive-image-manifest.json', 'utf8'))
for (const [source, image] of Object.entries(manifest)) {
  const original = await sharp(`public/${source}`).metadata()
  assert.equal(original.width, image.width)
  assert.equal(original.height, image.height)
  for (const variant of image.variants) {
    const actual = await sharp(`public/${variant.file}`).metadata()
    assert.equal(actual.width, variant.width)
    assert(actual.width <= original.width)
    assert(Math.abs(actual.height - original.height * actual.width / original.width) <= 1)
    await access(`dist/${variant.file}`)
  }
}
const env = { ...loadEnv('production', process.cwd(), 'SITE_'), ...process.env }
const measurementId = analyticsMeasurementId(env)
for (const path of paths) {
  const html = await readFile(`dist${path}index.html`, 'utf8')
  assert.equal(html.includes('name="ga4-measurement-id"'), !!measurementId, `Incorrect analytics build gate: ${path}`)
  if (measurementId) assert(html.includes(`content="${measurementId}"`))
  for (const match of html.matchAll(/srcset="([^"]+)"/gi)) {
    for (const variant of match[1].split(',')) {
      const file = variant.trim().split(' ')[0]
      assert(file.startsWith('/'), `Non-local responsive image: ${file}`)
      await access(`dist${file}`)
    }
  }
}
for (const path of notFoundPaths) {
  assert(!(await readFile(`dist${path.replace(/404\/$/, '404.html')}`, 'utf8')).includes('name="ga4-measurement-id"'))
}
const home = await readFile('dist/index.html', 'utf8')
assert(/cold-chain-range\.webp[^>]*srcset=/i.test(home), 'Hero must have responsive image candidates.')
const routes = JSON.parse(await readFile('vercel.json', 'utf8')).routes
assert.equal(routes.filter(route => route.headers?.Location).length, 3)
assert(routes.filter(route => route.headers?.Location).every(route => route.status === 308), 'Retired categories must redirect permanently.')
console.log(`Responsive image and build-gate checks passed for ${Object.keys(manifest).length} sources and ${paths.length} pages; legacy redirects are permanent.`)
