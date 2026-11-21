import { tx, type Lang } from './data'
import { wineBag, wineImages } from './wine-product'
import illustrated from './wine-sections.json'
import ProductOrderSection from './ProductOrderSection'
import { responsiveImage } from './responsive-images'
import { productImageFile } from './product-media'
import { href } from './routes'
const order = [
{id:'order-quantities',title:tx('Order quantities','订购数量','Cantidades'),note:tx('Separate sample, pilot and production quantities by bottle layout.','按瓶位组合分别列出样品、试单和批量数量。','Separe muestra, lote piloto y producción por distribución de botellas.')},
{id:'pricing',title:tx('Quotation','询价与报价','Cotización'),note:tx('Send bottle outlines, count, total filled weight, material and artwork requirements. Agree dividers and base support in the written quote.','提供瓶型外廓、数量、装满后的总重量、材料与印刷要求，书面报价中明确分隔与底部承托。','Envíe contornos, cantidad de botellas, peso total, materiales y diseño. Acuerde separadores y base en la oferta escrita.')},
{id:'delivery',title:tx('Lead time','交付周期','Plazo de entrega'),note:tx('Approve bottle fit, closure and loaded handling on a sample before production. Dates follow the accepted order.','批量前用样品确认瓶型适配、闭合与装载提携，日期按确认订单安排。','Apruebe ajuste, cierre y manipulación con carga en una muestra antes de producir. Las fechas se acuerdan en el pedido.')},
{id:'export',title:tx('Export documentation','出口资料','Documentación'),note:tx('Agree the material specification, sample reference and packing list. Any load or thermal report must match the actual bag and test conditions.','确认材料规格、样品编号与装箱单；承重或温控报告须对应实际袋体及测试条件。','Acuerde materiales, referencia de muestra y lista de empaque. Todo informe de carga o temperatura debe corresponder a la bolsa y condiciones reales.')}
]
export default function WineBagSections({ lang }: { lang: Lang }) {
  const enquiry = href('/contact/', lang) + '?bag=' + wineBag.slug
  return <div className="product-specification">
    <nav className="detail-jump-nav">{[...illustrated, ...order].map(section =>
      <a key={section.id} href={'#' + section.id}>{section.title[lang]}</a>
    )}</nav>
    {illustrated.map((section, index) => {
      const media = wineImages[section.image - 1]
      const source = 'images/products/' + productImageFile(media.file)
      return <section key={section.id} className="detail-block" id={section.id}>
        <div className="detail-block-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title[lang]}</h2></div>
        <div className="detail-columns" style={{alignItems:"start"}}>
          <div><h3>{section.heading[lang]}</h3><p>{section.body[lang]}</p>
            <a className="text-link" href={enquiry}>{tx('Discuss bottle fit', '沟通瓶型适配', 'Consultar ajuste de botellas')[lang]}</a>
          </div>
          <figure className="product-editorial-figure">
            <div style={{ position: 'relative' }}>
              <img src={'/' + source} {...responsiveImage(source, '(max-width:650px) calc(100vw - 36px), 440px')} alt={media.label?.[lang]} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '1' }}/>
              {section.id === 'dimensions' && <svg aria-hidden="true" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <path d="M19.2 86H30 M19.2 84.8V87.2 M30 84.8V87.2 M16 37.4V82.5 M14.8 37.4H17.2 M14.8 82.5H17.2" fill="none" stroke="#16354b" strokeWidth=".3"/>
                <text x="24.6" y="90" textAnchor="middle" fontSize="3.2" fontWeight="650" fill="#16354b">D</text>
                <text x="11" y="61" fontSize="3.2" fontWeight="650" fill="#16354b">H</text>
              </svg>}
            </div>
            <figcaption>{section.caption[lang]}</figcaption>
          </figure>
        </div>
        {section.id === 'applications' && <p>{tx('For takeaway cups with lids, compare the lower cup compartments in ', '若装的是带盖外卖杯，可对比低杯位结构的', 'Para vasos de comida para llevar con tapa, compare los compartimentos bajos de ')[lang]}<a href={href('/products/insulated-beverage-delivery-bags/',lang)}>{tx('beverage delivery bags','饮品配送保温包','las bolsas para bebidas')[lang]}</a>{lang==='zh'?'。':'.'}</p>}
      </section>
    })}
    {order.map((section, index) => <ProductOrderSection key={section.id} bag={wineBag} lang={lang} id={section.id} number={illustrated.length + index + 1} title={section.title[lang]} note={section.note[lang]}/>)}
  </div>
}
