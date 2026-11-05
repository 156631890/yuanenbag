import { tx, type Lang } from './data'
import { ibcCover, ibcCoverImages } from './ibc-cover-product'
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
      "en": "Keep the tank interfaces accessible",
      "zh": "保留桶体接口的操作空间",
      "es": "Mantenga acceso a las conexiones"
    },
    "body": {
      "en": "For IBC storage and handling stages where an external passive cover is appropriate, match the openings to the actual tank. Keep the fill cap closed during fitting, and inspect the valve through its own flap. Liquid compatibility and handling instructions come from the tank and contents specifications. The cover is not spill containment or a substitute for required temperature control.",
      "zh": "用于适合外部无源保温罩的吨桶存放与周转环节，开口应对应实际桶体。套装时保持桶盖闭合，通过独立底部翻盖检查阀门。液体相容性与操作规范按桶体及所装物料要求执行；罩体不是泄漏承接设施，也不能替代必要温控。",
      "es": "En almacenamiento y manejo con funda pasiva exterior, ajuste accesos al tanque real. Mantenga tapa cerrada al colocarla e inspeccione válvula por su solapa. Compatibilidad y manejo dependen del tanque y contenido. La funda no contiene derrames ni sustituye control térmico requerido."
    },
    "image": 3
  },
  {
    "id": "dimensions",
    "title": {
      "en": "Dimensions",
      "zh": "产品尺寸",
      "es": "Medidas"
    },
    "heading": {
      "en": "Locate the cap, valve and pallet deck",
      "zh": "标明桶盖、阀门与托盘面的边界",
      "es": "Ubique tapa, válvula y plataforma"
    },
    "body": {
      "en": "Provide maximum external width W, depth D and covered height H from pallet deck to tank top, including cage projections. State units. Record filler-cap diameter and position, valve centre height, offset and the space needed for fittings separately. Agree fitting allowance after checking a sample; neither a capacity label nor the drawing establishes a standard cover size.",
      "zh": "提供含框架突出件的最大外宽 W、外深 D，以及从托盘面至桶顶的覆盖高度 H，并注明单位。加注口直径与位置、阀门中心高度和偏移、接头所需空间分别列明。按样品确认套入余量；容积标签与测量图均不代表标准罩体尺寸。",
      "es": "Indique ancho W, fondo D y altura cubierta H desde plataforma al techo, con salientes y unidades. Registre diámetro y posición de tapa, altura y desplazamiento de válvula y espacio de accesorios aparte. Acuerde holgura con muestra; capacidad y dibujo no establecen talla estándar."
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
      "en": "Review the laminate and local overlaps",
      "zh": "检查复合层与局部搭接",
      "es": "Revise laminado y solapes locales"
    },
    "body": {
      "en": "The gallery shows a flexible reflective cover with bound flap edges. Confirm aluminium foil or metallized facing, core, inner surface, joining and closure specification with a sample. Check the access-flap overlap without fouling the cap or valve. Appearance does not establish waterproofness, fire behaviour, food-contact suitability or compatibility with chemicals.",
      "zh": "图集展示带包边翻盖的柔性反射面罩体。铝箔或镀铝面层、芯层、内侧、接缝及闭合方式按样品确认。检查翻盖搭接不会干涉桶盖和阀门。外观不代表防水、燃烧性能、食品接触适用性或化学品相容性。",
      "es": "La galería muestra funda reflectante flexible con solapas ribeteadas. Confirme aluminio o metalizado, núcleo, interior, uniones y cierre con muestra. Compruebe solapes sin interferir con tapa o válvula. El aspecto no acredita impermeabilidad, fuego, contacto alimentario ni compatibilidad química."
    },
    "image": 4
  },
  {
    "id": "features",
    "title": {
      "en": "Handling & storage",
      "zh": "操作与存放",
      "es": "Manipulación y almacenaje"
    },
    "heading": {
      "en": "Keep fork openings and connections clear",
      "zh": "避让进叉口与接口部件",
      "es": "Deje libres horquillas y conexiones"
    },
    "body": {
      "en": "Fit the cover to the stationary IBC and check that the hem remains above fork openings. Do not lift, secure or move the container by the cover. Keep pressure-relief and ventilation features unobstructed as required by the tank instructions. Remove the cover before folding; inspect folds, seams and closures before reuse. No heater, hose or fittings are included by default.",
      "zh": "在吨桶停稳后套装，检查下摆不遮挡进叉口。不得用罩体吊装、固定或拖动桶体；按桶体说明保留泄压与通气部件。取下后再折叠，重复使用前检查折线、接缝及封口。不默认配加热器、软管或接头。",
      "es": "Coloque con el IBC inmóvil y borde sobre entradas de horquilla. No eleve, sujete ni arrastre por la funda. Mantenga ventilación y alivio libres según instrucciones del tanque. Retire antes de plegar y revise pliegues, uniones y cierres antes de reutilizar. Calefactor, manguera y conexiones no incluidos por defecto."
    },
    "image": 6
  },
  {
    "id": "order-quantities",
    "title": {
      "en": "Order quantities",
      "zh": "定制数量与分段",
      "es": "Cantidades"
    },
    "body": {
      "en": "Separate fitting samples, first production and repeat orders by tank model and laminate. Confirm each cap and valve layout before agreeing quantity breaks.",
      "zh": "按桶体型号和复合材料分别列出适配样品、首批及返单数量；数量分段应对应确认的桶盖与阀门布局。",
      "es": "Separe muestras, primer pedido y reposiciones por modelo y laminado. Confirme tapa y válvula antes de acordar tramos."
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
      "en": "Send the tank envelope, opening positions, laminate requirements, quantity and destination. Request sample, production, packing and freight charges separately. MOQ and price are set in the written quotation.",
      "zh": "提供桶体外廓、开口位置、复合材料要求、数量与目的地。样品、生产、包装与运费分别列明，起订量和价格按书面报价确认。",
      "es": "Envíe contorno, accesos, laminado, cantidad y destino. Separe muestra, producción, embalaje y transporte; mínimo y precio según oferta escrita."
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
      "en": "Approve the fitted sample on the actual IBC before production. Confirm materials, converting, inspection and transport separately; dispatch follows the approved specification and order.",
      "zh": "生产前在实际吨桶上认可适配样品。备料、加工、验货与运输分别确认，出货按认可规格和订单安排。",
      "es": "Apruebe ajuste de muestra en el IBC real antes de producir. Acuerde material, fabricación, inspección y transporte; despacho según especificación y pedido."
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
      "en": "Agree material specification, approved sample reference, invoice and packing list. Any thermal, cleaning or regulatory report must cover the actual cover and use. Tank approvals do not certify the cover; cover documentation does not approve the liquid or IBC.",
      "zh": "确认材料规格、样品编号、发票与装箱单。温控、清洁或法规报告须对应实际罩体与用途。桶体资质不能认证罩体，罩体资料也不能代替液体及吨桶的适用要求。",
      "es": "Acuerde material, muestra aprobada, factura y lista de empaque. Informes térmicos, de limpieza o normativos deben cubrir funda y uso reales. Aprobaciones del tanque no certifican funda ni viceversa."
    }
  }
]
export default function IBCCoverSections({lang}:{lang:Lang}){return <div className="product-specification"><nav className="detail-jump-nav">{sections.map(s=><a href={'#'+s.id} key={s.id}>{s.title[lang]}</a>)}</nav>{sections.map((s,i)=>'image' in s?<section className="detail-block" id={s.id} key={s.id}><div className="detail-block-heading"><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title[lang]}</h2></div><div className="detail-columns"><div><h3>{s.heading![lang]}</h3><p>{s.body[lang]}</p><a className="text-link" href={href('/contact/',lang)+'?bag='+ibcCover.slug}>{tx('Discuss IBC cover specifications','沟通吨桶罩规格','Consultar especificación de la funda')[lang]}</a></div><figure className="product-editorial-figure"><img src={'/images/products/'+ibcCoverImages[s.image!-1].file} {...responsiveImage('images/products/'+ibcCoverImages[s.image!-1].file,'(max-width:650px) calc(100vw - 36px), 440px')} alt={ibcCoverImages[s.image!-1].label![lang]} loading="lazy"/><figcaption>{tx('Construction and supplied items are confirmed with the sample and order.','结构及随货内容以确认样品和订单为准。','Construcción y suministro según muestra y pedido.')[lang]}</figcaption></figure></div></section>:<ProductOrderSection key={s.id} bag={ibcCover} lang={lang} id={s.id} number={i+1} title={s.title[lang]} note={s.body[lang]}/>)}</div>}
