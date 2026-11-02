import { type Lang } from './data'
import { href } from './routes'
import { responsiveImage } from './responsive-images'
const imageAlt: Record<number,Record<Lang,string>> = {7:{en:'Worker checking the top corners of a silver hood over a pallet load',zh:'工作人员检查整托银色套罩的顶部转角',es:'Operario revisando las esquinas superiores de una funda plateada sobre un palé'},3:{en:'Overlapping foil-faced panels at the top corner of the hood',zh:'罩体顶部转角处的铝箔面搭接',es:'Unión de paneles aluminizados en la esquina superior de la funda'},4:{en:'Lower edge of the silver hood above the wooden pallet fork openings',zh:'木托盘进叉口上方的银色罩体下缘',es:'Borde inferior de la funda plateada sobre las entradas de horquillas del palé'}}
imageAlt[8]={en:'Cartons on a pallet with width W, depth D and height H above the pallet deck',zh:'托盘上的纸箱货堆及宽W、深D、托盘面以上高度H的测量方向',es:'Cajas sobre un palé con ancho W, fondo D y altura H sobre la plataforma'}
const imageFile=(n:number)=>n===8?'measurement-v1.webp':String(n).padStart(2,'0')+'.webp'
const sections = [
  {
    "id": "applications",
    "title": {
      "en": "Applications",
      "zh": "应用场景",
      "es": "Aplicaciones"
    },
    "heading": {
      "en": "Plan a defined handover stage",
      "zh": "围绕具体交接环节规划",
      "es": "Planifique una etapa de entrega"
    },
    "body": {
      "en": "For receiving bays, warehouse handovers and short transfers, define when the hood goes on and comes off, how long the load is exposed and whether overhead space allows top-down fitting. Keep required refrigerated storage and transport in place; validate the complete loaded setup against the route before use.",
      "zh": "用于收货区、仓储交接与短程转运时，先明确何时套罩与取罩、货物暴露时间，以及上方是否有足够套入空间。仍需保留必要的冷藏储运条件，并按实际路线验证完整装载配置后使用。",
      "es": "En recepción, entregas de almacén y traslados cortos, defina cuándo colocar y retirar la funda, el tiempo de exposición y el espacio superior para instalarla. Mantenga el almacenamiento y transporte refrigerados necesarios y valide la carga completa según la ruta antes del uso."
    },
    "image": 7
  },
  {
    "id": "dimensions",
    "title": {
      "en": "Dimensions",
      "zh": "产品尺寸",
      "es": "Medidas"
    },
    "heading": {
      "en": "Measure the loaded pallet, not only the pallet base",
      "zh": "测量整托货堆，不只看托盘底座",
      "es": "Mida la carga completa, no solo el palé"
    },
    "body": {
      "en": "Record maximum width × depth × height above the pallet deck, including carton bulge, wrapping and overhang. Agree usable inner dimensions and fitting allowance separately. Check installation space above the load and the lower-edge position. Do not infer stock size, thickness or capacity from these images.",
      "zh": "记录托盘面以上货堆的最大宽×深×高，计入纸箱鼓胀、缠膜和突出部分；分别约定可用内尺寸及套入余量，核对上方安装空间与下缘位置。不能从图片推断现货尺寸、厚度或容量。",
      "es": "Registre ancho × fondo × alto máximos sobre la plataforma, incluidos abombamientos, film y salientes. Acuerde medidas útiles y holgura por separado. Revise espacio superior y borde inferior. Las imágenes no establecen medidas de inventario, espesor ni capacidad."
    },
    "image": 8
  },
  {
    "id": "materials",
    "title": {
      "en": "Materials & construction",
      "zh": "材料及工艺",
      "es": "Materiales y fabricación"
    },
    "heading": {
      "en": "Confirm the laminate and full-size joins",
      "zh": "确认复合层及足尺寸拼接",
      "es": "Confirme laminado y uniones a tamaño real"
    },
    "body": {
      "en": "The foil-faced flexible foam option combines a silver outer face with a white foam layer. Confirm composition, thickness, panel width, seam overlap and joining method together. Approve the full-size corner and seam details with a physical sample.",
      "zh": "铝箔面复合柔性泡棉可作为材料选项，外侧为银色铝箔面，内侧为白色泡棉层。各层成分、厚度、幅宽及搭接工艺需一并确认，并通过足尺寸样品核对转角与接缝。",
      "es": "La opción de espuma flexible aluminizada combina una cara exterior plateada con espuma blanca. Confirme composición, espesor, ancho de panel, solape y unión. Revise esquinas y costuras con una muestra a tamaño real."
    },
    "image": 3
  },
  {
    "id": "features",
    "title": {
      "en": "Product functions",
      "zh": "产品功能",
      "es": "Funciones"
    },
    "heading": {
      "en": "Five covered faces, an open bottom",
      "zh": "五面覆盖，底部开放",
      "es": "Cinco caras cubiertas, base abierta"
    },
    "body": {
      "en": "The cover fits over the top and four sides of the load, leaving the bottom open. Position the lower edge at the pallet deck to keep fork access clear. This configuration has no base pad, zipper, access door, handles or securing straps. Lift only the cover when removing it; never use it to lift the goods.",
      "zh": "罩体从上方套入，覆盖货堆顶部和四侧，底部开放。下缘位置按托盘面确认，保持进叉口畅通。图示款式不含底垫、拉链、取货门、提手或固定带；取下时只提起罩体，不用于起吊货物。",
      "es": "La funda cubre la parte superior y los cuatro laterales y deja la base abierta. Sitúe el borde junto a la plataforma sin obstruir las horquillas. Esta configuración no incluye base, cremallera, puerta, asas ni correas. Levante solo la funda al retirarla, nunca la mercancía."
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
    "heading": {
      "en": "Separate sample and production scope",
      "zh": "区分样品与批量范围",
      "es": "Separe muestra y producción"
    },
    "body": {
      "en": "State the number of full-size trial covers, intended production quantity and how many load sizes are required. Confirm whether each size needs a separate sample and whether pallet and cartons are supplied by the buyer. Props in these images are not included by default.",
      "zh": "说明足尺寸试样数量、预计批量及货堆尺寸种类；确认不同尺寸是否分别打样、托盘与纸箱是否由采购方提供。图中的托盘和纸箱默认不是随货配件。",
      "es": "Indique muestras a tamaño real, volumen previsto y número de medidas de carga. Confirme muestras por medida y quién aporta palés y cajas. Los accesorios de las imágenes no se incluyen por defecto."
    },
    "image": null
  },
  {
    "id": "pricing",
    "title": {
      "en": "MOQ & pricing",
      "zh": "起订量与价格",
      "es": "Pedido mínimo y precio"
    },
    "heading": {
      "en": "Quote against an agreed specification",
      "zh": "按约定规格报价",
      "es": "Cotice según especificación acordada"
    },
    "body": {
      "en": "MOQ and unit price depend on the confirmed specification. Supply load dimensions, laminate requirements, quantity, artwork if needed, packing method and destination. Ask for separate sample, production and freight costs in a written quotation.",
      "zh": "起订量与单价按确认规格报价。请提供货堆尺寸、材料要求、数量、图稿（如需）、装箱方式及目的地，要求书面报价分别列明样品、生产与运输费用。",
      "es": "El pedido mínimo y el precio dependen de la especificación acordada. Envíe medidas, laminado, cantidad, diseño si procede, embalaje y destino. Solicite costes de muestra, producción y transporte por separado."
    },
    "image": null
  },
  {
    "id": "delivery",
    "title": {
      "en": "Lead time",
      "zh": "交货时间",
      "es": "Plazos"
    },
    "heading": {
      "en": "Approve the construction before scheduling",
      "zh": "先确认结构再安排生产",
      "es": "Apruebe la construcción antes de programar"
    },
    "body": {
      "en": "Sampling, construction changes, production and transit are separate stages. Confirm their timing with the quotation after material availability and sample acceptance. Dispatch and arrival dates are confirmed in the order schedule.",
      "zh": "打样、结构调整、生产和运输为不同阶段。材料可用性及样品验收明确后，在报价中确认各阶段时间；出货及到货日期以订单约定为准。",
      "es": "Muestreo, cambios, producción y transporte son etapas distintas. Confirme plazos tras disponibilidad de material y aceptación de muestra. Las fechas de despacho y llegada se acuerdan en el pedido."
    },
    "image": null
  },
  {
    "id": "export",
    "title": {
      "en": "Export documentation",
      "zh": "出口资料",
      "es": "Documentación de exportación"
    },
    "heading": {
      "en": "Match documents to the final construction",
      "zh": "文件与最终结构对应",
      "es": "Documentos de la construcción final"
    },
    "body": {
      "en": "Agree the material specification, approved sample reference, commercial invoice and packing list for the order. Thermal, handling and destination-market evidence must cover the actual laminate and loaded setup. Food-contact, pharmaceutical, waterproofing and recycling requirements need separate review of the applicable documents and tests.",
      "zh": "按订单约定材料规格、确认样品编号、商业发票与装箱单。所需温控、搬运或目的地市场资料必须覆盖实际复合材料及装载配置。食品接触、医药用途、防水及回收相关要求须另行核实所需文件与测试。",
      "es": "Acuerde materiales, referencia de muestra, factura y lista de empaque. La evidencia térmica, de manipulación y del mercado de destino debe corresponder al laminado y carga reales. Los requisitos alimentarios, farmacéuticos, de impermeabilidad y reciclaje requieren revisión específica de documentos y ensayos."
    },
    "image": null
  }
]
export default function PalletCoverSections({lang}:{lang:Lang}) {return <div className="product-specification"><nav className="detail-jump-nav">{sections.map(s=><a key={s.id} href={'#'+s.id}>{s.title[lang]}</a>)}</nav>{sections.map((s,i)=><section className="detail-block" id={s.id} key={s.id}><div className="detail-block-heading"><span>{String(i+1).padStart(2,'0')}</span><h2>{s.title[lang]}</h2></div><div className="detail-columns"><div><h3>{s.heading[lang]}</h3><p>{s.body[lang]}</p>{s.id==='dimensions'&&<p className="measurement-key">{({en:"W = maximum load width · D = maximum load depth · H = height above the pallet deck (pallet height excluded). Include wrapping and overhang; fitting allowance is agreed separately.",zh:"W＝货堆最大宽度；D＝货堆最大深度；H＝托盘面以上货高（不含托盘本体高度）。计入缠膜与突出部分，套入余量另行确认。",es:"W = ancho máximo · D = fondo máximo · H = altura sobre la plataforma (sin la altura del palé). Incluya film y salientes; acuerde la holgura por separado."})[lang]}</p>}{s.id==='features'&&<ol>{({en:["Check that the load is stable, its corners will not snag the cover and there is enough overhead clearance.","Unfold the hood, align its corners and lower it evenly without pulling on the laminate. Keep the lower edge clear of fork openings.","Remove the cover before accessing the cartons. Check for damage before folding; decide any further use from its condition and the agreed specification."],zh:["确认货堆稳定、边角不会勾破罩体，上方有足够安装空间。","展开罩体，对齐四角后均匀下套，避免拉扯复合材料；检查下缘不遮挡进叉口。","取货前先移除罩体，折叠前检查破损；是否继续使用按实际状况和约定规格判断。"],es:["Compruebe estabilidad, esquinas sin riesgo de enganche y espacio superior suficiente.","Despliegue, alinee las esquinas y baje la funda uniformemente sin tirar del laminado. Deje libres las entradas de horquillas.","Retire la funda antes de acceder a las cajas. Revise daños antes de plegar; decida usos posteriores según su estado y la especificación acordada."]})[lang].map(x=><li key={x}>{x}</li>)}</ol>}<a className="text-link" href={href('/contact/',lang)+'?bag=insulated-pallet-covers'}>{({en:'Discuss your specification',zh:'沟通定制规格',es:'Consultar su especificación'})[lang]}</a></div>{s.image&&<figure className="product-editorial-figure"><img src={'/images/products/standardized/insulated-pallet-covers/'+imageFile(s.image)} width="1200" height="1200" {...responsiveImage('images/products/standardized/insulated-pallet-covers/'+imageFile(s.image),'(max-width:650px) calc(100vw - 36px), 440px')} alt={imageAlt[s.image][lang]} loading="lazy"/><figcaption>{s.image===8?({en:'Measurement directions only; no fixed product size is shown.',zh:'仅说明测量方向，不代表固定产品尺寸。',es:'Solo direcciones de medición; no indica una medida fija.'})[lang]:({en:'Material and dimensions are confirmed with a sample.',zh:'材料与尺寸以确认样品为准。',es:'Materiales y medidas según la muestra aprobada.'})[lang]}</figcaption></figure>}</div></section>)}</div>}
