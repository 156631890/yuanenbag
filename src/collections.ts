import { productFamily, type ProductFamily } from './product-classification'
import { bags, type Bag, type Text } from './data'
export type Collection = { slug:string; type:Bag['type']; family:ProductFamily; title:Text; name:Text; description:Text; guide:string }
export const collections:Collection[] = [
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
      "en": "Box liners & pallet covers",
      "zh": "箱内衬与托盘罩",
      "es": "Revestimientos y fundas para palés"
    },
    "title": {
      "en": "Insulated Box Liners & Pallet Covers | YUANEN",
      "zh": "保温箱内衬与托盘保温罩选型 | 远恩",
      "es": "Revestimientos térmicos y fundas para palés | YUANEN"
    },
    "description": {
      "en": "Compare insulation inside a shipping container with a hood over a complete pallet load. These formats serve different packing scales and require different measurement and handling checks.",
      "zh": "比较放入运输容器的保温箱内衬与覆盖整托货物的托盘保温罩。两者适用包装尺度不同，需要分别核对测量边界与搬运条件。",
      "es": "Compare el aislamiento interior de un contenedor con una funda sobre una carga paletizada. Son escalas de embalaje distintas y requieren comprobaciones de medidas y manipulación diferentes."
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
export const collectionProducts=(collection:Collection)=>bags.filter(b=>productFamily(b)===collection.family)
export const collectionFor=(bag:Bag)=>collections.find(c=>c.family===productFamily(bag))
