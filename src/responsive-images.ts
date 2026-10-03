import manifest from './responsive-image-manifest.json'
import standardized from './standardized-product-images.json'

const images = manifest as Record<string, { width: number; height: number; variants: { file: string; width: number }[] }>
export function responsiveImage(source: string, sizes: string) {
  const replacement = (standardized as Record<string,string>)[source.replace(/^images\/products\//, '')]
  if (source.startsWith('images/products/') && replacement) source = `images/products/${replacement}`
  const image = images[source]
  if (!image) return {}
  return {
    decoding: 'async' as const,
    srcSet: image.variants.map(item => `${import.meta.env.BASE_URL}${item.file} ${item.width}w`).join(', '),
    sizes,
    width: image.width,
    height: image.height,
  }
}
