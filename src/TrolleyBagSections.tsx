import { tx, type Lang } from './data'
import { trolleyBag, trolleyImages } from './trolley-product'
import illustrated from './trolley-sections.json'
import ProductOrderSection from './ProductOrderSection'
import { responsiveImage } from './responsive-images'
import { productImageFile } from './product-media'
import { href } from './routes'
const order = [{"id": "order-quantities", "title": {"en": "Order quantities", "zh": "订购数量", "es": "Cantidades"}, "note": {"en": "Separate sample, pilot and production quantities by confirmed trolley fit.", "zh": "按确认的车型适配分别列样品、试单及批量数量。", "es": "Separe muestra, piloto y producción por ajuste confirmado."}}, {"id": "pricing", "title": {"en": "Quotation", "zh": "询价与报价", "es": "Cotización"}, "note": {"en": "Send trolley photos, rail dimensions, packed weight and artwork. Agree supplied straps and base support in writing.", "zh": "提供车型照片、横杆尺寸、装载重量和图稿，书面明确绑带与底托供货范围。", "es": "Envíe fotos, medidas de barra, peso y diseño. Acuerde cintas y base incluidas por escrito."}}, {"id": "delivery", "title": {"en": "Lead time", "zh": "交付周期", "es": "Plazo de entrega"}, "note": {"en": "Confirm mounted fit, clearance and loaded stability before production. Dates follow the accepted order.", "zh": "批量前确认安装适配、间隙和满载稳定性；日期按确认订单安排。", "es": "Confirme montaje, holguras y estabilidad cargada antes de producir. Fechas según pedido acordado."}}, {"id": "export", "title": {"en": "Export documentation", "zh": "出口资料", "es": "Documentación"}, "note": {"en": "Agree materials, sample reference and packing list. Any test report must match the supplied construction and conditions.", "zh": "确认材料、样品编号和装箱单；测试报告须对应供货结构及条件。", "es": "Acuerde materiales, referencia de muestra y lista de empaque. Los informes deben corresponder a la construcción y condiciones suministradas."}}]
export default function TrolleyBagSections({ lang }: { lang: Lang }) {
  const enquiry = href('/contact/', lang) + '?bag=' + trolleyBag.slug
  return <div className="product-specification">
    <nav className="detail-jump-nav">{[...illustrated, ...order].map(section =>
      <a key={section.id} href={'#' + section.id}>{section.title[lang]}</a>
    )}</nav>
    {illustrated.map((section, index) => {
      const media = trolleyImages[section.image - 1]
      const source = 'images/products/' + productImageFile(media.file)
      return <section key={section.id} className="detail-block" id={section.id}>
        <div className="detail-block-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title[lang]}</h2></div>
        <div className="detail-columns" style={{alignItems:"start"}}>
          <div><h3>{section.heading[lang]}</h3><p>{section.body[lang]}</p>
            <a className="text-link" href={enquiry}>{tx('Discuss trolley fit', '沟通拉车适配', 'Consultar ajuste al carro')[lang]}</a>
          </div>
          <figure className="product-editorial-figure">
            <div style={{ position: 'relative' }}>
              <img src={'/' + source} {...responsiveImage(source, '(max-width:650px) calc(100vw - 36px), 440px')} alt={media.label?.[lang]} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '1' }}/>
              {section.id === 'dimensions' && <svg aria-hidden="true" viewBox="0 0 100 100" style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}><path d="M49 30L79 25 M49 28.5V40 M79 23.5V35" fill="none" stroke="#16354b" strokeWidth=".3"/><text x="64" y="25" textAnchor="middle" fontSize="3.2" fontWeight="650" fill="#16354b">S</text></svg>}
            </div>
            <figcaption>{section.caption[lang]}</figcaption>
          </figure>
        </div>
        {section.id === 'applications' && <p>{tx('For hand carrying without a frame connection, compare ', '若无需车架连接、主要手提购物，可对比', 'Para transportar a mano sin fijación al carro, compare ')[lang]}<a href={href('/collections/custom-cooler-bags/',lang)}>{tx('shopping and delivery cooler bags','购物与配送保温包','las bolsas térmicas de compra y reparto')[lang]}</a>{lang==='zh'?'。':'.'}</p>}
      </section>
    })}
    {order.map((section, index) => <ProductOrderSection key={section.id} bag={trolleyBag} lang={lang} id={section.id} number={illustrated.length + index + 1} title={section.title[lang]} note={section.note[lang]}/>)}
  </div>
}
