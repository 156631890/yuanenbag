import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'guide', slug: 'coolant-dispatch-preparation-record', publishedAt: '2026-10-17',
  title: t('Keep the Coolant Preparation Record Through Packing Handover', '冰源备冷到装箱，交接记录要保留哪些信息', 'Conserve el registro de preparación del refrigerante hasta el embalaje'),
  description: t('Link the coolant batch, approved preparation instructions, preparation times and packing receipt in one handover record for an insulated box-liner pack-out.', '把冰源批次、确认的备冷说明、操作时间和装箱接收关联记录，区分准备完成、待处理与异常状态，不凭外观认定适用。', 'Relacione lote de refrigerante, instrucciones acordadas, tiempos de preparación y recepción para un embalaje con revestimiento térmico.'),
  intro: t('The packing operator needs to know which prepared coolant batch belongs to the planned load. A pack beside the box does not show how it was prepared. Keep the preparation record with that batch until the packing team records receipt and the actual arrangement used.', '装箱人员需要知道，哪一批已准备的冰源对应这次装载。放在箱边的一只冰袋，无法说明它经历了什么准备过程。让备冷记录随批次交接，直到装箱团队记录接收及实际采用的布局。', 'El operario necesita saber qué lote preparado corresponde a la carga prevista. Un acumulador junto a la caja no muestra cómo se preparó. Mantenga el registro con el lote hasta que el equipo anote su recepción y la disposición utilizada.'),
  sections: [
    {
      heading: t('Identify the instructions before starting the batch', '准备批次前，先确定采用哪版说明', 'Identifique las instrucciones antes de preparar el lote'),
      paragraphs: [
        t('YUANEN’s existing coolant selection guide distinguishes water-fill packs from absorbing formats. Filling and closing a pack and preparing an absorbing pack are different operations. Use the instructions confirmed for the actual sample, including any filling or absorption steps and preparation conditions. Do not transfer another format’s procedure by appearance or colour.', '远恩现有冰源选型指南区分注水型和吸水型。注水后封口与吸水型准备是不同操作。采用实际样品已确认的说明，包括填充或吸水步骤及备冷条件，不能凭外观或颜色套用另一种结构的流程。', 'La guía de YUANEN distingue acumuladores rellenables y formatos absorbentes. Llenar y cerrar un acumulador y preparar uno absorbente son operaciones distintas. Siga las instrucciones confirmadas para la muestra, incluidos llenado o absorción y condiciones de preparación. No copie el procedimiento de otro formato por su aspecto o color.'),
        t('Give the record an instruction revision, coolant sample or product identifier, and batch identifier. Keep any required preparation criteria in the agreed instructions. This article supplies no freezing temperature, minimum duration or shortcut for deciding readiness.', '在记录中写明说明版本、冰源样品或产品标识及批次编号。需要满足的准备条件应来自约定说明。本文不提供冻结温度、最低时长或判定备冷完成的捷径。', 'Anote versión de instrucciones, identificación del producto o muestra y lote. Los criterios de preparación deben proceder de las instrucciones acordadas. Este artículo no establece temperatura de congelación, duración mínima ni un atajo para decidir si está listo.'),
      ],
    },
    {
      heading: t('Separate preparation entries from packing receipt', '把备冷操作与装箱接收分开记录', 'Separe la preparación de la recepción para embalar'),
      paragraphs: [
        t('Use a proposed record with the fields below. Leave missing information marked for confirmation rather than filling a time from memory. The preparation operator records the work performed; the receiving operator records what was accepted for the named packing job.', '可按下列字段建立记录。缺失信息标为待确认，不凭记忆补出时间。备冷人员记录已做的操作；接收人员记录为指定装箱任务接收了什么。', 'Puede crear un registro con los campos siguientes. Marque la información ausente como pendiente, sin reconstruir horas de memoria. Quien prepara anota el trabajo realizado; quien recibe registra lo aceptado para el trabajo de embalaje identificado.'),
      ],
      bullets: [
        t('Preparation entry: batch identifier, instruction revision, operator, applicable filling or absorption completion, and preparation start and finish times recorded under those instructions.', '备冷条目：批次、说明版本、操作人员、适用的填充或吸水完成记录，以及按该说明记录的备冷开始和结束时间。', 'Preparación: lote, versión, operario, finalización del llenado o absorción cuando corresponda, e inicio y fin de preparación registrados según esas instrucciones.'),
        t('Handover entry: the same batch identifier, quantity transferred and its counting unit, transfer and receipt times, receiving operator, and the intended packing job or load identifier.', '交接条目：同一批次编号、移交数量及计数单位、移交和接收时间、接收人员，以及拟用装箱任务或装载编号。', 'Entrega: el mismo lote, cantidad y unidad de recuento, horas de entrega y recepción, receptor y trabajo o carga de destino.'),
        t('Exception entry: missing preparation information, a visible damaged seal, or a departure from the instructions. Record the action, responsible person and disposition. Keep unresolved material distinguishable from material released for packing.', '异常条目：准备信息缺失、可见封口破损或偏离说明的情况，记录处理动作、责任人员及去向，让未解决批次与已获准装箱的批次保持可区分。', 'Incidencia: datos ausentes, cierre visiblemente dañado o desviación de las instrucciones. Registre acción, responsable y destino. Distinga el material pendiente del autorizado para embalar.'),
      ],
    },
    {
      heading: t('Link receipt to the liner and actual load', '把接收记录对应到内衬及实际装载', 'Vincule la recepción con el revestimiento y la carga real'),
      paragraphs: [
        t('For the current YUANEN box-liner application, identify the liner sample and the actual white foam outer box separately. The foil-faced liner, outer box and coolant have different roles. Record the coolant amount used and its position with the closed contents, then link a loading photograph or drawing to the same job identifier. Do not infer the amount needed from the cover image.', '采用远恩当前箱内衬应用时，分别标明内衬样品与实际白色泡沫外箱。铝箔面层内衬、外箱及冰源承担不同作用。记录实际采用的冰源数量及其与闭合内装物的相对位置，再把装载照片或图对应到同一任务编号，不能从封面推断冰源用量。', 'Para la aplicación actual de YUANEN, identifique por separado la muestra del revestimiento y la caja exterior blanca de espuma. Revestimiento, caja y refrigerante cumplen funciones distintas. Anote cantidad utilizada y posición respecto a los envases cerrados, vinculando foto o plano al mismo trabajo. La portada no determina la cantidad necesaria.'),
        t('Record a batch substitution or a delay after receipt instead of leaving the original entry unchanged. Ask the responsible packing team how a departure from the approved plan must be assessed. A completed handover record does not demonstrate that the complete shipment met its temperature requirement.', '接收后若更换批次或发生等待，应另记变化，不让原条目掩盖实际情况。偏离已批准装载方案时，由包装责任团队确认评估方式。交接记录完整，不代表整票货物已经满足目标温区。', 'Registre sustituciones de lote o esperas posteriores a la recepción. Consulte al equipo responsable cómo evaluar una desviación del plan aprobado. Un registro completo no demuestra que el envío haya cumplido su requisito térmico.'),
      ],
    },
    {
      heading: t('Use the record in the sample discussion', '询样时提供交接流程和待确认项目', 'Adjunte el proceso de entrega a la consulta de muestra'),
      paragraphs: [
        t('Send YUANEN the intended closed-container sizes, outer-box reference, liner sample identifier and the coolant handover process you need the pack-out to accommodate. Confirm dimensions and material construction on the sample. State separately whether the enquiry covers only the liner or also asks about other components; the pictured box is not a supply inclusion.', '向远恩提供拟用闭合容器尺寸、外箱参考、内衬样品编号，以及装箱需要配合的冰源交接流程。通过样品确认尺寸与材料结构，并分开写明询价只涵盖内衬，还是另询其他组件；图片里的外箱不代表供货包含。', 'Envíe a YUANEN medidas de envases cerrados, referencia de caja, identificación del revestimiento y proceso de entrega del refrigerante. Confirme medidas y materiales mediante muestra. Aclare si consulta solo el revestimiento u otros componentes; la caja de la imagen no implica suministro incluido.'),
        t('This is a suggested record, not a completed coolant, leak or thermal test. The responsible team must evaluate the full loaded package for its intended conditions using an agreed test plan. Appearance or hardness alone does not establish coolant readiness, food suitability or a holding period.', '本文是建议的记录方式，不是已完成的冰源、防漏或温控试验。责任团队需按约定方案，在目标条件下评估完整装载包装。仅凭外观或硬度，不能确定备冷完成、食品适用性或保冷时长。', 'Es una propuesta de registro, no un ensayo realizado de refrigerante, fugas o rendimiento térmico. El equipo responsable debe evaluar el embalaje cargado según un plan acordado y sus condiciones previstas. Aspecto o dureza por sí solos no prueban preparación, idoneidad alimentaria ni duración térmica.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN coolant preparation and selection boundaries', '远恩冰源准备与选型边界', 'Preparación y límites de selección de refrigerantes YUANEN'), url: 'https://yuanenbag.com/guides/ice-pack-selection/' },
    { title: t('YUANEN current foil box-liner application', '远恩当前铝箔箱内衬应用', 'Aplicación actual del revestimiento de caja YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
  "file": "images/editorial/2026-10-30-cover-repairs/coolant-dispatch-preparation-record.webp",
  "kind": "illustration",
  "alt": {
    "en": "Foil-lined white foam box and separate coolant pouches on a metal tray",
    "zh": "铝箔内衬白色泡沫箱旁，金属托盘上分开放置冷媒袋",
    "es": "Caja blanca de espuma con forro de aluminio y bolsas refrigerantes separadas en una bandeja metálica"
  },
  "caption": {
    "en": "Proposed sample arrangement; confirm construction, fit and accessories in writing. This image does not establish tested performance.",
    "zh": "拟定样品配置，结构、适配与配件范围须书面确认；图片不代表性能已经测试。",
    "es": "Configuración propuesta de muestra; confirme construcción, ajuste y accesorios por escrito. La imagen no acredita prestaciones ensayadas."
  }
},
}
export default article
