import { tx, type Lang } from './data'
import { cageCover, cageCoverImages } from './cage-cover-product'
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
      "en": "Fit the cover around the working cage",
      "zh": "围绕实际笼车确认取货方式",
      "es": "Adapte la funda al carro en uso"
    },
    "body": {
      "en": "For store replenishment and short distribution handovers, open the front curtain before accessing cartons. Keep the cage stationary and secured during loading. Fold the curtain clear of the access path, and confirm a safe push point on the cage. Do not pull or lift a loaded cage by the cover. Required refrigeration and load restraint remain part of the handling process.",
      "zh": "用于门店补货与短时配送交接时，先打开前帘再取放纸箱。装卸时应停稳并固定笼车，前帘收至不妨碍取货的位置，并确认笼车安全推行部位。不得拉拽罩体或用罩体提起装货笼车；必要冷藏条件与货物固定仍须落实。",
      "es": "En reposición y entregas breves, abra la cortina antes de acceder a las cajas. Inmovilice el carro durante la carga. Mantenga la cortina fuera del paso y confirme un punto seguro de empuje. No tire ni levante el carro cargado por la funda. Mantenga refrigeración y retención de carga necesarias."
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
      "en": "Measure the frame, projections and wheel clearance",
      "zh": "测量框架、突出件与脚轮余量",
      "es": "Mida bastidor, salientes y espacio de ruedas"
    },
    "body": {
      "en": "State maximum external width W and depth D, including hinges and handles, with units. Define covered height H from the top of the base deck to the top of the cage, excluding the castors. Record opening width, brake positions and any overhanging load separately. The image defines measurement directions, not standard dimensions; fitting allowance is confirmed separately.",
      "zh": "注明含铰链、把手等突出件的最大外宽 W 与外深 D 及单位。覆盖高度 H 从底座上表面量至笼车顶部，不计脚轮。开口净宽、刹车位置和货物突出部分另列。图中仅说明测量方向，不代表标准尺寸；套入余量另行确认。",
      "es": "Indique ancho exterior máximo W y fondo D con bisagras, asas y unidades. Mida altura cubierta H desde la cara superior de la plataforma al techo del carro, sin ruedas. Registre apertura, frenos y salientes de carga aparte. La imagen indica direcciones, no medidas estándar; acuerde holgura por separado."
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
      "en": "Check the laminate and closure together",
      "zh": "一并检查复合层与前帘封口",
      "es": "Revise laminado y cierre juntos"
    },
    "body": {
      "en": "The pictured construction uses a flexible silver reflective laminate with black bound edges and hook-and-loop front overlaps. Confirm foil or metallized facing, core material, inner face and joining method with the sample. Edge binding is not a waterproof certification. Repeated closure, cleaning compatibility and any required reports must cover the supplied construction.",
      "zh": "图示结构为银色柔性反射复合层，黑色包边及前帘魔术贴搭接。面层采用铝箔还是镀铝材料、芯层、内侧及连接工艺均以样品确认。包边不等于防水认证，反复开合、清洁相容性及所需报告须对应实际供货结构。",
      "es": "La imagen muestra un laminado reflectante flexible, ribetes negros y solapes frontales de cierre por contacto. Confirme aluminio o metalizado, núcleo, cara interior y unión con muestra. El ribete no acredita impermeabilidad. Verifique cierre repetido, limpieza e informes para la construcción suministrada."
    },
    "image": 3
  },
  {
    "id": "features",
    "title": {
      "en": "Handling & storage",
      "zh": "操作与存放",
      "es": "Manipulación y almacenaje"
    },
    "heading": {
      "en": "Keep the hem clear of moving components",
      "zh": "下摆避开运动部件",
      "es": "Mantenga el borde libre de piezas móviles"
    },
    "body": {
      "en": "Confirm hem height with the cage standing on its castors. Check full wheel swivel, brake operation and door movement without catching the cover. The cage bears the cargo; the cover must not become a restraint or lifting accessory. Remove the cover before folding for storage; check the laminate at fold lines before reuse. Remove damaged covers from use and agree repair or replacement criteria.",
      "zh": "在笼车正常落地状态确认下摆高度，检查脚轮全向转动、刹车及门体动作不会勾住罩体。货物由笼车承载，罩体不能作为固定带或吊装附件。取下罩体后再折叠存放，再次使用前检查折线处复合层；破损罩体应停止使用，并约定修补或更换标准。",
      "es": "Compruebe altura del borde con el carro apoyado en sus ruedas. Revise giro completo, frenos y puertas sin enganchar la funda. El carro soporta la carga; la funda no es una sujeción ni accesorio de elevación. Retire la funda antes de plegarla; revise el laminado en los pliegues antes de reutilizarla. Retire fundas dañadas y acuerde reparación o sustitución."
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
      "en": "Separate fit samples, first orders and repeat quantities by cage model and agreed laminate. Confirm whether each cage type requires its own sample.",
      "zh": "按笼车型号和确认复合层分别列出适配样品、首批及返单数量；确认不同笼车型号是否需分别试样。",
      "es": "Separe muestras, primer pedido y reposiciones por modelo de carro y laminado; confirme muestras por modelo."
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
      "en": "Send cage envelope, access and closure details, laminate requirements, quantity, packing and destination. Request sample, production and freight charges separately. MOQ and price follow the written quotation.",
      "zh": "提供笼车外廓、开口与闭合细节、复合材料要求、数量、包装及目的地。样品、生产与运费分别报价，起订量和价格按书面报价确认。",
      "es": "Envíe contorno, acceso, cierre, laminado, cantidad, embalaje y destino. Separe muestras, producción y transporte; mínimo y precio según oferta escrita."
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
      "en": "Agree sample fitting on the actual cage before production. Confirm material preparation, manufacture, inspection and transport as separate stages. Dispatch dates depend on the approved specification and order.",
      "zh": "生产前在实际笼车上确认样品适配。备料、制作、验货及运输分阶段约定，出货日期按确认规格和订单落实。",
      "es": "Confirme ajuste de muestra en el carro real antes de producir. Acuerde material, fabricación, inspección y transporte por separado; fechas según especificación y pedido."
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
      "en": "Confirm material specification, approved sample reference, invoice and packing list. Any thermal, cleaning or regulatory report must match the supplied cover and intended use. The cage, cartons and other props are not included by default.",
      "zh": "确认材料规格、认可样品编号、发票及装箱单。温控、清洁或法规资料须与实际罩体及用途对应；笼车、纸箱等道具不默认随货供应。",
      "es": "Confirme material, referencia de muestra, factura y lista de empaque. Informes térmicos, de limpieza o normativos deben corresponder a funda y uso. Carro, cajas y accesorios no se incluyen por defecto."
    }
  }
]
export default function CageCoverSections({lang}:{lang:Lang}){return <div className="product-specification"><nav className="detail-jump-nav">{sections.map(s=><a href={'#'+s.id} key={s.id}>{s.title[lang]}</a>)}</nav>{sections.map((s,i)=>'image' in s?<section className="detail-block" id={s.id} key={s.id}><div className="detail-block-heading"><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title[lang]}</h2></div><div className="detail-columns"><div><h3>{s.heading![lang]}</h3><p>{s.body[lang]}</p><a className="text-link" href={href('/contact/',lang)+'?bag='+cageCover.slug}>{tx('Discuss cage cover specifications','沟通笼车罩规格','Consultar especificación de la funda')[lang]}</a></div><figure className="product-editorial-figure"><img src={'/images/products/'+cageCoverImages[s.image!-1].file} {...responsiveImage('images/products/'+cageCoverImages[s.image!-1].file,'(max-width:650px) calc(100vw - 36px), 440px')} alt={cageCoverImages[s.image!-1].label![lang]} loading="lazy"/><figcaption>{tx('Construction and supplied items are confirmed with the sample and order.','结构及随货内容以确认样品和订单为准。','Construcción y suministro según muestra y pedido.')[lang]}</figcaption></figure></div></section>:<ProductOrderSection key={s.id} bag={cageCover} lang={lang} id={s.id} number={i+1} title={s.title[lang]} note={s.body[lang]}/>)}</div>}
