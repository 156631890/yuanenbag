import assert from 'node:assert/strict'
import { readFile, writeFile } from 'node:fs/promises'
import { seoAudit, catalogAudit, render } from '../.ssr/entry-server.js'

const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>')
const reports=[]
for(const lang of ['en','zh','es']){
 const prefix=lang==='en'?'':`/${lang}`,descriptions=new Set()
 for(const page of seoAudit.pages){
  const path=prefix+page.path,html=await readFile(`dist${path}index.html`,'utf8')
  const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'')
  const title=decode(html.match(/<title>(.*?)<\/title>/)[1])
  const description=decode(html.match(/name="description" content="([^"]+)"/)[1])
  const h1=decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]+>/g,''))
  assert(description.length>20&&!descriptions.has(description),`Missing or duplicate description: ${path}`)
  descriptions.add(description)
  const graph=JSON.parse(html.match(/application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
  if(page.type==='collection'){
   const c=seoAudit.collections.find(c=>c.slug===page.slug)
   const expected=catalogAudit.bags.filter(b=>b.type===c.type&&(c.type!=='cooler'||b.category!=='non-woven'))
   const list=graph.find(v=>v['@type']==='CollectionPage').mainEntity
   assert.equal(list.numberOfItems,expected.length,`Wrong range count: ${path}`)
   assert.deepEqual(list.itemListElement.map(v=>v.url),expected.map(b=>`https://yuanenbag.com${prefix}/products/${b.slug}/`))
   assert(visible.includes('<table')&&visible.includes(decode(c.answer[lang]).replaceAll('&','&amp;')),`Missing range answer/comparison: ${path}`)
   for(const b of expected){
    assert(visible.includes(`href="${prefix}/products/${b.slug}/"`),`Range missing product: ${b.slug}`)
    const product=await readFile(`dist${prefix}/products/${b.slug}/index.html`,'utf8')
    assert(product.includes(`href="${path}"`),`Missing return link: ${b.slug}`)
    const productGraph=JSON.parse(product.match(/application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
    assert(productGraph.find(v=>v['@type']==='BreadcrumbList').itemListElement.some(v=>v.item===`https://yuanenbag.com${path}`),`Missing range breadcrumb: ${b.slug}`)
   }
  }
  if(page.type==='bag') assert(visible.includes('seo-buying-links'),`Missing purchasing links: ${path}`)
  if(page.type==='guide'){
   assert.equal(graph.find(v=>v['@type']==='Article').dateModified,'2026-09-22')
   assert(visible.includes('2026')&&visible.includes('22'),`Missing visible update date: ${path}`)
  }
  if(['catalog','home'].includes(page.type)) for(const c of seoAudit.collections) assert(visible.includes(`href="${prefix}/collections/${c.slug}/"`),`Missing crawlable category: ${path}`)
  const preview=render(path,false)
  assert(preview.head.includes('noindex, follow'),`Preview indexability regression: ${path}`)
  reports.push({url:`https://yuanenbag.com${path}`,language:lang,type:page.type,title,h1,description})
 }
}
if(process.argv.includes('--write-report')) await writeFile('docs/SEO-PAGE-MAP-2026-09-22.json',JSON.stringify({checkedOn:'2026-09-22',basis:'Existing product/catalog evidence and procurement intent. No new search-volume or ranking claims.',pages:reports},null,2)+'\n')
console.log(`SEO checks passed for ${reports.length} URLs: unique summaries, category/product reciprocal links and breadcrumbs, range membership, article dates, preview noindex.`)
