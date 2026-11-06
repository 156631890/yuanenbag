import { tx, type Lang } from './data'
import { ArrowUpRight } from 'lucide-react'
import { drumCover, drumCoverImages } from './drum-cover-product'
import ProductOrderSection from './ProductOrderSection'
import { responsiveImage } from './responsive-images'
import { href } from './routes'

const illustrated = [
  {
    id: 'applications',
    title: tx('Applications', '应用场景', 'Aplicaciones'),
    heading: tx('Reach the closed-head drum from above', '从上方接近闭口圆桶的桶塞', 'Acceso superior a un bidón de tapa fija'),
    body: tx(
      'For upright staging or transfer, fit the side wrap around the drum and check that the cap can lift clear where the drum will stand. A low shelf, nearby wall or tall fitting can change access. Use the drum supplier’s handling instructions and specify any required heating, refrigeration or spill control separately.',
      '圆桶直立暂存或周转时，先装好侧围，再在实际工位确认圆顶盖能从上方取下。低层货架、贴墙摆放和高出桶顶的接头都会影响操作。桶体搬运按容器说明执行，所需加热、冷藏和泄漏控制另行配置。',
      'Para almacenamiento temporal o traslado vertical, instale la envolvente y compruebe que se pueda retirar la tapa en el lugar de uso. Considere estantes bajos, paredes y conexiones salientes. Siga las instrucciones del bidón y especifique por separado calefacción, refrigeración y contención de derrames.'
    ),
    image: 2,
    caption: tx('Removing the insulating cap exposes the drum’s own closed bungs.', '取下保温圆顶盖后，可看到桶体原有的闭合桶塞。', 'La tapa térmica retirada deja visibles los tapones cerrados.'),
  },
  {
    id: 'dimensions',
    title: tx('Dimensions', '尺寸测量', 'Medidas'),
    heading: tx('Measure the widest diameter and overall height', '测量最大外径与桶体总高', 'Mida el diámetro máximo y la altura total'),
    body: tx(
      'Record maximum outside diameter D at the widest rim, hoop or clamp. Measure H from the supporting surface to the highest fixed point. On a top view, mark each bung and any connection that projects above the rim. Send the drum model and units, and allow room to lift the insulated cap. Fit and overlap allowance follow the sample.',
      '最大外径 D 取桶沿、加强箍或锁圈中最宽处。总高 H 从桶底支承面量到最高固定点。俯视草图另标桶塞位置及高出桶沿的接口。询盘请注明桶型、尺寸单位和可用取盖空间，套入与搭接余量用样品确认。',
      'Tome el diámetro exterior máximo D en el aro, reborde o cierre más ancho. Mida H desde el plano de apoyo hasta el punto fijo más alto. Marque tapones y conexiones salientes en una vista superior. Indique modelo, unidades y espacio para retirar la tapa. Compruebe las holguras con la muestra.'
    ),
    image: 5,
    caption: tx('D: widest drum projection. H: supporting surface to highest fixed point.', 'D：桶体最宽外廓。H：支承面至最高固定点。', 'D: saliente más ancho. H: del plano de apoyo al punto fijo más alto.'),
  },
  {
    id: 'materials',
    title: tx('Materials & construction', '材料与结构', 'Materiales y estructura'),
    heading: tx('Review the laminate and overlap together', '连同纵向搭接一起确认复合层', 'Revise el laminado junto con el solape'),
    body: tx(
      'The flexible reflective laminate is cut as a side panel and a shallow circular cap. The side closes at the bound vertical overlap. Agree the facing, core, inside finish and fastening on a fitted sample. Check the tabs can mate without forcing the panel over the widest hoop.',
      '柔性反射复合材料分别加工为侧围和浅裙边圆顶盖，侧围在纵向包边处搭接闭合。面层、芯层、内面和扣带以适配样品确认，并检查跨过最宽加强箍后仍能正常贴合。',
      'El laminado reflectante flexible forma un panel lateral y una tapa circular de faldón bajo. El cierre queda en el solape vertical ribeteado. Acuerde cara, núcleo, acabado interior y cierre con una muestra. Las lengüetas deben acoplar sin forzar el panel sobre el aro más ancho.'
    ),
    image: 4,
    caption: tx('The short fastening tab crosses the bound overlap.', '短扣带跨过纵向包边搭接处。', 'La lengüeta corta cruza el solape ribeteado.'),
  },
  {
    id: 'features',
    title: tx('Handling & storage', '搬运与存放', 'Manipulación y almacenamiento'),
    heading: tx('Leave the bottom rim and handling points clear', '保留桶底卷边和夹持位置', 'Mantenga libres el aro inferior y los puntos de agarre'),
    body: tx(
      'Check the lower hem stays above the support surface and leaves clearance for the handling equipment. Lift or secure the drum at its specified handling points. Remove the cover for operations that need exposed drum surfaces. Store the removed wrap loosely folded and inspect the edges and fasteners before refitting.',
      '检查侧围下摆位于支承面上方，并避开搬运设备的夹持位置。按圆桶指定位置搬运和固定；需要露出桶壁的工序应先拆下罩体。拆下的侧围可松折存放，重新套装前检查包边和扣带。',
      'Compruebe que el borde inferior quede por encima del plano de apoyo y deje espacio al equipo de manipulación. Sujete el bidón por los puntos previstos. Retire la funda cuando se necesite acceso a la pared. Guarde la envolvente con pliegues amplios y revise bordes y cierres antes de reinstalarla.'
    ),
    image: 6,
    caption: tx('The lower rim remains visible below the bound hem.', '包边下方留出圆桶底部卷边。', 'El aro inferior queda visible bajo el borde ribeteado.'),
  },
]
const order = [
  {
    id: 'order-quantities',
    title: tx('Order quantities', '订购数量', 'Cantidades'),
    note: tx('Separate sample, pilot and production quantities by drum model. Confirm how many side wraps and caps are needed, including any separately ordered replacements.', '按桶型分别列出样品、试单和批量数量，明确侧围和顶盖的配套数量，以及需要另订的替换件。', 'Separe muestra, lote piloto y producción por modelo de bidón. Indique cantidades de envolventes, tapas y repuestos solicitados aparte.'),
  },
  {
    id: 'pricing',
    title: tx('Quotation', '询价与报价', 'Cotización'),
    note: tx('Send the measured envelope, top access, material preference, quantities and destination. Ask for the cover set and any spare parts as separate lines. Confirm price and minimum order in the written quote.', '提供实测外廓、取盖方式、材料要求、数量和目的地。整套罩体与额外备件可分项报价，价格和起订量以书面报价为准。', 'Envíe medidas, acceso superior, material, cantidades y destino. Solicite el conjunto y los repuestos por separado. Confirme precio y pedido mínimo en la oferta escrita.'),
  },
  {
    id: 'delivery',
    title: tx('Lead time', '交付周期', 'Plazo de entrega'),
    note: tx('Approve the sample on the actual drum. Confirm converting, packing, inspection and dispatch against the accepted order, especially if several drum sizes are required.', '先在实际圆桶上确认样品，再按订单约定加工、包装、验货与发货安排。有多个桶型时分开核对。', 'Apruebe la muestra en el bidón real. Acuerde fabricación, embalaje, inspección y envío en el pedido, especialmente si hay varios tamaños.'),
  },
  {
    id: 'export',
    title: tx('Export documentation', '出口资料', 'Documentación'),
    note: tx('Agree the material specification, sample reference, invoice and packing list. Request any project-specific reports for the actual cover and conditions of use. Drum and fittings are specified separately.', '确认材料规格、样品编号、发票与装箱单。项目需要的报告应对应实际罩体与使用条件。圆桶和配件另行约定。', 'Acuerde especificación del material, referencia de muestra, factura y lista de empaque. Solicite los informes del proyecto para la funda real y sus condiciones de uso. El bidón y los accesorios se acuerdan aparte.'),
  },
]

export function DrumCoverPurchaseIntro({ lang }: { lang: Lang }) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  const enquiry = href('/contact/', lang) + '?bag=' + drumCover.slug
  return <div className="drum-purchase-intro">
    <p className="drum-fit-summary">
      <strong>{t('Fit by drum model', '按桶型打样', 'Ajuste por modelo de bidón')}</strong>
      {' · '}{t('Maximum diameter × overall height', '最大外径 × 总高', 'Diámetro máximo × altura total')}
    </p>
    <div className="product-quick-contact">
      <a className="button primary" href={enquiry}>{t('Request a drum-fit quote', '按桶型询价', 'Solicitar cotización por modelo')}<ArrowUpRight size={18}/></a>
      <a className="text-link" href="#dimensions">{t('See how to measure', '查看测量图', 'Ver cómo medir')}</a>
    </div>
    <p className="form-note">{t('Send the drum model, measured size and quantity. Note bung positions and space to lift the cover cap.', '提供桶型、实测尺寸和数量，并注明桶塞位置与取盖空间。', 'Indique modelo, medidas y cantidad. Señale los tapones y el espacio para retirar la tapa.')}</p>
  </div>
}

function ContainerFitComparison({ lang }: { lang: Lang }) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  return <aside className="drum-fit-compare">
    <h3>{t('Which cover fits your container?', '圆桶罩和 IBC 吨桶罩怎么选？', '¿Qué funda corresponde a su recipiente?')}</h3>
    <dl>
      <div>
        <dt>{t('Round drum cover', '工业圆桶保温罩', 'Funda para bidón redondo')}</dt>
        <dd>{t('For an upright round drum. Measure maximum diameter and height, then check space to lift the circular cap.', '适合直立圆桶。量最大外径和总高，再核对上方能否取下圆顶盖。', 'Para un bidón redondo vertical. Mida diámetro máximo y altura, y compruebe el espacio para levantar la tapa circular.')}</dd>
      </div>
      <div>
        <dt><a href={href('/products/insulated-ibc-covers/', lang)}>{t('IBC tank cover', 'IBC 吨桶保温罩', 'Funda para IBC')}</a></dt>
        <dd>{t('For a tank in a cage. Measure the frame envelope and locate the top cap and lower discharge valve.', '适合带框架的吨桶。量框架外廓，分别标出顶部加注口和底部出液阀。', 'Para un depósito con jaula. Mida el contorno del bastidor y ubique la tapa superior y la válvula de descarga inferior.')}</dd>
      </div>
    </dl>
  </aside>
}

export default function DrumCoverSections({ lang }: { lang: Lang }) {
  const enquiry = href('/contact/', lang) + '?bag=' + drumCover.slug
  return <div className="product-specification">
    <nav className="detail-jump-nav">{[...illustrated, ...order].map(section =>
      <a key={section.id} href={'#' + section.id}>{section.title[lang]}</a>
    )}</nav>
    {illustrated.map((section, index) => {
      const media = drumCoverImages[section.image - 1]
      const source = 'images/products/' + media.file
      return <section key={section.id} className="detail-block" id={section.id}>
        <div className="detail-block-heading"><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title[lang]}</h2></div>
        <div className="detail-columns">
          <div><h3>{section.heading[lang]}</h3><p>{section.body[lang]}</p>
            <a className="text-link" href={enquiry}>{tx('Discuss drum cover specifications', '沟通圆桶罩规格', 'Consultar especificaciones de la funda')[lang]}</a>
          </div>
          <figure className="product-editorial-figure">
            <div style={{ position: 'relative' }}>
              <img src={'/' + source} {...responsiveImage(source, '(max-width:650px) calc(100vw - 36px), 440px')} alt={media.label?.[lang]} loading="lazy" style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '1' }}/>
              {section.id === 'dimensions' && <svg aria-hidden="true" viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <path d="M6.3 5.8H48.4 M6.3 4.5V8 M48.4 4.5V8 M3.4 8.8V83.4 M2.2 8.8H5.6 M2.2 83.4H6.5" fill="none" stroke="#16354b" strokeWidth=".3"/>
                <text x="27.35" y="4.2" textAnchor="middle" fontSize="3.2" fontWeight="650" fill="#16354b">D</text>
                <text x="4.1" y="46" fontSize="3.2" fontWeight="650" fill="#16354b">H</text>
              </svg>}
            </div>
            <figcaption>{section.caption[lang]}</figcaption>
          </figure>
        </div>
        {section.id === 'applications' && <ContainerFitComparison lang={lang}/>}
      </section>
    })}
    {order.map((section, index) => <ProductOrderSection key={section.id} bag={drumCover} lang={lang} id={section.id} number={illustrated.length + index + 1} title={section.title[lang]} note={section.note[lang]} containerFit/>)}
  </div>
}

const purchaseNotes = [
    tx('Check side overlap, cap clearance and exposed handling points on a fitted sample.', '用适配样品确认侧围搭接、圆顶盖净空及搬运夹持位置。', 'Compruebe el solape, la holgura de la tapa y los puntos de manipulación con una muestra instalada.'),
    tx('Agree the conditions of use and any performance testing with the actual drum and load.', '按实际桶体与内装物确认使用条件及所需性能测试。', 'Acuerde las condiciones de uso y los ensayos con el bidón y la carga reales.'),
  ]

export function DrumCoverConsiderations({lang}:{lang:Lang}) {
  return [...drumCover.considerations, ...purchaseNotes].map((note, index) => <div key={note.en}><span>0{index + 1}</span><p>{note[lang]}</p></div>)
}
