import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry', slug: 'tetra-pak-ice-cream-paper-wrap', publishedAt: '2026-10-16', eventDate: '2026-10-06',
  market: t('Europe; announcement issued in Switzerland', '欧洲；公告发布于瑞士', 'Europa; anuncio publicado en Suiza'),
  title: t('Tetra Pak Plans a Phased Ice Cream Wrap Rollout from Europe', '利乐计划从欧洲分阶段推出冰淇淋纸基包装', 'Tetra Pak prevé un despliegue por fases desde Europa para Ice Cream Wrap'),
  description: t('Tetra Pak’s ice cream wrapping announcement calls for a separate review of the primary wrapper, its handling surface and the complete transport pack.', '利乐冰淇淋包装公告带来的采购判断：将一次包裹层、搬运时的外表面状态与整套运输包装分开核对，不把纸含量当成隔热性能。', 'El anuncio de la envoltura de Tetra Pak requiere revisar por separado el envase primario, su superficie durante la manipulación y el embalaje de transporte completo.'),
  intro: t('Tetra Pak’s 6 October 2026 announcement describes Ice Cream Wrap as up to 85% paper. It reports European validation and plans a phased rollout in Q4 2026, starting in Europe. The rollout is presented as a plan, rather than confirmation of general availability.', '利乐2026年10月6日公告称，Ice Cream Wrap的纸含量最高为85%，正在欧洲开展验证，并计划在2026年第四季度从欧洲开始分阶段推出。这里的推出安排是公告计划，并非已全面供货的确认。', 'El anuncio de Tetra Pak del 6 de octubre de 2026 describe Ice Cream Wrap como una solución con hasta un 85% de papel. Comunica validación en Europa y un despliegue por fases previsto para el cuarto trimestre de 2026, comenzando allí. Se trata de un plan, no de una confirmación de disponibilidad general.'),
  sections: [
    {
      heading: t('Read the paper claim at the wrapper level', '纸含量对应的是一次包装', 'Interprete el contenido de papel en el envase primario'),
      paragraphs: [
        t('The announcement’s footnote also lists polymer, ink and lacquer among the remaining components. Our purchasing recommendation is to keep a wrapper-composition claim attached to the named wrapper specification. Do not use a paper percentage alone to approve the insulation, disposal route or supply readiness of a complete shipping pack.', '公告脚注还列出聚合物、油墨和涂层等其余组分。我们的采购建议是，让包装组分声明对应明确的一次包装规格，不单凭纸含量就认可整套运输包装的隔热表现、回收处置方式或供货准备程度。', 'La nota del anuncio también enumera polímero, tinta y laca entre los demás componentes. Recomendamos vincular la declaración de composición a la especificación concreta de la envoltura. El porcentaje de papel por sí solo no aprueba aislamiento, destino de residuos ni preparación del suministro del embalaje completo.'),
        t('Identify the sample and the stage at which it is offered before planning an order. Ask the supplier to confirm the proposed market, available format and delivery conditions in writing. Keep a development or validation sample distinguishable from the specification being quoted for supply.', '计划下单前，先确认提供的样品及所处阶段，请供应方书面确认拟供市场、可提供形态和交付条件。开发或验证阶段样品，应与正式供货报价中的规格区分记录。', 'Antes de planificar el pedido, identifique la muestra y la fase en que se ofrece. Pida al proveedor confirmar por escrito mercado previsto, formato y condiciones de entrega. Distinga una muestra de desarrollo o validación de la especificación cotizada para suministro.'),
      ],
    },
    {
      heading: t('Observe the outer surface during the agreed handling sequence', '按约定装卸过程观察外表面状态', 'Observe la superficie exterior durante la manipulación acordada'),
      paragraphs: [
        t('For buyers changing a frozen item’s primary wrapper, we suggest a sample record focused on contact with neighbouring packs and the transport liner. Agree the handling sequence and inspection points with the responsible team. At those points, photograph the wrapped item’s outside surface and note visible moisture, fold changes or contact marks. These are proposed observations, not failures reported for Tetra Pak’s new wrap.', '采购者更换冷冻食品的一次包裹层时，我们建议围绕其与相邻包装、运输内衬的接触建立样品记录。由责任团队约定装卸顺序和检查时点，按时点拍下包装外表面，记录可见湿润、折边变化或接触痕迹。这些是建议观察的项目，不是已报告的利乐新包装缺陷。', 'Si cambia la envoltura primaria de un alimento congelado, sugerimos registrar el contacto con otros envases y con el forro de transporte. Acuerde secuencia y puntos de inspección con el equipo responsable. Fotografíe la superficie exterior y anote humedad visible, cambios de pliegues o marcas de contacto. Son observaciones propuestas, no fallos comunicados de la nueva envoltura de Tetra Pak.'),
        t('Link each observation to the sample revision, packed arrangement and inspection time. Keep any opening or repositioning in that same record. The person reviewing the trial should be able to distinguish a changed wrapper from a changed handling sequence. A visual record does not establish a thermal rating or replace the agreed acceptance tests.', '每次观察对应样品版本、装载布局和检查时间，期间发生开箱或重新摆放，也记在同一份记录内。复核人员应能区分一次包装变更与装卸过程变更。外观记录不能确立保温等级，也不能替代约定的验收测试。', 'Vincule observación, revisión de muestra, disposición y momento de inspección. Registre aperturas o recolocaciones. Quien revise debe distinguir un cambio de envoltura de uno de manipulación. Un registro visual no establece una clasificación térmica ni sustituye los ensayos de aceptación acordados.'),
      ],
    },
    {
      heading: t('Keep the transport liner in its own specification', '运输内衬保留独立规格和样品记录', 'Mantenga una especificación propia para el forro de transporte'),
      paragraphs: [
        t('YUANEN’s current foil box-liner reference places a separate liner inside a white foam outer box. Its top fold and usable space are checked with the packed contents and coolant arrangement. The individual food wrapper and this shipping liner serve different positions in the pack; changing the first does not by itself approve a change to the second.', '远恩当前铝箔箱内衬参考方案，是白色泡沫外箱内放独立内衬，顶部折边和可用空间需要结合内装物及冰源布局核对。单件食品包裹层与这层运输内衬处于不同位置；更换前者，不等于已认可后者也可直接变更。', 'La referencia actual de YUANEN coloca un forro independiente dentro de una caja exterior de espuma blanca. Su pliegue superior y espacio útil se comprueban con contenido y refrigerante. La envoltura individual y este forro ocupan posiciones distintas; cambiar la primera no aprueba por sí solo un cambio del segundo.'),
        t('For a liner enquiry, provide the actual outer box’s usable interior, packed-item outline and proposed coolant layout. Identify which sample and handling record accompany the enquiry. Confirm liner layers, dimensions, closure allowance, quantity and delivery with YUANEN. The foam outer box and display contents are not automatically included in the liner supply.', '询内衬时，提供实际外箱的可用内部尺寸、包装好后的物品外廓和拟用冰源布局，并标明随询价提交的样品及装卸记录。内衬层次、尺寸、收口余量、数量和交付均请远恩确认。泡沫外箱及展示内容物不默认属于内衬供货范围。', 'Para consultar un forro, facilite interior útil de la caja real, contorno del producto embalado y disposición de refrigerantes. Identifique muestra y registro de manipulación adjuntos. Confirme con YUANEN capas, medidas, margen de cierre, cantidad y entrega. La caja de espuma y el contenido expuesto no se incluyen por defecto en el suministro del forro.'),
        t('The announcement does not establish YUANEN adoption, a supplier relationship or certification of its products. The responsible team must assess the complete loaded package under the intended conditions; no temperature, holding time or performance result is claimed here.', '本公告不证明远恩采用该材料、与相关企业建立供货关系或产品获得认证。责任团队仍需在拟用条件下评估完整装载包装；本文不提供温度、保温时长或已完成性能测试的结论。', 'El anuncio no acredita adopción por YUANEN, relación de suministro ni certificación de sus productos. El equipo responsable debe evaluar el conjunto cargado en las condiciones previstas; aquí no se afirma temperatura, duración térmica ni resultado de ensayo.'),
      ],
    },
  ],
  sources: [
    { title: t('Tetra Pak wrapping announcement', '利乐包装公告', 'Anuncio de envoltura de Tetra Pak'), url: 'https://www.tetrapak.com/about-tetra-pak/news-and-events/newsarchive/tetra-pak-advances-ice-cream-packaging-with-new-wrapping-solution', publishedAt: '2026-10-06' },
    { title: t('YUANEN current box-liner application and sample boundaries', '远恩现行箱内衬应用与样品边界', 'Aplicación actual y límites de muestra del forro YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: { file: 'images/editorial/2026-10-16/plain-wrapped-packs-steel-tray.webp', kind: 'illustration',
    alt: t('Three plain white-wrapped rectangular packages on a stainless-steel tray', '不锈钢托盘上的三件用无标识白色材料包裹的长方形包装', 'Tres paquetes rectangulares con envoltura blanca lisa sobre una bandeja de acero inoxidable'),
    caption: t('Plain wrapped packs on a stainless-steel packing counter.', '不锈钢包装台面上的无标识白色包装。', 'Paquetes con envoltura lisa sobre una mesa de embalaje de acero inoxidable.'),
  },
}
export default article
