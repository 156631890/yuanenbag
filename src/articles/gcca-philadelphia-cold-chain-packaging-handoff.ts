import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })
const article: EditorialArticle = {
  kind: 'industry',
  slug: 'gcca-philadelphia-cold-chain-packaging-handoff',
  publishedAt: '2026-10-13',
  eventDate: '2026-09-30',
  market: t('United States / Philadelphia', '美国／费城', 'Estados Unidos / Filadelfia'),
  title: t('GCCA Philadelphia Cold Chain Meeting Is Scheduled for 14–15 October', 'GCCA费城冷链会议将于10月14日至15日举行', 'La reunión de cadena de frío de GCCA en Filadelfia está prevista para el 14 y 15 de octubre'),
  description: t('Preview the current GCCA Philadelphia programme and prepare a role-based packaging sample brief. The meeting has not taken place and its agenda may change.', '核对GCCA费城活动现行议程，为不同交接岗位准备包装样品需求。会议尚未举行，议程可能调整，不把前瞻写成会议结论。', 'Consulte el programa vigente de GCCA en Filadelfia y prepare un informe de muestra por función. La reunión aún no se ha celebrado y el programa puede cambiar.'),
  intro: t('GCCA lists its Philadelphia Cold Chain Connection for 14–15 October 2026. Its event record was updated on 30 September, the event date shown here. This is a preview of the scheduled meeting, not a report of discussions that have already happened.', 'GCCA现行活动页列明费城Cold Chain Connection将于2026年10月14日至15日举行。活动记录最近更新于9月30日，本文上方的事件日期指这次页面更新。本文为计划会议前瞻，不报道尚未发生的讨论成果。', 'GCCA programa su Cold Chain Connection de Filadelfia para el 14 y 15 de octubre de 2026. El registro se actualizó el 30 de septiembre, fecha del hecho indicada aquí. Este artículo anticipa la reunión y no relata conclusiones de debates aún no celebrados.'),
  sections: [
    {
      heading: t('The programme reaches operational roles', '议程面向冷链运营岗位', 'El programa incluye funciones operativas'),
      paragraphs: [t('The published programme includes warehouse and logistics discussions and a technology panel. Check the organiser’s current listing for access conditions and changes. YUANEN does not claim attendance, sponsorship or endorsement.', '已公布议程包括仓储物流交流和技术讨论。参加条件及变动应以主办方现行页面为准。本文不声称远恩参会、赞助或获得主办方背书。', 'El programa publicado incluye debates de almacén y logística y un panel tecnológico. Consulte condiciones de acceso y cambios con el organizador. YUANEN no afirma participación, patrocinio ni respaldo.')]
    },
    {
      heading: t('Give each handoff role a sample question', '给每个交接岗位一个明确的样品核对问题', 'Asigne una comprobación de muestra a cada función'),
      paragraphs: [t('The following is YUANEN’s procurement planning advice, not a conference recommendation. A catering team, a packing operator and a receiver may judge the same carrier at different points. Ask the catering team to identify the actual closed tray and lid rim. Ask the packing operator to record the loading direction and whether the closure can be completed. Ask the receiver to confirm the unloading order and the space needed to grip the tray. Name who records a failed check so that a comment such as “too tight” can be traced to the tray, opening or packing arrangement.', '以下为远恩的采购规划建议，不是会议建议。餐饮备餐人员、装包人员和收货人员可能在不同环节评价同一只配送包。请备餐人员明确实际封盖餐盘和盖沿；请装包人员记录装入方向及能否完整闭合；请收货人员确认取出顺序和抓握餐盘所需空间。写清由谁记录不通过的项目，避免一句“太紧”无法定位到餐盘、开口或装载排列。', 'Lo siguiente es una recomendación de planificación de YUANEN, no de la conferencia. El equipo de catering, quien embala y quien recibe pueden evaluar la misma bolsa en fases distintas. Pida al primero identificar la bandeja cerrada y su borde. Quien embala debe registrar la dirección de entrada y el cierre completo. Quien recibe comprueba el orden de descarga y el espacio para sujetar la bandeja. Identifique al responsable de cada resultado para poder localizar si “demasiado ajustado” se refiere a la bandeja, la abertura o la distribución.')]
    },
    {
      heading: t('Match that brief to the current catering carrier', '把岗位记录对应到当前餐盘包方案', 'Relacione el informe con la bolsa de catering vigente'),
      paragraphs: [t('YUANEN’s current catering proposal has a front opening, short side handles, a non-woven exterior and aluminum foil interior. Its front panel folds down; it is not a specified load-bearing ramp. Use the widest closed lid or rim when asking for a sample, then check horizontal insertion and removal through the actual opening. If a tray needs tilting to clear a zipper corner, record the obstruction and request a revised sample. Do not add shelves, dividers or a carrying load rating merely because they would make the layout easier.', '远恩当前餐盘配送方案采用前开口、短侧提手、无纺布外层和铝箔内层。前幅向下翻开，并未被指定为承重装载斜坡。询问样品时以封盖后最宽盖沿或盘沿为依据，再通过实际开口核对水平装入和取出。如果必须倾斜餐盘才能避开拉链角，应记录阻挡位置并请求调整样品；不能因为分层更方便，就默认已有货架、分隔或承重额定值。', 'La propuesta vigente de YUANEN tiene abertura frontal, asas laterales cortas, exterior no tejido e interior de lámina de aluminio. El panel frontal se abate y no se especifica como rampa de carga. Utilice el ancho máximo de la tapa o del borde cerrado para solicitar la muestra y compruebe entrada y salida horizontales por la abertura real. Si hay que inclinar la bandeja para evitar una esquina de cremallera, registre el obstáculo y solicite otra revisión. No presuponga estantes, separadores ni una carga nominal para facilitar la disposición.')],
      bullets: [t('Sample brief: tray and lid reference ___; widest closed dimensions ___; loading direction ___; packing/receiving contact ___; obstruction observed ___; carrier sample revision ___.', '样品需求记录：餐盘及盖子编号___；封盖最大外尺寸___；装入方向___；装包／收货联系人___；观察到的阻挡___；配送包样品版本___。', 'Informe de muestra: referencia de bandeja y tapa ___; medidas máximas cerradas ___; dirección de entrada ___; contacto de embalado/recepción ___; obstáculo observado ___; revisión de bolsa ___.')]
    },
    {
      heading: t('Keep temperature responsibility in a separate record', '另行明确温度控制和记录责任', 'Registre por separado la responsabilidad térmica'),
      paragraphs: [t('A successful handoff check establishes how the agreed load is packed and removed. Specify the food’s required temperature range with the responsible food operator, identify who controls and records each exposure stage, and validate the complete route under relevant conditions. The event listing and an illustration cannot establish a bag’s holding time or the temperature of its contents. Send the tray record, intended route and sample requirements with your enquiry; final specifications remain subject to the order and agreed sample.', '交接检查通过，只能说明约定装载如何放入和取出。所需食品温区应与食品业务责任方另行确定，明确每个暴露环节由谁控制、由谁记录，再按相关条件验证完整路线。活动页面和示意图不能证明包的保温时长或内装食品温度。询价时提交餐盘记录、计划路线及样品要求，最终规格仍以订单和约定样品为准。', 'Una comprobación de entrega satisfactoria documenta cómo se introduce y extrae la carga acordada. Defina el rango térmico con el operador alimentario responsable, identifique quién controla y registra cada fase de exposición y valide la ruta completa en condiciones pertinentes. La página del evento y una ilustración no demuestran duración térmica ni temperatura del alimento. Envíe el registro de bandejas, la ruta prevista y los requisitos de muestra con su consulta; las especificaciones finales dependen del pedido y la muestra acordada.')]
    }
  ],
  sources: [
    { title: t('GCCA Philadelphia event page; first published 29 January 2024, updated 30 September 2026', 'GCCA费城活动页；初次发布2024年1月29日，更新2026年9月30日', 'Página del evento GCCA en Filadelfia; publicada el 29 de enero de 2024, actualizada el 30 de septiembre de 2026'), url: 'https://www.gcca.org/event/gcca-cold-chain-connection-northeast/', publishedAt: '2024-01-29' },
    { title: t('GCCA public event record 18560: original publication and update dates', 'GCCA公开活动记录18560：原始发布时间与更新时间', 'Registro público GCCA 18560: fechas de publicación y actualización'), url: 'https://www.gcca.org/wp-json/wp/v2/event/18560', publishedAt: '2024-01-29' },
    { title: t('YUANEN current front-opening catering carrier proposal', '远恩当前前开式餐盘配送包方案', 'Propuesta vigente de bolsa de catering frontal de YUANEN'), url: 'https://yuanenbag.com/products/insulated-catering-bags/' },
    { title: t('YUANEN catering tray access and sample checks', '远恩餐盘装取与样品检查', 'Acceso de bandejas y comprobaciones de muestra de YUANEN'), url: 'https://yuanenbag.com/guides/catering-bag-front-opening-tray-fit/' }
  ],
  relatedProducts: ['insulated-catering-bags'],
  image: {
    file: 'images/editorial/2026-10-13/cold-chain-tray-dispatch.webp',
    kind: 'illustration',
    alt: t('Closed stainless catering pans on a metal trolley beside an open cold-room doorway', '打开的冷库门旁，金属推车上摆放着带盖不锈钢餐盘', 'Bandejas de catering de acero cerradas sobre un carro metálico junto a una puerta de cámara frigorífica abierta'),
    caption: t('Generic food-dispatch scene. It does not show the GCCA meeting, a YUANEN facility or a tested delivery arrangement.', '通用食品发货场景，不展示GCCA会议、远恩设施或经过测试的配送配置。', 'Escena genérica de despacho de alimentos; no muestra la reunión GCCA, instalaciones de YUANEN ni una configuración de reparto ensayada.')
  }
}
export default article
