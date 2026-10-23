import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'amcor-barcelona-packaging-conference-recap',
  publishedAt: '2026-10-23',
  eventDate: '2026-10-20',
  market: t('Europe / EMEA', '欧洲／EMEA', 'Europa / EMEA'),
  title: t('Amcor Reviews Barcelona Packaging Sustainability Discussions', 'Amcor回顾巴塞罗那包装可持续会议讨论', 'Amcor repasa los debates sobre sostenibilidad del embalaje en Barcelona'),
  description: t('Amcor’s Barcelona conference recap connects circular design, material supply and product protection. Buyers still need evidence for their own packaging assembly.', 'Amcor的巴塞罗那会议回顾讨论循环设计、材料供应与产品保护。采购者仍需为自己的包装组合核实对应证据。', 'Amcor repasa el diseño circular, el suministro de materiales y la protección. El comprador necesita pruebas correspondientes a su propio conjunto de embalaje.'),
  intro: t('On 20 October 2026, Amcor published a recap of the Smithers Sustainability in Packaging Europe conference in Barcelona. It discussed recycling design, recycled-material supply and maintaining product protection when choosing materials.', '2026年10月20日，Amcor发布对Smithers主办的巴塞罗那欧洲包装可持续会议的回顾，讨论回收设计、再生材料供应，以及选材时维持产品保护要求。', 'El 20 de octubre de 2026, Amcor publicó un repaso de la conferencia Sustainability in Packaging Europe de Smithers en Barcelona. Abordó el diseño para reciclaje, el suministro de material reciclado y la protección del producto al elegir materiales.'),
  sections: [
    {
      heading: t('The date belongs to the company’s recap', '日期对应企业回顾文章', 'La fecha corresponde al repaso de la empresa'),
      paragraphs: [
        t('20 October is the recap’s publication date. The conference is reported as an October event; exact conference days are unspecified.', '10月20日是回顾文章的发布日期。来源仅说明会议在10月举行，未给出具体会期。', 'El 20 de octubre es la fecha de publicación del repaso. La conferencia se sitúa en octubre, sin precisar los días.'),
      ],
    },
    {
      heading: t('Ask what each piece of evidence covers', '先问清每份证据对应什么', 'Pregunte qué cubre cada prueba'),
      paragraphs: [
        t('Our purchasing interpretation is to give environmental information and packing-performance information separate entries in the project brief. An environmental description of a material does not establish the usable space, closure or temperature behaviour of the finished pack. Equally, a sample that loads successfully does not establish a recycling route in the destination market.', '我们的采购判断是，在项目简报中分别记录环境信息与装载性能信息。某种材料的环境描述，不能确定成品组合的可用空间、闭合情况或温度表现；样品能够装入，也不能确定目的市场的回收路径。', 'Nuestra interpretación de compra es registrar por separado la información ambiental y el comportamiento del embalaje. Una descripción ambiental del material no determina el espacio útil, el cierre ni el comportamiento térmico del conjunto. Que una muestra se pueda cargar tampoco demuestra una vía de reciclaje en el mercado de destino.'),
      ],
      bullets: [
        t('Identify the component: material, layer structure, joining method and the exact sample or document revision. Avoid a single “sustainable packaging” field covering several unlike parts.', '明确组件：记录材料、层结构、连接方式及对应样品或文件版本，避免用一个“可持续包装”字段涵盖不同部件。', 'Identifique el componente: material, capas, unión y revisión exacta de muestra o documento. Evite un único campo de “embalaje sostenible” para piezas distintas.'),
        t('Identify the proposed destination and use. Ask what claim the supplier is making, which component it concerns and what supporting information is available. Leave unconfirmed claims open.', '明确拟定目的地和用途，询问供应商提出什么主张、针对哪个组件，以及有哪些支持资料；未核实的主张保持待确认。', 'Defina el destino y uso previstos. Pregunte qué afirma el proveedor, a qué componente se refiere y qué documentación aporta. Mantenga pendientes las afirmaciones sin confirmar.'),
        t('Record the loaded assembly separately: actual outer box, liner, contents, coolant if needed, and closure. Attach the agreed review conditions and results to that version.', '另列完整装载组合：实际外箱、内衬、内装物、需要时的冰源及闭合方式，把约定检查条件和结果对应到该版本。', 'Registre aparte el conjunto cargado: caja real, forro, contenido, refrigerante si hace falta y cierre. Vincule las condiciones y resultados de revisión a esa versión.'),
      ],
    },
    {
      heading: t('A box-liner enquiry shows why the scope matters', '箱内衬询价说明范围为何需要分清', 'La consulta de un forro muestra por qué importa el alcance'),
      paragraphs: [
        t('YUANEN’s current foil-box-liner page shows a soft foil-faced liner inside a white foam outer box. The outer box is a demonstration prop, not included automatically in a liner quotation. Foam type, thickness and layer arrangement remain items to confirm. The silver appearance alone cannot support a recycling or recycled-content claim for the liner, the box or their combination.', '远恩当前铝箔箱内衬页面展示白色泡沫外箱内的柔性铝箔面内衬。外箱是展示道具，不默认包含在内衬报价中。泡沫类型、厚度和层结构仍需确认；银色外观本身不能证明内衬、外箱或两者组合可回收，也不能证明含再生材料。', 'La página actual de YUANEN muestra un forro flexible con cara de aluminio dentro de una caja exterior blanca de espuma. La caja es un elemento de demostración y no se incluye automáticamente en la oferta del forro. El tipo de espuma, espesor y disposición de capas requieren confirmación. El aspecto plateado no acredita reciclabilidad ni contenido reciclado del forro, la caja o su conjunto.'),
        t('If a supplier proposes a material change, keep the original specification beside the proposed revision and identify which evidence needs renewing. Recheck loading and closure with the actual box. Where temperature control is required, agree a separate complete-system trial with the responsible parties; this conference recap supplies no thermal rating for a YUANEN liner.', '若供应方提出换材，应并列保留原规格与拟定版本，明确哪些证据需要更新，并用实际外箱重新检查装入和闭合。项目确需温度管理时，由相关责任方另行约定整套系统测试；这份会议回顾不提供远恩内衬的保温等级。', 'Si el proveedor propone cambiar el material, conserve la especificación original junto a la revisión e identifique qué pruebas deben renovarse. Compruebe de nuevo la carga y el cierre con la caja real. Cuando se requiera control térmico, acuerde con los responsables un ensayo del sistema completo; el repaso no aporta una clasificación térmica del forro YUANEN.'),
      ],
    },
    {
      heading: t('Carry unresolved items into the quotation', '把未确认项带入报价确认', 'Mantenga los pendientes en la confirmación de oferta'),
      paragraphs: [
        t('Before accepting a quotation, list the supplied components, agreed specifications and outstanding documents against the same project reference. Do not replace an unresolved item with a broad environmental slogan. Dimensions, materials, quantity, accessories and delivery terms follow the confirmed sample and written order. This article’s procurement suggestions are editorial guidance, not Amcor instructions to its customers or evidence of a relationship with YUANEN.', '接受报价前，用同一项目编号列明供货组件、约定规格和待补文件，不用宽泛环境宣传替代未确认项。尺寸、材料、数量、配件及交付条件以确认样品和书面订单为准。本文采购建议属于编辑判断，不是Amcor对其客户的指令，也不证明其与远恩存在合作关系。', 'Antes de aceptar una oferta, vincule los componentes suministrados, las especificaciones acordadas y los documentos pendientes a la misma referencia de proyecto. No sustituya un pendiente por un lema ambiental. Medidas, materiales, cantidad, accesorios y entrega se acuerdan mediante muestra y pedido escrito. Las recomendaciones son orientación editorial, no instrucciones de Amcor a sus clientes ni prueba de una relación con YUANEN.'),
      ],
    },
  ],
  sources: [
    { title: t('Amcor Barcelona conference recap, 20 October 2026', 'Amcor巴塞罗那会议回顾，2026年10月20日', 'Repaso de Amcor de la conferencia de Barcelona, 20 de octubre de 2026'), url: 'https://www.amcor.com/insights/blogs/four-sustainability-takeaways-barcelona-2026', publishedAt: '2026-10-20' },
    { title: t('YUANEN box-liner scope and sample requirements', '远恩箱内衬供货范围与样品要求', 'Alcance y requisitos de muestra del forro YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
    file: 'images/editorial/2026-10-23/plain-clear-packaging-film-roll.webp', kind: 'illustration',
    alt: t('An unprinted clear packaging-film roll with a loose sheet on a grey workbench', '灰色工作台上的无印刷透明包装膜卷，前方垂放一段薄膜', 'Un rollo de película transparente sin impresión con una lámina suelta sobre una mesa gris'),
    caption: t('Generic packaging-film scene. It does not show the Barcelona conference, an Amcor material or a YUANEN product.', '通用包装膜场景，画面不展示巴塞罗那会议、Amcor材料或远恩产品。', 'Escena genérica de película de embalaje. No muestra la conferencia de Barcelona, un material de Amcor ni un producto YUANEN.'),
  },
}
export default article
