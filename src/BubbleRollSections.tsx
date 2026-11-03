import { tx, type Lang } from './data'
import { bubbleRoll, bubbleRollImages } from './bubble-roll-product'
import ProductOrderSection from './ProductOrderSection'
import { responsiveImage } from './responsive-images'
import { href } from './routes'
const sections=[
  {
    "id": "applications",
    "title": {
      "en": "Applications",
      "zh": "应用场景",
      "es": "Aplicaciones"
    },
    "heading": {
      "en": "Build the wrap around the closed package",
      "zh": "围绕闭合包装确认包覆方式",
      "es": "Defina la envoltura sobre el embalaje cerrado"
    },
    "body": {
      "en": "For variable pack sizes, unwind and cut the required length; for repeated packs, agree pre-cut sheets. Trial corner folds and overlap without crushing the cells. Keep goods in suitable primary packaging. Boxes, tape and measuring tools shown are not supplied by default. This wrap does not replace required refrigeration or transit protection.",
      "zh": "不同包装尺寸可采用放卷裁切；重复尺寸可约定预裁片材。试包时检查转角折叠和搭接，避免压塌气泡。货物仍需使用适当的独立内包装；图中外盒、胶带和测量工具不默认随货供应。包覆材料不能替代必要冷藏条件与运输防护。",
      "es": "Para tamaños variables, desenrolle y corte; para formatos repetidos, acuerde láminas precortadas. Pruebe esquinas y solapes sin aplastar las celdas. Mantenga un envase primario adecuado. Cajas, cintas y herramientas no se incluyen por defecto. La envoltura no sustituye refrigeración ni protección de transporte necesarias."
    },
    "image": 6
  },
  {
    "id": "dimensions",
    "title": {
      "en": "Dimensions",
      "zh": "产品尺寸",
      "es": "Medidas"
    },
    "heading": {
      "en": "State usable web width and cut length",
      "zh": "先确认可用幅宽与裁切长度",
      "es": "Indique ancho útil y longitud de corte"
    },
    "body": {
      "en": "Record width W and roll length L in metres, and laminate thickness T in millimetres using an agreed low-pressure method. Bubble diameter, cell arrangement, edge trim, core bore and roll diameter are separate specifications. For sheets, state width × length with units and cutting tolerance. The measuring image identifies the width direction; it does not declare a standard size.",
      "zh": "幅宽 W 与卷长 L 注明米，复合厚度 T 注明毫米，并约定低压测量方法。气泡直径、排列、边部裁切、纸芯内径及卷径分别确认。裁片注明宽×长、单位与裁切公差。测量图用于说明幅宽方向，不代表标准尺寸。",
      "es": "Indique ancho W y longitud L en metros y espesor T en milímetros con un método de baja presión acordado. Diámetro de burbuja, disposición, recorte lateral, núcleo y diámetro del rollo son especificaciones separadas. Para láminas indique ancho × largo, unidades y tolerancia. La imagen muestra la dirección del ancho, no una medida estándar."
    },
    "image": 5
  },
  {
    "id": "materials",
    "title": {
      "en": "Materials & construction",
      "zh": "材料与结构",
      "es": "Materiales y estructura"
    },
    "heading": {
      "en": "Check the air cells and reflective facing separately",
      "zh": "分别检查气泡层与反射面层",
      "es": "Revise celdas y cara reflectante por separado"
    },
    "body": {
      "en": "The gallery shows a reflective face with a translucent bubble reverse. Confirm whether the facing is aluminium foil or metallized film, the polymer specification, bubble arrangement and bonding. Check sample edges for separation and cells for damage. Do not infer a barrier rating, fire classification, recycled content or food-contact declaration from the appearance.",
      "zh": "图集展示反射面与半透明气泡背面。需确认面层是铝箔还是镀铝膜、聚合物规格、气泡排列与复合方式；检查样片切边是否分层、气泡是否受损。外观不能证明阻隔等级、阻燃等级、再生成分或食品接触声明。",
      "es": "La galería muestra una cara reflectante y reverso translúcido de burbujas. Confirme hoja de aluminio o film metalizado, polímero, disposición y unión. Revise separación de bordes y daño de celdas. El aspecto no acredita barrera, clasificación al fuego, contenido reciclado ni contacto alimentario."
    },
    "image": 2
  },
  {
    "id": "features",
    "title": {
      "en": "Cutting & handling",
      "zh": "裁切与使用",
      "es": "Corte y manipulación"
    },
    "heading": {
      "en": "Inspect cut edges and cell condition",
      "zh": "检查裁边与气泡完整性",
      "es": "Revise bordes y estado de las celdas"
    },
    "body": {
      "en": "Support the roll before unwinding, then cut on a suitable surface without excessive tension. Agree the condition allowed at cut edges and how splices are identified. Avoid sharp objects and sustained compression during storage. Validate handling, cushioning and thermal behaviour with the complete packaging; this is not EPE foam and should not inherit its specifications.",
      "zh": "先支撑卷材再放卷，在合适台面裁切，避免过度拉伸。约定切边允许状态及接头标识方式；存放时避免尖锐物与持续重压。操作、缓冲及温控表现应以完整包装验证，不沿用 EPE 泡棉卷材的规格或结果。",
      "es": "Apoye el rollo y corte sobre una superficie adecuada sin tensión excesiva. Acuerde el estado admisible de bordes y la identificación de empalmes. Evite objetos afilados y presión prolongada. Valide manejo, amortiguación y comportamiento térmico con el embalaje completo; no transfiera especificaciones del EPE."
    },
    "image": 4
  },
  {
    "id": "order-quantities",
    "title": {
      "en": "Order quantities",
      "zh": "定制数量与分段",
      "es": "Cantidades"
    },
    "body": {
      "en": "State sample, first-order and repeat quantities in rolls or sheets. Keep the same agreed bubble laminate and dimensions when comparing prices.",
      "zh": "样品、首批和返单数量注明卷或片；比较价格时使用同一确认气泡复合结构与尺寸。",
      "es": "Indique muestras, primer pedido y reposiciones en rollos o láminas. Compare precios con el mismo laminado y medidas."
    }
  },
  {
    "id": "pricing",
    "title": {
      "en": "MOQ & price",
      "zh": "起订量与价格",
      "es": "Mínimo y precio"
    },
    "body": {
      "en": "Send the facing and bubble requirements, dimensions, format, quantity and destination. Ask for the pricing unit per roll, sheet or square metre, plus cutting and protective-packing charges. MOQ and price follow the written quotation.",
      "zh": "提供面层与气泡要求、尺寸、供货形式、数量及目的地。报价区分按卷、片或平方米计价，并注明裁切和保护包装费用；起订量与价格以书面报价为准。",
      "es": "Envíe requisitos de cara y burbujas, medidas, formato, cantidad y destino. Distinga precio por rollo, lámina o metro cuadrado, corte y protección. Mínimo y precio según oferta escrita."
    }
  },
  {
    "id": "delivery",
    "title": {
      "en": "Lead time",
      "zh": "交货时间",
      "es": "Plazo de entrega"
    },
    "body": {
      "en": "Confirm material preparation, sample approval, converting and transport separately. Agree protection against dirt and crushing, roll handling and unloading before dispatch. Dates are confirmed for the order.",
      "zh": "分别确认备料、样品认可、分切与运输阶段。出货前约定防污、防压包装、卷材搬运与卸货要求；日期按订单确认。",
      "es": "Acuerde preparación, aprobación de muestra, corte y transporte por separado. Defina protección frente a suciedad y aplastamiento, manipulación y descarga. Fechas según pedido."
    }
  },
  {
    "id": "export",
    "title": {
      "en": "Export documentation",
      "zh": "出口资料",
      "es": "Documentación"
    },
    "body": {
      "en": "Agree the material specification, approved sample reference, invoice and packing list. Any food-contact or thermal report must cover the supplied laminate and intended use. Competitor specifications and other product certificates do not apply.",
      "zh": "约定材料规格、确认样品编号、发票与装箱单。食品接触或温控报告必须覆盖实际供货复合层与用途，不套用同行参数或其他产品证书。",
      "es": "Acuerde especificación, referencia de muestra, factura y lista de empaque. Los informes alimentarios o térmicos deben cubrir el laminado y uso suministrados. No se aplican datos de competidores ni certificados de otros productos."
    }
  }
]
export default function BubbleRollSections({lang}:{lang:Lang}){return <div className="product-specification"><nav className="detail-jump-nav">{sections.map(s=><a href={'#'+s.id} key={s.id}>{s.title[lang]}</a>)}</nav>{sections.map((s,i)=>'image' in s?<section className="detail-block" id={s.id} key={s.id}><div className="detail-block-heading"><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title[lang]}</h2></div><div className="detail-columns"><div><h3>{s.heading![lang]}</h3><p>{s.body[lang]}</p><a className="text-link" href={href('/contact/',lang)+'?bag='+bubbleRoll.slug}>{tx('Discuss roll or sheet specifications','沟通卷材或裁片规格','Consultar medidas del material')[lang]}</a></div><figure className="product-editorial-figure"><img src={'/images/products/'+bubbleRollImages[s.image!-1].file} {...responsiveImage('images/products/'+bubbleRollImages[s.image!-1].file,'(max-width:650px) calc(100vw - 36px), 440px')} alt={bubbleRollImages[s.image!-1].label![lang]} loading="lazy"/><figcaption>{tx('Construction and supplied items are confirmed with the sample and order.','结构及随货内容以确认样品和订单为准。','Construcción y suministro según muestra y pedido.')[lang]}</figcaption></figure></div></section>:<ProductOrderSection key={s.id} bag={bubbleRoll} lang={lang} id={s.id} number={i+1} title={s.title[lang]} note={s.body[lang]}/>)}</div>}
