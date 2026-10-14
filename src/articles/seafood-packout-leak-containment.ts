import type { EditorialArticle } from '../editorial'

const article: EditorialArticle = {
  kind: 'guide', slug: 'seafood-packout-leak-containment', publishedAt: '2026-10-14',
  title: { en: 'Which Layer Should Contain Leaks in a Seafood Shipping Box?', zh: '海鲜运输箱中，哪一层负责防漏？', es: '¿Qué capa debe contener las fugas en una caja de transporte de pescado y marisco?' },
  description: {
    en: 'Specify the sealed seafood package, secondary leak containment and foil box liner separately. Record layer condition and loaded fit without assuming watertight seams.',
    zh: '分别确认密封海鲜内包装、第二层防漏容器与铝箔箱内衬，记录各层状态及装载适配，不将隔热接缝当作水密证明。',
    es: 'Defina por separado envase sellado, contención secundaria y forro de aluminio. Registre estado y ajuste sin presuponer uniones estancas.',
  },
  intro: {
    en: 'YUANEN’s foil box-liner application for packaged seafood separates the food package, any secondary leak containment and the insulating liner. It also states that an insulating seam is not evidence of a watertight barrier. Buyers can use that distinction to assign requirements before ordering: which component encloses the seafood, which contains an agreed leakage scenario, and which provides the specified insulation around the load.',
    zh: '远恩铝箔箱内衬的包装海鲜应用，将食品内包装、必要的第二层防漏容器与隔热内衬分别指定，并明确隔热接缝不能作为水密屏障的证据。采购者可据此在下单前分配要求：哪个组件包装海鲜，哪个负责约定漏液情形下的收容，哪个为装载物提供约定隔热结构。',
    es: 'La aplicación de YUANEN para pescado y marisco envasados distingue envase alimentario, contención secundaria de fugas cuando sea necesaria y forro aislante. También aclara que una unión aislante no acredita una barrera estanca. Antes de pedir, asigne requisitos: qué componente envasa el alimento, cuál contiene una fuga en el escenario acordado y cuál aporta el aislamiento especificado.',
  },
  sections: [
    {
      heading: { en: 'Assign a role and supplier to each component', zh: '明确各组件的职责与供货方', es: 'Asigne función y proveedor a cada componente' },
      paragraphs: [{
        en: 'List the packaging components in the quotation brief. Use separate entries even if they come from the same supplier. A foil-lined foam box in an application image does not establish the suitability or supply scope of the food-contact package or a leak-containment container. Ask for evidence covering each intended use and identify what still needs sample confirmation.',
        zh: '在询价需求中列出各包装组件，即使来自同一供方，也分项记录。应用图中的铝箔内衬泡沫箱，不能证明食品接触内包装或防漏容器的适用性和供货范围。应为各预定用途索取对应证据，并明确哪些事项仍需样品确认。',
        es: 'Enumere los componentes en el encargo de cotización, por separado aunque compartan proveedor. Una caja de espuma forrada en una imagen no acredita aptitud ni suministro del envase en contacto con alimentos o del recipiente de contención. Solicite evidencia para cada uso previsto e identifique las confirmaciones de muestra pendientes.',
      }],
      bullets: [
        { en: 'Primary package: the actual closed food pouch or container, with its closure and intended-contact requirements.', zh: '食品内包装：实际闭合食品袋或容器，以及其封口和预定接触要求。', es: 'Envase primario: bolsa o recipiente alimentario cerrado, su cierre y requisitos de contacto previsto.' },
        { en: 'Secondary containment: the separately specified container or bag and the leakage conditions it must address.', zh: '第二层防漏组件：单独指定的容器或袋体，以及需要应对的漏液条件。', es: 'Contención secundaria: recipiente o bolsa especificado aparte y condiciones de fuga que debe atender.' },
        { en: 'Insulating liner: the agreed foil-facing and layer construction, dimensions and folding arrangement.', zh: '隔热内衬：约定铝箔面层与复合结构、尺寸及折合方式。', es: 'Forro aislante: superficie de aluminio, capas, medidas y plegado acordados.' },
        { en: 'Outer box and refrigerant: their own specifications, supply responsibility and place in the complete load.', zh: '外箱与冰源：各自规格、供货责任及在完整装载中的位置。', es: 'Caja exterior y refrigerante: especificaciones, responsable de suministro y posición en la carga.' },
      ],
    },
    {
      heading: { en: 'Define what the containment sample must demonstrate', zh: '约定防漏样品需要证明什么', es: 'Defina qué debe demostrar la muestra de contención' },
      paragraphs: [{
        en: 'Ask the team responsible for the food package and shipping process to define the relevant containment requirements and acceptance method. Identify the actual package closures and the selected coolant. Do not assume that either component cannot leak, or that an insulating liner can capture whatever escapes. Record the permitted packing orientation and handling conditions to be assessed. This guide does not prescribe a leak-test standard, deliberate spill procedure or food-safety approval.',
        zh: '由负责食品内包装及运输流程的团队确定对应防漏要求和验收方法，明确实际包装封口及选定冰源。不要默认这些组件不会漏，也不要默认隔热内衬能收容所有溢出液体。记录需要评估的允许摆放方向和搬运条件。本文不规定防漏测试标准、人工泼液操作或食品安全批准。',
        es: 'El equipo responsable del envase y del envío debe definir requisitos de contención y método de aceptación. Identifique cierres reales y refrigerante elegido. No suponga que no pueden perder líquido ni que el forro contendrá cualquier fuga. Registre orientación permitida y condiciones de manipulación a evaluar. Esta guía no prescribe una norma de estanqueidad, un procedimiento de vertido ni una aprobación de seguridad alimentaria.',
      }],
    },
    {
      heading: { en: 'Measure the load after adding the secondary container', zh: '加入第二层容器后，再测完整装载', es: 'Mida la carga con el recipiente secundario incluido' },
      paragraphs: [{
        en: 'Measure the sealed seafood packs and the outside of the closed secondary container, including its lid rim or clips. Check that combination inside the actual lined foam box with the prepared refrigerant and top fold. Observe pressure on closures, contact between hard edges and the liner, and the space needed to remove the secondary container. The food packs fitting inside the liner does not establish that the additional containment layer will fit. If the layout changes, repeat the closure and removal check before approving the dimensions.',
        zh: '测量密封海鲜包装，以及闭合第二层容器含盖沿或卡扣的外尺寸。将这一组合放入实际带内衬的泡沫箱，计入准备后的冰源和顶部折合。观察封口受压、硬边与内衬接触，以及取出第二层容器所需的空间。食品袋能放进内衬，不代表新增防漏层也能适配。布局改变后，确认尺寸前应重做闭合与取出检查。',
        es: 'Mida los envases sellados y el exterior del recipiente secundario cerrado, incluidos borde de tapa o clips. Compruebe el conjunto en la caja de espuma forrada real con refrigerante preparado y pliegue superior. Observe presión sobre cierres, contacto de bordes duros y espacio para extraer el recipiente. Que los envases quepan en el forro no demuestra que quepa otra capa. Si cambia la disposición, repita cierre y extracción antes de aceptar las medidas.',
      }],
    },
    {
      heading: { en: 'Record the condition of each layer before moving it', zh: '拆箱时先记录各层状态，再移动', es: 'Registre el estado de cada capa antes de moverla' },
      paragraphs: [{
        en: 'For the agreed trial, photograph the load and record each component’s sample version before dispatch. On unpacking, note the outer-box condition, liner surface, secondary-container exterior and primary-package exterior in order, before moving them. Give each wet area, damaged closure or displaced component its own location and photo reference. Wet material alone does not identify the source, prove containment failure or establish the condition of the food. Refer suspected food-package problems to the responsible team under its own procedures.',
        zh: '开展约定试验时，发出前拍摄装载状态并记录各组件样品版本。拆箱时，依次观察外箱状态、内衬表面、第二层容器外部及食品内包装外部，在移动之前记录。每一处湿痕、封口损伤或组件移位都注明位置与照片编号。仅有材料湿润不能确定液体来源、证明防漏失效或判断食品状态。疑似食品内包装问题应交由负责团队按其流程处理。',
        es: 'En la prueba acordada, fotografíe la carga y registre versiones de cada componente antes del envío. Al abrir, observe por orden caja exterior, superficie del forro, exterior del recipiente secundario y del envase primario antes de moverlos. Localice cada zona húmeda, cierre dañado o pieza desplazada con referencia de foto. La humedad por sí sola no identifica su origen, demuestra un fallo de contención ni determina el estado del alimento. Remita posibles problemas del envase alimentario al equipo responsable según sus procedimientos.',
      }],
    },
    {
      heading: { en: 'Keep containment and thermal acceptance separate', zh: '防漏与温控分别验收', es: 'Separe la aceptación de contención y la térmica' },
      paragraphs: [{
        en: 'State whether the proposed shipment is chilled or frozen and provide the required conditions for the complete pack-out test. Assess temperature performance with the actual food-pack configuration, secondary container, liner, coolant, outer box and route. Passing a containment check does not establish cooling duration, and a temperature record does not establish watertight seams. For a YUANEN liner quotation, send the closed component dimensions, load sketch, total mass, coolant layout, requirements, route, quantity and destination. Confirm the supplied scope in writing. These packing records are recommendations, not results of a YUANEN test or a certification for seafood shipping.',
        zh: '说明拟用方案是冷藏还是冷冻运输，并提供完整装载测试所需条件。温度表现应结合实际食品包装组合、第二层容器、内衬、冰源、外箱及路线评估。防漏检查通过不能证明保冷时长，温度记录也不能证明接缝水密。咨询远恩内衬报价时，请提供闭合组件尺寸、装载图、总重量、冰源布局、要求、路线、数量与目的地，并书面确认供货范围。这些装载记录是建议，不是远恩测试结果或海鲜运输认证。',
        es: 'Indique si el envío previsto es refrigerado o congelado y facilite las condiciones del ensayo completo. Evalúe temperatura con envases, recipiente secundario, forro, refrigerante, caja y ruta reales. Superar una comprobación de contención no acredita autonomía térmica, y un registro de temperatura no acredita uniones estancas. Para cotizar el forro YUANEN, envíe medidas de componentes cerrados, croquis, masa total, refrigerante, requisitos, ruta, cantidad y destino. Confirme el suministro por escrito. Son recomendaciones de registro, no resultados de ensayos YUANEN ni una certificación de transporte de pescado y marisco.',
      }],
    },
  ],
  sources: [
    { title: { en: 'YUANEN packaged-seafood application and separate containment requirements', zh: '远恩包装海鲜应用与独立防漏要求', es: 'Aplicación YUANEN para pescado y marisco envasados y contención separada' }, url: 'https://yuanenbag.com/products/foil-insulated-box-liners/#seafood-packaging' },
    { title: { en: 'YUANEN packaging-format comparison and component roles', zh: '远恩包装类型比较与组件作用', es: 'Comparación YUANEN de formatos y funciones de componentes' }, url: 'https://yuanenbag.com/guides/bag-material-comparison/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
    file: 'images/editorial/2026-10-14/seafood-pouches-secondary-container.webp', kind: 'illustration',
    alt: { en: 'Two individually packed orange fish portions in a clear container inside a foil-lined foam box, beside a silver pouch and separate clear lid', zh: '银色内衬泡沫箱内，透明容器中放着两份独立包装的橙色鱼肉，旁边有银色平袋及独立透明盖', es: 'Dos porciones de pescado naranja en bolsas individuales dentro de un recipiente transparente en una caja de espuma forrada, junto a una bolsa plateada y tapa separada' },
    caption: { en: 'Generic individually packed fish, secondary container and lined foam box. The view does not establish leak containment, food-contact suitability or temperature performance.', zh: '通用独立包装鱼肉、第二层容器与带内衬泡沫箱，画面不证明防漏、食品接触适用性或温控性能。', es: 'Pescado envasado, recipiente secundario y caja forrada genéricos. La imagen no acredita contención, aptitud para contacto alimentario ni comportamiento térmico.' },
  },
}
export default article
