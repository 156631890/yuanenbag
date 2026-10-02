import manifest from './responsive-image-manifest.json'

const images = manifest as Record<string, { width: number; height: number; variants: { file: string; width: number }[] }>
export function responsiveImage(source: string, sizes: string) {
  const image = images[source]
  if (!image) return {}
  return {
    srcSet: image.variants.map(item => `${import.meta.env.BASE_URL}${item.file} ${item.width}w`).join(', '),
    sizes,
    width: image.width,
    height: image.height,
  }
}
