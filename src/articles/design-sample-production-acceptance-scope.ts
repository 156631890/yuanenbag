import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })
const scope = t('Confirmed ___; open ___', '已确认___；未决___', 'Confirmado ___; pendiente ___')
const owner = t('Owner ___; next decision ___', '责任人___；下一决定___', 'Responsable ___; próxima decisión ___')

const article: EditorialArticle = {
  kind: 'guide',
  slug: 'design-sample-production-acceptance-scope',
  publishedAt: '2026-10-23',
  title: t('Define What a Design Sample Approves Before Production', '量产前，写清设计样品的批准范围', 'Defina qué aprueba una muestra de diseño antes de producir'),
  description: t('Record which features a handmade design sample confirms and which machine-order details still need evidence. Use an item-by-item approval-scope record before ordering.', '逐项记录手工设计样品确认了哪些内容，以及机器订单哪些细节仍需依据；下单前明确批准范围、未决项与下一确认节点。', 'Registre qué confirma una muestra manual de diseño y qué detalles del pedido mecanizado siguen pendientes. Defina el alcance de aprobación antes de pedir.'),
  intro: t('YUANEN’s self-adhesive foil-bag page states that machine-made orders also use handmade samples and that construction may differ. That makes a general “sample approved” note too broad for a purchasing record. Identify what was actually reviewed, the sample’s production method and the evidence still needed for the proposed order.', '远恩自粘铝箔袋页面说明，机器大货也以手工样确认，工艺可能存在差异。因此，采购记录只写“样品通过”范围过宽。应注明实际检查了什么、样品采用什么制作方式，以及拟定订单仍需哪些依据。', 'La página de bolsas autoadhesivas de aluminio YUANEN indica que los pedidos mecanizados también usan muestras manuales y que la fabricación puede diferir. Por eso, anotar simplemente “muestra aprobada” resulta demasiado amplio. Identifique lo revisado, el método de fabricación de la muestra y la evidencia pendiente para el pedido propuesto.'),
  sections: [
    {
      heading: t('Name the sample before naming the approval', '先标明样品，再说明批准内容', 'Identifique la muestra antes de aprobar'),
      paragraphs: [
        t('Record the sample ID, revision, date, preparation method and the drawing or artwork it represents. Ask the supplier which parts were made by the intended order process and which were assembled differently for the sample. If that relationship is unknown, keep it unanswered rather than assume that appearance makes the sample representative of every production feature.', '记录样品编号、版本、日期、制作方式，以及对应的图纸或印稿。询问供应方哪些部分采用拟定订单工艺，哪些部分为了打样采用不同方式制作。如果对应关系未知，应列为待答项，不能因外观相近就认为样品代表所有量产特征。', 'Anote referencia, revisión, fecha, método y plano o diseño representados. Pregunte qué partes se realizaron con el proceso previsto para el pedido y cuáles se montaron de otro modo para la muestra. Si no se conoce esa relación, déjela pendiente; una apariencia similar no hace representativas todas las características de producción.'),
        t('Use separate references for the artwork file, physical pouch and any loaded arrangement. A buyer may be ready to accept a logo position while still waiting for a finished-dimension drawing or joining detail. Give each decision its own scope and evidence instead of letting one signature close every open question.', '印稿文件、实物袋及装载方案应分别设置编号。采购者可能已经能够确认标志位置，但仍在等待成品尺寸图或连接细节。每项决定都应写明范围与依据，不能用一个签名结束全部未决问题。', 'Utilice referencias separadas para el archivo gráfico, la bolsa física y cualquier disposición cargada. Puede aceptarse la posición de un logotipo mientras siguen pendientes las medidas finales o una unión. Dé a cada decisión su alcance y evidencia, sin cerrar todas las cuestiones con una sola firma.'),
      ],
    },
    {
      heading: t('Copy an approval-scope record for the enquiry', '复制一份批准范围记录用于沟通', 'Copie un registro del alcance de aprobación'),
      paragraphs: [
        t('Complete this layout jointly with the supplier for the actual sample. The blank fields are prompts, not accepted results. For every confirmed item, identify the sample or document and the exact condition reviewed. Keep unfinished rows open and assign the next decision to the person responsible for resolving it.', '可与供应方共同按实际样品填写下表。空白字段属于填写提示，不是已经接受的结果。每一项已确认内容都应关联样品或文件，并说明具体检查条件。未完成行继续保持未决状态，明确由谁负责解决及作出下一决定。', 'Complete este formato con el proveedor para la muestra real. Los espacios son indicaciones, no resultados aceptados. Vincule cada punto confirmado a su muestra o documento y a la condición revisada. Mantenga abiertas las filas incompletas y asigne la siguiente decisión a la persona responsable.'),
      ],
      table: {
        caption: t('Design-sample approval scope to complete', '待填写的设计样品批准范围表', 'Alcance de aprobación de la muestra para completar'),
        columns: [t('Review item', '检查项目', 'Punto de revisión'), t('This sample confirms', '本样品确认内容', 'Qué confirma esta muestra'), t('Evidence still needed', '仍需依据', 'Evidencia pendiente'), t('Responsibility', '责任与节点', 'Responsabilidad')],
        rows: [
          [t('Appearance and artwork', '外观与印稿', 'Aspecto y diseño'), scope, t('Artwork revision and viewed surface ___', '印稿版本与所看表面___', 'Revisión gráfica y superficie vista ___'), owner],
          [t('Layers and finished dimensions', '层结构与成品尺寸', 'Capas y medidas terminadas'), scope, t('Order drawing/material record; representative check ___', '订单图与材料记录；代表性核实___', 'Plano y materiales del pedido; revisión representativa ___'), owner],
          [t('Side seals and adhesive flap', '侧封边与粘封袋口', 'Sellos laterales y solapa adhesiva'), scope, t('Proposed order construction and available verification ___', '拟定订单工艺及可用核实方式___', 'Fabricación prevista y verificación disponible ___'), owner],
          [t('Basic loading arrangement', '基本装载方案', 'Disposición básica de carga'), scope, t('Closed contents, pouch revision and reviewed action ___', '闭合内装物、袋体版本与检查动作___', 'Contenido cerrado, revisión y operación revisada ___'), owner],
          [t('Protection or thermal claims', '防护或温控主张', 'Afirmaciones de protección o temperatura'), scope, t('Applicable full-pack evidence and agreed conditions ___', '适用的完整装载依据及约定条件___', 'Evidencia del conjunto y condiciones acordadas ___'), owner],
        ],
      },
    },
    {
      heading: t('Ask what can represent the order process', '询问怎样核实拟定订单工艺', 'Pregunte cómo verificar el proceso del pedido'),
      paragraphs: [
        t('Ask which production-representative sample, process information or other evidence can be supplied for unresolved features, and when it can be reviewed. Do not assume a machine-made trial or first-piece service is available. If a proposed sample cannot be provided, ask both parties to record an alternative verification arrangement and who must accept it before the relevant order decision.', '对于未决特征，应询问可提供什么代表拟定生产工艺的样品、工艺资料或其他依据，以及何时能够检查。不要默认必有机器工艺样或首件服务。拟定样品无法提供时，应由双方记录替代核实安排，并明确在相关订单决定之前由谁接受该安排。', 'Para lo pendiente, pregunte qué muestra representativa, información del proceso u otra evidencia puede aportarse y cuándo se revisará. No dé por disponible una prueba mecanizada ni un servicio de primera pieza. Si no puede entregarse la muestra propuesta, documenten una alternativa y quién debe aceptarla antes de la decisión correspondiente del pedido.'),
        t('A substitute document or image should state which question it answers and which it leaves open. A drawing may identify an intended seal position without demonstrating the strength of that seal. Likewise, a photograph of a closed pouch does not show every layer or establish how an adhesive closure will perform in the buyer’s use.', '替代文件或图片应说明回答了哪一个问题、哪些问题仍未解决。图纸可以标明拟定封边位置，但不能据此证明封边强度；同样，闭合袋体照片也不展示全部层结构，更不能证明粘封在买家实际用途中的表现。', 'El documento o imagen alternativos deben indicar qué pregunta responden y cuál sigue abierta. Un plano puede situar un sello previsto sin demostrar su resistencia. Una foto de la bolsa cerrada tampoco muestra todas las capas ni acredita el comportamiento del adhesivo en el uso del comprador.'),
      ],
    },
    {
      heading: t('Carry the limited approval into the order', '把有范围的确认带入订单', 'Traslade al pedido una aprobación delimitada'),
      paragraphs: [
        t('Reference the accepted sample, artwork, drawing and open-item record in the order discussion. If a material, seal, adhesive flap or finished dimension changes, identify the revision and reassess the affected approvals. Do not relabel “not yet checked” as accepted merely because another row is complete. Agree any inspection method or tolerance for that specific order rather than invent a general acceptance percentage here.', '订单沟通应引用已接受样品、印稿、图纸及未决项记录。材料、封边、粘封袋口或成品尺寸改变后，要标明版本并重新判断哪些确认受影响。不能因另一行已经完成，就把“尚未检查”改写为已接受。检验方法或公差应按具体订单约定，本文不设通用验收比例。', 'En el pedido, cite muestra, diseño, plano y registro de pendientes aceptados. Si cambian material, sello, solapa adhesiva o medidas terminadas, identifique la revisión y reevalúe las aprobaciones afectadas. No convierta “sin revisar” en aceptado porque otra fila esté completa. Acuerde el método de inspección o tolerancia para ese pedido, sin imponer aquí un porcentaje universal.'),
        t('This record concerns decisions before production. It does not replace arrival-lot checks or a separate performance trial of the complete packed system. Construction, dimensions, quantities, sample availability and delivery terms require supplier and order confirmation. The pictured pouch is visual guidance, not a signed sample or evidence that machine production has passed inspection.', '这份记录解决生产前的决定，不替代到货批次检查，也不替代完整装载系统的独立性能试验。结构、尺寸、数量、样品可提供情况和交付条件，需要供应方及订单确认。配图仅提供外观引导，不是签样，也不证明机器大货已通过检验。', 'El registro se refiere a decisiones previas a producción. No sustituye la revisión del lote recibido ni una prueba independiente del conjunto embalado. Construcción, medidas, cantidades, disponibilidad de muestras y entrega requieren confirmación del proveedor y del pedido. La imagen orienta sobre el formato; no es una muestra firmada ni prueba de inspección superada en fabricación mecanizada.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN self-adhesive foil bags and handmade-sample terms', '远恩自粘铝箔袋及手工样品说明', 'Bolsas autoadhesivas YUANEN y condiciones de muestra manual'), url: 'https://yuanenbag.com/products/self-adhesive-foil-bags/' },
    { title: t('YUANEN customization and confirmation process', '远恩定制与确认流程', 'Proceso de personalización y confirmación YUANEN'), url: 'https://yuanenbag.com/customization/' },
  ],
  relatedProducts: ['self-adhesive-foil-bags'],
  image: {
    file: 'images/editorial/2026-10-23/silver-pouch-open-release-flap.webp', kind: 'illustration',
    alt: t('A silver foil-faced pouch with its adhesive flap open and a white release strip on a grey surface', '灰色表面上，一只银色铝箔面层袋展开粘封袋口，可见白色离型纸条', 'Una bolsa con cara plateada, solapa adhesiva abierta y tira protectora blanca sobre una superficie gris'),
    caption: t('Foil-faced pouch with an open flap. This is not a signed sample or a machine-production inspection record.', '展开袋口的铝箔面层袋，画面不是签样或机器大货检验记录。', 'Bolsa con cara de aluminio y solapa abierta. No representa una muestra firmada ni un registro de inspección de producción mecanizada.'),
  },
}
export default article
