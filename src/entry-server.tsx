import { renderToString } from 'react-dom/server'
import App from './App'
import { productImages } from './product-media'
import { commercialFAQ, commercialProfiles, stockSpecifications } from './commercial-data'
import { bags, brand, faq, tx, languages, locales, type Lang } from './data'
import { pages, href, resolveRoute } from './routes'
import { materialCategories, styleOptions, usageOptions } from './catalog-data'

export const notFoundPaths = languages.map(lang=>href('/404/',lang))
export const paths = languages.flatMap(lang => pages.map(page => href(page.path, lang)))
export const catalogAudit = {bags,materialCategories,styleOptions,usageOptions,commercialProfiles,stockSpecifications}
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!))
const absolute = (path: string) => new URL(path, brand.site).href
export function render(path = '/', indexable = false) {
  const { lang, page } = resolveRoute(path)
  const url = absolute(href(page.path, lang))
  const organization = { '@type':'Organization', '@id':`${brand.site}/#organization`, name:brand.name, legalName:brand.chineseName, url:brand.site, telephone:brand.phones[0], address:{'@type':'PostalAddress',addressLocality:'Longgang, Wenzhou',addressRegion:'Zhejiang',addressCountry:'CN'}, ...(brand.email ? {email:brand.email} : {}) }
  const graph: Record<string, unknown>[] = [organization, {'@type':'WebSite','@id':`${brand.site}/#website`,url:brand.site,name:brand.name,publisher:{'@id':organization['@id']},inLanguage:languages.map(language=>locales[language].tag)}, {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title[lang],description:page.description[lang],inLanguage:locales[lang].tag,isPartOf:{'@id':`${brand.site}/#website`}}]
  if (page.type !== 'home' && page.type !== '404') {
    const crumbs = [{name:tx('Home','首页')[lang],item:absolute(href('/',lang))}]
    if (page.type === 'bag') crumbs.push({name:tx('Products','产品中心')[lang],item:absolute(href('/products/',lang))})
    if (page.type === 'guide') crumbs.push({name:tx('Resources','采购指南')[lang],item:absolute(href('/guides/',lang))})
    crumbs.push({name:page.title[lang].split(' | ')[0],item:url})
    graph.push({'@type':'BreadcrumbList',itemListElement:crumbs.map((item,i)=>({'@type':'ListItem',position:i+1,...item}))})
  }
  if (page.type === 'home' || page.type === 'bag') {
    const bag = bags.find(b=>b.slug===page.slug)
    const questions = bag ? [{q:bag.question,a:bag.answer},faq[2],commercialFAQ(bag.slug)||faq[3]] : faq
    graph.push({'@type':'FAQPage',mainEntity:questions.map(item=>({'@type':'Question',name:item.q[lang],acceptedAnswer:{'@type':'Answer',text:item.a[lang]}}))})
  }
  if (page.type === 'guide') graph.push({'@type':'Article',headline:page.title[lang].split(' | ')[0],description:page.description[lang],inLanguage:locales[lang].tag,dateModified:'2026-09-18',author:{'@id':organization['@id']},publisher:{'@id':organization['@id']},mainEntityOfPage:{'@id':`${url}#webpage`}})
  if (page.type === 'catalog') graph.push({'@type':'CollectionPage','@id':`${url}#collection`,name:page.title[lang],url,inLanguage:locales[lang].tag,mainEntity:{'@type':'ItemList',numberOfItems:bags.length,itemListElement:bags.map((bag,i)=>({'@type':'ListItem',position:i+1,name:bag.name[lang],url:absolute(href(`/products/${bag.slug}/`,lang))}))}})
  const currentBag = bags.find(b=>b.slug===page.slug)
  const shareImage = currentBag?.image ? `images/products/${productImages(currentBag)[0].file}` : 'images/factory/2026/longgang-production.webp'
  if (page.type === 'bag' && currentBag?.collection) graph.push({'@type':'Product','@id':`${url}#product`,name:currentBag.name[lang],description:currentBag.intro[lang],url,image:productImages(currentBag).map(({file})=>absolute(href('/', 'en')+`images/products/${file}`)),brand:{'@type':'Brand',name:brand.name},manufacturer:{'@id':organization['@id']},material:currentBag.material[lang],category:currentBag.use[lang]})
  const head = [
    `<title>${escape(page.title[lang])}</title>`,
    `<meta name="description" content="${escape(page.description[lang])}" />`,
    `<meta name="robots" content="${indexable && page.type !== '404' ? 'index, follow' : 'noindex, follow'}" />`,
    ...(page.type === '404' ? [] : [`<link rel="canonical" href="${escape(url)}" />`, ...languages.map(language=>`<link rel="alternate" hreflang="${locales[language].tag}" href="${escape(absolute(href(page.path,language)))}" />`), `<link rel="alternate" hreflang="x-default" href="${escape(absolute(href(page.path,'en')))}" />`]),
    `<meta property="og:title" content="${escape(page.title[lang])}" />`,
    `<meta property="og:description" content="${escape(page.description[lang])}" />`,
    `<meta property="og:url" content="${escape(url)}" />`,
    `<meta property="og:type" content="${page.type==='guide'?'article':'website'}" />`,
    `<meta property="og:locale" content="${locales[lang].og}" />`,
    `<meta property="og:image" content="${escape(absolute(href('/', 'en')+shareImage))}" />`,
    `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>`,
  ].join('\n    ')
  return {html:renderToString(<App path={path}/>),head,lang:locales[lang].tag,url}
}
