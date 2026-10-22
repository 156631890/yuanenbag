import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'costco-orange-juice-paper-handle-case',
  publishedAt: '2026-10-22',
  eventDate: '2026-10-19',
  market: t('United States and Mexico', '美国与墨西哥', 'Estados Unidos y México'),
  title: t('Smurfit Westrock Shares Costco Orange-Juice Paper-Handle Case', 'Smurfit Westrock介绍Costco橙汁组合装纸提手案例', 'Smurfit Westrock presenta el caso del asa de papel para zumo de Costco'),
  description: t('A Costco orange-juice case from Smurfit Westrock separates the retail carry handle from an insulated delivery bag. Buyers should specify both handover steps.', 'Smurfit Westrock介绍Costco橙汁组合装纸提手案例。采购时应分别明确零售组合装提手与保温配送包承担的交接动作。', 'El caso de Costco presentado por Smurfit Westrock distingue el asa del paquete comercial de la bolsa térmica de reparto. Defina ambas etapas de entrega.'),
  intro: t('Smurfit Westrock’s website lists a Costco customer story dated 19 October 2026. It describes paperboard handles replacing plastic on three-bottle orange-juice packs, with adoption in the United States and Mexico.', 'Smurfit Westrock官网列出一则日期为2026年10月19日的Costco客户案例，介绍三瓶橙汁组合装以纸板提手替换塑料提手，并在美国与墨西哥采用。', 'La web de Smurfit Westrock incluye un caso de Costco fechado el 19 de octubre de 2026. Describe asas de cartón que sustituyen al plástico en paquetes de tres botellas de zumo de naranja, con adopción en Estados Unidos y México.'),
  sections: [
    {
      heading: t('The date belongs to the published case', '日期对应公开案例', 'La fecha corresponde al caso publicado'),
      paragraphs: [
        t('The date above comes from the company’s customer-story listing. It does not establish the first day the packaging entered production or stores. The underlying account is a supplier case study; this report does not independently certify its performance claims.', '上述日期取自企业官网的客户案例列表，不代表该包装首次生产或进入门店的日期。原文属于供应方案例说明，本文未独立认证其中的性能说法。', 'La fecha procede del listado de casos de la empresa. No establece el primer día de producción ni de llegada a las tiendas. El relato es un caso del proveedor; este artículo no certifica de forma independiente sus prestaciones.'),
      ],
    },
    {
      heading: t('The purchasing question is who carries which package', '采购问题在于谁提起哪一层包装', 'La cuestión de compra es qué envase se levanta en cada paso'),
      paragraphs: [
        t('Our procurement interpretation is to map the handover before comparing handle materials. A shopper may lift a retail multipack by its own handle, while a delivery worker may place the entire group inside a separate carrier. Describe those two actions separately in the enquiry. A successful retail carry arrangement alone cannot establish that the complete group fits, loads or unloads conveniently inside a delivery bag.', '我们的采购判断是，比较提手材质之前先写清交接动作。消费者可能直接提起零售组合装，而配送人员可能将整组装入另一只配送包。询价时应分别描述这两个动作；零售提拿方案成立，并不能单独证明整组能够方便地放入配送包、装载或取出。', 'Nuestra interpretación de compra es describir la entrega antes de comparar materiales del asa. El cliente puede levantar el paquete comercial por su asa, mientras el repartidor introduce el conjunto en otro portador. Separe ambas acciones en la consulta. Un sistema válido para llevar el paquete comercial no demuestra por sí solo que el conjunto encaje y se cargue o descargue cómodamente en una bolsa de reparto.'),
      ],
      bullets: [
        t('Record the complete group’s outside dimensions with its handle in the position used during loading, including any projecting cap or folded tab.', '记录整组的外部尺寸，并注明装包时提手的位置，包括突出瓶盖或折片。', 'Anote las medidas exteriores del conjunto con el asa en la posición de carga, incluidos tapones o pestañas salientes.'),
        t('Identify the point at which the group changes hands and whether it is lifted by the retail handle or supported underneath.', '说明整组在何处交接，以及交接时是提零售提手还是托住底部。', 'Indique dónde cambia de manos el conjunto y si se levanta por el asa comercial o apoyándolo por debajo.'),
        t('If chilled bottles develop surface moisture in the intended use, include that condition in the sample review rather than treating a dry fitting as the full review.', '若冷藏瓶在拟定使用条件下出现表面水汽，应把该条件纳入样品检查，不能仅凭干燥试装完成整体验收。', 'Si las botellas refrigeradas presentan humedad superficial en el uso previsto, incluya esa condición en la revisión de muestras; el encaje en seco no completa la revisión.'),
      ],
    },
    {
      heading: t('YUANEN’s existing beverage bag has a separate scope', '远恩既有饮品包承担另一层职责', 'La bolsa de bebidas YUANEN tiene un alcance distinto'),
      paragraphs: [
        t('The current YUANEN beverage-delivery bag page shows a top-opening design with short body handles, a nonwoven outer layer and an aluminium-foil inner layer. Its removable textile cup-divider arrangement is a proposed custom structure. A bottle multipack with its own handle needs a sample layout of its own; the cup arrangement shown on that page does not establish suitability or capacity for a bottle group.', '远恩当前饮品配送包页面展示的是上开式、袋身短提手、无纺布外层和铝箔内层方案，可拆织物杯位分隔属于拟定定制结构。自带提手的瓶装组合需要另行试排；页面中的杯位画面不能证明适用于某个瓶组，也不代表该瓶组的额定容量。', 'La página actual de la bolsa de bebidas YUANEN muestra apertura superior, asas cortas en el cuerpo, exterior no tejido e interior de lámina de aluminio. Los separadores textiles extraíbles son una estructura propuesta para personalización. Un conjunto de botellas con asa propia requiere su propia prueba de disposición; los vasos de la página no acreditan su aptitud ni capacidad para ese conjunto.'),
        t('Send a photograph of the actual closed bottle group, the loading sequence and the intended handover to request a bag sample review. State whether the retail handle stays raised, folds down or is removed before packing. Ask for the bag’s proposed internal arrangement and supply scope to be recorded explicitly, then review the complete loaded sample.', '询问配送包样品时，应提供实际闭合瓶组的照片、装入顺序和拟定交接动作，注明零售提手在装包前保持竖起、折下还是取下。要求明确记录袋内拟定布局及供货范围，再检查完整装载的样品。', 'Para revisar una muestra de bolsa, envíe fotos del conjunto real cerrado, la secuencia de carga y la entrega prevista. Aclare si el asa comercial queda levantada, se pliega o se retira antes de embalar. Pida que se documenten la disposición interior propuesta y el suministro, y revise después la muestra completamente cargada.'),
      ],
    },
    {
      heading: t('Keep the case and the order evidence separate', '案例证据与订单确认应分别保留', 'Separe la evidencia del caso de la confirmación del pedido'),
      paragraphs: [
        t('The external case does not demonstrate YUANEN’s involvement, paperboard-handle supply, recyclability, lifting capacity or thermal performance. Bag dimensions, divider details, quantities and delivery terms remain subject to the agreed sample and order. Fit observations, lifting checks and temperature results should each identify the sample and conditions they actually cover.', '外部案例不证明远恩参与该项目、供应纸板提手，也不证明远恩产品的可回收性、承重或保温性能。袋体尺寸、分隔细节、数量和交付条件仍按确认样品及订单确定。试装观察、提拿检查和温度结果应分别标明对应样品及实际条件。', 'El caso externo no acredita participación de YUANEN, suministro de asas de cartón, reciclabilidad, capacidad de carga ni prestaciones térmicas de sus productos. Las medidas, divisiones, cantidades y entrega se fijan mediante muestra y pedido. Cada observación de encaje, revisión de levantamiento y resultado térmico debe identificar la muestra y las condiciones que cubre.'),
      ],
    },
  ],
  sources: [
    { title: t('Smurfit Westrock customer case', 'Smurfit Westrock客户案例', 'Caso de cliente de Smurfit Westrock'), url: 'https://www.smurfitwestrock.com/innovation/customer-stories/costco-orange-juice' },
    { title: t('Smurfit Westrock listing dated 19 October 2026', 'Smurfit Westrock官网列表，日期2026年10月19日', 'Listado de Smurfit Westrock fechado el 19 de octubre de 2026'), url: 'https://www.smurfitwestrock.com/', publishedAt: '2026-10-19' },
    { title: t('YUANEN beverage-delivery bag and sample boundaries', '远恩饮品配送包及样品确认边界', 'Bolsa de bebidas YUANEN y límites sujetos a muestra'), url: 'https://yuanenbag.com/products/insulated-beverage-delivery-bags/' },
  ],
  relatedProducts: ['insulated-beverage-delivery-bags'],
  image: {
    file: 'images/editorial/2026-10-22/kraft-paperboard-two-bottle-carrier.webp', kind: 'illustration',
    alt: t('Two capped bottles of orange juice in a plain brown paperboard carrier on a light grey counter', '浅灰台面上，普通棕色纸板提篮装着两瓶带盖橙汁', 'Dos botellas de zumo de naranja con tapón en un portabotellas de cartón marrón liso sobre una superficie gris clara'),
    caption: t('Generic paperboard bottle carrier. This is not the Costco packaging described in the source or a YUANEN product.', '通用纸板瓶装提篮，画面不是来源中的Costco包装，也不是远恩产品。', 'Portabotellas de cartón genérico. No muestra el envase de Costco descrito en la fuente ni un producto YUANEN.'),
  },
}
export default article
