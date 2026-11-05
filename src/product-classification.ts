import type { Bag, Text } from './data'
export type ProductFamily = 'foil' | 'takeaway' | 'coolers' | 'liners-covers' | 'rolls' | 'ice'
const text=(en:string,zh:string,es:string):Text=>({en,zh,es})
export const productFamilies: [ProductFamily,Text][] = [
 ['coolers',text('Delivery & grocery cooler bags','配送与购物保温包','Bolsas térmicas de reparto y compra')],
 ['foil',text('Foil insulated bags','铝箔保温袋','Bolsas térmicas de aluminio')],
 ['liners-covers',text('Box liners & thermal covers','箱内衬与保温罩','Revestimientos y fundas térmicas')],
 ['takeaway',text('Insulated takeaway totes','外卖保温手提袋','Bolsas térmicas para llevar')],
 ['ice',text('Ice packs & sheets','冰袋与冰格','Acumuladores y láminas de frío')],
 ['rolls',text('Insulation rolls & sheets','保温卷材与片材','Rollos y láminas aislantes')],
]
export const productMaterials = [
 ['foil-faced',text('Foil-faced composite','铝箔面复合材料','Compuesto aluminizado')],
 ['paper-faced',text('Paper exterior','纸外层','Exterior de papel')],
 ['nonwoven-faced',text('Non-woven exterior','无纺布外层','Exterior no tejido')],
 ['pack-film',text('Coolant pouch film','冰袋袋膜','Película de acumulador')],
 ['to-confirm',text('Exterior material to confirm','外层材料待确认','Material exterior por confirmar')],
] as const
// Product form, material and use are separate axes. New active products require an explicit entry.
export const productClassifications:Record<string,{family:ProductFamily;material:string}> = {
 "insulated-ibc-covers":{family:"liners-covers",material:"foil-faced"},
 "insulated-roll-cage-covers":{family:"liners-covers",material:"foil-faced"},
 "epe-foam-foil-insulation-rolls":{family:"rolls",material:"foil-faced"},
 "foil-bubble-insulation-rolls":{family:"rolls",material:"foil-faced"},
  "insulated-pallet-covers": {
    "family": "liners-covers",
    "material": "foil-faced"
  },
  "paper-insulated-delivery-bags": {
    "family": "takeaway",
    "material": "paper-faced"
  },
  "insulated-pizza-delivery-bags": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "insulated-catering-bags": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "insulated-meal-prep-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "insulated-beverage-delivery-bags": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "insulated-ice-cream-delivery-bags": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "gusseted-self-seal-foil-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "foil-insulated-box-liners": {
    "family": "liners-covers",
    "material": "foil-faced"
  },
  "side-absorbing-ice-packs": {
    "family": "ice",
    "material": "pack-film"
  },
  "double-film-self-absorbing-ice-packs": {
    "family": "ice",
    "material": "pack-film"
  },
  "compact-insulated-lunch-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "gold-trim-insulated-cake-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "coffee-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "red-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "pink-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "yellow-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "lake-blue-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "iridescent-orange-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "iridescent-blue-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "iridescent-pink-insulated-cooler-bags": {
    "family": "coolers",
    "material": "to-confirm"
  },
  "self-seal-non-woven-bakery-bags": {
    "family": "takeaway",
    "material": "nonwoven-faced"
  },
  "self-seal-non-woven-milk-tea-bags": {
    "family": "takeaway",
    "material": "nonwoven-faced"
  },
  "self-seal-non-woven-cake-bags": {
    "family": "takeaway",
    "material": "nonwoven-faced"
  },
  "self-seal-non-woven-food-service-bags": {
    "family": "takeaway",
    "material": "nonwoven-faced"
  },
  "self-adhesive-foil-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "open-top-foil-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "hand-finished-gusseted-foil-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "machine-formed-gusseted-foil-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "gusseted-foil-cake-bags": {
    "family": "foil",
    "material": "foil-faced"
  },
  "water-fill-ice-packs": {
    "family": "ice",
    "material": "pack-film"
  },
  "self-absorbing-ice-packs": {
    "family": "ice",
    "material": "pack-film"
  },
  "segmented-ice-sheets": {
    "family": "ice",
    "material": "pack-film"
  },
  "self-seal-non-woven-delivery-bags": {
    "family": "takeaway",
    "material": "nonwoven-faced"
  },
  "square-zipper-cake-cooler": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "wide-base-meal-cooler": {
    "family": "coolers",
    "material": "nonwoven-faced"
  },
  "upright-grocery-cooler": {
    "family": "coolers",
    "material": "nonwoven-faced"
  }
}
export function classificationFor(bag:Bag) {
 const entry=productClassifications[bag.slug]
 if(!entry) throw new Error('Missing explicit product classification: '+bag.slug)
 return entry
}
export const productFamily=(bag:Bag)=>classificationFor(bag).family
export const productMaterialLabel=(bag:Bag)=>productMaterials.find(([id])=>id===classificationFor(bag).material)![1]

// Matched primary-keyword estimates, US/en; not sales and not summed synonyms.
// Missing values stay unranked. See maintainer-docs/product-display-order.md.
const productDemand:Record<string,number>={
 'insulated-pizza-delivery-bags':480,'insulated-catering-bags':390,
 'self-adhesive-foil-bags':390,'foil-insulated-box-liners':320,
 'insulated-pallet-covers':170,'insulated-meal-prep-bags':110,
 'insulated-beverage-delivery-bags':40,'insulated-ice-cream-delivery-bags':20
}
export const familyRank=(id:ProductFamily)=>productFamilies.findIndex(([family])=>family===id)
export const compareProductDemand=(a:Bag,b:Bag)=>familyRank(productFamily(a))-familyRank(productFamily(b)) || (productDemand[b.slug]??-1)-(productDemand[a.slug]??-1)

export const compareAllProductDemand=(a:Bag,b:Bag)=>(productDemand[b.slug]??-1)-(productDemand[a.slug]??-1) || familyRank(productFamily(a))-familyRank(productFamily(b))
