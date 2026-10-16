import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'guide', slug: 'multi-stop-delivery-bag-opening-trial', publishedAt: '2026-10-16',
  title: t('Include Every Stop in an Insulated Delivery-Bag Trial', '逐站开袋和减载，应一起纳入配送试验', 'Incluya cada parada en la prueba de una bolsa térmica de reparto'),
  description: t('Link each opening, closure and unloading step to the remaining load in a multi-stop delivery trial, using the actual bag sample and an agreed route test plan.', '多站配送试验中，把每次开袋、闭合、卸货与剩余装载关联记录，采用实际袋样和约定路线条件，不用出发满载状态代表全程。', 'Relacione aperturas, cierres y descargas con la carga restante en una ruta con varias paradas, usando la muestra real y un plan de prueba acordado.'),
  intro: t('A route with several deliveries has a sequence of load states. Record which packs leave the bag at each stop and how the remaining packs sit before closing it again. Give the person reviewing the trial enough detail to connect the route observations with the sample and packing arrangement used.', '多点配送包含一连串不同的装载状态。记录每站从袋中取走哪些包装，以及再次闭合前剩余包装如何放置，让复核人员能把路线观察与实际使用的样品、装载布局对应起来。', 'Una ruta con varias entregas pasa por distintos estados de carga. Registre qué envases salen en cada parada y cómo quedan los restantes antes de cerrar. Así quien revise la prueba podrá relacionar las observaciones de ruta con la muestra y disposición utilizadas.'),
  sections: [
    {
      heading: t('Start with the actual bag and planned loading order', '以实际袋样和装卸顺序为起点', 'Parta de la muestra real y del orden de descarga'),
      paragraphs: [
        t('YUANEN’s current catering-bag proposal uses a front opening, a panel that folds down and short side handles. Its verified revision has a non-woven exterior and aluminum-foil interior. It does not specify standard shelves, partitions or a rated tray count. Draw the proposed load without adding those features by assumption.', '远恩当前餐盘配送包方案采用前开口、下折前面板和短侧提手；已核验版本为无纺布外层与铝箔内层，不默认有标准层架、分隔或额定餐盘数。绘制拟定装载图时，不自行加入这些配置。', 'La propuesta actual de YUANEN usa apertura frontal, panel abatible y asas laterales cortas. La revisión verificada tiene exterior no tejido e interior de lámina de aluminio. No define estantes, separadores estándar ni cantidad nominal de bandejas. Dibuje la carga prevista sin asumir esos elementos.'),
        t('Identify the bag sample, closed food packs and any refrigerant arrangement in the agreed plan. Mark the planned removal order. Check horizontal access with supported containers and a stable working surface; do not turn the lowered front panel into an assumed load-bearing ramp. Review the space left after each planned removal.', '在约定方案中标明袋样、闭合食品包装及拟用冰源布局，并标出取出顺序。让餐盒保持支撑，在稳定台面上核对水平装取，不把下折前面板默认当承重坡道。每次拟定卸货后，都重新查看剩余空间。', 'Identifique muestra de bolsa, envases cerrados y refrigerantes previstos en el plan acordado. Marque el orden de extracción. Compruebe el acceso horizontal con recipientes apoyados y una superficie estable; no asuma que el panel bajado soporta carga como una rampa. Revise el espacio que queda tras cada extracción prevista.'),
      ],
    },
    {
      heading: t('Use one event log across the route', '沿途使用同一份事件记录', 'Use un único registro de eventos en la ruta'),
      paragraphs: [
        t('Agree the route, measurement method, observation points and acceptance criteria with the people responsible for the food and delivery process before the trial. Use the same time reference for the event log and any measurement records. Do not choose a temperature limit or acceptable opening time from this article.', '试验前，由食品和配送流程负责人确认路线、测量方法、观察位置及验收条件。事件记录与测量记录采用同一时间基准。本文不提供可直接采用的温度限值或合格开袋时长。', 'Antes de probar, acuerde ruta, método de medición, puntos de observación y aceptación con los responsables del alimento y del reparto. Use la misma referencia horaria para eventos y mediciones. Este artículo no fija un límite de temperatura ni un tiempo aceptable de apertura.'),
      ],
      bullets: [
        t('At the start, record the sample revision, packed arrangement and the identifiers of any separate measurement records. Keep the planned route and actual route distinguishable.', '出发时记录样品版本、装载布局及独立测量记录编号，并区分计划路线与实际路线。', 'Al inicio, registre revisión de muestra, disposición e identificadores de las mediciones. Distinga ruta prevista y ruta real.'),
        t('At each stop, record arrival, opening and closure times, the packs removed, the remaining load and any movement of refrigerants or other components.', '每站记录到达、开袋和闭合时间、取走的包装、剩余装载，以及冰源或其他组件是否移动。', 'En cada parada, anote llegada, apertura y cierre, envases retirados, carga restante y cualquier cambio de posición de refrigerantes u otros componentes.'),
        t('Link an exception to its stop: an unplanned wait, a second opening, a changed removal order or a closure that needed attention. Keep the action taken beside that entry.', '把异常对应到具体站点，例如临时等待、二次开袋、改变取货顺序或闭合需要处理，并在同一条记录中保留采取的措施。', 'Vincule cada incidencia con su parada: espera imprevista, reapertura, cambio de descarga o cierre que requirió atención. Añada la acción tomada junto a esa entrada.'),
      ],
    },
    {
      heading: t('Photograph the remaining arrangement when it changes', '布局改变时，记录剩余装载', 'Documente la carga restante cuando cambie'),
      paragraphs: [
        t('A departure photograph cannot show the arrangement after later deliveries. Use a sketch or photograph tied to the stop whenever a planned unloading step changes where the remaining containers or refrigerants sit. Record whether an operator rearranged the load before closing the bag. Do not assume the departure layout remained in place.', '出发照片无法展示后续卸货后的排列。计划卸货使剩余餐盒或冰源位置变化时，用对应站点的草图或照片留档，并记录操作人员是否在闭合前重新摆放。不能假定出发布局一直保持不变。', 'Una foto de salida no muestra la disposición después de entregas posteriores. Vincule una foto o croquis a la parada cuando la descarga cambie la posición de envases o refrigerantes. Anote si el operario reorganizó antes de cerrar, sin asumir que se mantuvo la disposición inicial.'),
        t('Keep any single-stop or unopened full-load result identified as its own trial. To compare a revised sequence, document what changed and use an agreed comparison plan. The reviewer should be able to distinguish a different bag sample from a different route, loading order or handling event.', '单站试验或满载不开袋试验的结果，应保留各自试验标识。比较新的配送顺序时，写清变化项目，并采用约定的对照方案，让复核人员能够区分袋样变更与路线、装卸顺序或搬运事件变更。', 'Identifique por separado los resultados de una sola parada o de carga completa sin abrir. Para comparar otra secuencia, documente el cambio y use un plan acordado. Quien revise debe distinguir un cambio de muestra de uno de ruta, descarga o manipulación.'),
      ],
    },
    {
      heading: t('Send the route record with the sample enquiry', '询样时同时提供路线记录', 'Adjunte el registro de ruta a la consulta de muestra'),
      paragraphs: [
        t('For a YUANEN enquiry, send closed-container dimensions, the loading drawing, stop sequence and the questions the proposed trial must answer. Ask for the sample construction and any requested supports to be confirmed. Final dimensions, accessories, MOQ and delivery depend on the confirmed sample and order.', '向远恩询样时，提供闭合餐盒尺寸、装载图、停靠顺序及拟定试验要回答的问题，并确认袋样结构及所需支撑方案。最终尺寸、配件、起订量与交付安排按确认样品和订单确定。', 'Para consultar a YUANEN, envíe medidas de envases cerrados, plano de carga, secuencia de paradas y preguntas de la prueba. Confirme construcción y apoyos solicitados. Medidas, accesorios, pedido mínimo y entrega dependen de la muestra y el pedido confirmados.'),
        t('This is a proposed trial record, not evidence of a completed route test, food-safety approval or a guaranteed holding period. The responsible team must assess the complete loaded system under its intended conditions. The cover trays are props and do not define supplied accessories or rated capacity.', '这是建议的试验记录方式，不是已完成路线测试、食品安全批准或保温时长保证的证据。责任团队需在目标条件下评估完整装载系统。封面餐盘为道具，不代表随包配件或额定容量。', 'Es una propuesta de registro, no evidencia de ensayo realizado, aprobación de seguridad alimentaria ni duración garantizada. El equipo responsable debe evaluar el conjunto cargado en sus condiciones previstas. Las bandejas de portada son elementos de escena, no accesorios incluidos ni capacidad nominal.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN current catering-bag structure and sample boundaries', '远恩当前餐盘配送包结构与样品边界', 'Estructura actual y límites de muestra de la bolsa YUANEN'), url: 'https://yuanenbag.com/products/insulated-catering-bags/' },
    { title: t('YUANEN front-opening tray access guide', '远恩前开式餐盘取放指南', 'Guía YUANEN de acceso frontal de bandejas'), url: 'https://yuanenbag.com/guides/catering-bag-front-opening-tray-fit/' },
  ],
  relatedProducts: ['insulated-catering-bags'],
  image: { file: 'images/editorial/2026-10-16/navy-front-opening-carrier-two-tray-scene.webp', kind: 'illustration',
    alt: t('A navy front-opening carrier with one lidded tray inside and another on the counter', '海军蓝前开式袋内的一只带盖餐盘，以及台面上的另一只餐盘', 'Bolsa azul marino de apertura frontal con una bandeja tapada dentro y otra sobre la mesa'),
    caption: t('A front-opening carrier and lidded trays on a packing counter.', '装箱台面上的前开式袋与带盖餐盘。', 'Una bolsa de apertura frontal y bandejas tapadas sobre una mesa de embalaje.'),
  },
}
export default article
