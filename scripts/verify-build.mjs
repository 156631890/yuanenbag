import { readdir, readFile, access } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import assert from 'node:assert/strict'
import { loadEnv } from 'vite'
import { paths, notFoundPaths, catalogAudit } from '../.ssr/entry-server.js'

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
assert.equal(files.length,paths.length+notFoundPaths.length,'Expected every configured route and localized 404 document')
assert.equal(catalogAudit.materialCategories.length,18,'Cover every source material category')
assert.equal(catalogAudit.styleOptions.length,12,'Cover every source style category')
assert.equal(catalogAudit.usageOptions.length,16,'Cover every source use category')
assert.equal(new Set(catalogAudit.bags.map(b=>b.slug)).size,catalogAudit.bags.length,'Duplicate product slugs')
for (const [category] of catalogAudit.materialCategories) assert(catalogAudit.bags.some(b=>b.category===category),`Empty category ${category}`)
for (const [option] of catalogAudit.styleOptions) assert(catalogAudit.bags.some(b=>b.styles.includes(option)),`Empty style ${option}`)
for (const [option] of catalogAudit.usageOptions) assert(catalogAudit.bags.some(b=>b.uses.includes(option)),`Empty use ${option}`)
for (const bag of catalogAudit.bags) {
  assert(catalogAudit.materialCategories.some(([id])=>id===bag.category),`Invalid category ${bag.slug}`)
  for (const [field,options] of [['styles',catalogAudit.styleOptions],['uses',catalogAudit.usageOptions]]) for (const value of bag[field]) assert(options.some(([id])=>id===value),`Invalid ${field} ${value}`)
  for (const lang of ['en','zh','es']) for (const field of ['name','intro','material','use','question','answer']) assert(bag[field][lang]?.trim(),`Missing ${lang} ${field}: ${bag.slug}`)
}
const titles = new Set()
const canonicals = new Set()
const env = {...loadEnv('production',process.cwd(),'SITE_'),...process.env}
const base = (env.SITE_BASE_PATH || '/').replace(/\/$/, '')
for (const path of paths) await access(resolve(root,`.${path.slice(base.length)}`,'index.html'))
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
  const relative = file.slice(root.length).replaceAll('\\','/').replace(/index\.html$/,'')
  const lang = relative.startsWith('/zh/')?'zh-CN':relative.startsWith('/es/')?'es':'en'
  assert(html.includes(`lang="${lang}"`),`Incorrect language: ${file}`)
  assert(JSON.parse(json)['@graph'].some(item=>item['@type']==='WebPage' && item.inLanguage===lang),`Incorrect schema language: ${file}`)
  if (/\/products\/$/.test(relative)) {
    const collection=JSON.parse(json)['@graph'].find(item=>item['@type']==='CollectionPage')
    assert.equal(collection?.mainEntity?.itemListElement.length,catalogAudit.bags.length,`Catalog schema must include every product: ${file}`)
    for (const bag of catalogAudit.bags) assert(html.includes(`/products/${bag.slug}/`),`Product missing from prerendered catalog: ${bag.slug}`)
  }
  assert(!/Compare six product|六大产品系列|六类保温包装|Compare seis familias/.test(html),`Stale catalog copy: ${file}`)
  if (!file.endsWith('404.html')) {
    assert(html.includes(`name="robots" content="${env.SITE_INDEXABLE==='true'?'index':'noindex'}, follow"`),`Incorrect robots directive: ${file}`)
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
    assert(canonical && !canonicals.has(canonical),`Missing or duplicate canonical: ${file}`)
    canonicals.add(canonical)
    assert.equal((html.match(/hreflang=/g)||[]).length,4,`Missing language alternates: ${file}`)
    assert.equal(canonical,`https://yuanenbag.com${base}${relative}`,`Incorrect canonical: ${file}`)
    const route = relative.replace(/^\/(zh|es)(?=\/)/,'')
    for (const [tag,prefix] of [['en',''],['zh-CN','/zh'],['es','/es'],['x-default','']]) {
      assert(html.includes(`hreflang="${tag}" href="https://yuanenbag.com${base}${prefix}${route}"`),`Incorrect alternate ${tag}: ${file}`)
    }
  } else {
    assert(html.includes('noindex, follow'),`404 must not be indexed: ${file}`)
    assert(!html.includes('rel="canonical"'),`404 should not declare a canonical: ${file}`)
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
assert.equal(locs.length,env.SITE_INDEXABLE==='true'?paths.length:0,'Sitemap indexing mode mismatch')
for (const url of locs) assert(canonicals.has(url),`Noncanonical URL in sitemap: ${url}`)
assert((await readFile(join(root,'404.html'),'utf8')).includes('noindex, follow'),'404 must not be indexed')
console.log(`Verified ${files.length} HTML documents: distinct titles, H1, language, canonical, alternates, schema, local links/assets, sitemap and 404.`)
