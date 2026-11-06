import { familyRank, compareProductDemand, productFamily, type ProductFamily } from './product-classification'
import { bags, type Bag, type Text } from './data'
export type Collection = { slug:string; type:Bag['type']; family:ProductFamily; title:Text; name:Text; description:Text; guide:string }
export const collections:Collection[] = [
 {slug:'insulation-rolls-sheets',family:'rolls',type:'foil',name:{en:'Insulation rolls & sheets',zh:'保温卷材与片材',es:'Rollos y láminas aislantes'},title:{en:'Insulation Rolls & Cut Sheets for Packaging | YUANEN',zh:'保温包装卷材与裁片 | 远恩',es:'Rollos y láminas aislantes para embalaje | YUANEN'},description:{en:'Compare roll and cut-sheet supply for packaging conversion. Specify substrate, reflective facing, usable width, length and thickness.',zh:'按包装加工需求比较整卷与裁片供货，分别确认基材、反射面层、可用幅宽、长度和厚度。',es:'Compare rollos y láminas para transformar embalajes. Especifique base, cara reflectante, ancho útil, longitud y espesor.'},guide:'insulated-bag-materials'},
  {
    "slug": "foil-insulated-packaging",
    "family": "foil",
    "type": "foil",
    "name": {
      "en": "Foil insulated bags",
      "zh": "铝箔保温袋",
      "es": "Bolsas térmicas de aluminio"
    },
    "title": {
      "en": "Foil Insulated Bags & Box Liners Manufacturer | YUANEN",
      "zh": "铝箔保温袋与冷链箱内衬定制厂家 | 远恩",
      "es": "Bolsas de aluminio y revestimientos térmicos | YUANEN"
    },
    "description": {
      "en": "Compare self-seal, open-top and gusseted foil insulated bags and box liners. Choose closures, usable sizes and EPE structures for food delivery.",
      "zh": "比较自粘、平口、立体铝箔保温袋与箱内衬，为食品配送选择封口、可用尺寸与 EPE 复合结构。",
      "es": "Compare bolsas térmicas de aluminio autoadhesivas, abiertas, con base y revestimientos de caja. Elija cierre, medidas útiles y estructura EPE."
    },
    "guide": "bag-material-comparison"
  },
  {
    "slug": "insulated-takeaway-totes",
    "family": "takeaway",
    "type": "cooler",
    "name": {
      "en": "Insulated takeaway totes",
      "zh": "外卖保温手提袋",
      "es": "Bolsas térmicas para llevar"
    },
    "title": {
      "en": "Insulated Takeaway Totes: Paper & Non-woven | YUANEN",
      "zh": "外卖保温手提袋：纸基与无纺布袋选型 | 远恩",
      "es": "Bolsas térmicas para llevar: papel y no tejido | YUANEN"
    },
    "description": {
      "en": "Compare paper-exterior and self-seal non-woven takeaway totes for closed food containers, drinks and bakery boxes. Choose the opening, handles and base around the actual pack-out.",
      "zh": "比较纸外层与自粘封口无纺布外卖保温手提袋，按封盖餐盒、饮品和烘焙盒选择开口、提手及底型。",
      "es": "Compare bolsas térmicas de exterior de papel y bolsas autoadhesivas no tejidas para envases cerrados, bebidas y cajas de pastelería. Elija abertura, asas y base según la carga."
    },
    "guide": "custom-bag-order-checklist"
  },
  {
    "slug": "custom-cooler-bags",
    "family": "coolers",
    "type": "cooler",
    "name": {
      "en": "Delivery & grocery cooler bags",
      "zh": "配送与购物保温包",
      "es": "Bolsas térmicas de reparto y compra"
    },
    "title": {
      "en": "Custom Cooler Bags for Lunch, Cakes & Grocery | YUANEN",
      "zh": "午餐、蛋糕与商超保温包定制 | 远恩",
      "es": "Bolsas térmicas personalizadas para comida y tartas | YUANEN"
    },
    "description": {
      "en": "Choose custom cooler bags for lunch boxes, cakes, meals and groceries. Compare zip openings, base shapes, handles and sample photos for bulk orders.",
      "zh": "按午餐盒、蛋糕、餐饮和商超用途选择保温包，比较拉链开口、底型、提手及实拍样品，准备批量定制采购。",
      "es": "Elija bolsas térmicas para almuerzo, tartas, comidas y compras. Compare cierres, bases, asas y fotos de muestras para pedidos al por mayor."
    },
    "guide": "insulated-bag-materials"
  },
  {
    "slug": "insulated-box-liners-pallet-covers",
    "family": "liners-covers",
    "type": "foil",
    "name": {
      "en": "Box liners & thermal covers",
      "zh": "箱内衬与保温罩",
      "es": "Revestimientos y fundas térmicas"
    },
    "title": {
      "en": "Insulated Box Liners & Pallet Covers | YUANEN",
      "zh": "保温箱内衬与托盘保温罩选型 | 远恩",
      "es": "Revestimientos térmicos y fundas para palés | YUANEN"
    },
    "description": {
      "en": "Compare box liners, pallet covers, front-opening roll cage covers, IBC tank covers and round drum covers. Specify the handling unit, access, measurement boundaries and clearance for moving components.",
      "zh": "比较保温箱内衬、整托保温罩、前帘开合笼车罩、IBC 吨桶罩与工业圆桶罩。按实际装运单元核对开口、测量边界与运动部件间隙。",
      "es": "Compare revestimientos, fundas para palés, carros, IBC y bidones. Defina unidad de manejo, acceso, límites de medida y espacio para piezas móviles."
    },
    "guide": "bag-material-comparison"
  },
  {
    "slug": "ice-packs-for-shipping",
    "family": "ice",
    "type": "ice",
    "name": {
      "en": "Ice packs for food shipping",
      "zh": "食品运输冰袋与冰格",
      "es": "Acumuladores de frío para envío de alimentos"
    },
    "title": {
      "en": "Ice Packs for Food Shipping: Water-Fill & Absorbing | YUANEN",
      "zh": "食品冷链运输冰袋・注水、自吸与冰格选型 | 远恩",
      "es": "Acumuladores de frío para envío de alimentos | YUANEN"
    },
    "description": {
      "en": "Compare water-fill, self-absorbing and segmented ice packs for insulated food shipping. Review preparation, filled size and packing requirements.",
      "zh": "比较注水、自吸水和分格冰袋在食品保温运输中的用途，核对操作准备、填充后尺寸与装箱要求。",
      "es": "Compare acumuladores rellenables, autoabsorbentes y láminas para envíos alimentarios. Revise preparación, tamaño lleno y colocación."
    },
    "guide": "ice-pack-selection"
  }
]
collections.sort((a,b)=>familyRank(a.family)-familyRank(b.family))
export const collectionProducts=(collection:Collection)=>bags.filter(b=>productFamily(b)===collection.family).sort(compareProductDemand)
export const collectionFor=(bag:Bag)=>collections.find(c=>c.family===productFamily(bag))
