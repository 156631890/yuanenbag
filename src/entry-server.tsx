import { renderToString } from 'react-dom/server'
import App from './App'
import { bags, brand, faq, type Lang } from './data'
import { pages, href, resolveRoute } from './routes'

export const paths = (['en', 'zh'] as Lang[]).flatMap(lang => pages.map(page => href(page.path, lang)))
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!))
const absolute = (path: string) => new URL(path, brand.site).href
export function render(path = '/', indexable = false) {
  const { lang, page } = resolveRoute(path)
  const url = absolute(href(page.path, lang))
  const organization = { '@type':'Organization', '@id':`${brand.site}/#organization`, name:brand.name, legalName:brand.chineseName, url:brand.site, address:{'@type':'PostalAddress',addressLocality:'Longgang, Wenzhou',addressRegion:'Zhejiang',addressCountry:'CN'}, ...(brand.email ? {email:brand.email} : {}) }
  const graph: Record<string, unknown>[] = [organization, {'@type':'WebSite','@id':`${brand.site}/#website`,url:brand.site,name:brand.name,publisher:{'@id':organization['@id']},inLanguage:['en','zh-CN']}, {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title[lang],description:page.description[lang],inLanguage:lang==='zh'?'zh-CN':'en',isPartOf:{'@id':`${brand.site}/#website`}}]
  if (page.type !== 'home' && page.type !== '404') {
    const crumbs = [{name:lang==='en'?'Home':'首页',item:absolute(href('/',lang))}]
    if (page.type === 'bag') crumbs.push({name:lang==='en'?'Products':'产品中心',item:absolute(href('/products/',lang))})
    if (page.type === 'guide') crumbs.push({name:lang==='en'?'Resources':'采购指南',item:absolute(href('/guides/',lang))})
    crumbs.push({name:page.title[lang].split(' | ')[0],item:url})
    graph.push({'@type':'BreadcrumbList',itemListElement:crumbs.map((item,i)=>({'@type':'ListItem',position:i+1,...item}))})
  }
  if (page.type === 'home' || page.type === 'bag') {
    const bag = bags.find(b=>b.slug===page.slug)
    const questions = bag ? [{q:bag.question,a:bag.answer},faq[2],faq[3]] : faq
    graph.push({'@type':'FAQPage',mainEntity:questions.map(item=>({'@type':'Question',name:item.q[lang],acceptedAnswer:{'@type':'Answer',text:item.a[lang]}}))})
  }
  if (page.type === 'guide') graph.push({'@type':'Article',headline:page.title[lang].split(' | ')[0],description:page.description[lang],inLanguage:lang==='zh'?'zh-CN':'en',dateModified:'2026-09-18',author:{'@id':organization['@id']},publisher:{'@id':organization['@id']},mainEntityOfPage:{'@id':`${url}#webpage`}})
  const head = [
    `<title>${escape(page.title[lang])}</title>`,
    `<meta name="description" content="${escape(page.description[lang])}" />`,
    `<meta name="robots" content="${indexable && page.type !== '404' ? 'index, follow' : 'noindex, follow'}" />`,
    ...(page.type === '404' ? [] : [`<link rel="canonical" href="${escape(url)}" />`, ...(['en','zh'] as Lang[]).map(language=>`<link rel="alternate" hreflang="${language==='zh'?'zh-CN':'en'}" href="${escape(absolute(href(page.path,language)))}" />`), `<link rel="alternate" hreflang="x-default" href="${escape(absolute(href(page.path,'en')))}" />`]),
    `<meta property="og:title" content="${escape(page.title[lang])}" />`,
    `<meta property="og:description" content="${escape(page.description[lang])}" />`,
    `<meta property="og:url" content="${escape(url)}" />`,
    `<meta property="og:type" content="${page.type==='guide'?'article':'website'}" />`,
    `<meta property="og:locale" content="${lang==='zh'?'zh_CN':'en_US'}" />`,
    `<meta property="og:image" content="${escape(absolute(href('/', 'en')+'images/factory/production-workshops.webp'))}" />`,
    `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c')}</script>`,
  ].join('\n    ')
  return {html:renderToString(<App path={path}/>),head,lang:lang==='zh'?'zh-CN':'en',url}
}
