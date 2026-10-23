import type { EditorialArticle } from '../editorial'

const t = (en: string, zh: string, es: string) => ({ en, zh, es })
const evidence = t('Sample IDs ___; method ___; photos ___', '样品编号___；方法___；照片___', 'Muestras ___; método ___; fotos ___')
const outcome = t('Result ___; open item ___; owner ___', '结果___；未决项___；责任人___', 'Resultado ___; pendiente ___; responsable ___')

const article: EditorialArticle = {
  kind: 'guide',
  slug: 'insulated-packout-dimensional-range-fit',
  publishedAt: '2026-10-23',
  title: t('Check Pack-Out Fit Across the Agreed Dimension Ranges', '用约定尺寸范围核对保温袋与内装物的适配', 'Compruebe el ajuste con los intervalos de dimensiones acordados'),
  description: t('Compare agreed bag, closed-container and prepared-coolant dimension ranges with matched samples. Separate order-size conformity from complete pack-out compatibility.', '用对应样品比较袋体、闭合容器及预处理后冰源的约定尺寸范围，分别记录订单尺寸符合性与完整装载组合适配性。', 'Compare los intervalos acordados de bolsa, recipiente cerrado y refrigerante preparado con muestras correspondientes. Separe conformidad dimensional y compatibilidad del conjunto.'),
  intro: t('One container fitting one sample bag answers a limited question. If the bag, container or prepared refrigerant is supplied across an agreed range of dimensions, the purchasing question is which combinations have been reviewed. Record those ranges and the conditions behind them before treating one successful loading as approval of every version.', '一个容器能够装入一只样品袋，只回答了有限的问题。袋体、容器或预处理后冰源若按约定尺寸范围供应，采购时还要明确检查过哪些组合。先记录各项范围及其成立条件，再判断一次装载成功能覆盖哪些版本。', 'Que un recipiente quepa en una muestra de bolsa responde a una cuestión limitada. Si bolsa, recipiente o refrigerante preparado se suministran dentro de intervalos acordados, la compra debe identificar qué combinaciones se revisaron. Registre los intervalos y sus condiciones antes de extender un ajuste correcto a todas las versiones.'),
  sections: [
    {
      heading: t('Define the range and the measurement state together', '尺寸范围与测量状态一起定义', 'Defina el intervalo junto con el estado de medida'),
      paragraphs: [
        t('Ask for the order’s nominal dimensions and any agreed range at the named measurement points, with units and measurement conditions. Keep an outside bag dimension separate from an effective opening or usable interior. For a soft bag, do not derive usable space by subtracting assumed layer thicknesses from outside dimensions. If the supplier cannot confirm an opening range, record that gap and agree how the actual samples will be reviewed.', '索取订单标称尺寸，以及指定测量点的约定范围，并记录单位和测量条件。袋体外尺寸应与有效开口、内部可用空间分开。软袋的可用空间不能通过外尺寸减去假定层厚直接推算；供应方尚不能确认开口范围时，应记录缺项，并约定实际样品如何检查。', 'Solicite medidas nominales del pedido y el intervalo acordado en puntos definidos, con unidades y condiciones. Separe la medida exterior de la apertura efectiva y del espacio interior útil. En una bolsa flexible, no deduzca el espacio restando espesores supuestos. Si no se confirma el intervalo de apertura, registre la carencia y acuerde cómo revisar las muestras reales.'),
        t('For each container version, record the closed outside envelope, including its lid, rim, tabs or sleeve. If refrigerant is part of the pack-out, record its range after the agreed preparation and in the intended position. Unknown endpoints stay unconfirmed; neither zero nor a convenient standard allowance supplies the missing information.', '每一种容器版本都应记录闭合后的外部轮廓，包括盖、盖沿、折片或外套。装载方案包含冰源时，应记录按约定方法预处理后、在拟定位置使用的尺寸范围。未知端点保持未确认，不能填为零，也不能用方便的固定余量代替缺失信息。', 'Para cada versión de recipiente, registre el contorno exterior cerrado, incluida tapa, reborde, pestañas o funda. Si hay refrigerante, anote su intervalo tras la preparación acordada y en la posición prevista. Los extremos desconocidos siguen sin confirmar; ni cero ni una holgura estándar sustituyen los datos ausentes.'),
      ],
    },
    {
      heading: t('Agree which combinations need physical review', '约定哪些组合需要实物复核', 'Acuerde qué combinaciones requieren revisión física'),
      paragraphs: [
        t('List combinations that can actually occur in the intended supply and packing process. Ask the responsible buyer and supplier which boundary conditions need matched samples and how those samples represent the stated ranges. A minimum-opening and maximum-container comparison can flag a question, but a few dimensions alone cannot prove insertion, removal or zipper closure through a flexible opening.', '列出拟定供货与打包流程中实际可能出现的组合，由负责的买家与供应方约定哪些边界条件需要对应实样，以及这些样品如何代表所写范围。最小开口与最大容器的比较可以提示问题，但少数尺寸本身不能证明物品能够通过软质开口装入、取出或完成拉链闭合。', 'Enumere combinaciones posibles en el suministro y embalaje previstos. Comprador y proveedor deben acordar qué límites requieren muestras correspondientes y cómo representan los intervalos. Comparar la apertura mínima con el recipiente máximo puede señalar una cuestión, pero unas medidas no prueban introducción, extracción ni cierre por una apertura flexible.'),
      ],
      table: {
        caption: t('Range-compatibility record for the applicable pack-out', '适用装载方案的范围兼容记录表', 'Registro de compatibilidad para el conjunto aplicable'),
        columns: [t('Combination', '组合', 'Combinación'), t('Range condition to review', '待检查的范围条件', 'Condición que revisar'), t('Matched evidence', '对应依据', 'Evidencia correspondiente'), t('Decision record', '决定记录', 'Registro de decisión')],
        rows: [
          [t('Regular pack-out', '常用装载', 'Conjunto habitual'), t('Named bag/container revisions; agreed state ___', '袋体与容器版本；约定状态___', 'Versiones de bolsa y recipiente; estado ___'), evidence, outcome],
          [t('Opening boundary', '开口边界', 'Límite de apertura'), t('Agreed restrictive opening and widest closed outline ___', '约定受限开口与闭合最大轮廓___', 'Apertura restrictiva y contorno cerrado máximo ___'), evidence, outcome],
          [t('Closure-height boundary', '闭合高度边界', 'Límite de altura al cerrar'), t('Applicable stack and prepared-coolant layout ___', '适用堆叠与处理后冰源布局___', 'Apilado y refrigerante preparado aplicables ___'), evidence, outcome],
          [t('Round-tub arrangement, if used', '适用时的圆桶组合', 'Conjunto con tarrina, si procede'), t('Closed rim, round opening and coolant space ___', '封盖桶沿、圆形开口及冰源空间___', 'Reborde cerrado, apertura circular y refrigerante ___'), evidence, outcome],
          [t('Changed component', '变更组件', 'Componente cambiado'), t('New revision and affected earlier combinations ___', '新版本及受影响的既有组合___', 'Nueva revisión y combinaciones afectadas ___'), evidence, outcome],
        ],
      },
    },
    {
      heading: t('Use the current pizza and tub formats as different cases', '披萨包与圆桶包分别检查', 'Revise por separado los formatos para pizza y tarrina'),
      paragraphs: [
        t('YUANEN’s current pizza-bag page describes a low, wide zippered format around closed cartons. For that enquiry, connect the agreed carton outline and stack-height ranges to the bag opening and full zipper-closure checks. A sample that accepts a lower stack does not, by itself, establish that another stack within the proposed order will close without pressing on the cartons.', '远恩当前披萨包页面介绍围绕闭合纸盒设计的低宽拉链方案。相应询价应把约定纸盒外廓与堆叠高度范围，关联到袋口及完整拉链闭合检查。某只样品能放入较低堆叠，不能单独证明拟定订单中另一种堆叠也能在不挤压纸盒的情况下闭合。', 'La página actual de YUANEN describe un formato bajo y ancho con cremallera para cajas cerradas de pizza. Vincule sus intervalos de contorno y altura apilada con la apertura y el cierre completo. Que una muestra admita una pila baja no demuestra por sí solo que otra pila prevista cierre sin presionar las cajas.'),
        t('The current ice-cream proposal is cylindrical, with a round zip lid and body-mounted handles. Its closed tub rim must be reviewed at the entry, together with the chosen prepared refrigerant and removal action. Do not apply a rectangular pizza-box record to that round entry without changing the measurement points and the sample arrangement. Both current proposals have a nonwoven exterior and aluminium-foil lining; insulation details and finished dimensions still require sample confirmation.', '当前冰淇淋方案是圆筒形，采用圆形拉链盖和袋身提手，需要在入口处检查封盖桶沿，并结合选定冰源处理后的状态和取出动作。不能不调整测量点及样品布局，就把长方形披萨盒记录套到圆形入口上。两款当前方案均为无纺布外层与铝箔内层，隔热层细节和成品尺寸仍需样品确认。', 'La propuesta actual para helado es cilíndrica, con tapa circular con cremallera y asas en el cuerpo. Revise el reborde cerrado al pasar por la entrada, junto con el refrigerante preparado y la extracción. No traslade el registro rectangular de pizza a una entrada redonda sin adaptar puntos de medida y disposición. Ambas propuestas actuales tienen exterior no tejido e interior de aluminio; aislamiento y medidas finales requieren muestra.'),
      ],
    },
    {
      heading: t('Separate a size deviation from a compatibility problem', '尺寸偏离与组合不适配分开记录', 'Separe desviación dimensional e incompatibilidad'),
      paragraphs: [
        t('When a combination fails, keep the measured values and their method with the observation. State separately whether a value falls outside the agreed order range, whether the components are within their written ranges but do not work together in the reviewed state, or whether the range or method is still unconfirmed. Describe the actual contact or closure problem without guessing its manufacturing cause. The responsible parties must agree the next action.', '某个组合不适配时，应保留实测值、方法及观察结果，并分别说明：数值是否超出订单约定范围；各组件虽在书面范围内，却在所检查状态下无法配合；还是范围或方法仍未确认。描述实际接触或闭合问题，不猜测制造原因，由责任双方约定下一动作。', 'Si falla una combinación, conserve valores, método y observación. Distinga si un valor queda fuera del intervalo del pedido, si los componentes están dentro de sus intervalos escritos pero no funcionan juntos en el estado revisado, o si faltan intervalo o método. Describa el contacto o cierre observado sin atribuir una causa de fabricación no probada; las partes responsables acordarán la acción.'),
        t('Retain the accepted combinations, sample IDs and remaining limitations with the order. Revise the record when the bag, container, lid, coolant or arrangement changes. Dimension conformity and a successful loading check do not establish carrying capacity, thermal duration or breakage protection. Agree those requirements and any complete-system trials separately; this guide provides no universal tolerance, clearance, pack count or performance rating.', '将已接受组合、样品编号及剩余限制与订单一起保存。袋体、容器、盖、冰源或布局改变时更新记录。尺寸符合和装载成功不证明承重、保温时长或防破损性能，这些要求及整套系统试验应另行约定。本文不提供通用公差、余量、装载数量或性能评级。', 'Conserve combinaciones aceptadas, muestras y límites con el pedido. Actualice el registro al cambiar bolsa, recipiente, tapa, refrigerante o disposición. Cumplir medidas y cargar correctamente no acredita carga admisible, autonomía térmica ni protección frente a roturas. Acuerde esas necesidades y ensayos por separado; no se fija aquí tolerancia, holgura, cantidad ni prestación universales.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN current pizza-bag format and sample boundaries', '远恩当前披萨包袋型与样品边界', 'Formato actual de bolsa para pizza YUANEN y límites de muestra'), url: 'https://yuanenbag.com/products/insulated-pizza-delivery-bags/' },
    { title: t('YUANEN current cylindrical ice-cream carrier', '远恩当前圆筒冰淇淋配送包', 'Bolsa cilíndrica actual para helado YUANEN'), url: 'https://yuanenbag.com/products/insulated-ice-cream-delivery-bags/' },
  ],
  relatedProducts: ['insulated-pizza-delivery-bags', 'insulated-ice-cream-delivery-bags'],
  image: {
    file: 'images/editorial/2026-10-23/open-red-pizza-bag-separate-carton.webp', kind: 'illustration',
    alt: t('An open low red delivery bag with silver lining beside a closed plain pizza carton on a light grey surface', '浅灰表面上，一只带银色内衬的低宽红色配送包打开上盖，旁边放着闭合的普通披萨纸盒', 'Una bolsa roja baja abierta con forro plateado junto a una caja de pizza lisa cerrada sobre una superficie gris clara'),
    caption: t('Red carrier and a closed carton. Their pictured sizes do not establish compatibility or rated capacity.', '红色配送包与闭合纸盒，图中尺寸不证明二者适配或额定容量。', 'Bolsa roja y caja cerrada. Sus tamaños en la imagen no acreditan compatibilidad ni capacidad nominal.'),
  },
}
export default article
