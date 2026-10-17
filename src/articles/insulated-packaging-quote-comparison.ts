import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'guide', slug: 'insulated-packaging-quote-comparison', publishedAt: '2026-10-17',
  title: t('Compare What Each Insulated-Packaging Quote Includes', '保温包装报价差在哪，先把计价范围放到同一张表', 'Compare qué incluye cada oferta de embalaje térmico'),
  description: t('Build a line-by-line comparison of actual packaging quotes using one specification, counting unit and order quantity. Keep included, extra and unresolved charges separate.', '按同一规格、计数单位和订单数量逐项比较实际保温包装报价，区分包含、另计与待确认项目，不把缺失费用当成零。', 'Compare ofertas reales con la misma especificación, unidad y cantidad. Distinga conceptos incluidos, adicionales y pendientes sin convertir datos ausentes en cero.'),
  intro: t('Two unit prices are comparable only after you know what each supplier priced. Give both offers one agreed specification and build a record of included, separately charged and unresolved items. Keep the original quote and revision beside each entry so a change in scope can be traced.', '比较两个单价前，先弄清双方各自报了什么。以同一份约定规格为基准，逐项记录包含、另计和尚待确认的项目，并让每项都能对应原报价及版本，便于追踪计价范围变化。', 'Antes de comparar dos precios unitarios, aclare qué ha valorado cada proveedor. Use una especificación acordada y registre conceptos incluidos, cobrados aparte y pendientes. Vincule cada entrada a la oferta original y su versión para seguir los cambios de alcance.'),
  sections: [
    {
      heading: t('Freeze the comparison specification', '先固定这次比较采用的规格', 'Fije la especificación de comparación'),
      paragraphs: [
        t('YUANEN’s quotation guide asks buyers to define dimensions, material, quantity, artwork and destination. For an actual comparison, put the agreed revision of those requirements at the top of the record. Confirm that both offers refer to that revision. A supplier’s different construction should remain a separate alternative until you accept it for comparison.', '远恩现有询价指南要求确定尺寸、材料、数量、图稿及目的地。实际比价时，把这些要求的约定版本放在记录顶部，确认两份报价都引用该版要求。供应方提出的不同结构，应先作为另一备选保留，不能未经确认就混在同一列比较。', 'La guía de YUANEN pide medidas, materiales, cantidad, diseño y destino. Encabece la comparación con la revisión acordada de esos requisitos y confirme que ambas ofertas la citan. Mantenga una construcción distinta como alternativa separada hasta aceptarla para comparar.'),
        t('For the current foil box-liner application, separate the liner from the white foam outer box, its lid and any coolant. An image of the assembled pack-out does not establish that all components are supplied together. Ask each quote to state the component or confirmed set it covers, with its counting unit.', '以当前铝箔箱内衬应用为例，应把内衬与白色泡沫外箱、箱盖及冰源分开。整套装箱图片不代表这些组件一起供货。要求每份报价写明涵盖哪一组件或经确认的套装，以及对应计数单位。', 'En la aplicación actual del revestimiento, separe este de la caja blanca de espuma, su tapa y el refrigerante. Una imagen del conjunto no demuestra suministro completo. Pida que cada oferta indique el componente o conjunto confirmado y su unidad de recuento.'),
      ],
    },
    {
      heading: t('Give each quoted item a comparable row', '为每个计价项目建立可对照的行', 'Asigne una fila comparable a cada concepto'),
      paragraphs: [
        t('Use a comparison record with an item description, the agreed requirement, quote A’s treatment, quote B’s treatment and an open question. Copy the terms from the actual offers. Mark each treatment as included, charged separately, not quoted or pending confirmation; retain any separate amount in the currency and unit stated by that offer.', '对照记录可设置项目说明、约定要求、报价 A 的处理方式、报价 B 的处理方式及待答问题。按实际报价填写，分别标为已包含、另行收费、未报价或待确认；有单独金额时，保留该报价原有币种和单位。', 'El registro puede tener descripción, requisito acordado, tratamiento en oferta A, tratamiento en oferta B y pregunta abierta. Transcriba las ofertas reales. Distinga incluido, cobrado aparte, no ofertado o pendiente; conserve importes separados con moneda y unidad originales.'),
      ],
      bullets: [
        t('Product line: specification revision, order quantity and the priced unit. If one offer uses pieces and another uses sets, obtain the confirmed set contents before converting.', '产品行：规格版本、订单数量和计价单位。若一份按只、另一份按套计价，先取得经确认的套装组成，再换算比较。', 'Producto: revisión, cantidad y unidad valorada. Si una oferta usa piezas y otra conjuntos, confirme el contenido del conjunto antes de convertir.'),
        t('One-time work: sample preparation, artwork or printing setup where quoted. Keep the charge basis and whether it applies again to a repeat order explicit.', '一次性工作：实际报价中的样品制作、图稿或印刷准备，注明收费依据，以及返单是否还需收取。', 'Trabajo inicial: muestra, diseño o preparación de impresión cuando se coticen. Aclare la base del cargo y si se repite en otro pedido.'),
        t('Packing and transport: the quoted packing scope, destination and delivery terms. Record exclusions and who must confirm any unquoted item.', '包装和运输：报价所含包装范围、目的地及交付条款，记录排除项目，以及未报价项目由谁确认。', 'Embalaje y transporte: alcance, destino y condiciones de entrega cotizados. Anote exclusiones y quién confirma conceptos sin cotizar.'),
        t('Validity and timing: quote issue date, expiry and the stated start point for the production or dispatch period. Keep sample approval and transport timing distinguishable.', '有效期与时间：报价日期、到期日及所述生产或发运周期的起算条件，区分样品确认与运输时间。', 'Validez y plazos: fecha, vencimiento y condición de inicio del plazo de producción o expedición. Distinga aprobación de muestra y transporte.'),
      ],
    },
    {
      heading: t('Resolve the missing scope before comparing totals', '先解决范围缺口，再比较合计', 'Resuelva el alcance pendiente antes de comparar totales'),
      paragraphs: [
        t('A blank freight or setup line is unresolved unless the supplier confirms its treatment. Do not enter zero to finish the sheet. Likewise, a lower amount for fewer pieces, a different liner construction or a different delivery destination is not a like-for-like result. Send the open questions back with the same specification reference.', '运费或准备费一栏空白时，除非供应方确认其处理方式，否则仍是未解决项目，不能为了填完表格写成零。同样，数量更少、内衬结构不同或交付目的地不同的较低金额，也不是同口径结果。回传问题时，应继续引用同一份规格。', 'Una línea de transporte o preparación vacía queda pendiente hasta que el proveedor la aclare; no introduzca cero para completar la hoja. Un importe menor con menos unidades, otra construcción o destino tampoco es comparable. Devuelva las preguntas citando la misma especificación.'),
        t('Keep recurring product charges and one-time work visible as separate lines. Compare totals only within a confirmed common scope and stated currency basis, using the buyer’s actual quotations. If currency or scope still differs, show the offers separately and identify the missing confirmation rather than presenting a saving.', '保留重复发生的产品费用与一次性工作费用各自行列。只有共同计价范围和币种口径已确认，才按买家实际报价比较合计。币种或范围仍不一致时，应分开展示，并指出缺少哪项确认，不生成节省比例。', 'Mantenga separados cargos recurrentes de producto y trabajos iniciales. Compare totales solo con alcance común y base monetaria confirmados, usando ofertas reales del comprador. Si aún difieren, muéstrelas por separado e identifique lo pendiente sin presentar un ahorro.'),
      ],
    },
    {
      heading: t('Keep revised quotes linked to the agreed sample', '让修订报价继续对应确认样品', 'Vincule las ofertas revisadas con la muestra acordada'),
      paragraphs: [
        t('When a supplier answers, retain the original offer and attach the dated revision. Update the affected comparison row and mark which question it resolves. Before ordering, confirm that the chosen quote, sample and written specification refer to the same dimensions, materials and requested options. A comparison record does not replace the order agreement.', '供应方回复后，保留原报价并附有日期的修订版，更新受影响行，标明解决了哪个问题。下单前，再确认所选报价、样品及书面规格对应同一尺寸、材料和所需选项。比价记录不能代替订单约定。', 'Conserve la oferta original y adjunte la revisión fechada cuando responda el proveedor. Actualice la fila afectada y señale la pregunta resuelta. Antes de pedir, confirme que oferta, muestra y especificación corresponden a las mismas medidas, materiales y opciones. El registro no sustituye el acuerdo del pedido.'),
        t('For a YUANEN enquiry, send the specification revision and unresolved scope questions. Final quantities, construction, charges and delivery arrangements require written confirmation for the selected order. This article provides no price, tax rate or promised saving, and the cover’s foam box and lid are props rather than an included supply list. Product performance still needs relevant sample and complete-pack testing.', '向远恩询价时，提供规格版本和未解决的计价范围问题。最终数量、结构、费用和交付安排需针对所选订单书面确认。本文不提供价格、税率或节省承诺；封面泡沫箱和箱盖为道具，不是随货清单。产品性能仍需相关样品和完整装载试验依据。', 'Envíe a YUANEN revisión de especificación y preguntas pendientes. Cantidad, construcción, cargos y entrega requieren confirmación escrita para el pedido elegido. El artículo no fija precios, impuestos ni ahorro. Caja y tapa de portada son elementos de escena, no una lista de suministro. El rendimiento requiere pruebas pertinentes de muestra y del embalaje completo.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN quotation scope and sample approval guide', '远恩询价范围与样品确认指南', 'Guía YUANEN de alcance de oferta y aprobación de muestras'), url: 'https://yuanenbag.com/guides/custom-bag-order-checklist/' },
    { title: t('YUANEN current box-liner application and supply boundaries', '远恩当前箱内衬应用与供货边界', 'Aplicación actual y límites de suministro del revestimiento YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: { file: 'images/editorial/2026-10-17/folded-foil-liner-foam-box-separate-lid.webp', kind: 'illustration',
    alt: t('Overlapping silver foil liner folds inside a white foam box, with a separate foam lid behind it', '白色泡沫箱内相互覆盖的银色铝箔内衬折口，以及后方分开放置的泡沫箱盖', 'Pliegues superpuestos de revestimiento plateado dentro de una caja blanca de espuma, con tapa separada detrás'),
    caption: t('A folded foil-faced liner in a foam box with its lid placed separately.', '泡沫箱内折叠的铝箔面层内衬，箱盖分开放置。', 'Revestimiento de lámina de aluminio plegado dentro de una caja de espuma, con la tapa aparte.'),
  },
}
export default article
