import sizes from './product-image-sizes.json'
import { tx, type Bag, type Lang } from './data'
import { samplePhotoGalleries, sampleSectionPhotos } from './photographed-products'
import { foilMeasurementImages } from './foil-photo-products'

export type ProductImage = { file: string; kind: 'measurement' | 'photograph' | 'scene' | 'detail' | 'reference' | 'visualization' | 'application' | 'material' | 'structure' }
export const isMeasurementPhoto=(file:string)=>foilMeasurementImages.includes(file)
const sampleImage=(file:string):ProductImage=>({file,kind:isMeasurementPhoto(file)?'measurement':'photograph'})
// Accepted product visualizations go here after comparison with the catalog source.
export const productPresentations: Record<string, string> = {
  "gusseted-foil-cake-bags": "packy/gusseted-foil-cake-bags-main.webp",
  "hand-finished-gusseted-foil-bags": "packy/hand-finished-gusseted-foil-bags-main.webp",
  "machine-formed-gusseted-foil-bags": "packy/machine-formed-gusseted-foil-bags-main.webp",
  "open-top-foil-bags": "packy/open-top-foil-bags-main.webp",
  "segmented-ice-sheets": "packy/segmented-ice-sheets-main.webp",
  "self-absorbing-ice-packs": "packy/self-absorbing-ice-packs-main.webp",
  "self-adhesive-foil-bags": "packy/self-adhesive-foil-bags-main.webp",
  "self-seal-non-woven-delivery-bags": "packy/self-seal-non-woven-delivery-bags-main.webp",
  "square-zipper-cake-cooler": "packy/square-zipper-cake-cooler-main.webp",
  "upright-dessert-cooler": "packy/upright-dessert-cooler-main.webp",
  "upright-grocery-cooler": "packy/upright-grocery-cooler-main.webp",
  "water-fill-ice-packs": "packy/water-fill-ice-packs-main.png",
  "wide-base-meal-cooler": "packy/wide-base-meal-cooler-main.webp"
}
const detailImages = new Set(['404','405','407','446','449','450','451','495','496','497','498','534','538','539','540','541'])
export function productImages(bag: Bag): ProductImage[] {
  if (bag.collection==='yuanen-photos-2026') return [bag.image!,...(bag.gallery||[])].map(sampleImage)
  if (bag.slug==='water-fill-ice-packs') return [
    {file: productPresentations[bag.slug], kind: 'visualization'},
    ...(samplePhotoGalleries[bag.slug]||[]).slice(1).map(sampleImage),
  ]
  if (bag.slug==='segmented-ice-sheets') return [
    {file: productPresentations[bag.slug], kind: 'visualization'},
    {file: `packy/details-v2/${bag.slug}-application-v2.webp`, kind: 'application'},
    {file: `packy/details-v2/${bag.slug}-detail-v2.webp`, kind: 'material'},
  ]
  if (productPresentations[bag.slug]) return [
    {file: productPresentations[bag.slug], kind: 'visualization'},
    {file: `packy/details-v2/${bag.slug}-application-v2.webp`, kind: 'application'},
    {file: `packy/details-v2/${bag.slug}-detail-v2.webp`, kind: 'material'},
    {file: `packy/details-v2/${bag.slug}-structure-v2.webp`, kind: 'structure'},
    ...(samplePhotoGalleries[bag.slug]||[]).map(sampleImage),
  ]
  const original = bag.image ? [bag.image, ...(bag.gallery || [])] : []
  const images: ProductImage[] = original.map(file => ({ file, kind: !bag.collection ? 'reference' : detailImages.has(file.split('/').pop()!.split('.')[0]) ? 'detail' : 'scene' }))
  if (productPresentations[bag.slug]) images.unshift({ file: productPresentations[bag.slug], kind: 'visualization' })
  return images
}
export function productDetailImage(slug: string, kind: 'application' | 'detail' | 'structure') {
  if (sampleSectionPhotos[slug]) return sampleSectionPhotos[slug][kind]
  return `packy/details-v2/${slug}-${kind}-v2.webp`
}
export function imageSize(file: string) {
  return (sizes as Record<string, {width:number;height:number}>)[file] || {width:1200,height:1200}
}
export const imageUrl = (file: string) => `${import.meta.env.BASE_URL}images/products/${file}`
export function imageLabel(kind: ProductImage['kind'], lang: Lang) {
  return ({
    measurement: tx('Material measurement reference', '材料测厚参考', 'Referencia de medición del material'),
    photograph: tx('Sample photograph', '产品实拍', 'Fotografía de muestra'),
    scene: tx('Catalog scene', '目录场景', 'Escena de catálogo'),
    detail: tx('Construction reference', '结构参考', 'Referencia de construcción'),
    reference: tx('Design reference', '参考款', 'Diseño de referencia'),
    visualization: tx('Product visualization', '产品效果图', 'Visualización del producto'),
    application: tx('Packing application', '装载应用', 'Aplicación de embalaje'),
    material: tx('Material & seam detail', '材质与封边细节', 'Detalle de material y uniones'),
    structure: tx('Product construction', '袋型与结构', 'Forma y construcción'),
  })[kind][lang]
}
