import assert from 'node:assert/strict'
import { access, readFile, writeFile } from 'node:fs/promises'
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
   const enquiryBrief=visible.match(/<p class="foil-enquiry-brief">([\s\S]*?)<\/p>/)?.[1]
   if(c.slug==='foil-insulated-packaging'){
    assert(enquiryBrief,`Missing foil enquiry brief: ${path}`)
    assert(enquiryBrief.includes(`href="${prefix}/guides/custom-bag-order-checklist/"`),`Wrong foil checklist language: ${path}`)
    const text=decode(enquiryBrief.replace(/<[^>]+>/g,'')).replace(/\s+/g,' ')
    const required={en:['order quantity','printing requirements','delivery destination','required arrival date','apply only to the products named there'],zh:['订单数量','印刷要求','交货目的地','要求到货日期','仅适用于清单中列明的产品'],es:['la cantidad','requisitos de impresión','destino de entrega','fecha de llegada requerida','solo a los productos indicados allí']}
    for(const term of required[lang]) assert(text.includes(term),`Missing foil enquiry requirement ${term}: ${path}`)
   } else assert(!enquiryBrief,`Foil enquiry brief leaked into another collection: ${path}`)
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
   const guide=seoAudit.guides.find(g=>g.slug===page.slug)
   const article=graph.find(v=>v['@type']==='Article')
   assert.equal(article.dateModified,guide.dateModified)
   assert(visible.includes(`datetime="${guide.dateModified}"`),`Missing visible update date: ${path}`)
   assert.equal(article.author['@id'],'https://yuanenbag.com/#organization')
   assert(visible.includes('guide-sources')&&visible.includes(`href="${prefix}/about/"`),`Missing author/source context: ${path}`)
  }
  if(page.type==='editorialArticle'){
   const article=seoAudit.editorialArticles.find(item=>item.slug===page.slug)
   assert(article,`Article data missing: ${path}`)
   assert.equal(path,`${prefix}/${article.kind==='guide'?'guides':'industry-news'}/${article.slug}/`)
   const schema=graph.find(item=>item['@type']==='Article')
   assert(schema&&schema.datePublished===article.publishedAt&&schema.dateModified===(article.updatedAt||article.publishedAt),`Wrong article dates: ${path}`)
   assert.equal(schema.headline,article.title[lang],`Wrong article headline: ${path}`)
   assert(visible.includes(`datetime="${article.publishedAt}"`)&&visible.includes('guide-sources'),`Missing visible dates or source context: ${path}`)
   assert(visible.includes(`href="${prefix}/${article.kind==='guide'?'guides':'industry-news'}/"`),`Missing archive link: ${path}`)
   for(const source of article.sources) assert(visible.includes(`href="${source.url.replaceAll('&','&amp;')}"`),`Missing article source: ${path}`)
   for(const slug of article.relatedProducts) assert(visible.includes(`href="${prefix}/products/${slug}/"`),`Missing related product: ${path}`)
   if(article.kind==='industry') assert(visible.includes(`datetime="${article.eventDate}"`)&&visible.includes(article.market[lang]),`Missing event date or market: ${path}`)
   assert(article.image,`Missing article image: ${path}`)
   assert.equal(schema.image,`https://yuanenbag.com/${article.image.file}`,`Wrong article image schema: ${path}`)
   assert(visible.includes(`src="/${article.image.file}"`)&&visible.includes(`alt="${article.image.alt[lang]}"`),`Missing visible article image or alt: ${path}`)
   await access(`dist/${article.image.file}`)
  }
  if(page.type==='industryArchive'||page.type==='guideArchive'){
   const kind=page.type==='industryArchive'?'industry':'guide'
   const articles=seoAudit.editorialArticles.filter(article=>article.kind===kind).slice(((page.pageNumber||1)-1)*12,(page.pageNumber||1)*12)
   const list=graph.find(item=>item['@type']==='CollectionPage')?.mainEntity
   assert.equal(list?.numberOfItems,articles.length,`Wrong article archive count: ${path}`)
   for(const article of articles){
    assert(visible.includes(`href="${prefix}/${kind==='guide'?'guides':'industry-news'}/${article.slug}/"`),`Article missing from archive: ${path}`)
    assert(visible.includes(`src="/${article.image.file}"`)&&visible.includes(`alt="${article.image.alt[lang]}"`),`Article image missing from archive: ${path}`)
   }
  }
  if(['catalog','home'].includes(page.type)) for(const c of seoAudit.collections) assert(visible.includes(`href="${prefix}/collections/${c.slug}/"`),`Missing crawlable category: ${path}`)
  const preview=render(path,false)
  assert(preview.head.includes('noindex, follow'),`Preview indexability regression: ${path}`)
  reports.push({url:`https://yuanenbag.com${path}`,language:lang,type:page.type,title,h1,description})
 }
}
if(process.argv.includes('--write-report')) await writeFile('docs/SEO-PAGE-MAP-2026-09-22.json',JSON.stringify({checkedOn:'2026-09-22',basis:'Existing product/catalog evidence and procurement intent. No new search-volume or ranking claims.',pages:reports},null,2)+'\n')
console.log(`SEO checks passed for ${reports.length} URLs: unique summaries, category/product reciprocal links and breadcrumbs, range membership, article dates, preview noindex.`)
