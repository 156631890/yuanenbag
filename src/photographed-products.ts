import type { Bag, Text } from './data'
import { icePhotoGalleries, iceSectionPhotos } from './ice-photo-products'
import { foilPhotoGalleries, foilSectionPhotos } from './foil-photo-products'

const t = (en:string, zh:string, es:string):Text => ({en,zh,es})
const file = (name:string) => `photos-2026-09/${name}.webp`

// These products are supported by the owner's September 2026 sample photographs.
// Photographs do not establish dimensions, material composition or tested performance.
export const photographedProducts:Bag[] = [
  {
    slug:'compact-insulated-lunch-bags', collection:'yuanen-photos-2026',
    name:t('Custom insulated lunch bags with carry handles','小型手提午餐保温包定制｜拉链方形款','Bolsas térmicas de almuerzo personalizadas con asas'),
    seoTitle:t('Custom Insulated Lunch Bags with Handles | YUANEN','小型午餐保温包定制・手提拉链款 | 远恩','Bolsas térmicas de almuerzo personalizadas | YUANEN'),
    short:t('Compact lunch cooler bags','小型午餐保温包','Bolsas térmicas compactas de almuerzo'),
    intro:t('A compact handled lunch cooler with a zip-around lid and a flat base for packed meals and snacks. Review the yellow sample, handle construction and size comparison, then specify your lunch container, colour and logo for a bulk quotation.','小型手提午餐保温包，采用环绕式拉链上盖与平底结构，适合盒装午餐及点心包装选型。实拍展示黄色样品、提手结构和袋型大小对比；可按餐盒、配色与品牌图稿沟通批量定制。','Bolsa térmica compacta para almuerzo, con asas, tapa con cremallera y base plana para comida envasada y aperitivos. Revise la muestra amarilla y las asas; indique recipiente, color y logotipo para cotizar al por mayor.'),
    material:t('Textile exterior, zip closure and carry handles; insulation and lining specification to confirm','纺织外层、拉链封口与提手；隔热层和内衬规格待确认','Exterior textil, cremallera y asas; aislamiento y forro por confirmar'),
    use:t('Packed lunches · Snacks · Branded meal programmes','盒装午餐 · 点心 · 品牌餐食包装','Almuerzos envasados · Aperitivos · Programas de comidas'),
    group:'delivery',type:'cooler',category:'cooler',color:'#d8ba65',styles:['handle','zipper'],uses:['thermal','promotion'],
    image:file('compact-lunch-bag-main'),
    gallery:['compact-lunch-bag-front','compact-lunch-bag-handles','compact-lunch-bag-size-comparison','compact-lunch-bag-carrying','compact-lunch-bag-side'].map(file),
    considerations:[
      t('Measure the filled lunch box, including lid clips; leave space for any separately specified coolant.','测量装好后的餐盒及盖扣，并为另配冰源预留空间。','Mida la fiambrera llena, incluidos sus cierres, y reserve espacio para el refrigerante que se especifique.'),
      t('Agree handle drop, attachment points and zip access. A carrying photograph is not a tested load rating.','确认提手高度、连接位置及拉链开口；提携照片不等同于承重测试。','Acuerde caída de asas, fijaciones y apertura. Una foto de transporte no equivale a una carga ensayada.'),
      t('Separate plain-colour and logo-printed quantities in the RFQ; minimum order, sample cost and production time require a written quote.','询价时分别列出素色与印刷数量；起订量、样品费用及生产时间以正式报价为准。','Separe cantidades lisas y con logotipo; pedido mínimo, coste de muestra y plazo requieren cotización escrita.'),
    ],
    question:t('Can this lunch cooler be ordered with a company logo?','这款午餐保温包可以定制公司标志吗？','¿Se puede personalizar esta bolsa de almuerzo con un logotipo?'),
    answer:t('Send the artwork, preferred print position, quantity and lunch-box dimensions. The sample has a plain outer panel, but the print process, usable artwork area and minimum order must be confirmed for the chosen fabric. No fixed capacity or cooling duration is established by these photographs.','请提供图稿、印刷位置、数量及餐盒尺寸。样品外侧为素色面板，具体印刷工艺、可用图稿面积与起订量需结合所选面料确认；这些照片不提供固定容量或保冷时长依据。','Envíe diseño, posición de impresión, cantidad y medidas de la fiambrera. La muestra tiene un panel liso; proceso, área útil y pedido mínimo se confirman según el tejido. Las fotos no acreditan capacidad ni duración de frío.'),
  },
  {
    slug:'gold-trim-insulated-cake-bags',collection:'yuanen-photos-2026',
    name:t('White & gold insulated cake bags for bakery packaging','白金色蛋糕保温包定制｜烘焙礼盒手提系列','Bolsas térmicas blancas y doradas para tartas y pastelería'),
    seoTitle:t('White & Gold Insulated Cake Bags for Bakeries | YUANEN','白金色蛋糕保温包・烘焙礼盒定制 | 远恩','Bolsas térmicas para tartas con ribete dorado | YUANEN'),
    short:t('Gold-trim bakery cooler bags','白金色烘焙保温包','Bolsas de pastelería con ribete dorado'),
    intro:t('White bakery cooler bags with gold-colour handles and edging, a zip lid and a silver-colour lining. Sample photos show box loading and several height profiles for cake and dessert gift packaging. Choose the fit around your cake box before confirming a custom order.','白色袋身搭配金色提手及包边，采用拉链上盖与银色内衬。实拍展示蛋糕盒装入过程及多种高矮袋型，适合烘焙与甜品礼盒包装选型；定制前先按实际蛋糕盒确认内部空间。','Bolsas blancas de pastelería con asas y ribetes dorados, tapa con cremallera y forro plateado. Las fotos muestran la carga de cajas y distintas alturas para tartas y regalos de repostería. Confirme el ajuste con su caja antes del pedido.'),
    material:t('White outer panel, gold-colour trim and silver-colour lining; layer composition to confirm','白色外层、金色包边与银色内衬；各层成分需确认','Exterior blanco, ribete dorado y forro plateado; composición de capas por confirmar'),
    use:t('Cake boxes · Bakery gifts · Dessert packaging','蛋糕盒 · 烘焙礼赠 · 甜品包装','Cajas de tartas · Regalos de pastelería · Postres'),
    group:'delivery',type:'cooler',category:'cooler',color:'#b69c55',styles:['handle','zipper'],uses:['thermal','promotion'],
    image:file('gold-trim-cake-bag-main'),
    gallery:['gold-trim-cake-bag-interior','gold-trim-cake-bag-stitching','gold-trim-cake-bag-loading','gold-trim-cake-bag-range','gold-trim-cake-bag-display','gold-trim-cake-bag-zipper','gold-trim-cake-bag-carrying'].map(file),
    considerations:[
      t('Measure the outer cake box, board and bow, then check the lid path and hand clearance when lifting the box out.','测量蛋糕外盒、底托及蝴蝶结，核对合盖路径及取盒时手部所需空间。','Mida caja, base y lazo; compruebe el recorrido de la tapa y la holgura para extraer la caja.'),
      t('Review the gold-colour handle finish, edging and stitching on a physical sample before approving brand colours.','确认品牌配色前，实物核对金色提手表面、包边与车缝细节。','Revise acabado dorado, ribetes y costuras en una muestra antes de aprobar los colores de marca.'),
      t('The tall and low samples belong to one design range. Confirm dimensions, packing quantity and lead time for each selected size.','高款与矮款归入同一设计系列；每个所选尺寸分别确认规格、装箱数量与交期。','Los formatos altos y bajos pertenecen a una gama; confirme medidas, embalaje y plazo para cada tamaño.'),
    ],
    question:t('How do I choose a gold-trim cooler bag for a cake box?','如何为蛋糕盒选择白金色保温包？','¿Cómo elegir esta bolsa térmica para una caja de tarta?'),
    answer:t('Provide the outside length, width and height of the fully assembled box, including its ribbon or handle. Select a sample with clearance for loading and closing, and check any coolant placement separately. Photos show a design range, not measured sizes; the cake, gift box and drinks are display props and are not included.','提供组装好后外盒的长、宽、高，包含丝带或盒提手。通过样品核对装入及合盖余量，冰源位置另行确认。照片展示设计系列，不代表已标定尺寸；蛋糕、礼盒和饮料为展示道具，不包含在产品内。','Indique largo, ancho y alto exteriores de la caja montada, incluidos lazo o asa. Compruebe con una muestra la carga, el cierre y la colocación del refrigerante. Las fotos muestran diseños, no medidas verificadas; tartas, cajas y bebidas son accesorios no incluidos.'),
  },
]

const customCoolerFile = (name:string) => `custom-insulated-bags/${name}.jpg`
const createCustomCooler = (slug:string, enColor:string, zhColor:string, esColor:string, image:string):Bag => ({
  slug,
  name:t(`${enColor} insulated cooler bags with carry handles`,`${zhColor}保温包定制｜手提拉链款`,`Bolsas térmicas ${esColor} con asas`),
  seoTitle:t(`${enColor} Insulated Cooler Bags | YUANEN`,`${zhColor}保温包・手提拉链款 | 远恩`,`Bolsas térmicas ${esColor} | YUANEN`),
  short:t(`${enColor} cooler bags`,`${zhColor}保温包`,`Bolsas térmicas ${esColor}`),
  intro:t(`${enColor} insulated cooler bags with carry handles, a zip lid and a flat base for food, bakery and delivery packaging. Review the sample colour and confirm the loaded fit, layer structure and branding before a custom order.`,`${zhColor}保温包采用手提提手、拉链上盖与平底结构，适合食品、烘焙及配送包装。下单前请结合实物确认颜色、装载空间、复合层结构与品牌定制要求。`,`Bolsas térmicas ${esColor} con asas, tapa con cremallera y base plana para alimentos, pastelería y reparto. Revise el color y confirme ajuste, capas y personalización antes del pedido.`),
  material:t('Outer textile, insulation, lining, zip closure and carry handles; layer composition to confirm','纺织外层、隔热层、内衬、拉链封口与提手；各层结构需确认','Textil exterior, aislamiento, forro, cremallera y asas; composición de capas por confirmar'),
  use:t('Food delivery · Bakery packaging · Grocery and takeaway','餐饮配送 · 烘焙包装 · 商超与外卖','Reparto de alimentos · Pastelería · Supermercado y comida para llevar'),
  group:'delivery',type:'cooler',category:'cooler',color:'#8a6a5a',styles:['handle','zipper'],uses:['thermal','promotion'],
  image:customCoolerFile(image),gallery:[],
  considerations:[
    t('Measure the fully packed food or bakery box and leave clearance for the lid and handles.','测量装好食品或烘焙盒后的尺寸，并为合盖及提手预留余量。','Mida la caja de alimentos o pastelería cargada y deje holgura para tapa y asas.'),
    t('Confirm the outer colour, lining, insulation thickness, zip access and handle attachment on a physical sample.','以实物样品确认外层颜色、内衬、隔热层厚度、拉链开口及提手连接。','Confirme color exterior, forro, espesor del aislamiento, cremallera y fijación de asas con una muestra.'),
    t('Separate plain-colour and printed quantities in the quotation; MOQ, sample cost and lead time require written confirmation.','报价时分别列明素色与印刷数量；起订量、样品费用及交期以书面确认。','Separe cantidades lisas y personalizadas; mínimo, muestra y plazo requieren confirmación escrita.'),
  ],
  question:t('How do I order this insulated cooler bag?','如何采购这款保温包？','¿Cómo pedir esta bolsa térmica?'),
  answer:t('Send the packed product or box dimensions, preferred colour, quantity and artwork. Confirm the final structure, insulation, usable space and production terms with a sample and written quotation.','请提供装载产品或外盒尺寸、目标颜色、数量及图稿，并通过样品和正式报价确认最终结构、隔热层、可用空间与生产条件。','Envíe medidas del producto o caja, color, cantidad y diseño. Confirme estructura, aislamiento, espacio útil y condiciones con una muestra y cotización escrita.'),
})

export const additionalInsulatedBags:Bag[] = [
  createCustomCooler('brown-insulated-cooler-bags','Brown','棕色','marrón','brown-insulated-cooler-bag'),
  createCustomCooler('red-insulated-cooler-bags','Red','红色','rojo','red-insulated-cooler-bag'),
  createCustomCooler('pink-insulated-cooler-bags','Pink','粉色','rosa','pink-insulated-cooler-bag'),
  createCustomCooler('yellow-insulated-cooler-bags','Yellow','黄色','amarillo','yellow-insulated-cooler-bag'),
]

export const samplePhotoGalleries:Record<string,string[]> = {
  ...icePhotoGalleries,
  ...foilPhotoGalleries,
  'square-zipper-cake-cooler': ['mint-cake-bag-front','mint-cake-bag-application','mint-cake-bag-lining','mint-cake-bag-open','mint-cake-bag-handles','mint-cake-bag-carrying'].map(file),
}
export const sampleSectionPhotos:Record<string,Record<'application'|'detail'|'structure',string>> = {
  ...iceSectionPhotos,
  ...foilSectionPhotos,
  'compact-insulated-lunch-bags':{application:file('compact-lunch-bag-carrying'),detail:file('compact-lunch-bag-handles'),structure:file('compact-lunch-bag-size-comparison')},
  'gold-trim-insulated-cake-bags':{application:file('gold-trim-cake-bag-loading'),detail:file('gold-trim-cake-bag-stitching'),structure:file('gold-trim-cake-bag-interior')},
  'square-zipper-cake-cooler':{application:file('mint-cake-bag-application'),detail:file('mint-cake-bag-lining'),structure:file('mint-cake-bag-open')},
  'brown-insulated-cooler-bags':{application:customCoolerFile('brown-insulated-cooler-bag'),detail:customCoolerFile('brown-insulated-cooler-bag'),structure:customCoolerFile('brown-insulated-cooler-bag')},
  'red-insulated-cooler-bags':{application:customCoolerFile('red-insulated-cooler-bag'),detail:customCoolerFile('red-insulated-cooler-bag'),structure:customCoolerFile('red-insulated-cooler-bag')},
  'pink-insulated-cooler-bags':{application:customCoolerFile('pink-insulated-cooler-bag'),detail:customCoolerFile('pink-insulated-cooler-bag'),structure:customCoolerFile('pink-insulated-cooler-bag')},
  'yellow-insulated-cooler-bags':{application:customCoolerFile('yellow-insulated-cooler-bag'),detail:customCoolerFile('yellow-insulated-cooler-bag'),structure:customCoolerFile('yellow-insulated-cooler-bag')},
}
