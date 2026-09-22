import type { Bag, Text } from './data'

const t=(en:string,zh:string,es:string):Text=>({en,zh,es})
const file=(name:string)=>`photos-2026-09/${name}.webp`

// Product distinctions and nominal capacities are visible on owner-supplied samples.
// Printed claims are not evidence of certified performance or current inventory.
export const icePhotoProducts:Bag[]=[
 {
  slug:'side-absorbing-ice-packs',collection:'yuanen-photos-2026',
  name:t('Side-absorbing ice packs for insulated shipping boxes','双侧吸自吸水冰袋｜保温箱配套蓄冷','Acumuladores de frío de absorción lateral para cajas térmicas'),
  seoTitle:t('Side-Absorbing Ice Packs for Insulated Shipping | YUANEN','双侧吸自吸水冰袋・冷链包装选型 | 远恩','Acumuladores de frío de absorción lateral | YUANEN'),
  short:t('Side-absorbing ice packs','双侧吸自吸水冰袋','Acumuladores de absorción lateral'),
  intro:t('A water-activated ice-pack format identified as side-absorbing on the supplied samples. Compare the printed face, reverse and edge construction for your insulated shipping box. Sample labels show 180, 250 and 400 ml; confirm preparation, filled thickness and packing quantity before ordering.','样品标注为“双侧吸自吸水冰袋”，适合按保温箱装载方案选配。实拍展示正面、背面及边部结构，样品标注容量为 180、250、400 ml；下单前核对吸水准备方法、充盈厚度及每箱用量。','Formato de acumulador activado por agua, identificado en las muestras como de absorción lateral. Compare cara impresa, reverso y bordes para su caja térmica. Las etiquetas muestran 180, 250 y 400 ml; confirme preparación, espesor lleno y cantidad por caja.'),
  material:t('Printed pouch face, reverse panel and sealed edges; film and absorbent composition to confirm','印刷袋面、背层及封边结构；袋膜与吸水材料成分待确认','Cara impresa, reverso y bordes sellados; película y absorbente por confirmar'),
  use:t('Insulated shipping boxes · Pack-out trials · Cold-chain packing','保温运输箱 · 装箱选型 · 冷链包装','Cajas de envío térmicas · Pruebas de embalaje · Cadena de frío'),
  group:'cold-chain',type:'ice',category:'cooler',color:'#254d99',styles:['other'],uses:['thermal'],
  image:file('side-absorbing-ice-pack-front'),gallery:['side-absorbing-ice-pack-back','side-absorbing-ice-pack-seams'].map(file),
  considerations:[
   t('Identify the water-entry areas on a sample and keep the edge construction visible during inspection. Confirm soaking, draining and freezing instructions for this exact format.','结合样品确认进水位置及边部结构，并核对本款的浸泡、沥水与冻结操作。','Identifique las zonas de entrada de agua y revise los bordes. Confirme remojo, escurrido y congelación para este formato.'),
   t('Compare the 180, 250 and 400 ml sample labels against the filled dimensions and space beside your product containers. Label volume is not a measured cooling rating.','将样品标注的 180、250、400 ml 与充盈尺寸、内装容器旁的空间一起核对；标注容量不等同于保冷性能。','Compare las etiquetas de 180, 250 y 400 ml con las medidas llenas y el espacio junto al producto. El volumen no acredita rendimiento térmico.'),
   t('Request the available size list, minimum quantity, print options and dispatch schedule for the side-absorbing format in one quotation.','报价时单独确认双侧吸款的可供规格、起订数量、印刷选项及出货安排。','Solicite medidas disponibles, cantidad mínima, opciones de impresión y despacho específicos para la versión lateral.'),
  ],
  question:t('How should I compare side-absorbing packs with standard water-absorbing packs?','双侧吸冰袋与普通自吸水冰袋如何选型？','¿Cómo comparar la versión lateral con un acumulador absorbente convencional?'),
  answer:t('Compare water-entry construction, preparation workflow, filled dimensions and fit in the same insulated box. The supplied side-absorbing samples carry 180, 250 and 400 ml labels. Use an approved sample to confirm preparation and test the complete shipment; appearance alone does not establish faster absorption, leak resistance or longer cooling.','在同一保温箱方案中比较进水结构、准备流程、充盈尺寸和装载适配。提供的双侧吸样品标注为 180、250、400 ml。请以确认样品核对操作并测试完整装箱，不能仅凭外观判断吸水更快、防漏更好或保冷更久。','Compare entrada de agua, preparación, medidas llenas y ajuste en la misma caja térmica. Las muestras laterales indican 180, 250 y 400 ml. Confirme instrucciones con una muestra y ensaye el envío completo; el aspecto no demuestra mayor absorción, resistencia a fugas o duración.'),
 },
 {
  slug:'double-film-self-absorbing-ice-packs',collection:'yuanen-photos-2026',
  name:t('Double-film self-absorbing ice packs for food shipping','双面膜自吸水冰袋｜生鲜运输包装配套','Acumuladores autoabsorbentes con película en ambas caras para alimentos'),
  seoTitle:t('Double-Film Self-Absorbing Ice Packs for Shipping | YUANEN','双面膜自吸水冰袋・生鲜冷链配套 | 远恩','Acumuladores autoabsorbentes de doble cara | YUANEN'),
  short:t('Double-film self-absorbing packs','双面膜自吸水冰袋','Acumuladores autoabsorbentes de doble cara'),
  intro:t('Self-absorbing coolant pouches identified as a double-film format on the sample packaging. Front and reverse photographs help buyers review surface finish, print layout and pack size for food-shipping trials. Labels show 100, 180, 250 and 400 ml; confirm the current specification before bulk purchase.','样品包装标注为“双面膜自吸水冰袋”，正反面实拍便于核对表面、印刷布局及袋型，用于生鲜运输装箱选型。样品标注容量为 100、180、250、400 ml，批量采购前确认当前可供规格及操作说明。','Bolsas refrigerantes autoabsorbentes identificadas como formato con película en ambas caras. Las fotos del frente y reverso permiten revisar acabado, impresión y tamaño para ensayos de envío alimentario. Etiquetas de 100, 180, 250 y 400 ml; confirme la especificación antes de comprar al por mayor.'),
  material:t('Double-film pouch format with absorbent contents; film layers, thickness and formulation to confirm','双面膜袋体与吸水内容物；膜层、厚度及配方待确认','Bolsa con película en ambas caras y contenido absorbente; capas, espesor y fórmula por confirmar'),
  use:t('Packaged food shipping · Cooler boxes · Bulk packing operations','包装食品运输 · 保温箱 · 批量装箱','Envíos de alimentos envasados · Cajas térmicas · Embalaje por lotes'),
  group:'cold-chain',type:'ice',category:'cooler',color:'#343b9a',styles:['other'],uses:['thermal'],
  image:file('double-film-ice-pack-front'),gallery:[file('double-film-ice-pack-back')],
  considerations:[
   t('Check the front and reverse surfaces and agree film thickness, seal quality and legible handling information for the selected sample.','核对正反面表面，确认所选样品的膜厚、封口质量及清晰可读的操作标识。','Revise ambas caras y acuerde espesor, calidad del sellado e instrucciones legibles para la muestra elegida.'),
   t('Review the four labelled capacities as options within one format. Ask for empty and filled dimensions before planning the space inside a food shipper.','四种标注容量归为同一系列；规划生鲜箱内部空间前，索取空袋与充盈后尺寸。','Revise las cuatro capacidades como opciones de una misma gama. Solicite medidas vacías y llenas antes de planificar la caja alimentaria.'),
   t('Evaluate condensation, surface contact and freeze-thaw handling with your packaging. The double-film name does not itself establish sweat-proof or leak-proof performance.','结合实际包装评估冷凝水、表面接触及冻融搬运表现；“双面膜”名称本身不代表防结露或防漏测试结论。','Evalúe condensación, contacto y manipulación tras congelar y descongelar. El nombre de doble cara no acredita protección contra condensación ni fugas.'),
  ],
  question:t('What information is needed to order double-film self-absorbing ice packs?','双面膜自吸水冰袋批量采购需要哪些信息？','¿Qué datos se necesitan para pedir acumuladores autoabsorbentes de doble cara?'),
  answer:t('Specify the preferred labelled capacity, order quantity, artwork, packed food container and delivery route. Confirm available dimensions, water-activation instructions and sample terms for this exact format. Review moisture around the pack and validate the loaded box against your required temperature range; no retention time is established by these photos.','请提供目标标注容量、采购数量、图稿、食品容器及运输路线，并单独确认本款可供尺寸、吸水操作和样品条件。核对袋体周围水分，并按目标温度要求测试完整保温箱；照片不提供保冷时长依据。','Indique capacidad, cantidad, diseño, recipiente alimentario y ruta. Confirme medidas, activación por agua y condiciones de muestras de este formato. Revise la humedad alrededor del acumulador y ensaye la caja cargada según la temperatura requerida; las fotos no acreditan duración.'),
 },
]

export const icePhotoGalleries:Record<string,string[]>={
 'self-absorbing-ice-packs':['absorbing-ice-pack-range','absorbing-ice-pack-flat','absorbing-ice-pack-reverse','absorbing-ice-pack-hand','absorbing-ice-pack-front-back'].map(file),
 'water-fill-ice-packs':['water-fill-ice-pack-range','water-fill-ice-pack-sizes','water-fill-ice-pack-stacked','water-fill-ice-pack-closure'].map(file),
}
export const iceSectionPhotos:Record<string,Record<'application'|'detail'|'structure',string>>={
 'side-absorbing-ice-packs':{application:file('side-absorbing-ice-pack-front'),detail:file('side-absorbing-ice-pack-seams'),structure:file('side-absorbing-ice-pack-back')},
 'double-film-self-absorbing-ice-packs':{application:file('double-film-ice-pack-front'),detail:file('double-film-ice-pack-back'),structure:file('double-film-ice-pack-front')},
 'self-absorbing-ice-packs':{application:file('absorbing-ice-pack-range'),detail:file('absorbing-ice-pack-front-back'),structure:file('absorbing-ice-pack-flat')},
 'water-fill-ice-packs':{application:file('water-fill-ice-pack-range'),detail:file('water-fill-ice-pack-closure'),structure:file('water-fill-ice-pack-sizes')},
}
export const icePhotoSpecifications:Record<string,Text>={
 'side-absorbing-ice-packs':t('Sample label volumes: 180 / 250 / 400 ml. These are photographed label values, not a current stock list or independently measured capacity. Ask for empty width × height, filled thickness and prepared weight.','样品标注容量：180 / 250 / 400 ml。以上为照片中的标注值，并非当前库存表或独立实测容量。请索取空袋宽 × 高、充盈厚度及准备后重量。','Volúmenes indicados en las muestras: 180 / 250 / 400 ml. Son valores de etiqueta, no inventario actual ni capacidad medida de forma independiente. Solicite ancho × alto en vacío, espesor lleno y peso preparado.'),
 'double-film-self-absorbing-ice-packs':t('Sample label volumes: 100 / 180 / 250 / 400 ml. Confirm the available version, empty dimensions and filled dimensions separately. Printed volume must not be treated as an exact weight in grams.','样品标注容量：100 / 180 / 250 / 400 ml。请分别确认可供版本、空袋尺寸及充盈后尺寸；标注的毫升容量不能直接作为以克计的准确成品重量。','Volúmenes de etiqueta: 100 / 180 / 250 / 400 ml. Confirme versión disponible y medidas vacías y llenas por separado. El volumen en mililitros no equivale a un peso exacto en gramos.'),
}
