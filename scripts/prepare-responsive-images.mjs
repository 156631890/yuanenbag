import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

// Keep product media responsive as well as the audited homepage/factory images.
const standardized = JSON.parse(await readFile('src/standardized-product-images.json', 'utf8'))
const sources = [...new Set([
  'images/products/packy/cold-chain-range.webp',
  'images/products/packy/segmented-ice-sheets-main.webp',
  'images/products/packy/self-adhesive-foil-bags-new/01.webp',
  'images/products/packy/upright-grocery-cooler-main.webp',
  'images/products/packy/square-zipper-cake-cooler-main.webp',
  'images/products/packy/wide-base-meal-cooler-main.webp',
  'images/products/packy/self-seal-non-woven-delivery-bags-new/delivery-main.webp',
  'images/products/packy/self-absorbing-ice-packs-main.webp',
  'images/factory/2026/longgang-production.webp',
  ...Object.values(standardized).map(file => `images/products/${file}`),
].map(source => standardized[source.replace(/^images\/products\//, '')] ? `images/products/${standardized[source.replace(/^images\/products\//, '')]}` : source))]
const manifest = {}
await mkdir('public/images/responsive', { recursive: true })
for (const source of sources) {
  const input = await readFile(`public/${source}`)
  const { width, height } = await sharp(input).metadata()
  const key = createHash('sha256').update(input).digest('hex').slice(0, 12)
  const variants = []
  for (const size of [96, 384, 768, 1280].filter(size => size < width)) {
    const file = `images/responsive/${key}-${size}.webp`
    await sharp(input).resize({ width: size, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`public/${file}`)
    variants.push({ file, width: size })
  }
  manifest[source] = { width, height, variants: [...variants, { file: source, width }] }
}
await writeFile('src/responsive-image-manifest.json', JSON.stringify(manifest, null, 2) + '\n')
console.log(`Prepared responsive variants for ${sources.length} audited images; originals preserved.`)
