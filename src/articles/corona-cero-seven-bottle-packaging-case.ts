import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'corona-cero-seven-bottle-packaging-case',
  publishedAt: '2026-10-22',
  eventDate: '2026-10-14',
  market: t('Colombia and Argentina', '哥伦比亚与阿根廷', 'Colombia y Argentina'),
  title: t('Smurfit Westrock Details Corona Cero Seven-Bottle Packaging Project', 'Smurfit Westrock公布Corona Cero七瓶组合包装项目', 'Smurfit Westrock detalla el proyecto de envase de siete botellas de Corona Cero'),
  description: t('Smurfit Westrock’s Corona Cero announcement covers a seven-bottle consumer pack and transport packaging. Keep those specifications separate from a thermal brief.', 'Smurfit Westrock的Corona Cero公告涉及七瓶消费组合装及运输包装。采购时应把这两层规格与温度管理方案分别说明。', 'El anuncio de Corona Cero aborda un envase comercial de siete botellas y embalaje de transporte. Separe esas especificaciones de los requisitos térmicos.'),
  intro: t('On 14 October 2026, Smurfit Westrock announced a Corona Cero project with AB InBev and JKR: a seven-bottle consumer pack and corrugated transport packaging. The company reported launches in Colombia and Argentina.', '2026年10月14日，Smurfit Westrock公告与AB InBev及JKR合作的Corona Cero项目，包括七瓶消费组合装和瓦楞运输包装。企业称该方案已在哥伦比亚与阿根廷推出。', 'El 14 de octubre de 2026, Smurfit Westrock anunció un proyecto de Corona Cero con AB InBev y JKR: un envase comercial de siete botellas y embalaje de transporte de cartón ondulado. La empresa comunicó su lanzamiento en Colombia y Argentina.'),
  sections: [
    {
      heading: t('Read the announcement as a packaging project', '按包装项目理解这则公告', 'Lea el anuncio como un proyecto de envases'),
      paragraphs: [
        t('The source is the packaging supplier’s announcement, not an independent delivery trial. Its publication date is eight days before this article. It provides a specific recent project to examine; it does not establish that insulated-bag demand has increased or that a particular chilled-delivery system has been validated.', '来源是包装供应商公告，不是独立配送测试。公告比本文早八天发布，提供了一个可以讨论的近期具体项目，但不能据此推断保温包需求上涨，也不能认为某套冷藏配送系统已经验证。', 'La fuente es un anuncio del proveedor de envases, no un ensayo independiente de reparto. Se publicó ocho días antes de este artículo. Aporta un proyecto reciente y concreto para analizar, pero no demuestra un aumento de demanda de bolsas térmicas ni la validación de un sistema de entrega refrigerada.'),
      ],
    },
    {
      heading: t('Give each packaging level its own reference', '为每一层包装保留独立编号', 'Asigne una referencia a cada nivel de embalaje'),
      paragraphs: [
        t('Our purchasing interpretation is to keep the consumer pack, the transport outer and any temperature-management arrangement distinct in the enquiry. A single description such as “beverage packaging” leaves it unclear which component a quotation covers. For the buyer’s own project, attach a component list to the pack drawing so each supplier can identify the part being priced and the sample used to check it.', '我们的采购判断是，在询价中分别说明消费组合装、运输外包装及另行需要的温度管理方案。只写“饮品包装”容易使报价范围不清。对于采购者自己的项目，应在装箱图旁附组件清单，让各供应方能够明确报价对象及对应检查样品。', 'Nuestra interpretación de compra es separar en la consulta el envase comercial, el embalaje exterior de transporte y cualquier solución térmica. Una descripción como “envase para bebidas” no aclara qué componente incluye la oferta. En su propio proyecto, adjunte al plano una lista de componentes para que cada proveedor identifique la pieza cotizada y la muestra utilizada para revisarla.'),
      ],
      bullets: [
        t('Consumer pack: identify the actual bottle group, closure and finished outside dimensions. Record whether it remains intact throughout the intended delivery.', '消费组合装：明确实际瓶组、闭合方式和完成包装后的外形尺寸，注明拟定配送过程中是否始终保持整组。', 'Envase comercial: identifique el conjunto real, el cierre y las medidas exteriores terminadas. Anote si se mantiene intacto durante la entrega prevista.'),
        t('Transport outer: identify the number and orientation of completed packs, the proposed internal supports and how the outer carton is closed.', '运输外包装：明确完成组合装的数量、朝向、拟定内部支撑及外箱闭合方式。', 'Embalaje de transporte: indique la cantidad y orientación de los conjuntos terminados, los soportes interiores propuestos y el cierre de la caja.'),
        t('Temperature plan, if required: state the product’s target conditions, route and separate coolant proposal. The presence of a carton alone does not answer those questions.', '如需温度管理：单独说明内装物目标条件、路线及拟定冰源方案；仅有纸箱并不能回答这些问题。', 'Plan térmico, si se requiere: defina las condiciones objetivo del contenido, la ruta y el refrigerante propuesto. La existencia de una caja no resuelve esas cuestiones.'),
      ],
    },
    {
      heading: t('Specify what would enter a YUANEN beverage bag', '明确进入远恩饮品包的是哪一个单元', 'Defina qué unidad entraría en la bolsa YUANEN'),
      paragraphs: [
        t('YUANEN’s current beverage-bag page presents a top-opening nonwoven-and-foil design with a proposed removable textile cup-divider arrangement. That page concerns a custom delivery bag, not the reported seven-bottle retail pack or its corrugated outer. Its pictured cups cannot be used as evidence that a finished bottle multipack or a shipping carton will fit.', '远恩当前饮品包页面展示上开式无纺布外层、铝箔内层方案，并提供拟定可拆织物杯位分隔。该页面讨论的是定制配送包，不是公告中的七瓶零售组合装或瓦楞外包装；页面内的杯子不能作为完整瓶组或运输纸箱能够装入的证据。', 'La página actual de YUANEN presenta una bolsa de apertura superior, exterior no tejido e interior de aluminio, con separadores textiles extraíbles propuestos. Se refiere a una bolsa de reparto personalizada, no al envase de siete botellas anunciado ni a su caja exterior. Los vasos de sus imágenes no prueban que quepa un conjunto terminado de botellas o una caja de transporte.'),
        t('Before requesting a sample, choose the actual unit that will enter the bag: individual closed bottles, a completed retail group or another defined package. Send its real dimensions and photographs in the proposed orientation. If that unit changes after the quotation, identify the revision and repeat the fit review using the new unit; do not silently carry over the earlier bag dimensions.', '询样前先确定实际装入单元：独立闭合瓶、完整零售组合装，或另一种已明确的包装。提供该单元的真实尺寸及拟定朝向照片。报价后若装入单元改变，应标明版本，并用新单元重新试装，不直接沿用先前袋体尺寸。', 'Antes de pedir una muestra, elija la unidad real que entrará: botellas individuales cerradas, un conjunto comercial terminado u otro envase definido. Envíe sus medidas reales y fotos en la orientación propuesta. Si cambia tras la oferta, identifique la revisión y repita el encaje con la nueva unidad, sin conservar automáticamente las medidas anteriores de la bolsa.'),
      ],
    },
    {
      heading: t('Keep sample outcomes attached to the assembly checked', '检查结论应对应实际组合', 'Vincule los resultados al conjunto revisado'),
      paragraphs: [
        t('Keep the accepted component list with the order so a change to the inner pack can be distinguished from a change to the bag. Review package protection, bag loading and any thermal trial under their own stated conditions. Dimensions, dividers, accessories, quantities and delivery terms follow the agreed sample and order. The corporate project does not prove YUANEN participation, supply of its paperboard components or any tested protection or temperature duration.', '确认订单时保留对应组件清单，以区分内包装变更与袋体变更。包装保护、袋体装取及需要进行的温度测试，应各自记录明确条件。尺寸、分隔、配件、数量与交付条件按确认样品及订单确定。该企业项目不证明远恩参与、供应其中纸板组件，也不证明远恩具备已测试的防护性能或固定保温时长。', 'Conserve la lista de componentes aceptada con el pedido para distinguir los cambios del envase interior de los cambios de la bolsa. Revise la protección, la carga de la bolsa y cualquier ensayo térmico con sus propias condiciones. Medidas, separadores, accesorios, cantidades y entrega se acuerdan mediante muestra y pedido. El proyecto corporativo no acredita participación de YUANEN, suministro de sus componentes de cartón ni protección o duración térmica ensayadas.'),
      ],
    },
  ],
  sources: [
    { title: t('Smurfit Westrock announcement, 14 October 2026', 'Smurfit Westrock企业公告，2026年10月14日', 'Anuncio de Smurfit Westrock, 14 de octubre de 2026'), url: 'https://www.eu.smurfitwestrock.com/newsroom/press-releases/2026/smurfit-westrock-fast-tracks-corona-cero-launch-as-demand-rises-for-alcohol-free-beer', publishedAt: '2026-10-14' },
    { title: t('YUANEN beverage-delivery bag and sample boundaries', '远恩饮品配送包及样品确认边界', 'Bolsa de bebidas YUANEN y límites sujetos a muestra'), url: 'https://yuanenbag.com/products/insulated-beverage-delivery-bags/' },
  ],
  relatedProducts: ['insulated-beverage-delivery-bags'],
  image: {
    file: 'images/editorial/2026-10-22/plain-retail-carton-in-corrugated-outer.webp', kind: 'illustration',
    alt: t('A plain closed white carton inside an open brown corrugated shipping box on a grey packing counter', '灰色打包台上，敞开的棕色瓦楞运输箱内放着普通闭合白色纸盒', 'Una caja blanca lisa cerrada dentro de una caja de transporte marrón de cartón ondulado abierta sobre una mesa gris'),
    caption: t('Generic inner carton and transport outer. The scene does not show the Corona Cero project or a YUANEN product.', '通用内纸盒与运输外箱，画面不展示Corona Cero项目或远恩产品。', 'Caja interior y embalaje exterior genéricos. La escena no muestra el proyecto de Corona Cero ni un producto YUANEN.'),
  },
}
export default article
