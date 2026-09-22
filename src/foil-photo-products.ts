import type { Bag, Text } from './data'
const t=(en:string,zh:string,es:string):Text=>({en,zh,es})
const file=(name:string)=>`photos-2026-09/${name}.webp`
export const foilMeasurementImages=['foil-material-measurement-a','foil-material-measurement-b'].map(file)

export const foilPhotoProducts:Bag[]=[
 {
  slug:'gusseted-self-seal-foil-bags',collection:'yuanen-photos-2026',
  name:t('Gusseted self-seal foil insulated bags for boxed food','立体带胶铝箔保温袋｜盒装食品自粘封口','Bolsas térmicas de aluminio con fuelle y cierre autoadhesivo'),
  seoTitle:t('Gusseted Self-Seal Foil Insulated Bags | YUANEN','立体带胶铝箔保温袋・自粘封口定制 | 远恩','Bolsas térmicas con fuelle y cierre adhesivo | YUANEN'),
  short:t('Gusseted self-seal foil bags','立体带胶铝箔保温袋','Bolsas de aluminio con fuelle y adhesivo'),
  intro:t('A standing foil-faced insulated pouch with a gusseted base and an adhesive top flap for boxed-food packing. The sample combines extra base depth with a fold-over closure. Match the filled container, opening width and flap overlap before requesting a bulk quotation.','立体底部搭配带胶折口，适合盒装食品的保温包装选型。实拍展示可展开的底部、银色袋面与顶部胶条，采购时一并核对装好后的餐盒尺寸、开口宽度和封口搭接余量。','Bolsa térmica con exterior aluminizado, base con fuelle y solapa autoadhesiva para alimentos envasados. La muestra combina profundidad de base y cierre plegable. Compruebe recipiente lleno, apertura y solape antes de cotizar al por mayor.'),
  material:t('Foil-faced foam composite with sealed gussets and adhesive flap; exact layer specification to confirm','铝箔面泡棉复合、立体封边与胶条折口；各层规格待确认','Compuesto de espuma aluminizada, fuelles sellados y solapa adhesiva; capas por confirmar'),
  use:t('Boxed takeaway · Bakery containers · Batch food packing','盒装外卖 · 烘焙容器 · 批量食品包装','Comida envasada · Envases de pastelería · Embalaje por lotes'),
  group:'delivery',type:'foil',category:'cooler',color:'#aeb8bb',styles:['other'],uses:['thermal'],
  image:file('gusseted-self-seal-foil-main'),gallery:foilMeasurementImages,
  considerations:[
   t('Check the filled box at the base and opening. Leave space for corner folds and closure rather than sizing from the flat pouch width alone.','同时核对盒体底部与开口适配，为底角折边和封口预留空间，不能只按平铺袋宽选型。','Compruebe caja llena, base y apertura; reserve espacio para esquinas y cierre, además del ancho plano.'),
   t('Specify flap length, adhesive position and the surface it bonds to. Verify closure on a loaded sample under the expected handling conditions.','明确折口长度、胶条位置及粘贴接触面，使用装好内装物的样品检查实际搬运条件下的封口。','Defina longitud de solapa, posición del adhesivo y superficie de unión. Revise el cierre con una muestra cargada.'),
   t('Thickness-gauge photographs are shared material references, not this pouch’s delivered thickness. Confirm composition, thickness tolerance and printing separately in the quote.','测厚照片为共用材料参考，不代表此款交付厚度；报价中分别确认成分、厚度公差和印刷要求。','Las fotos de medición son referencias de material, no el espesor entregado de esta bolsa. Confirme composición, tolerancia e impresión en la cotización.'),
  ],
  question:t('How is a gusseted self-seal bag different from a flat self-seal bag?','立体带胶保温袋与平口带胶款有什么区别？','¿En qué se diferencia esta bolsa con fuelle de una autoadhesiva plana?'),
  answer:t('The gusset creates base depth for a box-shaped load, while the adhesive flap closes the opening. A flat pouch has a different usable-space layout even when its stated width is similar. Compare the same filled container in both samples and confirm gusset depth and flap allowance; no cooling duration is established by the shape alone.','立体折边为盒装内物提供底部深度，带胶折口用于闭合开口。即使标注袋宽相近，平口袋的可用空间也不同。建议用同一个装好后的容器比较两种样品，并确认底部深度与折口余量；袋型本身不能证明保冷时长。','El fuelle aporta profundidad para cargas en caja y la solapa adhesiva cierra la apertura. Una bolsa plana ofrece otro espacio útil aunque el ancho sea parecido. Compare el mismo recipiente en ambas muestras y confirme profundidad y solapa; la forma no acredita duración térmica.'),
 },
 {
  slug:'foil-insulated-box-liners',collection:'yuanen-photos-2026',
  name:t('Foil insulated box liners for cold-chain packing','铝箔保温箱内衬袋｜冷链装箱配套','Bolsas aislantes de aluminio para el interior de cajas térmicas'),
  seoTitle:t('Foil Insulated Box Liners for Cold-Chain Packing | YUANEN','铝箔保温箱内衬袋・冷链运输包装 | 远恩','Revestimientos térmicos de aluminio para cajas | YUANEN'),
  short:t('Foil insulated box liners','铝箔保温箱内衬袋','Revestimientos térmicos para cajas'),
  intro:t('Foil-faced insulating bags used as liners inside an outer shipping box. The supplied photograph shows a liner folded closed within a foam box, helping buyers plan box fit and top closure. Specify the usable box interior, packed contents and coolant space; the outer box is a demonstration prop, not part of the liner quotation.','铝箔保温袋作为外箱内衬使用，实拍展示内衬置入泡沫箱后折叠闭合的装箱方式。按外箱可用内尺寸、内装物及冰源空间选型，并核对顶部折合余量；图中外箱用于展示，内衬报价不默认包含外箱。','Bolsas aislantes aluminizadas utilizadas como revestimiento interior de una caja de envío. La foto muestra el forro plegado dentro de una caja de espuma. Especifique espacio interior útil, contenido y refrigerante; la caja exterior es demostrativa y no se incluye por defecto en la cotización del forro.'),
  material:t('Foil-faced insulating liner; foam type, thickness and layer arrangement to confirm','铝箔面隔热内衬；泡棉类型、厚度与层次配置待确认','Forro aislante aluminizado; tipo de espuma, espesor y disposición de capas por confirmar'),
  use:t('Outer-box lining · Packaged food shipments · Coolant pairing','外箱内衬 · 包装食品运输 · 配套冰源','Revestimiento de cajas · Alimentos envasados · Uso con refrigerante'),
  group:'cold-chain',type:'foil',category:'cooler',color:'#b8c1c1',styles:['other'],uses:['thermal'],
  image:file('foil-box-liner-insert'),gallery:[...foilMeasurementImages],
  considerations:[
   t('Measure the usable interior of the actual outer box, including lid steps or corner profiles, before choosing the liner dimensions.','选择内衬尺寸前，测量实际外箱的可用内部空间，包括箱盖台阶和转角位置。','Mida el interior útil de la caja real, incluidos escalones de tapa y esquinas, antes de elegir el forro.'),
   t('Plan top-fold allowance, coolant placement and removal of the packed contents. The liner and outer box must be checked as one loaded system.','同时规划顶部折合余量、冰源位置及取货空间，将内衬与外箱作为完整装载方案核对。','Planifique pliegue superior, refrigerante y extracción del contenido. Revise forro y caja como un sistema cargado.'),
   t('Quote the liner separately from the outer box and ice packs. Material-measurement photos illustrate inspection only; request the ordered construction and its test scope.','内衬、外箱和冰袋分别确认报价；材料测厚图仅说明核对方式，订单结构与对应测试范围需另行确认。','Cotice por separado forro, caja y refrigerantes. Las fotos de medición ilustran la inspección; solicite construcción y alcance de ensayo del pedido.'),
  ],
  question:t('What dimensions are needed for an insulated box liner quotation?','保温箱内衬袋报价需要哪些尺寸？','¿Qué medidas se necesitan para cotizar un revestimiento térmico?'),
  answer:t('Send the usable internal width, depth and height of the outer box, plus the filled product dimensions and planned coolant layout. Allow for liner thickness and the top fold before approving a sample. This is a box-lining application of foil insulated bags; it does not imply that the outer box or coolant is included, or that a shipping duration has been validated.','请提供外箱可用内宽、内深、内高，装好后的产品尺寸，以及计划放置冰源的位置。确认样品前扣除内衬厚度并预留顶部折合空间。这是铝箔保温袋的箱内衬应用，不代表报价包含外箱或冰源，也不代表已验证某一运输保冷时长。','Envíe ancho, fondo y alto interiores útiles, medidas del producto y ubicación prevista del refrigerante. Reserve espesor del forro y pliegue superior. Es una aplicación de bolsa térmica como revestimiento; no implica caja o refrigerante incluidos ni duración de transporte validada.'),
 },
]
export const foilPhotoGalleries:Record<string,string[]>={
 'hand-finished-gusseted-foil-bags':['handmade-foil-bag-shape','gusseted-foil-open-interior','foil-material-measurement-a'].map(file),
 'open-top-foil-bags':['flat-foil-bag-loading','flat-foil-bag-standing','foil-material-measurement-b'].map(file),
}
export const foilSectionPhotos:Record<string,Record<'application'|'detail'|'structure',string>>={
 'gusseted-self-seal-foil-bags':{application:file('gusseted-self-seal-foil-main'),detail:file('foil-material-measurement-a'),structure:file('gusseted-self-seal-foil-main')},
 'foil-insulated-box-liners':{application:file('foil-box-liner-insert'),detail:file('foil-material-measurement-b'),structure:file('foil-box-liner-insert')},
 'hand-finished-gusseted-foil-bags':{application:file('gusseted-foil-open-interior'),detail:file('foil-material-measurement-a'),structure:file('handmade-foil-bag-shape')},
 'open-top-foil-bags':{application:file('flat-foil-bag-loading'),detail:file('foil-material-measurement-b'),structure:file('flat-foil-bag-standing')},
}
