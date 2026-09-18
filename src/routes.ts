import { bags, guides, tx, type Lang, type Text } from './data'
export type Page = { path: string; type: string; title: Text; description: Text; slug?: string }
export const pages: Page[] = [
  {path:'/',type:'home',title:tx('Insulated Bag Manufacturer & Custom Packaging | YUANEN','远恩工艺品 | 保温袋生产厂家与定制包装'),description:tx('YUANEN manufactures insulated bags, non-woven totes, foil packaging and ice packs. Explore custom options and our 28,800 m² factory network in China.','远恩生产保温包、无纺布手提袋、铝箔保温袋与冰袋，三地合计 28,800㎡，提供包装设计、研发、生产与定制服务。')},
  {path:'/products/',type:'catalog',title:tx('Insulated Bags, Non-Woven Totes & Ice Packs | YUANEN','保温袋、无纺布手提袋与冰袋产品目录 | 远恩'),description:tx('Compare six insulated packaging and carry-bag families by material and use. Explore construction considerations, specification checklists and custom enquiries.','按材质与用途了解六类保温包装与手提袋产品，比较结构要点、规格清单并准备定制询价。')},
  {path:'/applications/',type:'applications',title:tx('Food Delivery, Grocery & Cold-Chain Packaging | YUANEN','餐饮配送、商超与冷链包装应用 | 远恩'),description:tx('Choose packaging around real delivery conditions. Explore insulated bags for takeaway, non-woven retail packaging and cold-chain packing with ice packs.','围绕真实配送条件选择包装，了解外卖保温袋、无纺布零售包装及配套冰袋的冷链包装方案。')},
  ...bags.map(b=>({path:`/products/${b.slug}/`,type:'bag',title:tx(`${b.name.en}: Materials & Specifications | YUANEN`,`${b.name.zh}：材质与规格 | 远恩`,`${b.name.es}: materiales y especificaciones | YUANEN`),description:b.intro,slug:b.slug})),
  {path:'/customization/',type:'custom',title:tx('Custom Bag Design & Order Process | YUANEN','包装袋定制流程与规格确认 | 远恩'),description:tx('Plan your bag project from dimensions and materials to print artwork, samples and order requirements. Use a practical six-step specification process.','从尺寸和材质到印刷图稿、样品及订单要求，按六个步骤明确包装袋定制方案。')},
  {path:'/about/',type:'about',title:tx('YUANEN Factory | Insulated Packaging in China','远恩工厂 | 三地保温包装生产布局'),description:tx('Explore YUANEN production, material processing, sewing and storage. 10 years of packaging experience, three locations and company-reported daily capacity of 3 million+ pieces.','了解远恩的生产、材料加工、缝制和仓储。10 年包装经验，温州、山东、湖南三地布局，日产能 300 万+。')},
  {path:'/guides/',type:'guides',title:tx('Insulated Bag Materials & Buying Guides | YUANEN','保温袋材质与采购指南 | 远恩'),description:tx('Practical answers for packaging buyers: compare insulated bag materials, prepare a specification and review samples before ordering.','为包装采购提供实用参考：比较保温袋材质、制定规格需求，并在下单前核对样品。')},
  ...guides.map(g=>({path:`/guides/${g.slug}/`,type:'guide',title:tx(`${g.title.en} | YUANEN`,`${g.title.zh} | 远恩`,`${g.title.es} | YUANEN`),description:g.summary,slug:g.slug})),
  {path:'/contact/',type:'contact',title:tx('Prepare a Custom Bag Enquiry | YUANEN','准备包装袋定制询价 | 远恩'),description:tx('Create a custom bag enquiry with your material, size, quantity and artwork requirements. Review and download your project brief.','填写材质、尺寸、数量和印刷要求，生成、核对并下载包装袋定制需求单。')},
  {path:'/privacy/',type:'privacy',title:tx('Privacy & Enquiry Data | YUANEN','隐私与询价数据说明 | 远恩'),description:tx('How the YUANEN website handles your enquiry brief, local downloads and optional email links.','了解远恩网站如何处理询价需求、本地下载及可选的邮件链接。')},
]
export const base = import.meta.env.BASE_URL.replace(/\/$/,'')
export const href = (path:string,lang:Lang) => `${base}${lang==='en'?'':`/${lang}`}${path}`
export function resolveRoute(path:string) {
  let clean = decodeURI(path.split('?')[0])
  if (base && clean.startsWith(`${base}/`)) clean = clean.slice(base.length)
  const lang:Lang = /^\/zh(?:\/|$)/.test(clean)?'zh':/^\/es(?:\/|$)/.test(clean)?'es':'en'
  if(lang!=='en') clean = clean.slice(lang.length+1) || '/'
  if(!clean.endsWith('/')) clean += '/'
  const page = pages.find(p=>p.path===clean)
  return {lang, page:page || {path:'/404/',type:'404',title:tx('Page not found | YUANEN','页面不存在 | 远恩'),description:tx('Find your way back to YUANEN packaging.','返回远恩包装网站。')}}
}
