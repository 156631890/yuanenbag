import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'eu-packaging-rules-insulated-bag-buyers',
  publishedAt: '2026-10-10',
  eventDate: '2026-08-12',
  market: t('European Union', '欧盟', 'Unión Europea'),
  title: t('EU Packaging Rules: What Insulated Bag Buyers Should Request', '欧盟包装新规：保温包装采购需要核对哪些资料', 'Normas de envases de la UE: qué solicitar al comprar embalaje térmico'),
  description: t(
    'EU packaging rules began applying on 12 August 2026. Request a layer-by-layer specification for insulated liners and carriers before making compliance claims.',
    '欧盟包装新规于 2026 年 8 月 12 日开始适用。采购保温内衬和携带袋时，先逐层明确规格与用途，再核对适用要求及相关资料。',
    'Las nuevas normas de envases de la UE comenzaron a aplicarse el 12 de agosto de 2026. Solicite especificaciones por capa para revestimientos y bolsas térmicas.'
  ),
  intro: t(
    'The European Commission announced that the Packaging and Packaging Waste Regulation began applying on 12 August 2026. For buyers of insulated packaging, the practical starting point is a clear record of the proposed pack and its materials. This article does not establish that a YUANEN product complies with the regulation.',
    '欧盟委员会公告指出，《包装和包装废弃物条例》于 2026 年 8 月 12 日开始适用。对于保温包装采购方，实用的起点是明确拟采用的包装组合及材料记录。本文不能证明任何远恩产品符合该条例。',
    'La Comisión Europea anunció que el Reglamento de envases y residuos de envases comenzó a aplicarse el 12 de agosto de 2026. Para comprar embalaje térmico, conviene empezar por documentar el conjunto propuesto y sus materiales. Este artículo no acredita que un producto de YUANEN cumpla el reglamento.'
  ),
  sections: [
    {
      heading: t('Check the timetable for the specific requirement', '按具体要求核对实施时间', 'Compruebe el calendario de cada requisito'),
      paragraphs: [t(
        'The Commission describes a phased timetable: some restrictions on single-use packaging start in 2030. The August application date does not mean every later measure already applies. Use the official notices linked below to identify the relevant requirement and date.',
        '欧盟委员会说明，相关措施分阶段实施，部分一次性包装限制从 2030 年开始。8 月开始适用，并不意味着后续所有措施都已同步实施。应根据下方官方公告核对具体要求及其日期。',
        'La Comisión describe un calendario escalonado: algunas restricciones sobre envases de un solo uso empiezan en 2030. La fecha de agosto no implica que todas las medidas posteriores ya sean aplicables. Consulte los avisos oficiales de abajo para identificar el requisito y su fecha.'
      ), t(
        'Before requesting a supplier declaration, give the buyer or importer responsible for the destination market a description of the actual use. Ask them to confirm the packaging classification, applicable obligations and evidence needed, with qualified advice where necessary. A product name such as “cooler bag” is not an applicability decision.',
        '要求供应商出具声明前，应先把实际使用方式提供给负责目的地市场的采购方或进口方，请其确认包装分类、适用义务和所需证据，必要时咨询具备相应资格的专业人士。“保温袋”等产品名称本身不能决定法规适用范围。',
        'Antes de pedir una declaración al proveedor, facilite el uso real al comprador o importador responsable del mercado de destino. Pídale que confirme la clasificación, las obligaciones aplicables y las pruebas necesarias, con asesoramiento cualificado cuando corresponda. El nombre “bolsa térmica” no determina por sí solo la aplicación de la norma.'
      )],
    },
    {
      heading: t('Describe each layer of the proposed pack', '把拟采用的包装逐层写清楚', 'Describa cada capa del embalaje propuesto'),
      paragraphs: [t(
        'YUANEN’s catalogue includes foil-faced liners used with an outer carton, low-profile carriers intended around closed pizza boxes, and taller carriers planned around lidded catering trays. These formats need different packing drawings. A liner specification should identify its fit inside the carton; a carrier specification should identify the food containers it is intended to hold.',
        '远恩目录包含配合外箱使用的铝箔面保温内衬、围绕封闭披萨盒规划的低矮携带袋，以及围绕带盖餐盘规划的较高餐饮配送袋。这些形态需要不同的装载图：内衬规格应明确与纸箱的配合方式；携带袋规格应明确拟装入的食品容器。',
        'El catálogo de YUANEN incluye revestimientos con cara de lámina para cajas exteriores, bolsas bajas previstas para cajas de pizza cerradas y bolsas más altas previstas para bandejas de catering con tapa. Requieren planos de carga distintos: el revestimiento debe especificar su ajuste a la caja; la bolsa, los recipientes que se pretende colocar dentro.'
      )],
      bullets: [t(
        'List the outer carton or carrier, insulating layer, inner facing and separate food container. Identify which surfaces may contact food in the intended use; do not infer suitability from a silver appearance.',
        '分别列出外箱或携带袋、保温层、内侧面层和独立食品容器。标明预定使用时哪些表面可能接触食品，不能仅凭银色外观判断适用性。',
        'Enumere la caja o bolsa exterior, la capa aislante, el revestimiento interior y el recipiente alimentario separado. Identifique las superficies que podrían contactar con alimentos; el aspecto plateado no demuestra su aptitud.'
      ), t(
        'Ask for the proposed material combination and a drawing tied to the quotation or sample reference. For YUANEN’s pizza and catering carriers, the proposed fabric, EPE and foil-facing combination must be confirmed against the order and sample; do not treat it as a fixed specification for every variant.',
        '索取与报价或样品编号对应的拟用材料组合及图纸。远恩披萨袋和餐饮配送袋所拟用的面料、EPE 与铝箔面层组合，应按订单和样品确认，不能把它当作所有版本都固定不变的规格。',
        'Solicite la combinación de materiales y un plano vinculado a la oferta o referencia de muestra. La combinación propuesta de tejido, EPE y cara de lámina de las bolsas de pizza y catering de YUANEN debe confirmarse con el pedido y la muestra; no es una especificación fija para todas las variantes.'
      ), t(
        'Keep direct food contact, cleaning between uses and end-of-life handling as separate questions. A removable food container does not by itself settle the obligations for the surrounding packaging.',
        '把直接食品接触、重复使用之间的清洁，以及使用结束后的处理分别核对。食品使用独立容器，并不能单独决定周围包装的相关义务。',
        'Compruebe por separado el contacto directo con alimentos, la limpieza entre usos y la gestión al final de la vida útil. Un recipiente alimentario separado no resuelve por sí solo las obligaciones del embalaje que lo rodea.'
      )],
    },
    {
      heading: t('Match documents to the material you will order', '让资料对应实际拟采购的材料', 'Vincule los documentos con el material del pedido'),
      paragraphs: [t(
        'When a material report or declaration is supplied, check the named material, issuer, date and stated scope against the proposed construction. Record any mismatch before approving the specification. A general factory audit or a report for a different fabric is not evidence for every layer of a finished carrier.',
        '收到材料报告或声明时，应将其中的材料名称、出具方、日期和说明范围与拟用结构逐项对照，在确认规格前记录不一致之处。通用工厂审核或其他面料的报告，不能作为成品携带袋所有层次的证据。',
        'Al recibir un informe o declaración, compare el material identificado, el emisor, la fecha y el alcance con la construcción propuesta. Registre las diferencias antes de aprobar la especificación. Una auditoría general de fábrica o un informe de otro tejido no acredita todas las capas de una bolsa terminada.'
      ), t(
        'Do not publish “PFAS-free”, “food-contact approved” or “recyclable” from appearance or an unrelated certificate. If such a claim is needed for the order, ask the responsible buyer to specify its basis and the supporting documents required for that exact material combination. This catalogue article supplies no test result for those claims.',
        '不要根据外观或无关证书写上“无 PFAS”“食品接触已获批准”或“可回收”。如果订单需要此类表述，应请负责的采购方明确判断依据，以及该具体材料组合需要哪些支持文件。本文不提供这些表述所需的测试结果。',
        'No publique “sin PFAS”, “aprobado para contacto alimentario” o “reciclable” basándose en la apariencia o en un certificado ajeno. Si el pedido necesita esa afirmación, solicite al comprador responsable su fundamento y los documentos exigidos para esa combinación exacta. Este artículo no aporta resultados de ensayo para tales afirmaciones.'
      )],
    },
    {
      heading: t('Keep packing fit in the same purchase file', '在同一采购档案中保留装载核对', 'Incluya el ajuste de carga en el expediente de compra'),
      paragraphs: [t(
        'A complete material file still leaves the physical pack to be checked. For a carton liner, agree the carton’s usable interior and closure arrangement. For a pizza carrier, use the closed box footprint and intended stack height. For a catering carrier, use the widest tray rim, lid and loaded height, then check level insertion and removal and bottom support on a sample. Nominal bag dimensions alone do not confirm those fits.',
        '材料资料齐全后，仍需核对实际包装配合。纸箱内衬应确认外箱的可用内部空间和封闭方式；披萨携带袋应按封闭盒子的底面范围及预定堆叠高度核对；餐饮配送袋应按餐盘最宽盘沿、盖子和装载高度核对，再在样品上检查水平放入与取出以及底部支撑。仅有标称袋子尺寸不能确认这些配合。',
        'Aunque el expediente de materiales esté completo, falta comprobar el ajuste físico. Para un revestimiento, acuerde el interior útil de la caja y su cierre. Para una bolsa de pizza, use la base de la caja cerrada y la altura de apilado prevista. Para una bolsa de catering, use el borde más ancho, la tapa y la altura cargada; compruebe con una muestra la entrada y salida horizontal y el soporte de la base. Las dimensiones nominales de la bolsa no confirman esos ajustes.'
      ), t(
        'For an enquiry, send YUANEN the destination market, intended use, container or carton drawing and the documents your buyer requires. Request an order-specific proposal and sample confirmation. Do not assume a fixed capacity, load rating, temperature duration or regulatory approval from the product page.',
        '询盘时，请向远恩提供目的地市场、预定用途、食品容器或纸箱图纸，以及采购方要求的文件清单，索取对应订单的方案并确认样品。不要从产品页面推定固定容量、承重等级、保温时长或法规批准。',
        'Para consultar a YUANEN, envíe el mercado de destino, el uso previsto, el plano del recipiente o caja y los documentos que exige su comprador. Solicite una propuesta específica del pedido y la confirmación de una muestra. La página del producto no implica una capacidad fija, carga admisible, duración térmica ni aprobación normativa.'
      )],
    },
  ],
  sources: [
    { title: t('European Commission: packaging rules enter application', '欧盟委员会：包装规则开始适用', 'Comisión Europea: aplicación de las normas de envases'), url: 'https://environment.ec.europa.eu/news/new-eu-rules-packaging-enter-application-2026-08-11_en', publishedAt: '2026-08-11' },
    { title: t('European Commission: less packaging waste and easier recycling', '欧盟委员会：减少包装废弃物并促进回收', 'Comisión Europea: menos residuos de envases y un reciclaje más fácil'), url: 'https://commission.europa.eu/news-and-media/news/new-packaging-rules-less-waste-and-easier-recycling-2026-08-12_en', publishedAt: '2026-08-12' },
    { title: t('YUANEN foil insulated box liners', '远恩铝箔保温箱内衬', 'Revestimientos térmicos de lámina de YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
    { title: t('YUANEN insulated pizza delivery bags', '远恩披萨配送保温袋', 'Bolsas térmicas de reparto de pizza de YUANEN'), url: 'https://yuanenbag.com/products/insulated-pizza-delivery-bags/' },
    { title: t('YUANEN insulated catering bags', '远恩餐饮配送保温袋', 'Bolsas térmicas de catering de YUANEN'), url: 'https://yuanenbag.com/products/insulated-catering-bags/' },
  ],
  relatedProducts: ['foil-insulated-box-liners', 'insulated-pizza-delivery-bags', 'insulated-catering-bags'],
  image: {
    file: 'images/editorial/2026-10-10/insulated-packaging-carton-workbench.webp',
    alt: t('An open cardboard carton with a crinkled silver liner on a wooden packing bench', '木质打包台上放着一个带褶皱银色内衬的敞口纸箱', 'Caja de cartón abierta con un revestimiento plateado arrugado sobre una mesa de embalaje de madera'),
    caption: t('A generic lined carton on a packing bench. It does not depict a verified YUANEN order or a compliance test.', '打包台上的通用内衬纸箱，不代表已核验的远恩订单或合规测试。', 'Caja genérica con revestimiento sobre una mesa de embalaje. No representa un pedido verificado de YUANEN ni un ensayo de conformidad.'),
    kind: 'illustration',
  },
}

export default article
