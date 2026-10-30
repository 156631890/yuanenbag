import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'proampac-sial-food-packaging-preview',
  publishedAt: '2026-10-14',
  eventDate: '2026-10-12',
  market: t('France and international food-packaging procurement', '法国与国际食品包装采购', 'Francia y compras internacionales de envases alimentarios'),
  title: t('ProAmpac Announces Its Food Packaging Plans for SIAL Paris', 'ProAmpac公布SIAL Paris食品包装展示计划', 'ProAmpac anuncia sus planes de envases alimentarios para SIAL París'),
  description: t('ProAmpac has announced its SIAL Paris plans. For buyers of insulated box liners, the useful distinction is the inner food pack and its shipping-pack interface.', 'ProAmpac公布巴黎食品包装展示计划。采购箱内保温内衬时，要分别明确食品内包装的要求与外层装箱接口。', 'ProAmpac anuncia sus planes para SIAL París. Al comprar forros térmicos, conviene definir el envase alimentario y su encaje en el embalaje de transporte.'),
  intro: t('ProAmpac announced on 12 October that it plans to present food packaging at SIAL Paris, 17–21 October 2026, at Paris Nord Villepinte.', 'ProAmpac于10月12日公告，计划在2026年10月17日至21日于巴黎北维勒班展览中心举行的SIAL Paris展示食品包装。', 'ProAmpac anunció el 12 de octubre que prevé presentar envases alimentarios en SIAL París, del 17 al 21 de octubre de 2026, en Paris Nord Villepinte.'),
  sections: [
    {
      heading: t('The announcement is a preview', '公告属于展会前瞻', 'El anuncio anticipa la feria'),
      paragraphs: [
        t('The company identifies protein, dairy, confectionery and food-to-go among its display areas. On this article’s publication date, the show has not started. The source describes planned exhibits rather than results from a completed event.', '企业列出的展示方向包括蛋白食品、乳制品、糖果及即食食品。本文发布时展会尚未开始，原始来源描述的是展示计划，不是已经举行的活动成果。', 'La empresa incluye proteínas, lácteos, confitería y comida para llevar entre las áreas previstas. En la fecha de publicación de este artículo la feria aún no ha comenzado. La fuente describe planes, no resultados de un evento terminado.'),
      ],
    },
    {
      heading: t('Give the food pack and the liner different purchasing briefs', '食品内包装与保温内衬应分开询价', 'Separe los requisitos del envase y del forro térmico'),
      paragraphs: [
        t('For YUANEN buyers, the procurement implication is to define each component’s job before comparing quotations. Ask the inner-pack supplier to specify its intended food use, closure and supporting documents. Give the liner supplier the outer-container dimensions and the completed inner pack’s shape. This is our purchasing interpretation, not a claim made by the exhibitor about YUANEN.', '对远恩采购者，我们的判断是先定义各组件的职责，再比较报价。食品内包装供应方应明确适用食品、闭合方式及对应资料；保温内衬供应方则需要外容器尺寸，以及完成封口后内包装的外形。这是本文的采购分析，不是参展企业对远恩作出的说明。', 'Para los compradores de YUANEN, nuestra interpretación es definir la función de cada componente antes de comparar ofertas. Pida al proveedor del envase su uso alimentario previsto, cierre y documentación. Entregue al proveedor del forro las medidas del recipiente exterior y la forma del envase ya cerrado. Es nuestro análisis de compra, no una afirmación del expositor sobre YUANEN.'),
        t('A drawing of a foil-lined box cannot establish the food-contact suitability or barrier performance of the inner pouch. Keep each supplier’s sample reference attached to the component it describes. If the pouch changes, send the revised closed pack for a new fit check instead of treating the liner’s earlier approval as approval of the whole assembly.', '带铝箔内衬的装箱图不能证明食品平袋的食品接触适用性或阻隔性能。各供应方的样品编号应对应各自组件。如果平袋改变，应拿新的闭合包装重新试装，不能把之前的内衬确认当成整套包装均已确认。', 'Una imagen de una caja forrada no acredita la aptitud alimentaria ni la barrera de la bolsa interior. Vincule cada referencia de muestra con su componente. Si cambia la bolsa, compruebe el encaje con el envase cerrado revisado, sin extender la confirmación anterior del forro a todo el conjunto.'),
      ],
    },
    {
      heading: t('The existing liner applications need different inputs', '三种既有内衬应用需要不同的输入资料', 'Las aplicaciones existentes requieren datos distintos'),
      paragraphs: [
        t('YUANEN’s box-liner page already separates chocolate gifts, meal kits and packaged seafood. Those applications use the existing liner range. A practical enquiry should identify which completed inner package will be packed, rather than ask for a generic “food liner” and leave its contents undefined.', '远恩的箱内衬产品页已分别介绍巧克力礼盒、食材包和已包装海鲜的装箱应用，使用的是既有内衬系列。询价时应明确装入哪一种完成包装的物品，而不是只询问“食品内衬”却不说明内装物。', 'La página de forros YUANEN distingue regalos de chocolate, kits de comida y pescado o marisco envasados. Son aplicaciones de la gama existente. Identifique el envase interior terminado en la consulta, en lugar de pedir un “forro para alimentos” sin definir el contenido.'),
      ],
      bullets: [
        t('Chocolate gift boxes: include decorative sleeves or ribbons in the outer dimensions and identify surfaces that need protection from the proposed coolant layout.', '巧克力礼盒：测量时包括装饰套及装饰带，并标明哪些外观表面需要避开拟定冰源布局。', 'Cajas de regalo de chocolate: incluya fundas o cintas en las medidas e identifique las superficies que deben protegerse del refrigerante propuesto.'),
        t('Meal kits: list the sealed packs and lidded containers together, including the stack arrangement that reaches the packing station.', '食材包：把密封食品包装与带盖餐盒列在同一清单中，并注明到达装箱工位时的堆叠方式。', 'Kits de comida: enumere juntos los envases sellados y los recipientes con tapa, con la disposición que llega al puesto de embalaje.'),
        t('Packaged seafood: identify the separate food package and any secondary leak containment. Do not assign that containment duty to an insulating seam without evidence.', '已包装海鲜：标明独立食品包装及二次防漏容器。没有对应证据时，不把隔热接缝当作防漏层。', 'Pescado y marisco envasados: identifique el envase alimentario y la contención secundaria de fugas. No atribuya esa función a una unión aislante sin evidencia.'),
      ],
    },
    {
      heading: t('Send a matched sample set for the next quotation', '下一次报价应使用对应的一套样品', 'Prepare un conjunto de muestras para la próxima oferta'),
      paragraphs: [
        t('Send photographs of the closed inner packs, the intended arrangement and the foam box’s usable interior. State the proposed coolant separately, with the intended route and temperature requirements. Request a quotation that identifies the liner itself and makes any outer box or accessory scope explicit. Keep fit observations separate from temperature-test results.', '提供闭合内包装、拟定排列方式和泡沫箱可用内部空间的照片。单独说明拟定冰源、运输路线及目标温区。要求报价明确内衬本身，以及外箱和配件是否属于供货范围；把试装观察与温度测试结果分别记录。', 'Envíe fotos de los envases cerrados, la disposición prevista y el interior útil de la caja de espuma. Indique por separado el refrigerante, la ruta y las necesidades de temperatura. Pida que la oferta identifique el forro y aclare si incluye caja exterior o accesorios. Registre el encaje aparte de los ensayos térmicos.'),
        t('Dimensions, layer construction, MOQ and delivery terms follow the agreed sample and order. This article reports a public announcement and offers purchasing analysis. It does not establish a relationship with ProAmpac, participation in SIAL, a food-contact approval or a tested shipping duration.', '尺寸、复合结构、起订量与交付条件按确认样品和订单确定。本文报道公开公告并提供采购分析，不证明与ProAmpac存在合作、远恩参加SIAL、取得食品接触批准或经过运输保冷时长测试。', 'Medidas, capas, pedido mínimo y entrega se fijan mediante la muestra y el pedido acordados. Este artículo informa de un anuncio público y aporta análisis de compra. No acredita relación con ProAmpac, participación en SIAL, aprobación alimentaria ni duración térmica ensayada.'),
      ],
    },
  ],
  sources: [
    { title: t('ProAmpac announcement, 12 October 2026', 'ProAmpac企业公告，2026年10月12日', 'Anuncio de ProAmpac, 12 de octubre de 2026'), url: 'https://www.proampac.com/en-us/media-center/1021/packaging-with-an-appetite-for-more-proampac-heads-to-sial-paris-2026/', publishedAt: '2026-10-12' },
    { title: t('YUANEN box liners and food-packing applications', '远恩箱内衬及食品装箱应用', 'Forros YUANEN y aplicaciones de embalaje alimentario'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
  "file": "images/editorial/2026-10-30-cover-repairs/proampac-sial-food-packaging-preview.webp",
  "kind": "illustration",
  "alt": {
    "en": "Unprinted stand-up pouch, flat flexible pouch and clear film roll",
    "zh": "无印刷自立袋、平口软包装袋和透明薄膜卷",
    "es": "Bolsa autoportante sin impresión, bolsa plana flexible y rollo de película transparente"
  },
  "caption": {
    "en": "Generic food flexible-packaging formats; not ProAmpac samples or a photograph from SIAL.",
    "zh": "通用食品软包装形式，不代表 ProAmpac 样品或 SIAL 展会现场照片。",
    "es": "Formatos genéricos de envases flexibles alimentarios; no son muestras ProAmpac ni una fotografía de SIAL."
  }
},
}
export default article
