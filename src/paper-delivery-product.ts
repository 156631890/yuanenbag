import type { Bag } from './data'
import type { ProductImage } from './product-media'

const folder = 'paper-insulated-delivery-bags'
const file = (n: number) => `standardized/${folder}/${String(n).padStart(2, '0')}.webp`

export const paperDeliveryBag: Bag = {
  slug: folder,
  name: {
    en: 'Kraft Paper Insulated Delivery Bags — Custom Design',
    zh: '纸基保温配送袋定制方案',
    es: 'Bolsas térmicas de papel kraft para reparto a medida',
  },
  seoTitle: {
    en: 'Kraft Paper Insulated Delivery Bags | YUANEN',
    zh: '纸基保温配送袋定制方案 | 远恩',
    es: 'Bolsas térmicas de papel kraft para reparto | YUANEN',
  },
  short: {
    en: 'Paper insulated delivery bag',
    zh: '纸基保温配送袋',
    es: 'Bolsa térmica de papel para reparto',
  },
  intro: {
    en: 'A proposed made-to-order carry bag with a kraft-paper exterior, a reflective inner layer, a broad flat base and short flat paper handles. Plan the open top and usable space around closed takeaway containers; confirm the full layer structure, handle attachment and load with a physical sample.',
    zh: '拟定的按需定制手提袋采用牛皮纸外层、银色反射内层、宽平底与短纸提手。围绕封盖餐盒规划开口和可用空间，再用实物样品确认各层材料、提手连接及装载表现。',
    es: 'Propuesta a medida con exterior de papel kraft, capa interior reflectante, base plana ancha y asas cortas de papel. Defina la abertura y el espacio útil según envases cerrados; confirme capas, fijación de asas y carga con una muestra física.',
  },
  material: {
    en: 'Proposed kraft-paper exterior and reflective foil-facing interior; full layer composition and bonding to confirm by sample',
    zh: '拟定牛皮纸外层与银色反射内层；完整复合层及连接方式按样品确认',
    es: 'Exterior de papel kraft y capa interior reflectante propuestos; composición y unión por confirmar con muestra',
  },
  use: {
    en: 'Takeaway counters · grocery pickup · short local delivery',
    zh: '门店外带 · 商超自提 · 短途配送',
    es: 'Comida para llevar · recogida de compras · reparto local corto',
  },
  group: 'delivery',
  color: '#B7885C',
  colourName: { en: 'Natural kraft proposal', zh: '原色牛皮纸方案', es: 'Propuesta kraft natural' },
  type: 'cooler',
  category: 'paper',
  styles: ['handle'],
  uses: ['thermal', 'supermarket'],
  collection: 'custom-designs-2026',
  image: file(1),
  gallery: [2, 3, 4, 5, 6, 7].map(file),
  considerations: [
    {
      en: 'Measure closed containers and their filled weight; confirm useful width, depth, height, opening clearance and base support on a loaded sample.',
      zh: '测量封盖容器与装载重量，在装载样品上确认有效宽、深、高、开口净空及底部支撑。',
      es: 'Mida envases cerrados y peso cargado; confirme ancho, fondo, alto, abertura y apoyo de base con una muestra llena.',
    },
    {
      en: 'Confirm the exact paper grade, reflective layer, intermediate insulation, bonding, gusset and handle attachment before quotation. A silver appearance alone does not identify the liner material.',
      zh: '报价前确认纸种、反射层、中间隔热层、复合方式、侧褶与提手连接；银色外观不能单独证明内衬材质。',
      es: 'Confirme papel, capa reflectante, aislamiento intermedio, unión, fuelle y asas antes de cotizar. El aspecto plateado no identifica por sí solo el forro.',
    },
    {
      en: 'The illustrated bag has an open top. It is not a sealed shipping pack, and no temperature-holding time, load rating, food-contact status or recyclability is claimed without evidence.',
      zh: '图示袋型为敞口，不是密封运输包装；未经证据核实，不声明保温时长、额定承重、食品接触资格或可回收性。',
      es: 'La bolsa ilustrada está abierta y no es un envase de envío sellado. Sin pruebas no se declaran duración térmica, carga nominal, aptitud alimentaria ni reciclabilidad.',
    },
  ],
  question: {
    en: 'Is the illustrated kraft bag a tested, recyclable product?',
    zh: '图中的牛皮纸袋已测试并可回收吗？',
    es: '¿La bolsa kraft ilustrada está ensayada y es reciclable?',
  },
  answer: {
    en: 'The images present a custom design for sampling. The reflective lining may make the finished bag a mixed-material construction; paper appearance does not establish recyclability or performance. Confirm the actual material specification, destination-market disposal route and complete loaded-pack testing before making such claims.',
    zh: '图片展示待打样的定制设计。反射内衬可能使成品成为复合材料；纸质外观不能证明可回收性或使用性能。相关表述应先核对实际材质、目的地处理路径及完整装载测试。',
    es: 'Las imágenes muestran un diseño para muestreo. El forro reflectante puede convertirla en un producto de materiales mixtos; el aspecto de papel no demuestra reciclabilidad ni rendimiento. Compruebe materiales, gestión local y ensayos del embalaje cargado.',
  },
}

const labels = [
  ['Overall form and open top', '整体袋型与敞口', 'Forma general y abertura'],
  ['Interior and usable base', '内衬与可用底部', 'Interior y base útil'],
  ['Closed-container loading', '封盖餐盒装入', 'Carga de envase cerrado'],
  ['Paper handle and lining edge', '纸提手与内衬边缘', 'Asa de papel y borde interior'],
  ['Side gusset and flat bottom', '侧褶与平底', 'Fuelle lateral y base plana'],
  ['Short-distance hand carrying', '短途手提', 'Transporte manual corto'],
  ['Folded storage form', '折叠收纳形态', 'Forma plegada para guardar'],
] as const

export const paperDeliveryImages: ProductImage[] = labels.map(([en, zh, es], i) => ({
  file: file(i + 1),
  kind: 'visualization',
  label: { en, zh, es },
}))

export const paperDeliverySectionImages = {
  application: file(3),
  detail: file(4),
  structure: file(5),
}
