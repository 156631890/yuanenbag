import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry', slug: 'nfinite-paper-barrier-pilot-run', publishedAt: '2026-10-15', eventDate: '2026-10-07',
  market: t('Waterloo, Ontario, Canada; packaging procurement', '加拿大安大略省滑铁卢；包装采购', 'Waterloo, Ontario, Canadá; compras de embalajes'),
  title: t('Nfinite Reports a Roll-to-Roll Pilot Run for Barrier Paper', 'Nfinite公布阻隔纸卷对卷中试进展', 'Nfinite anuncia una prueba piloto de papel barrera de bobina a bobina'),
  description: t('A Canadian pilot announcement raises a practical sourcing question: which material, production and complete-pack evidence is needed before changing an insulated shipping pack?', '加拿大企业的中试公告带来一个采购问题：调整保温运输包装前，需要分别取得哪些材料、生产和整包装验证资料？', 'Un anuncio piloto en Canadá plantea qué documentos del material, la producción y el embalaje completo pedir antes de cambiar un envío térmico.'),
  intro: t('Nfinite announced a continuous roll-to-roll barrier-paper manufacturing demonstration at its Waterloo pilot facility on 7 October 2026. The company release, carried by PRNewswire, reports pilot progress rather than an offer of qualified material for a particular shipping pack.', 'Nfinite于2026年10月7日宣布，在滑铁卢中试设施完成阻隔纸连续卷对卷制造演示。这份由PRNewswire承载的企业公告报告的是中试进展，并非针对某种运输包装已完成认可的材料供货说明。', 'El 7 de octubre de 2026, Nfinite anunció una demostración continua de fabricación de papel barrera de bobina a bobina en su planta piloto de Waterloo. El comunicado de la empresa, publicado en PRNewswire, informa de avances piloto, no de un material aprobado para un embalaje de transporte concreto.'),
  sections: [
    {
      heading: t('Decide what the proposed material would replace', '先确定拟替换的是哪一部分', 'Determine qué sustituiría el material propuesto'),
      paragraphs: [
        t('For a buyer assessing new paper materials, our recommendation is to name the proposed part before asking for samples: the food container, an outer wrap, a protective sheet or a shipping liner. An announcement about a material process is not enough to approve a substitution across these different roles.', '对于评估新型纸材料的采购者，我们建议先写明拟应用部位，再索取样品：食品容器、外包裹层、保护片，还是运输内衬。仅有材料工艺公告，不足以确认它能在这些不同部位之间直接替换。', 'Para evaluar un papel nuevo, recomendamos identificar primero la pieza prevista: recipiente alimentario, envoltura exterior, hoja protectora o forro de transporte. Un anuncio sobre un proceso de material no basta para aprobar su sustitución entre funciones distintas.'),
        t('YUANEN’s current foil box-liner application uses a separate liner inside a white foam outer box. The reviewed layout includes corner folds, a top closure and space allocated to the packed goods and refrigerant. A paper candidate for that position would need a new sample review of that complete arrangement; this news does not establish its suitability.', '远恩当前铝箔箱内衬应用，是在白色泡沫外箱中放入独立内衬。已核对布局包含转角折边、顶部收合，以及货物和冰源各自占用的空间。如果考虑在该位置采用纸质候选材料，需要重新核对这套完整装载方案的样品；本条新闻不证明该材料适用。', 'La aplicación actual de YUANEN coloca un forro de lámina independiente dentro de una caja exterior de espuma blanca. La disposición revisada incluye pliegues en las esquinas, cierre superior y espacio para mercancía y refrigerante. Un papel candidato para esa posición necesitaría revisar una muestra del conjunto completo; esta noticia no acredita su idoneidad.'),
      ],
    },
    {
      heading: t('Ask for evidence that follows the sample', '让资料与收到的样品对应', 'Pida documentos vinculados a la muestra'),
      paragraphs: [
        t('Separate the enquiry into material evidence, supply readiness and the intended packed use. For each, ask the supplier to identify the document, the sample it covers and what still needs confirmation. This avoids approving an unnamed future specification on the strength of a pilot announcement.', '询价时可将问题分为材料资料、供货准备程度和拟定整包装用途。每一项都请供应方标明对应文件、文件覆盖的样品，以及尚待确认的事项。这样可以避免因为中试公告，就认可一个尚未明确的未来规格。', 'Separe la consulta en documentación del material, preparación del suministro y uso previsto del embalaje completo. Pida que el proveedor identifique el documento, la muestra cubierta y los puntos pendientes. Así no se aprueba una especificación futura indefinida basándose en un anuncio piloto.'),
      ],
      bullets: [
        t('Material: request an identified construction, sample reference and applicable test reports, including the stated conditions and limits. Do not transfer a result from a different paper grade or coating.', '材料：索取明确的结构说明、样品编号和适用检测资料，并保留其条件与限制；不把另一纸种或涂层的结果移用过来。', 'Material: solicite construcción identificada, referencia de muestra e informes aplicables con sus condiciones y límites. No transfiera resultados de otro papel o recubrimiento.'),
        t('Supply: ask whether the offered sample is a pilot sample or the proposed order specification, and have the supplier confirm repeatability, available format, MOQ and delivery for that order.', '供货：确认所提供的是中试样品还是拟下单规格，并让供应方针对该订单确认一致性、可提供形态、起订量与交付条件。', 'Suministro: confirme si se ofrece una muestra piloto o la especificación del pedido, y pida al proveedor confirmar repetibilidad, formato, pedido mínimo y entrega para ese pedido.'),
        t('Packed use: record the proposed layer position, folds, closure, outer container, contents and refrigerant arrangement. Agree the acceptance method before treating a material result as approval of the assembled pack.', '整包装用途：记录拟定层位、折边、收口、外容器、内装物及冰源安排；先约定验收方法，不把单一材料结果当作整套包装的认可。', 'Uso del conjunto: registre posición de la capa, pliegues, cierre, recipiente exterior, contenido y refrigerante. Acuerde la aceptación antes de tomar un resultado del material como aprobación del conjunto.'),
      ],
    },
    {
      heading: t('Keep the existing pack approval in place during evaluation', '评估期间保留原包装确认边界', 'Mantenga la aprobación existente durante la evaluación'),
      paragraphs: [
        t('For the existing YUANEN liner enquiry, retain the current outer-box drawing and approved packing reference while evaluating any alternative separately. Send the outer box’s internal dimensions, lid clearance, closed product samples and proposed refrigerant positions. If a candidate changes the fold or closure, return to the sample stage instead of silently updating the production brief.', '对现有远恩内衬询价，评估替代材料时仍应保留当前外箱图纸与已确认装箱资料，另行评估新方案。询价可提供外箱内尺寸、合盖余量、闭合状态的货物样品，以及拟定冰源位置。如果候选材料改变折边或收口，就应重新确认样品，而不是直接改动生产资料。', 'En la consulta del forro YUANEN existente, conserve el plano de la caja exterior y la referencia de carga aprobada mientras evalúa la alternativa por separado. Envíe medidas interiores, espacio de cierre, muestras del producto cerrado y posición prevista del refrigerante. Si cambian los pliegues o el cierre, vuelva a la muestra antes de modificar las instrucciones de producción.'),
        t('This purchasing analysis does not report YUANEN adoption, testing or a relationship with Nfinite. It makes no recycling, food-contact, shelf-life or temperature-duration claim. Final liner dimensions, construction and supply conditions remain subject to the confirmed sample and order. The cover shows a generic paper roll, not a photograph of the announced trial.', '以上是采购分析，不表示远恩已采用或测试该材料，也不表示与Nfinite存在合作；不据此提出可回收、食品接触、货架期或温控时长承诺。内衬最终尺寸、结构及供货条件仍按确认样品和订单确定。封面展示通用纸卷画面，不是公告中试现场照片。', 'Este análisis de compra no informa de adopción o ensayos por YUANEN ni de una relación con Nfinite. No atribuye reciclabilidad, aptitud alimentaria, vida útil ni duración térmica. Las medidas, construcción y suministro del forro dependen de la muestra y el pedido confirmados. La portada presenta una bobina genérica, no una fotografía de la prueba anunciada.'),
      ],
    },
  ],
  sources: [
    { title: t('Nfinite company release via PRNewswire, 7 October 2026', 'Nfinite企业公告，由PRNewswire承载，2026年10月7日', 'Comunicado de Nfinite en PRNewswire, 7 de octubre de 2026'), url: 'https://www.prnewswire.com/news-releases/nfinite-demonstrates-continuous-roll-to-roll-manufacturing-milestone-for-high-barrier-paper-packaging-302900817.html', publishedAt: '2026-10-07' },
    { title: t('YUANEN foil box-liner structure and foam-box applications', '远恩铝箔箱内衬结构与泡沫外箱应用', 'Estructura y aplicaciones del forro YUANEN en cajas de espuma'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
    file: 'images/editorial/2026-10-15/neutral-packaging-paper-roll.webp', kind: 'illustration',
    alt: t('An off-white paper roll with a loose end resting on a pale-grey bench', '浅灰工作台上的米白纸卷及展开的纸端', 'Bobina de papel blanco cálido con un extremo extendido sobre una mesa gris clara'),
    caption: t('A paper roll and loose sheet on a material workbench.', '材料工作台上的纸卷与展开纸片。', 'Una bobina de papel con una hoja extendida sobre una mesa de materiales.'),
  },
}
export default article
