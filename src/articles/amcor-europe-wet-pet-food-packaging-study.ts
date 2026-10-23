import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'industry',
  slug: 'amcor-europe-wet-pet-food-packaging-study',
  publishedAt: '2026-10-23',
  eventDate: '2026-10-20',
  market: t('France, Germany, Italy, Poland, Spain and the UK', '法国、德国、意大利、波兰、西班牙与英国', 'Francia, Alemania, Italia, Polonia, España y Reino Unido'),
  title: t('Amcor Publishes European Wet-Pet-Food Packaging Research', 'Amcor发布欧洲湿宠物食品包装研究', 'Amcor publica un estudio europeo sobre envases de alimento húmedo para mascotas'),
  description: t('Amcor reports European wet-pet-food packaging preferences. The survey does not validate shipping.', 'Amcor研究欧洲湿宠物食品包装偏好，调查不能代替运输验证。', 'Amcor estudia preferencias europeas de envase para alimento húmedo, sin validar el transporte.'),
  intro: t('On 20 October 2026, Amcor published European wet-pet-food packaging research. Its July 2026 online survey covered 2,457 buyers in France, Germany, Italy, Poland, Spain and the UK.', '2026年10月20日，Amcor发布欧洲湿宠物食品包装研究。该项在线调查于2026年7月进行，涵盖法国、德国、意大利、波兰、西班牙与英国的2,457名购买者。', 'El 20 de octubre de 2026, Amcor publicó un estudio europeo sobre envases de alimento húmedo para mascotas. La encuesta en línea de julio de 2026 abarcó a 2.457 compradores en Francia, Alemania, Italia, Polonia, España y Reino Unido.'),
  sections: [
    {
      heading: t('Preferences need their own evidence boundary', '偏好需要保留其证据边界', 'Las preferencias tienen un alcance limitado'),
      paragraphs: [
        t('Respondents associated formats with practical benefits, including opening, serving and storage. These are reported perceptions, not measured safety, freshness or environmental outcomes.', '受访者把不同包装形式与开封、取用和储存等实用便利联系起来。这是所报告的感知，不是对安全、保鲜或环境结果的测量。', 'Los encuestados asociaron formatos con ventajas prácticas, como abrir, servir y almacenar. Son percepciones declaradas, no resultados medidos de seguridad, conservación o impacto ambiental.'),
        t('The publication date and survey period answer different questions and should remain visible together. The reported group cannot establish global purchasing demand, US packaging preferences or search volume for insulated bags. Our procurement interpretation below concerns how a buyer can frame its own enquiry; it does not turn this consumer study into a shipping trial.', '发布日期和调查期回答不同问题，应同时保留。该受访群体不能代表全球采购需求、美国包装偏好或保温袋搜索量。以下采购判断讨论的是买家如何说明自己的询价需求，不把消费者研究转写成运输测试。', 'La publicación y el periodo de encuesta responden a preguntas distintas y deben conservarse juntos. El grupo no demuestra demanda mundial, preferencias estadounidenses ni volumen de búsquedas de bolsas térmicas. Nuestra interpretación de compra trata de formular una consulta propia, sin convertir el estudio de consumidores en un ensayo de transporte.'),
      ],
    },
    {
      heading: t('Translate a convenience goal into a question to check', '把便利目标转为待核对的问题', 'Convierta una meta de comodidad en una pregunta comprobable'),
      paragraphs: [
        t('For a buyer’s own project, a statement such as “easy to use” leaves the action and the acceptance basis unclear. Specify who handles the package, whether the task occurs before or after opening, and which sample will be reviewed. Keep the intended food-container function separate from the transport pack surrounding it.', '对于买家自己的项目，只说“使用方便”并不能明确动作及验收依据。应说明谁来操作、动作发生在开封前还是开封后，以及检查哪一版样品；食品容器本身的功能要与其外层运输包装分别确认。', 'En un proyecto propio, decir “fácil de usar” no define la acción ni el criterio de aceptación. Indique quién manipula el envase, si lo hace antes o después de abrirlo y qué versión de la muestra se utilizará. Separe la función del recipiente de alimento de la del embalaje exterior que lo rodea.'),
      ],
      bullets: [
        t('Opening and serving: ask the primary-container supplier how the intended user will open and empty the actual container. Record the agreed review rather than treating a preference score as validation.', '开封与取用：向食品容器供应方确认目标使用者如何打开和取出实际容器中的内容物，记录约定检查，不把偏好评分当成验证。', 'Apertura y servicio: pregunte al proveedor del recipiente cómo lo abrirá y vaciará el usuario previsto. Registre la revisión acordada, sin considerar una puntuación de preferencia como validación.'),
        t('Packing and transport: give the transport-pack supplier the closed container’s real outside dimensions, rim and tab projections, orientation and quantity. Do not substitute a product-category name for the loaded unit.', '装箱与运输：向运输包装供应方提供闭合容器的真实外廓、盒沿和拉片突出部分、朝向及数量，不以品类名称代替实际装载单元。', 'Embalaje y transporte: facilite las medidas exteriores reales del recipiente cerrado, los salientes del borde y pestaña, la orientación y la cantidad. La categoría del producto no sustituye a la unidad cargada.'),
        t('Temperature management, if needed: first establish the requirements for the particular food and route with the responsible party. A wet-pet-food label or this survey alone cannot determine whether insulated shipping is needed.', '需要时的温度管理：先与责任方明确该种食品及实际路线的要求。“湿宠物食品”名称或这份调查本身，都不能决定是否需要保温运输。', 'Gestión térmica, si se requiere: defina primero con el responsable los requisitos del alimento y la ruta concretos. La denominación de alimento húmedo o esta encuesta no determinan por sí solas si hace falta transporte aislado.'),
      ],
    },
    {
      heading: t('Keep a YUANEN liner enquiry within its supply scope', '远恩内衬询价应对应其供货范围', 'Mantenga la consulta del forro YUANEN dentro de su alcance'),
      paragraphs: [
        t('YUANEN’s foil-box-liner page concerns an insulating liner used within an outer shipping box. It does not offer the pet-food trays or cans discussed in the research. Its white foam outer box and packed contents are demonstration props, so the quotation must identify what is actually supplied. The liner’s foam type, thickness, layers and dimensions are confirmed against the project and sample.', '远恩铝箔箱内衬页面讨论放入运输外箱使用的保温内衬，不是该研究讨论的宠物食品托盘或罐。白色泡沫外箱和装载内容物属于展示道具，因此报价需要列明实际供货项目；内衬泡沫类型、厚度、层结构与尺寸应按项目及样品确认。', 'La página del forro YUANEN trata de un aislante colocado dentro de una caja de transporte. No ofrece las bandejas o latas para mascotas del estudio. La caja blanca de espuma y el contenido mostrado son elementos de demostración; la oferta debe identificar el suministro real. El tipo de espuma, espesor, capas y medidas del forro se confirman con el proyecto y la muestra.'),
        t('If an outer liner is part of the buyer’s independently defined packing plan, check it with the actual closed containers and outer box. Include any agreed coolant arrangement and top closure in that review. Confirming that a tray can be loaded does not validate its seal, food suitability, leakage resistance or temperature performance, and does not establish a relationship between YUANEN and Amcor.', '若买家独立确定的包装计划包含外层内衬，应以实际闭合容器和外箱进行检查，并纳入约定冰源安排与顶部闭合方式。托盘能够装入，不代表其封口、食品适用性、防漏或温度表现已经验证，也不证明远恩与Amcor存在合作关系。', 'Si el plan de embalaje definido por el comprador incluye un forro exterior, revíselo con los recipientes cerrados y la caja reales. Incluya el refrigerante y cierre superior acordados. Poder cargar una bandeja no valida su sellado, aptitud alimentaria, resistencia a fugas ni comportamiento térmico, y tampoco acredita una relación entre YUANEN y Amcor.'),
      ],
    },
    {
      heading: t('Keep the requirement and the result together', '把要求和实际结果放在一起', 'Conserve juntos el requisito y el resultado'),
      paragraphs: [
        t('Keep a short record linking each requirement to its responsible supplier, sample revision and observed result. Leave untested functions unconfirmed. Materials, dimensions, supplied components, quantities and delivery terms require sample and order agreement. The value of this news for a packaging enquiry is a clearer distinction between user preference and the separate evidence needed to accept a finished packing system.', '为每项要求保留简短记录，关联负责供应方、样品版本及观察结果；未测试的功能保持未确认。材料、尺寸、供货组件、数量与交付条件以样品和订单约定为准。这则动态对包装询价的价值，是帮助区分使用者偏好与接受一套成品包装系统所需的其他证据。', 'Vincule cada requisito a su proveedor responsable, revisión de muestra y resultado observado. Mantenga sin confirmar las funciones no ensayadas. Materiales, medidas, componentes, cantidades y entrega requieren acuerdo de muestra y pedido. La utilidad de esta noticia es distinguir las preferencias del usuario de las pruebas adicionales para aceptar un sistema de embalaje terminado.'),
      ],
    },
  ],
  sources: [
    { title: t('Amcor research announcement, 20 October 2026', 'Amcor研究公告，2026年10月20日', 'Anuncio del estudio de Amcor, 20 de octubre de 2026'), url: 'https://www.amcor.com/media/news/wet-pet-food-packaging', publishedAt: '2026-10-20' },
    { title: t('YUANEN box-liner supply and sample boundaries', '远恩箱内衬供货及样品边界', 'Alcance de suministro y muestra del forro YUANEN'), url: 'https://yuanenbag.com/products/foil-insulated-box-liners/' },
  ],
  relatedProducts: ['foil-insulated-box-liners'],
  image: {
    file: 'images/editorial/2026-10-23/plain-sealed-aluminium-food-tray.webp', kind: 'illustration',
    alt: t('Closed silver food tray with a lid tab on a grey counter', '灰色台面上的银色闭合托盘，盖膜带拉片', 'Bandeja plateada cerrada con pestaña sobre una encimera gris'),
    caption: t('Generic sealed food tray. The scene does not show an Amcor product, a YUANEN product or the survey.', '通用闭合食品托盘，画面不展示Amcor产品、远恩产品或该项调查。', 'Bandeja de alimento cerrada genérica. La escena no muestra un producto de Amcor o YUANEN ni la encuesta.'),
  },
}
export default article
