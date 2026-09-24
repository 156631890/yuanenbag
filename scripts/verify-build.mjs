import { readdir, readFile, access } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import assert from 'node:assert/strict'
import { loadEnv } from 'vite'
import { isIndexable } from './indexing.mjs'
import { paths, notFoundPaths, catalogAudit, documentationAudit } from '../.ssr/entry-server.js'

const root = resolve('dist')
const documentSources=JSON.parse(await readFile('docs/documentation-sources.json','utf8')).documents
assert.equal(documentationAudit.length,6,'Six unique supplied documentation records')
assert.equal(new Set(documentationAudit.map(d=>d.number)).size,6,'Duplicate report or certificate numbers')
for (const document of documentationAudit) {
  const source=documentSources.find(d=>d.id===document.id)
  assert(source && source.number===document.number && source.pageCount===document.pages,`Document provenance mismatch: ${document.id}`)
  await access(join(root,'images/documents',document.image))
  assert(document.holder!=='YUANEN','Keep each original document holder')
}
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
const photoImport=JSON.parse(await readFile('docs/sample-photo-import-2026-09.json','utf8'))
const icePhotoImport=JSON.parse(await readFile('docs/ice-photo-import-2026-09.json','utf8'))
const foilPhotoImport=JSON.parse(await readFile('docs/foil-photo-import-2026-09.json','utf8'))
const photoSources=[...photoImport.files,...icePhotoImport.files,...foilPhotoImport.files]
const addedGalleryCounts={'square-zipper-cake-cooler':6,'water-fill-ice-packs':5,'self-absorbing-ice-packs':6,'hand-finished-gusseted-foil-bags':3,'open-top-foil-bags':3}
const photoProducts=catalogAudit.bags.filter(b=>b.collection==='yuanen-photos-2026')
assert.equal(catalogAudit.bags.filter(b=>b.collection==='yuanen-2026').length,23,'Retain the original cold-chain catalog plus the cooler variants')
assert.deepEqual(photoProducts.map(b=>b.slug).sort(),['compact-insulated-lunch-bags','double-film-self-absorbing-ice-packs','foil-insulated-box-liners','gold-trim-insulated-cake-bags','gusseted-self-seal-foil-bags','side-absorbing-ice-packs'])
assert(catalogAudit.bags.every(b=>['yuanen-2026','yuanen-photos-2026'].includes(b.collection)),'Unselected category published')
assert.equal(photoImport.files.filter(f=>f.selected).length,20,'Expected curated sample photographs')
assert.equal(icePhotoImport.files.filter(f=>f.selected).length,14,'Expected curated ice-pack photographs')
assert.equal(foilPhotoImport.files.filter(f=>f.selected).length,8,'Expected curated foil-packaging photographs')
assert.equal(new Set(catalogAudit.bags.map(b=>b.slug)).size,catalogAudit.bags.length,'Duplicate product slugs')
const {commercialProfiles,stockSpecifications}=catalogAudit
const commercialSources=JSON.parse(await readFile('docs/commercial-sources.json','utf8'))
assert.equal(Object.keys(commercialProfiles).length,9,'Commercial terms cover nine supported catalog products')
assert.equal(stockSpecifications.length,commercialSources.stockDisplayRows,'Stock display rows must match the source audit')
const sourceRows=stockSpecifications.flatMap(s=>s.sourceRows)
assert.equal(sourceRows.length,commercialSources.stockSourceRows,'All imported stock rows must be represented')
assert.equal(new Set(sourceRows).size,sourceRows.length,'Stock source rows must not be duplicated')
assert.equal(new Set(stockSpecifications.map(s=>`${s.group}/${s.dimensions}/${s.capacity}`)).size,stockSpecifications.length,'Duplicate stock specifications')
for (const [slug,profile] of Object.entries(commercialProfiles)) {
  const bag=catalogAudit.bags.find(b=>b.slug===slug)
  assert(bag && !slug.endsWith('-cooler'),`Unsupported commercial mapping: ${slug}`)
  assert(stockSpecifications.some(s=>s.group===profile.stocks),`Missing stock sizes: ${slug}`)
  for (const lang of ['en','zh','es']) {
    for (const field of ['moq','sample','lead','dimensions']) assert(profile[field][lang]?.trim(),`Missing commercial translation: ${slug}/${lang}/${field}`)
    for (const option of profile.options) for (const field of ['name','moq','scope','sample','lead']) assert(option[field][lang]?.trim(),`Missing order option: ${slug}/${lang}/${field}`)
  }
  if (bag.type==='ice') {
    assert(profile.fixedSizes,`Ice sizes must be fixed: ${slug}`)
    assert(profile.options[1].moq.en.includes('100,000'),`Custom ice printing requires 100,000 pcs: ${slug}`)
    assert(profile.dimensions.zh.includes('不可更改尺寸'),`Missing size limitation: ${slug}`)
  }
}
for (const bag of catalogAudit.bags) {
  if (bag.collection) {
    if(bag.collection==='yuanen-2026') assert(bag.catalogPage>=6 && bag.catalogPage<=10,`Missing catalog source: ${bag.slug}`)
    else for(const file of [bag.image,...bag.gallery]) assert(photoSources.some(f=>f.selected&&f.output===file),`Missing original photo provenance: ${file}`)
    assert(!bag.source,`Own catalog product cannot carry third-party reference attribution: ${bag.slug}`)
    for (const file of [bag.image,...bag.gallery]) await access(join(root,'images/products',file))
  }
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
    const ownProduct = catalogAudit.bags.find(b=>b.collection && relative.endsWith(`/products/${b.slug}/`))
  if (ownProduct) {
    const product = JSON.parse(json)['@graph'].find(item=>item['@type']==='Product')
    assert(product,`Missing product schema: ${relative}`)
    if(ownProduct.collection==='yuanen-photos-2026') {
      if (ownProduct.slug==='double-film-self-absorbing-ice-packs') {
        assert.equal(product.image.length,4,`Incomplete double-film gallery: ${relative}`)
        assert(product.image[0].endsWith('/packy/double-film-self-absorbing-ice-packs-main.png'),`Incorrect double-film main image: ${relative}`)
        assert(product.image[1].endsWith('/packy/double-film-self-absorbing-ice-packs-secondary.png'),`Incorrect double-film secondary image: ${relative}`)
        assert(product.image[2].endsWith('/packy/double-film-self-absorbing-ice-packs-product-display.jpg'),`Incorrect double-film display image: ${relative}`)
        assert(product.image[3].endsWith('/packy/double-film-self-absorbing-ice-packs-cooler-application.jpg'),`Incorrect double-film application image: ${relative}`)
      } else if (ownProduct.slug==='side-absorbing-ice-packs') {
        assert.equal(product.image.length,1+ownProduct.gallery.length,`Incomplete side-absorbing gallery: ${relative}`)
        assert(product.image[0].endsWith('/packy/side-absorbing-ice-packs-main.jpg'),`Incorrect side-absorbing main image: ${relative}`)
        assert(product.image[1].endsWith('/packy/side-absorbing-ice-packs-secondary.png'),`Incorrect side-absorbing second image: ${relative}`)
        assert(product.image[2].endsWith(ownProduct.gallery[1]),`Incorrect side-absorbing third photograph: ${relative}`)
      } else {
      assert.equal(product.image.length,1+ownProduct.gallery.length,`Incomplete real photo gallery: ${relative}`)
      assert(product.image[0].endsWith(ownProduct.image),`Incorrect real main photograph: ${relative}`)
      for(const url of product.image) assert(photoSources.some(f=>f.selected&&url.endsWith(f.output)),`Unproven photograph: ${relative}`)
      assert(!html.includes('AI product illustration')&&!html.includes('AI 产品示意')&&!html.includes('Ilustración con IA'),`Mislabelled real photos: ${relative}`)
      }
      for(const id of ['applications','materials','features','order-quantities','pricing','delivery','dimensions','export']) assert(html.includes(`id="${id}"`),`Missing buyer section ${id}: ${relative}`)
    } else {
      const customInsulatedBag=ownProduct.slug.endsWith('-insulated-cooler-bags')
      if (customInsulatedBag) {
        assert.equal(product.image.length,1+ownProduct.gallery.length,`Unexpected custom cooler gallery: ${relative}`)
        assert(product.image[0].endsWith(`/images/products/${ownProduct.image}`),`Incorrect custom cooler main image: ${relative}`)
      } else {
      const selfSealNonWoven=ownProduct.slug==='self-seal-non-woven-delivery-bags'
      const newNonwovenVariant=['self-seal-non-woven-bakery-bags','self-seal-non-woven-milk-tea-bags','self-seal-non-woven-cake-bags'].includes(ownProduct.slug)
      if (selfSealNonWoven) {
        const expectedImages=[
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/main.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/colors.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/food-service.png',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/meal-delivery.png',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery.png',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/meal-scenes.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/dining-colors.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/dining-meals.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/dining-group.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/dining-food.jpg',
          '/images/products/packy/self-seal-non-woven-delivery-bags-new/dining-catering.jpg',
        ]
        assert.deepEqual(product.image,expectedImages,`Unexpected self-seal non-woven gallery: ${relative}`)
      } else if (newNonwovenVariant) {
        if (ownProduct.slug==='self-seal-non-woven-cake-bags') {
          const expectedCakeImages=[
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/cake.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/cake-colors.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/cake-desserts.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/cake-display.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/cake-celebration.jpg',
          ]
          assert.deepEqual(product.image,expectedCakeImages,`Unexpected cake bag gallery: ${relative}`)
        } else if (ownProduct.slug==='self-seal-non-woven-bakery-bags') {
          const expectedBakeryImages=[
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery-colors.png',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery-display.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery-products.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/bakery-scene.jpg',
          ]
          assert.deepEqual(product.image,expectedBakeryImages,`Unexpected bakery bag gallery: ${relative}`)
        } else if (ownProduct.slug==='self-seal-non-woven-milk-tea-bags') {
          const expectedMilkTeaImages=[
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea-colors.png',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea-drinks.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea-scene.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea-display.jpg',
            '/images/products/packy/self-seal-non-woven-delivery-bags-new/milk-tea-catering.jpg',
          ]
          assert.deepEqual(product.image,expectedMilkTeaImages,`Unexpected milk tea bag gallery: ${relative}`)
        } else {
          assert.equal(product.image.length,1,`Unexpected non-woven variant gallery: ${relative}`)
          assert(product.image[0].endsWith(`/images/products/${ownProduct.image}`),`Incorrect non-woven variant main image: ${relative}`)
        }
      } else {
      const segmentedIceSheets=ownProduct.slug==='segmented-ice-sheets'
      const waterFillIcePacks=ownProduct.slug==='water-fill-ice-packs'
      const selfAbsorbingIcePacks=ownProduct.slug==='self-absorbing-ice-packs'
      const expectedGalleryCount=4+(addedGalleryCounts[ownProduct.slug]||0)-(segmentedIceSheets?0:waterFillIcePacks?4:selfAbsorbingIcePacks?3:0)
      const requiredVisualKinds=segmentedIceSheets?['application','detail']:waterFillIcePacks||selfAbsorbingIcePacks?[]:['application','detail','structure']
      assert.equal(product.image.length,expectedGalleryCount,`Unexpected gallery image count: ${relative}`)
      const mainImageSuffix=waterFillIcePacks||selfAbsorbingIcePacks?`/packy/${ownProduct.slug}-main.png`:`/packy/${ownProduct.slug}-main.webp`
      assert(product.image[0].endsWith(mainImageSuffix),`Approved main image must stay first: ${relative}`)
      for (const kind of requiredVisualKinds) assert(product.image.some(url=>url.endsWith(`/packy/details-v2/${ownProduct.slug}-${kind}-v2.webp`)),`Missing product-specific ${kind}: ${relative}`)
      for (const original of [ownProduct.image,...ownProduct.gallery]) assert(!html.includes(`/images/products/${original}`),`Rejected catalog image still displayed: ${relative}`)
      }
      }
      }
    for (const image of product.image) { const imagePath=new URL(image).pathname; await access(join(root,imagePath)); assert(html.includes(imagePath),`Schema image absent from visible gallery: ${relative}`) }
    assert(!product.offers && !product.aggregateRating,`Unverified commercial claims: ${relative}`)
    const profile=commercialProfiles[ownProduct.slug]
    if (profile) {
      const language=relative.startsWith('/zh/')?'zh':relative.startsWith('/es/')?'es':'en'
      const plain=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'').replace(/<[^>]*>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#x27;',"'").replaceAll('&#39;',"'").replaceAll('&lt;','<').replaceAll('&gt;','>')
      assert(plain.includes(profile.moq[language]) && plain.includes(profile.sample[language]) && plain.includes(profile.lead[language]),`Missing rendered commercial terms: ${relative}`)
      const table=html.match(/<table class="stock-size-table">([\s\S]*?)<\/table>/)?.[1]
      assert(table,`Missing stock table: ${relative}`)
      for (const spec of stockSpecifications.filter(s=>s.group===profile.stocks)) assert(table.includes(spec.dimensions),`Missing stock dimension ${spec.dimensions}: ${relative}`)
      const faq=JSON.parse(json)['@graph'].find(item=>item['@type']==='FAQPage')
      for (const item of faq.mainEntity) assert(plain.includes(item.name) && plain.includes(item.acceptedAnswer.text),`FAQ schema differs from page: ${relative}`)
    }
  }
  const lang = relative.startsWith('/zh/')?'zh-CN':relative.startsWith('/es/')?'es':'en'
  assert(html.includes(`lang="${lang}"`),`Incorrect language: ${file}`)
  assert(JSON.parse(json)['@graph'].some(item=>item['@type']==='WebPage' && item.inLanguage===lang),`Incorrect schema language: ${file}`)
  if (/\/products\/$/.test(relative)) {
    const collection=JSON.parse(json)['@graph'].find(item=>item['@type']==='CollectionPage')
    assert.equal(collection?.mainEntity?.itemListElement.length,catalogAudit.bags.length,`Catalog schema must include every product: ${file}`)
    for (const bag of catalogAudit.bags) assert(html.includes(`/products/${bag.slug}/`),`Product missing from prerendered catalog: ${bag.slug}`)
  }
  if (/\/quality\/$/.test(relative)) {
    const language=lang==='zh-CN'?'zh':lang
    const collection=JSON.parse(json)['@graph'].find(item=>item['@type']==='CollectionPage')
    assert.equal(collection?.mainEntity?.numberOfItems,6,`Document library schema count: ${relative}`)
    const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'')
    for (const d of documentationAudit) {
      assert(visible.includes(`id="${d.id}"`) && visible.includes(d.number),`Missing document: ${relative}/${d.id}`)
      assert(visible.includes(d.holder.replaceAll('&','&amp;')),`Missing original holder: ${relative}/${d.id}`)
      assert(visible.includes(d.note[language].replaceAll('&','&amp;')),`Missing scope limitation: ${relative}/${d.id}`)
      if(d.validUntil) assert(visible.includes(d.validUntil),`Missing validity date: ${relative}/${d.id}`)
      assert(visible.includes(encodeURIComponent(`YUANEN document request - ${d.number}`)),`Missing document-specific email subject: ${relative}/${d.id}`)
    }
    assert(!html.includes('hasCertification'),`Do not assign affiliated documentation as YUANEN product certification: ${relative}`)
  }
  assert(!/Compare six product|六大产品系列|六类保温包装|Compare seis familias/.test(html),`Stale catalog copy: ${file}`)
  if (!file.endsWith('404.html')) {
    assert(html.includes(`name="robots" content="${isIndexable(env)?'index':'noindex'}, follow"`),`Incorrect robots directive: ${file}`)
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
assert.equal(locs.length,isIndexable(env)?paths.length:0,'Sitemap indexing mode mismatch')
for (const url of locs) assert(canonicals.has(url),`Noncanonical URL in sitemap: ${url}`)
assert((await readFile(join(root,'404.html'),'utf8')).includes('noindex, follow'),'404 must not be indexed')
console.log(`Verified ${files.length} HTML documents: distinct titles, H1, language, canonical, alternates, schema, local links/assets, sitemap and 404.`)
console.log(`Verified commercial terms for ${Object.keys(commercialProfiles).length} products in three languages, ${stockSpecifications.length} stock rows from ${sourceRows.length} source rows, and matching visible FAQ/schema.`)
console.log('Verified six document records, original holders, provenance, stated validity, scope limitations, cover assets and document-specific enquiry links in three languages.')
