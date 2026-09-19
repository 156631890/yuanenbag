import { bags, guides, tx, type Lang, type Text } from './data'
export type Page = { path: string; type: string; title: Text; description: Text; slug?: string }
export const pages: Page[] = [
  {path:'/quality/',type:'quality',title:tx('Factory Audits & Material Test Reports | YUANEN','关联工厂审核与材料检测资料 | 远恩','Auditorías de fábrica e informes de materiales | YUANEN'),description:tx('Review affiliated-factory BSCI audit records, CTT sample test reports and an OEKO-TEX fabric certificate, with named holders, dates and scope.','查阅关联工厂的 BSCI 审核、CTT 样品检测报告及 OEKO-TEX 面料证书，核对文件主体、日期与适用范围。','Consulte auditorías BSCI de fábricas vinculadas, informes CTT de muestras y un certificado OEKO-TEX de tejido, con titulares, fechas y alcance.')},
  {path:'/',type:'home',title:tx('Insulated & Cold Chain Packaging Manufacturer | YUANEN','远恩 | 保温冷链包装生产厂家','Fabricante de embalaje térmico y cadena de frío | YUANEN'),description:tx('Custom insulated foil bags, cooler bags and ice packs for food delivery and cold-chain packing. Explore products, manufacturing and custom order specifications.','专注铝箔保温袋、保温包和配套冰袋，服务餐饮配送与冷链包装，了解产品、生产工艺和定制采购规格。','Bolsas térmicas, bolsas de aluminio y acumuladores de frío para reparto alimentario. Explore productos, fabricación y especificaciones a medida.')},
  {path:'/products/',type:'catalog',title:tx('Insulated Bags & Cold Chain Products | YUANEN','保温袋与冷链产品中心 | 远恩','Bolsas térmicas y productos de cadena de frío | YUANEN'),description:tx('Explore 13 insulated packaging products: foil pouches, gusseted bags, insulated delivery totes, cooler bags and ice packs.','探索 13 款保温冷链产品：铝箔平口袋、立体保温袋、保温外卖袋、保温包及冰袋。','Explore 13 productos térmicos: sobres de aluminio, bolsas con base, bolsas de reparto, bolsas isotérmicas y acumuladores de frío.')},
  {path:'/applications/',type:'applications',title:tx('Food Delivery, Grocery & Cold-Chain Packaging | YUANEN','餐饮配送、商超与冷链包装应用 | 远恩'),description:tx('Choose packaging around real delivery conditions. Explore insulated bags for takeaway, non-woven retail packaging and cold-chain packing with ice packs.','围绕真实配送条件选择包装，了解外卖保温袋、无纺布零售包装及配套冰袋的冷链包装方案。')},
  ...bags.map(b=>({path:`/products/${b.slug}/`,type:'bag',title:b.seoTitle||tx(`${b.name.en}: Materials & Specifications | YUANEN`,`${b.name.zh}：材质与规格 | 远恩`,`${b.name.es}: materiales y especificaciones | YUANEN`),description:b.intro,slug:b.slug})),
  {path:'/customization/',type:'custom',title:tx('Custom Bag Design & Order Process | YUANEN','包装袋定制流程与规格确认 | 远恩'),description:tx('Plan your bag project from dimensions and materials to print artwork, samples and order requirements. Use a practical six-step specification process.','从尺寸和材质到印刷图稿、样品及订单要求，按六个步骤明确包装袋定制方案。')},
  {path:'/about/',type:'about',title:tx('YUANEN Factory | Insulated Packaging in China','远恩工厂 | 三地保温包装生产布局'),description:tx('Explore YUANEN production, material processing, sewing and storage. 10 years of packaging experience, three locations and company-reported daily capacity of 3 million+ pieces.','了解远恩的生产、材料加工、缝制和仓储。10 年包装经验，温州、山东、湖南三地布局，日产能 300 万+。')},
  {path:'/guides/',type:'guides',title:tx('Custom Bag Materials & Buying Guides | YUANEN','包装袋材质与采购指南 | 远恩','Materiales y guías de compra de bolsas | YUANEN'),description:tx('Compare custom bag materials and insulated structures, prepare a purchasing brief and review samples before ordering.','比较定制袋材质与保温结构，准备采购需求，并在下单前核对样品。','Compare materiales de bolsas y estructuras térmicas, prepare especificaciones de compra y revise muestras antes de pedir.')},
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
