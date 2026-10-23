import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })
const pending = t('Not confirmed', '未确认', 'Sin confirmar')

const article: EditorialArticle = {
  kind: 'guide',
  slug: 'foil-metallised-lining-specification',
  publishedAt: '2026-10-23',
  title: t('A Silver Lining Needs a Layer Specification', '银色内衬询价，要分清铝箔与镀铝膜资料', 'Un forro plateado necesita una especificación de sus capas'),
  description: t('Compare two insulated-lining quotations by layer, substrate, metal description, thickness basis, joining details and sample version instead of silver appearance.', '比较银色保温内衬报价时，逐层核对基材、金属层描述、厚度口径、复合与接缝方式及样品版本，不凭外观认定材料相同。', 'Compare ofertas de forros térmicos por capas, sustrato, descripción del metal, base del espesor, uniones y versión de muestra, sin decidir por su aspecto plateado.'),
  intro: t('Two quotations can both describe a silver insulated lining while leaving different layers unspecified. Before comparing prices, ask each supplier for the same layer-by-layer record. The useful decision is whether the proposed structures are actually comparable and which differences still need sample or document review.', '两份报价都可能写着“银色保温内衬”，却遗漏不同的层结构信息。比较价格前，应请两家供应方填写相同的逐层记录，先判断两种拟定结构是否真正可比，再明确哪些差异仍需样品或文件核实。', 'Dos ofertas pueden describir un forro térmico plateado y dejar sin definir capas distintas. Antes de comparar precios, solicite a ambos proveedores el mismo registro por capas. La decisión útil es comprobar si las estructuras son comparables y qué diferencias requieren todavía muestras o documentos.'),
  sections: [
    {
      heading: t('The material name needs a position in the assembly', '材料名称要对应具体层位', 'El nombre del material debe indicar su posición'),
      paragraphs: [
        t('For each layer, record its position from the contents towards the outer container, the supplier’s exact material description and the document version. Ask whether a quoted metal layer is described as aluminium foil or as a metallised film, and which substrate is named. If the supplier only writes “foil”, return the unanswered fields rather than infer the missing structure from a photograph.', '每一层都应记录从内装物到外容器方向的层位、供应方准确材料描述及文件版本。询问所报金属层写的是铝箔还是镀铝膜，以及对应什么基材。如果供应方只写“foil”，应把未回答字段退回补充，不凭照片推断缺失结构。', 'Para cada capa, registre su posición desde el contenido hacia el recipiente exterior, la descripción exacta del proveedor y la versión del documento. Pregunte si la capa metálica se describe como lámina de aluminio o película metalizada y qué sustrato se indica. Si solo figura “foil”, solicite completar los campos en lugar de deducir la estructura de una foto.'),
        t('Innovia’s 14 October 2026 announcement illustrates why names matter: it describes a metallised BOPP film proposed to replace aluminium foil in certain polypropylene laminates. That example does not identify the layers in a YUANEN liner, establish a material substitution or transfer any recycling or thermal claim to it.', 'Innovia于2026年10月14日公布一种拟用于替代部分聚丙烯复合结构中铝箔的镀铝BOPP薄膜，说明区分材料名称有实际意义。该例不识别远恩内衬的各层材料，不代表已替材，也不能把相关回收或保温主张转移到远恩内衬。', 'El anuncio de Innovia del 14 de octubre de 2026 presenta una película BOPP metalizada propuesta para sustituir aluminio en determinados laminados de polipropileno. El ejemplo no identifica las capas de un forro YUANEN, no acredita una sustitución ni le transfiere afirmaciones de reciclabilidad o rendimiento térmico.'),
      ],
    },
    {
      heading: t('Use the same fields for both quotations', '两份报价使用相同对照字段', 'Utilice los mismos campos en ambas ofertas'),
      paragraphs: [
        t('Copy the following layout into the enquiry and repeat it for every layer. Replace “not confirmed” only when a matching document or agreed sample supplies the answer. Keep the supplier’s units and measurement basis beside every thickness; a material-layer value and a finished-composite value must not silently become the same comparison.', '可将下列格式复制到询价文件，按每一层重复填写。只有对应文件或双方确认样品提供了答案，才把“未确认”改为具体内容。每项厚度旁保留供应方单位和测量口径，不把单层材料值与成品复合厚度直接视为同一比较项。', 'Copie este formato en la consulta y repítalo para cada capa. Sustituya “sin confirmar” solo cuando exista respuesta en un documento correspondiente o una muestra acordada. Mantenga las unidades y la base de medida junto al espesor; no equipare silenciosamente el valor de una capa con el del compuesto terminado.'),
      ],
      table: {
        caption: t('Layer record to copy and complete', '可复制填写的逐层资料对照表', 'Registro por capas para copiar y completar'),
        columns: [t('Field', '字段', 'Campo'), t('Supplier A', '供应方A', 'Proveedor A'), t('Supplier B', '供应方B', 'Proveedor B'), t('Evidence to request', '应索取的依据', 'Evidencia solicitada')],
        rows: [
          [t('Layer position and substrate', '层位与基材', 'Posición y sustrato'), pending, pending, t('Layer drawing and material description', '层结构图与材料描述', 'Plano de capas y descripción')],
          [t('Metal-layer description', '金属层描述', 'Descripción de la capa metálica'), pending, pending, t('Foil or metallised film; exact named grade if available', '铝箔或镀铝膜；如有则列明准确牌号', 'Lámina o película metalizada; grado exacto si existe')],
          [t('Thickness and basis', '厚度及口径', 'Espesor y base'), pending, pending, t('Layer or finished composite, units and measurement conditions', '单层或成品复合、单位及测量条件', 'Capa o compuesto terminado, unidades y condiciones')],
          [t('Bonding and joints', '复合与接缝', 'Laminación y uniones'), pending, pending, t('How layers join; seam and closure drawing', '各层连接方式、接缝与闭合图', 'Unión de capas y plano de juntas y cierre')],
          [t('Document and sample link', '文件与样品关联', 'Documento y muestra'), pending, pending, t('Revision, sample ID, confirmed items and open questions', '版本、样品编号、已确认项及未决问题', 'Revisión, referencia, puntos confirmados y pendientes')],
        ],
      },
    },
    {
      heading: t('Keep the liner and its white foam box identifiable', '内衬与白泡沫外箱分别确认', 'Identifique el forro y la caja de espuma blanca'),
      paragraphs: [
        t('YUANEN’s current box-liner application uses a white foam outer box. Record the liner’s proposed layers separately from that outer container. The page and its images are useful for the packing format, but they do not supply every order’s foam chemistry, thickness or layer specification. Do not fill those blanks from the colour or apparent thickness in an image.', '远恩当前箱内衬应用采用白泡沫外箱。内衬拟定各层应与外容器分别记录。页面及图片可以帮助确认装箱形式，但不提供每个订单的全部泡沫类型、厚度或层结构规格，不应依据颜色或图中视觉厚度填补未知项。', 'La aplicación actual del forro YUANEN utiliza una caja exterior de espuma blanca. Registre las capas propuestas del forro aparte del recipiente exterior. La página y las imágenes ayudan a definir el formato, pero no indican la química de la espuma, el espesor ni todas las capas de cada pedido. No complete esos datos por el color o espesor aparente de una imagen.'),
        t('Include the box’s usable interior, the closed inner packs, proposed coolant and the liner’s closure in the same sample reference. A material change may leave the overall shape similar while changing what the earlier sample or document covers. Identify the changed component and agree which fit, handling and full-pack checks need to be repeated.', '同一份样品记录应包括外箱可用内部空间、闭合内包装、拟定冰源及内衬闭合方式。材料改变后，整体外形可能相近，但之前样品或文件的适用范围已经不同。应标明改变的组件，并约定哪些试装、操作及完整装载检查需要重做。', 'Vincule a la misma muestra el interior útil de la caja, los envases cerrados, el refrigerante propuesto y el cierre del forro. Un cambio de material puede conservar una forma parecida y alterar lo que cubrían la muestra o el documento anterior. Identifique el componente cambiado y acuerde qué comprobaciones de ajuste, manejo y conjunto deben repetirse.'),
      ],
    },
    {
      heading: t('Accept a comparison before accepting a substitution', '先确认可比条件，再确认替材', 'Confirme la comparación antes de aceptar una sustitución'),
      paragraphs: [
        t('If oxygen or water-vapour transmission data are offered, keep the stated test conditions and the material or package actually tested attached to those figures. Those barrier claims do not state how long your loaded insulated shipment will remain in its target conditions. Request a separate full-system trial plan for the actual contents, coolant, outer box, closure and route conditions.', '若供应方提供氧气或水蒸气透过数据，应同时保留所列测试条件，以及实际被测材料或包装对象。这类阻隔主张不能说明你的完整保温运输包装在目标条件内能保持多久。实际内装物、冰源、外箱、闭合方式和路线条件，应另行形成整套系统试验方案。', 'Si se ofrecen datos de transmisión de oxígeno o vapor de agua, conserve sus condiciones y el material o envase realmente ensayado. Esas afirmaciones de barrera no indican cuánto tiempo permanecerá el envío térmico cargado en sus condiciones objetivo. Solicite un plan separado para el sistema real: contenido, refrigerante, caja exterior, cierre y ruta.'),
        t('Ask for a revised quotation that references the agreed layer record and sample. Leave unresolved layers or claims explicitly open; do not mark a replacement accepted merely because both samples look silver. Construction, dimensions, supply scope and commercial terms remain subject to the confirmed sample and order. This guide is a document-comparison method, not a test or compliance approval.', '请供应方在修订报价中关联双方确认的层结构记录和样品。未决层位或主张继续明确列为待确认，不能仅因两份样品都是银色就接受替材。结构、尺寸、供货范围与商业条件仍按确认样品及订单确定。本文提供资料比较方法，不是测试或合规批准。', 'Pida una oferta revisada vinculada al registro de capas y la muestra acordados. Mantenga abiertos los materiales o afirmaciones pendientes; no acepte una sustitución porque ambas muestras sean plateadas. Construcción, medidas, suministro y condiciones comerciales se fijan con la muestra y el pedido. Esta guía es un método de comparación documental, no una aprobación de ensayo o conformidad.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN box liners and current foam-box applications', '远恩箱内衬与当前泡沫箱应用', 'Forros YUANEN y aplicaciones actuales en caja de espuma'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
    { title: t('Innovia material announcement, 14 October 2026', 'Innovia材料公告，2026年10月14日', 'Anuncio de material de Innovia, 14 de octubre de 2026'), url: 'https://www.innoviafilms.com/post/innovia-films-launches-propafilm-tm-chbm-an-ultra-high-barrier-metallised-bopp-film-designed-to-replace-aluminium-foil-in-recyclable-flexible-packaging', publishedAt: '2026-10-14' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
    file: 'images/editorial/2026-10-23/open-foam-box-soft-silver-liner.webp', kind: 'illustration',
    alt: t('An empty white foam box with a folded silver liner and a separate white lid on a light grey surface', '浅灰表面上，白泡沫箱内铺着折叠银色内衬，旁边放着独立白色箱盖', 'Una caja de espuma blanca vacía con forro plateado plegado y una tapa blanca aparte sobre una superficie gris clara'),
    caption: t('Foam-box and silver-liner packing format. The image does not identify every layer, its chemistry or its thickness.', '白泡沫箱与银色内衬的装箱形式，画面不识别全部层位、具体材质或厚度。', 'Formato de caja de espuma con forro plateado. La imagen no identifica todas las capas, su composición ni su espesor.'),
  },
}
export default article
