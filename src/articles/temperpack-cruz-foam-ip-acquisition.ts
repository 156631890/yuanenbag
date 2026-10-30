import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry', slug: 'temperpack-cruz-foam-ip-acquisition', publishedAt: '2026-10-16', eventDate: '2026-10-13',
  market: t('United States', '美国', 'Estados Unidos'),
  title: t('TemperPack Acquires Cruz Foam’s Intellectual Property Portfolio', 'TemperPack收购Cruz Foam知识产权组合', 'TemperPack adquiere la cartera de propiedad intelectual de Cruz Foam'),
  description: t('TemperPack’s IP announcement raises a purchasing question: confirm the offered item, contracting supplier and sample records before assuming supply continuity.', 'TemperPack知识产权交易公告带来的采购问题：先确认所报产品、签约供货主体和样品记录，再判断原规格能否继续采购。', 'El anuncio de TemperPack plantea una cuestión de compra: confirme producto, proveedor contratante y registros de muestra antes de asumir continuidad del suministro.'),
  intro: t('On 13 October 2026, TemperPack announced in Richmond, Virginia, that it had acquired Cruz Foam’s intellectual property portfolio, comprising 23 patents and patent applications across multiple jurisdictions.', '2026年10月13日，TemperPack在美国弗吉尼亚州里士满发布公告，称已收购Cruz Foam的知识产权组合，包含分布于多个司法辖区的23项专利及专利申请。', 'El 13 de octubre de 2026, TemperPack anunció en Richmond, Virginia, la adquisición de la cartera de propiedad intelectual de Cruz Foam, formada por 23 patentes y solicitudes en varias jurisdicciones.'),
  sections: [
    {
      heading: t('Keep the transaction separate from the supply decision', '将交易消息与具体供货确认分开', 'Separe la operación de la decisión de suministro'),
      paragraphs: [
        t('The announced subject is an IP portfolio. For a buyer, our recommendation is to seek written confirmation of the product being offered and the party supplying it. Do not use a news headline as confirmation that a previous item, sample or delivery arrangement remains available.', '公告标的是知识产权组合。对于采购者，我们建议另行取得所报产品和实际供货方的书面确认，不凭一条新闻标题认定原产品、样品或交付安排仍然可用。', 'El objeto anunciado es una cartera de propiedad intelectual. Recomendamos al comprador obtener confirmación escrita del producto ofrecido y de quien lo suministra. Un titular no confirma que sigan disponibles un artículo, una muestra o un acuerdo de entrega anteriores.'),
        t('If an enquiry refers to an earlier material or product name, retain that reference and ask the responding supplier to identify the current item. Record an unanswered continuity question as pending. Avoid silently treating a new quotation as a repeat order for the old specification.', '询价涉及旧材料名或旧产品名时，保留原始名称，请回复询价的供应方标明当前对应产品。连续供货问题未得到答复就记为待确认，不把新报价默认当成旧规格的重复订单。', 'Si la consulta utiliza un nombre de material o producto anterior, consérvelo y pida al proveedor que identifique el artículo actual. Registre como pendiente cualquier duda sobre continuidad. No trate una cotización nueva como repetición de la especificación anterior sin confirmarlo.'),
      ],
    },
    {
      heading: t('Match each confirmation to the item being quoted', '让确认内容对应本次报价产品', 'Vincule cada confirmación al artículo cotizado'),
      paragraphs: [
        t('A practical continuity record can be short: keep the contracting supplier’s name beside the item code, sample revision and quotation reference. Ask the supplier which earlier specification and supporting documents still cover the offered item, and which require replacement. This is a proposed purchasing record, not a conclusion about ownership or contractual rights.', '连续采购记录可以很简洁：将签约供货方名称、产品编号、样品版本和报价编号放在一起，请供应方说明哪些旧规格及配套文件仍覆盖本次产品，哪些需要更新。这是建议的采购记录方式，不是对权属或合同权利的判断。', 'El registro puede ser breve: reúna nombre del proveedor contratante, código de artículo, revisión de muestra y referencia de cotización. Pregunte qué especificaciones y documentos anteriores cubren el producto ofrecido y cuáles deben sustituirse. Es una propuesta de registro de compra, no una conclusión sobre titularidad ni derechos contractuales.'),
        t('Keep quantities, supply scope and the proposed delivery schedule in the written quotation. If an outer container, liner or refrigerant comes from another supplier, identify that boundary too. A material name alone cannot describe who will deliver the assembled shipping pack.', '数量、供货范围和拟定交付计划仍应写入报价。如果外箱、内衬或冰源由其他供应方提供，也要分别标明。仅有材料名称，无法说明整套运输包装由谁负责交付。', 'Incluya cantidades, alcance y calendario previsto en la cotización escrita. Identifique también cualquier recipiente exterior, forro o refrigerante de otro proveedor. El nombre de un material no indica quién entregará el embalaje de transporte completo.'),
      ],
    },
    {
      heading: t('Apply that discipline to a box-liner enquiry', '箱内衬询价也应明确各自供货范围', 'Aplique ese criterio a la consulta de un forro'),
      paragraphs: [
        t('YUANEN’s current box-liner reference shows a separate foil-faced liner inside a white foam box. The outer box and display contents are props, rather than items automatically included in a liner quotation. Ask YUANEN to identify the quoted liner construction and sample reference, then identify the party providing the outer box and any coolant.', '远恩当前箱内衬参考图展示白色泡沫箱内的独立铝箔面内衬。外箱和展示内容物是道具，不默认包含在内衬报价内。询价时请远恩标明所报内衬结构和样品编号，再分别确认外箱及冰源由谁提供。', 'La referencia actual de YUANEN muestra un forro de superficie de aluminio dentro de una caja de espuma blanca. La caja y el contenido expuesto son elementos de escena, no partidas incluidas por defecto en la cotización del forro. Pida a YUANEN construcción y referencia de muestra del forro, y confirme quién aporta caja y refrigerante.'),
        t('For a repeat enquiry, send the previous sample identifier and the changes being requested. Confirm the final specification, quantities and delivery against the new quotation. The external announcement does not show YUANEN using the acquired technology, supplying either company or receiving a certification. No thermal performance or supply guarantee is inferred from it.', '重复询价时，提供原样品编号和本次变更要求，按新报价确认最终规格、数量与交付。外部公告不证明远恩采用被收购技术、向上述企业供货或取得认证，也不能据此推定保温性能或供货保证。', 'Para repetir una consulta, envíe el identificador de muestra anterior y los cambios solicitados. Confirme especificación, cantidades y entrega con la nueva cotización. El anuncio externo no acredita que YUANEN use la tecnología, suministre a esas empresas o reciba una certificación. Tampoco establece rendimiento térmico ni garantía de suministro.'),
      ],
    },
  ],
  sources: [
    { title: t('TemperPack acquisition announcement', 'TemperPack交易公告', 'Anuncio de adquisición de TemperPack'), url: 'https://www.temperpack.com/media/cruzfoam', publishedAt: '2026-10-13' },
    { title: t('YUANEN box-liner structure and quoted scope', '远恩箱内衬结构与报价范围', 'Estructura y alcance cotizado del forro YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
  "file": "images/editorial/2026-10-30-cover-repairs/temperpack-cruz-foam-ip-acquisition.webp",
  "kind": "illustration",
  "alt": {
    "en": "Documents labelled IP, ITEM and SUPPLIER connected by dotted lines and question marks",
    "zh": "标有IP、ITEM和SUPPLIER的文件，以虚线和问号连接",
    "es": "Documentos IP, ITEM y SUPPLIER conectados mediante líneas de puntos e interrogantes"
  },
  "caption": {
    "en": "Generic relationship between intellectual property, quoted item and supplying party; not company documents or a proprietary material sample.",
    "zh": "通用知识产权、报价产品与供货主体关系图，不是企业文件或专有材料样品。",
    "es": "Relación genérica entre propiedad intelectual, artículo cotizado y proveedor; no son documentos de empresa ni una muestra propietaria."
  }
},
}
export default article
