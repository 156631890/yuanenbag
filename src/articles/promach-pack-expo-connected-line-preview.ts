import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry', slug: 'promach-pack-expo-connected-line-preview', publishedAt: '2026-10-14', eventDate: '2026-10-05',
  market: t('United States and food-and-beverage packaging procurement', '美国与食品饮料包装采购', 'Estados Unidos y compras de embalajes para alimentos y bebidas'),
  title: t('ProMach Plans Production-Stage Displays at PACK EXPO', 'ProMach将在PACK EXPO呈现包装产线各环节', 'ProMach prepara áreas de exposición por etapas para PACK EXPO'),
  description: t('An exhibition preview prompts a separate packing check: pass finished-pack dimensions and handling requirements to the team selecting a shipping-box liner.', '展会前瞻提出另一项装箱核对：将完成包装后的外形尺寸与取放要求，交给运输箱内衬选型人员。', 'Una próxima exposición plantea una comprobación de embalaje: entregar las medidas y necesidades de manipulación del envase terminado a quien selecciona el forro térmico.'),
  intro: t('In its 5 October announcement, ProMach outlines production-stage displays for PACK EXPO International, 18–21 October 2026 in Chicago.', 'ProMach于10月5日公告，计划在2026年10月18日至21日芝加哥PACK EXPO International呈现按产线环节组织的展示区域。', 'En su anuncio del 5 de octubre, ProMach presenta áreas por etapas de producción para PACK EXPO International, del 18 al 21 de octubre de 2026 en Chicago.'),
  sections: [
    {
      heading: t('The exhibition plan is not an installed line', '展示计划不等于已安装的产线', 'La exposición prevista no es una línea instalada'),
      paragraphs: [
        t('The planned areas cover filling and capping, labeling and end-of-line packaging. They describe an exhibition arrangement. This article does not report a continuous production line operating at the show or an installation at a food business.', '计划展示的环节包括灌装与封盖、贴标和末端包装。这描述的是展区安排，本文不报告展会已有连续产线运行，也不声称食品企业已经安装这些设备。', 'Las áreas previstas abarcan llenado y tapado, etiquetado y embalaje final. Describen una disposición de exposición. Este artículo no informa de una línea continua ya operativa en la feria ni de una instalación en una empresa alimentaria.'),
      ],
    },
    {
      heading: t('Specify the pack that leaves the line', '先定义出线后的完整包装', 'Defina el envase que sale de la línea'),
      paragraphs: [
        t('For buyers planning a separate insulated shipping pack, our interpretation is to start with the finished unit handed to the packing operator. Nominal tray dimensions can leave out a projecting lid, sleeve or label. A liner brief should describe the closed package in the orientation in which the operator receives it. This is a purchasing interpretation, not a ProMach compatibility statement.', '对于需要另外配置保温运输包装的采购者，我们的判断是从交给装箱人员的完整包装开始。餐盒标称尺寸可能没有包含伸出的盖沿、外套或标签。内衬询价资料应描述已经闭合的包装，以及装箱人员收到它时的朝向。这属于采购分析，不是ProMach的适配声明。', 'Para quien necesita un embalaje térmico de transporte independiente, nuestra interpretación es partir de la unidad terminada que recibe el operario. Las medidas nominales pueden omitir una tapa saliente, funda o etiqueta. La consulta del forro debe describir el envase cerrado y su orientación al llegar al puesto. Es análisis de compra, no una declaración de compatibilidad de ProMach.'),
        t('Use a handoff drawing with two views: the completed pack’s outline and its position in the proposed shipping container. Mark protrusions that could touch a liner fold. Record the label’s position so the receiving team can decide where it needs to remain readable. Do not approve an assumed packing sequence from a machinery brochure alone.', '交接图可使用两个视图：完整包装的外轮廓，以及在拟定运输容器中的位置。标出可能接触内衬折边的突出部位，并记录标签位置，让收货团队决定哪些信息需要保持可读。不能仅凭设备宣传册就确认拟定装箱顺序。', 'Prepare dos vistas para la entrega: el contorno del envase terminado y su posición en el recipiente de transporte previsto. Marque salientes que puedan tocar un pliegue del forro. Registre la posición de la etiqueta para que recepción decida qué información debe seguir visible. No confirme la secuencia de embalaje solo con un folleto de maquinaria.'),
      ],
    },
    {
      heading: t('Use the liner sample to check the downstream task', '用内衬样品核对出线后的装箱作业', 'Compruebe el embalaje posterior con una muestra del forro'),
      paragraphs: [
        t('YUANEN’s existing foil box-liner applications include meal kits packed into an outer container. For this range, ask for a sample check using the closed food packs, the actual container interior and the proposed coolant space. Treat the foam box, inner food packs and coolant as separate components unless the quotation includes them.', '远恩既有铝箔箱内衬应用包括将食材包装入外容器。采购这一系列时，试装应使用闭合食品包装、实际外容器内部空间和拟定冰源空间。泡沫箱、食品内包装及冰源应作为独立组件确认，除非报价明确包含它们。', 'Las aplicaciones existentes del forro YUANEN incluyen kits de comida dentro de un recipiente exterior. Compruebe la muestra con los envases cerrados, el interior real del recipiente y el espacio previsto para refrigerante. Considere caja de espuma, envases y refrigerante como componentes separados salvo que la oferta los incluya.'),
      ],
      bullets: [
        t('Place the finished units in the intended order. Record whether the operator must turn a tray or press against its lid to insert it.', '按拟定顺序放入完整包装，记录操作人员是否需要转动餐盒，或按压盒盖才能装入。', 'Coloque las unidades en el orden previsto. Registre si el operario debe girar una bandeja o presionar la tapa para introducirla.'),
        t('Check access for hands after other units are loaded. A dimensional fit does not establish a workable repeated loading movement.', '在其余包装放入后检查手部操作空间。尺寸上能放下，不代表重复装取动作可以顺利完成。', 'Compruebe el acceso de las manos después de cargar las demás unidades. El encaje dimensional no acredita un movimiento repetible de carga.'),
        t('Photograph the final layout and the container closure. Keep label access and handling observations separate from route-temperature test results.', '拍下最终排列及外容器闭合情况，将标签可读性与取放观察和路线温度测试结果分开记录。', 'Fotografíe la disposición y el cierre final. Registre acceso a etiquetas y manipulación por separado de los resultados térmicos de la ruta.'),
      ],
    },
    {
      heading: t('Keep equipment acceptance and liner acceptance separate', '设备验收与内衬验收分别确认', 'Separe la aceptación del equipo y la del forro'),
      paragraphs: [
        t('The equipment supplier should confirm its own line requirements. The liner enquiry should identify the closed-unit sample, outer-container reference, loading arrangement and who will inspect the packed result. When the inner container or lid changes, send the revised sample for a fit review before reusing the earlier liner drawing. This proposed handoff record is not a claim that YUANEN has tested a particular machine.', '设备供应方应确认其产线要求。内衬询价应标明闭合包装样品、外容器编号、装载排列以及由谁检查装箱结果。内容器或盒盖改变时，应先提供新样品重新核对适配，再复用之前的内衬图纸。这是建议的交接记录，不表示远恩已测试某台设备。', 'El proveedor del equipo debe confirmar los requisitos de su línea. La consulta del forro debe identificar muestra cerrada, referencia del recipiente exterior, disposición y responsable de inspeccionar la carga. Si cambia el recipiente o su tapa, revise el encaje con la nueva muestra antes de reutilizar el plano anterior. Este registro propuesto no implica que YUANEN haya ensayado una máquina concreta.'),
        t('Final dimensions, layers, MOQ and delivery follow the confirmed sample and order. Exhibition plans can change. Nothing here establishes YUANEN attendance, a relationship with ProMach, certified automation compatibility, food-contact approval or a guaranteed temperature duration.', '最终尺寸、复合层、起订量和交付条件按确认样品和订单确定。展会计划可能调整。本文不证明远恩参展、与ProMach存在合作、获得自动化适配认证或食品接触批准，也不保证温控时长。', 'Medidas, capas, pedido mínimo y entrega dependen de la muestra y el pedido confirmados. Los planes de feria pueden cambiar. Este artículo no acredita asistencia de YUANEN, relación con ProMach, compatibilidad automatizada certificada, aprobación alimentaria ni duración térmica garantizada.'),
      ],
    },
  ],
  sources: [
    {title:t('ProMach announcement, 5 October 2026','ProMach企业公告，2026年10月5日','Anuncio de ProMach, 5 de octubre de 2026'),url:'https://www.promachbuilt.com/press-releases/promach-built-to-run-as-one-pack-expo-2026/',publishedAt:'2026-10-05'},
    {title:t('PACK EXPO International organizer information','PACK EXPO International主办方信息','Información del organizador de PACK EXPO International'),url:'https://www.packexpointernational.com/'},
    {title:t('YUANEN box-liner meal-kit application','远恩箱内衬食材包装箱应用','Aplicación del forro YUANEN para kits de comida'),url:'https://yuanenbag.com/products/foil-insulated-box-liners/#meal-kit-packaging'},
  ],
  relatedProducts:['foil-insulated-box-liners'],
  image:{
    file:'images/editorial/2026-10-14/lidded-meal-trays-roller-conveyor.webp',kind:'illustration',
    alt:t('Three black trays with clear lids on a stainless roller conveyor beside a counter with white containers','不锈钢辊筒输送台上有三只透明盖黑色餐盒，旁边台面放着白色容器','Tres bandejas negras con tapas transparentes sobre un transportador de rodillos junto a una mesa con recipientes blancos'),
    caption:t('Generic packing handoff scene. It does not depict ProMach equipment, PACK EXPO or a YUANEN production line.','通用包装交接场景，不展示ProMach设备、PACK EXPO现场或远恩产线。','Escena genérica de entrega de envases. No representa equipos ProMach, PACK EXPO ni una línea YUANEN.'),
  },
}
export default article
