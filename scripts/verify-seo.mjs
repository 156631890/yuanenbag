import assert from 'node:assert/strict'
import { access, readFile, writeFile } from 'node:fs/promises'
import { seoAudit, catalogAudit, render } from '../.ssr/entry-server.js'

const decode=s=>s.replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>')
for(const b of catalogAudit.bags){
 for(const field of ['name','short','seoTitle']) for(const value of Object.values(b[field]||{})) assert(!/定制方案|打样方案|定制打样|proposal|propuesta|propuestos|custom design|sampling design/i.test(value),`Internal-stage product name: ${b.slug} ${field}`)
 const c=catalogAudit.productClassifications[b.slug]
 assert(c&&catalogAudit.productFamilies.some(([id])=>id===c.family),`Explicit product family required: ${b.slug}`)
 assert(catalogAudit.productMaterials.some(([id])=>id===c.material),`Valid material classification required: ${b.slug}`)
 assert(!['cooler','thermal','cold-chain'].includes(c.material),`Use cannot be a material: ${b.slug}`)
}
// Every active product has exactly one primary form category. No material-based fallback.
const membership=seoAudit.collections.flatMap(c=>seoAudit.collectionProducts(c).map(b=>({slug:b.slug,collection:c.slug})))
assert.equal(membership.length,catalogAudit.bags.length,'Every product needs one primary collection')
assert.equal(new Set(membership.map(x=>x.slug)).size,catalogAudit.bags.length,'Duplicate or missing primary collection')
for(const [slug,collection] of Object.entries({
 'paper-insulated-delivery-bags':'insulated-takeaway-totes',
 'insulated-pallet-covers':'insulated-box-liners-pallet-covers',
 'foil-insulated-box-liners':'insulated-box-liners-pallet-covers',
 'insulated-pizza-delivery-bags':'custom-cooler-bags',
 'self-seal-non-woven-delivery-bags':'insulated-takeaway-totes',
 'water-fill-ice-packs':'ice-packs-for-shipping',
 'self-adhesive-foil-bags':'foil-insulated-packaging',
})) assert.equal(membership.find(x=>x.slug===slug)?.collection,collection,`Wrong product form category: ${slug}`)
assert.throws(()=>catalogAudit.classificationFor({slug:'__unmapped_release_probe__'}),/Missing explicit product classification/,'Unmapped products must not fall back to cooler bags')
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
   const expected=seoAudit.collectionProducts(c)
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
   assert(visible.includes('<table')&&visible.includes(decode(seoAudit.collectionContent[c.slug].answer[lang]).replaceAll('&','&amp;')),`Missing range answer/comparison: ${path}`)
   for(const b of expected){
    assert(visible.includes(`href="${prefix}/products/${b.slug}/"`),`Range missing product: ${b.slug}`)
    const product=await readFile(`dist${prefix}/products/${b.slug}/index.html`,'utf8')
    assert(product.includes(`href="${path}"`),`Missing return link: ${b.slug}`)
    const productGraph=JSON.parse(product.match(/application\/ld\+json">([\s\S]*?)<\/script>/)[1])['@graph']
    assert(productGraph.find(v=>v['@type']==='BreadcrumbList').itemListElement.some(v=>v.item===`https://yuanenbag.com${path}`),`Missing range breadcrumb: ${b.slug}`)
   }
  }
  if(page.type==='bag') assert(visible.includes('seo-buying-links'),`Missing purchasing links: ${path}`)
  if(page.type==='bag'){
   const note=visible.match(/<p class="reference-note">([\s\S]*?)<\/p>/)?.[1]||''
   assert(note,`Missing product order note: ${path}`)
   assert(!/拟定|定制方案|proposed|proposal|propuesta/i.test(note),`Draft-stage copy in published product order note: ${path}`)
   const caption=visible.match(/<p class="gallery-caption">([\s\S]*?)<\/p>/)?.[1]
   if(caption) assert.notEqual(caption,note,`Duplicate gallery and order note: ${path}`)
  }

  if(page.type==='bag' && page.slug==='insulated-pallet-covers'){
   for(const marker of ['quantity-grid','quote-block','commercial-facts','delivery-steps','export-documents']) assert(visible.includes(marker),`Missing shared purchasing layout ${marker}: ${path}`)
  }
  if(page.type==='guide'){
   assert(visible.includes(`href="${prefix}/content-policy/"`),`Missing legacy guide content information link: ${path}`)
   assert(!/AI-assisted illustration|AI 场景示意|Ilustración asistida por IA/.test(visible),`Old guide AI label: ${path}`)
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
   assert(html.includes(`<meta property="og:image" content="https://yuanenbag.com/${article.image.file}"`),`Wrong article share image: ${path}`)
   assert(visible.includes(`src="/${article.image.file}"`)&&visible.includes(`alt="${article.image.alt[lang]}"`),`Missing visible article image or alt: ${path}`)
   assert(visible.includes(article.image.caption[lang]),`Missing translated image caption: ${path}`)
   assert(!/ · (Illustration|示意图|Ilustración)<\/figcaption>/.test(visible),`Repeated image-type label: ${path}`)
   assert(visible.includes(`href="${prefix}/content-policy/"`),`Missing content information link: ${path}`)
   assert(!visible.includes('AI-generated illustration')&&!visible.includes('AI 生成示意图')&&!visible.includes('Ilustración generada con IA'),`Repeated AI image label: ${path}`)
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
