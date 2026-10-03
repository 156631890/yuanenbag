import manifest from './responsive-image-manifest.json'
import standardized from './standardized-product-images.json'

type ImageAttributes = { srcSet: string; width: number; height: number }
const images: Record<string, ImageAttributes> = {}
if (import.meta.env.SSR || import.meta.env.DEV) {
  for (const [source, image] of Object.entries(manifest)) {
    images[source] = {
      srcSet: image.variants.map(item => `${import.meta.env.BASE_URL}${item.file} ${item.width}w`).join(', '),
      width: image.width,
      height: image.height,
    }
  }
} else {
  // Prerendered pages already contain every image candidate needed by their UI,
  // including gallery thumbnails. Reuse these attributes during hydration.
  for (const element of document.querySelectorAll<HTMLImageElement>('#root img[srcset]')) {
    const source = element.getAttribute('src')
    const srcSet = element.getAttribute('srcset')
    const width = Number(element.getAttribute('width'))
    const height = Number(element.getAttribute('height'))
    if (!source?.startsWith(import.meta.env.BASE_URL) || !srcSet || !Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) continue
    images[source.slice(import.meta.env.BASE_URL.length)] = { srcSet, width, height }
  }
}
export function responsiveImage(source: string, sizes: string) {
  const replacement = (standardized as Record<string,string>)[source.replace(/^images\/products\//, '')]
  if (source.startsWith('images/products/') && replacement) source = `images/products/${replacement}`
  const image = images[source]
  if (!image) return {}
  return {
    decoding: 'async' as const,
    srcSet: image.srcSet,
    sizes,
    width: image.width,
    height: image.height,
  }
}
