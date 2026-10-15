import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry', slug: 'dart-lancaster-molded-fiber-capacity', publishedAt: '2026-10-15', eventDate: '2026-10-13',
  market: t('Lancaster, Pennsylvania, United States', '美国宾夕法尼亚州兰开斯特', 'Lancaster, Pensilvania, Estados Unidos'),
  title: t('Dart Expands Molded-Fiber Packaging Capacity in Lancaster', 'Dart扩展兰开斯特模塑纤维包装产能', 'Dart amplía su capacidad de envases de fibra moldeada en Lancaster'),
  description: t('Dart’s Pennsylvania announcement prompts a container-change review: confirm the tray-and-lid pair and filled sample before approving a catering-bag loading plan.', 'Dart的宾夕法尼亚州产能公告带来餐盒更换核对：先明确餐盒与盒盖的配对和装载样品，再确认配送保温包的装载方案。', 'El anuncio de Dart en Pensilvania invita a comprobar recipiente, tapa y muestra cargada antes de aprobar su disposición en una bolsa térmica de catering.'),
  intro: t('In a 13 October 2026 company release hosted by IMFA, Dart announced expanded molded-fiber packaging manufacturing at Lancaster, Pennsylvania. Dart says the facility recently reached full operational capacity and is producing trays, containers and bowls.', 'Dart在IMFA承载的2026年10月13日企业公告中，宣布宾夕法尼亚州兰开斯特基地扩展模塑纤维包装制造。Dart表示，该基地近期达到全面运行状态，正在生产托盘、容器和碗。', 'En un comunicado del 13 de octubre de 2026 alojado por IMFA, Dart anunció la ampliación de fabricación de envases de fibra moldeada en Lancaster, Pensilvania. Según Dart, la planta alcanzó recientemente su plena capacidad operativa y produce bandejas, recipientes y cuencos.'),
  sections: [
    {
      heading: t('Use the announcement to start an enquiry, not approve an order', '产能公告用于启动询价，不代替订单确认', 'Use el anuncio para consultar, no para aprobar un pedido'),
      paragraphs: [
        t('The release does not provide an exact operational start date or annual output. Buyers still need a quotation for their own container reference, quantity and destination. Our purchasing interpretation is to keep the supplier-capacity decision separate from approval of a specific container in a delivery pack.', '公告未提供确切的全面运行日期或年产量。采购者仍需针对自己的容器型号、数量和目的地取得报价。我们的采购判断是，供应方产能评估与某个具体餐盒在配送包装中的认可，应分别处理。', 'El comunicado no indica una fecha exacta de plena operación ni producción anual. El comprador sigue necesitando una oferta para su referencia, cantidad y destino. Nuestra interpretación de compra es separar la evaluación de capacidad del proveedor y la aceptación de un recipiente concreto en el embalaje de reparto.'),
        t('A new material name in a catalogue does not identify the complete meal pack. Before changing an existing order, name the container body, its matching lid and the filled unit that operators will handle. Neither this announcement nor the cover image establishes compatibility with a YUANEN bag.', '目录中增加一个材料名称，并不等于明确了完整餐食包装。调整既有订单前，应标明盒身、配套盒盖，以及操作人员实际搬运的装载单元。该公告和封面图片都不证明它与远恩保温包兼容。', 'Un nombre de material en el catálogo no identifica el envase completo. Antes de cambiar un pedido existente, indique cuerpo, tapa correspondiente y unidad cargada que manipulará el personal. Ni el anuncio ni la imagen de portada acreditan compatibilidad con una bolsa YUANEN.'),
      ],
    },
    {
      heading: t('Approve the container and lid as a pair', '餐盒与盒盖按配对样品确认', 'Apruebe el recipiente y la tapa como pareja'),
      paragraphs: [
        t('For a proposed catering pack, ask for a sample with the intended lid fitted, rather than measuring an empty nested stack. Keep both item references on the packing drawing. If more than one lid is offered, give each proposed combination its own sample reference instead of using a general “fiber tray” description.', '对于拟定团餐装载方案，应索取装好目标盒盖的样品，而不是只测量空盒套叠后的外形。装载图中同时保留盒身和盒盖的型号。如果有多种盖可选，每一种拟用组合应单独编号，不宜只统称“纤维餐盒”。', 'Para una carga de catering propuesta, pida la muestra con la tapa prevista colocada, no mida solo una pila de recipientes vacíos anidados. Mantenga ambas referencias en el plano. Si se ofrecen varias tapas, asigne una referencia de muestra a cada combinación en vez de usar únicamente “bandeja de fibra”.'),
      ],
      bullets: [
        t('Measure the widest closed outline, including the rim and lid. Record the intended filled height and the space needed for the operator’s hands.', '测量闭合后的最宽外轮廓，包括盒沿和盖沿；记录拟定装载高度，以及操作人员手部所需空间。', 'Mida el contorno cerrado más ancho, incluidos borde y tapa. Registre la altura cargada prevista y el espacio necesario para las manos.'),
        t('Mark where the loaded unit will rest and where the next unit would bear on it. Check the proposed stack with filled samples; a count of nested empty trays is not a delivery capacity.', '标明装载单元的支撑位置，以及上一层拟落在哪些部位；用装载样品核对拟定堆叠。空盒套叠数量不是配送容量。', 'Marque los apoyos de la unidad cargada y dónde apoyaría la siguiente. Compruebe la pila prevista con muestras cargadas; el número de bandejas vacías anidadas no es capacidad de reparto.'),
        t('Agree how to check lid retention, level loading and removal after the intended handling trial. Record observations separately from temperature or food-safety results.', '约定在拟定搬运试验后，如何检查盒盖保持、水平装载和取出动作；将这些观察与温度或食品安全结果分开记录。', 'Acuerde cómo comprobar sujeción de tapa, carga nivelada y extracción después de la prueba de manipulación prevista. Registre estas observaciones aparte de los resultados térmicos o de seguridad alimentaria.'),
      ],
    },
    {
      heading: t('Check the horizontal path through the catering-bag opening', '核对餐盒经过前开口的水平路径', 'Compruebe el recorrido horizontal por la abertura frontal'),
      paragraphs: [
        t('YUANEN’s current catering-bag proposal has a front panel that folds down and short side handles for two-handed carrying. Its verified material revision uses a non-woven exterior and aluminum-foil interior. It does not establish a standard rack, shelf spacing or a rated tray count.', '远恩当前餐盘配送包方案采用向下展开的前面板，以及用于双手搬运的袋身短侧提手。已核验的材质版本为无纺布外层与铝箔内层；不默认提供标准层架、层间距或额定餐盘数量。', 'La propuesta actual de YUANEN tiene un panel frontal abatible hacia abajo y asas laterales cortas para transporte con ambas manos. La revisión verificada usa exterior no tejido e interior de lámina de aluminio. No establece estantes estándar, separación entre niveles ni cantidad nominal de bandejas.'),
        t('For that layout, send the closed sample through the proposed opening horizontally, then check its resting position and the clearance needed to close the front panel without pressing on the lid. Repeat the removal movement from the planned position. If extra supports or separators are needed, treat them as a proposed customization requiring sample confirmation, not an included feature.', '对于这种布局，应让闭合样品水平经过拟定开口，再检查放稳位置，以及前面板不挤压盒盖所需的闭合余量。还要从拟定放置位置重复取出动作。如果需要额外支撑或隔层，应列为待样品确认的定制方案，而不是默认随包配置。', 'Con esta disposición, introduzca la muestra cerrada horizontalmente por la abertura prevista y compruebe apoyo y holgura para cerrar el panel sin presionar la tapa. Repita la extracción desde su posición prevista. Si hacen falta apoyos o separadores, trátelos como personalización propuesta que requiere muestra, no como equipamiento incluido.'),
      ],
    },
    {
      heading: t('Keep claims attached to the exact supplied item', '声明范围应对应实际供货型号', 'Vincule las declaraciones al artículo suministrado'),
      paragraphs: [
        t('Request any required material, food-contact, disposal or use-condition documents for the exact container-and-lid combination. Keep them separate from the bag’s specification and the route’s packed-load results. A general company release should not become a certificate attached to a different product.', '按需要索取实际盒身与盒盖组合的材料、食品接触、处置方式或使用条件资料，并与保温包规格及路线整载结果分别保管。企业综合公告不应变成附在其他产品上的认证文件。', 'Solicite la documentación necesaria de material, contacto alimentario, eliminación o condiciones de uso para la combinación exacta de recipiente y tapa. Sepárela de la especificación de la bolsa y los resultados de la carga en ruta. Un comunicado general no debe convertirse en certificado de otro producto.'),
        t('For a YUANEN enquiry, send the paired sample references, closed dimensions, planned load and handling method. Final construction, MOQ and delivery are confirmed by sample and order. This analysis reports no Dart–YUANEN partnership, tested compatibility, supplied container, load rating or guaranteed temperature duration. The cover is a generic tray scene, not a photograph from Lancaster.', '向远恩询价时，可提供配对样品编号、闭合外尺寸、拟装载方式与搬运方法。最终结构、起订量及交付按样品和订单确认。本文不声称Dart与远恩合作、已测试适配、供货包含餐盒、已有额定承重或保证温控时长。封面为通用餐盒画面，不是兰开斯特现场照片。', 'Para consultar a YUANEN, envíe referencias de muestras emparejadas, medidas cerradas, carga y manipulación previstas. Construcción, pedido mínimo y entrega se confirman por muestra y pedido. Este análisis no acredita colaboración Dart–YUANEN, compatibilidad ensayada, recipientes incluidos, carga nominal ni duración térmica garantizada. La portada muestra bandejas genéricas, no una fotografía de Lancaster.'),
      ],
    },
  ],
  sources: [
    { title: t('Dart Corporate Communications release hosted by IMFA, 13 October 2026', 'Dart企业通讯部门公告，由IMFA承载，2026年10月13日', 'Comunicado de Dart Corporate Communications alojado por IMFA, 13 de octubre de 2026'), url: 'https://members.imfa.org/industry-news/Details/dart-container-expands-molded-fiber-packaging-capacity-at-pennsylvania-facility-361472', publishedAt: '2026-10-13' },
    { title: t('YUANEN current front-opening catering-bag proposal', '远恩当前前开式餐盘配送包方案', 'Propuesta actual de bolsa YUANEN de catering con apertura frontal'), url: 'https://yuanenbag.com/products/insulated-catering-bags/' },
  ],
  relatedProducts: ['insulated-catering-bags'],
  image: {
    file: 'images/editorial/2026-10-15/molded-fiber-trays-separate-lid.webp', kind: 'illustration',
    alt: t('Nested ivory fiber trays with a separate rectangular lid on a grey counter', '灰色台面上套叠的米白纤维餐盒与独立长方形盒盖', 'Bandejas de fibra color marfil anidadas y una tapa rectangular separada sobre una encimera gris'),
    caption: t('Empty fiber trays and a separate lid on a packing counter.', '装箱台面上的空纤维餐盒与独立盒盖。', 'Bandejas de fibra vacías y una tapa separada sobre una encimera de embalaje.'),
  },
}
export default article
