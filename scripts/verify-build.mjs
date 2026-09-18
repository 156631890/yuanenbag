import { readdir, readFile, access } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import assert from 'node:assert/strict'
import { loadEnv } from 'vite'

const root = resolve('dist')
const files = []
async function collect(dir) {
  for (const entry of await readdir(dir, {withFileTypes:true})) {
    const path = join(dir,entry.name)
    if (entry.isDirectory()) await collect(path)
    else if (entry.name.endsWith('.html')) files.push(path)
  }
}
await collect(root)
assert.equal(files.length,33,'Expected 32 bilingual pages and a 404 document')
const titles = new Set()
const canonicals = new Set()
const env = {...loadEnv('production',process.cwd(),'SITE_'),...process.env}
const base = (env.SITE_BASE_PATH || '/').replace(/\/$/, '')
for (const file of files) {
  const html = await readFile(file,'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title),`Missing or duplicate title: ${file}`)
  titles.add(title)
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`Expected one H1: ${file}`)
  assert(!html.includes('<!--app-html-->'),'HTML must contain rendered content')
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
  assert(json && JSON.parse(json)['@graph'].length>=3,`Missing schema graph: ${file}`)
  assert(html.includes('<main id="main">'),`Missing main content: ${file}`)
  if (!file.endsWith('404.html')) {
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
    assert(canonical && !canonicals.has(canonical),`Missing or duplicate canonical: ${file}`)
    canonicals.add(canonical)
    assert.equal((html.match(/hreflang=/g)||[]).length,3,`Missing language alternates: ${file}`)
    const relative = file.slice(root.length).replaceAll('\\','/').replace(/index\.html$/,'')
    assert.equal(canonical,`https://yuanenbag.com${base}${relative}`,`Incorrect canonical: ${file}`)
    assert(html.includes(`lang="${relative.startsWith('/zh/')?'zh-CN':'en'}"`),`Incorrect language: ${file}`)
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    let path = match[1].split(/[?#]/)[0]
    if (base) { assert(path.startsWith(`${base}/`),`Link missing base path: ${path}`); path=path.slice(base.length) }
    const target = resolve(root, `.${path}`, ...(path.endsWith('/')?['index.html']:[]))
    await access(target).catch(()=>assert.fail(`Broken local link or asset ${match[1]} in ${file}`))
  }
}
const sitemap = await readFile(join(root,'sitemap.xml'),'utf8')
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1])
assert.equal(locs.length,env.SITE_INDEXABLE==='true'?32:0,'Sitemap indexing mode mismatch')
for (const url of locs) assert(canonicals.has(url),`Noncanonical URL in sitemap: ${url}`)
assert((await readFile(join(root,'404.html'),'utf8')).includes('noindex, follow'),'404 must not be indexed')
console.log(`Verified ${files.length} HTML documents: distinct titles, H1, language, canonical, alternates, schema, local links/assets, sitemap and 404.`)
