import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

// Export only the photographs used inside the original company montages.
const crops = JSON.parse(await readFile('src/factory-photo-crops.json', 'utf8'))
for (const { source, file, left, top, width, height } of Object.values(crops)) {
  await sharp(`public/${source}`).extract({ left, top, width, height }).webp({ quality: 90 }).toFile(`public/${file}`)
}
const standardized = JSON.parse(await readFile('src/standardized-product-images.json', 'utf8'))
const sources = [...new Set([
  'images/brand/yuanen-logo.png',
  'images/products/packy/cold-chain-range.webp',
  'images/products/packy/segmented-ice-sheets-main.webp',
  'images/products/packy/self-adhesive-foil-bags-new/01.webp',
  'images/products/packy/upright-grocery-cooler-main.webp',
  'images/products/packy/square-zipper-cake-cooler-main.webp',
  'images/products/packy/wide-base-meal-cooler-main.webp',
  'images/products/packy/self-seal-non-woven-delivery-bags-new/delivery-main.webp',
  'images/products/packy/self-absorbing-ice-packs-main.webp',
  'images/factory/2026/longgang-production.webp',
  'images/factory/2026/customization-insulation-processing.webp',
  'images/factory/2026/longgang-converting.webp',
  'images/factory/2026/longgang-machinery.webp',
  'images/factory/2026/longgang-quality.webp',
  'images/factory/2026/longgang-warehouse.webp',
  'images/factory/2026/taizhou-materials.webp',
  'images/factory/2026/taizhou-production.webp',
  'images/factory/2026/taizhou-storage.webp',
  'images/products/packy/delivery-application.webp',
  'images/products/packy/bakery-application.webp',
  'images/ui/packy/guide-materials.webp',
  'images/ui/packy/guide-specification.webp',
  'images/ui/packy/guide-order.webp',
  'images/ui/packy/faq-support.webp',
  'images/documents/bsci-factory-audit.webp',
  'images/documents/cotton-linen-lead.webp',
  'images/documents/nonwoven-heavy-metals.webp',
  'images/documents/oeko-tex-cotton-fabric.webp',
  'images/documents/polyester-heavy-metals.webp',
  'images/documents/rpet-heavy-metals.webp',
  'images/editorial/2026-10-08/frozen-food-bag-packing-checks.webp',
  'images/editorial/2026-10-08/cold-chain-equipment-vs-handoff-packaging.webp',
  'images/editorial/2026-10-09/self-seal-foil-pouches.webp',
  ...Object.values(crops).map(crop => crop.file),
  ...Object.values(standardized).map(file => `images/products/${file}`),
].map(source => standardized[source.replace(/^images\/products\//, '')] ? `images/products/${standardized[source.replace(/^images\/products\//, '')]}` : source))]
const manifest = {}
await mkdir('public/images/responsive', { recursive: true })
for (const source of sources) {
  const input = await readFile(`public/${source}`)
  const { width, height } = await sharp(input).metadata()
  const quality = source.startsWith('images/brand/') ? 90 : source.startsWith('images/documents/') ? 88 : source.startsWith('images/factory/') ? 80 : 82
  const variants = []
  for (const size of [...[96, 192, 384, 640, 768, 960, 1280, 1600].filter(size => size < width), width]) {
    const output = await sharp(input).resize({ width: size, withoutEnlargement: true }).webp({ quality }).toBuffer()
    const key = createHash('sha256').update(output).digest('hex').slice(0, 12)
    const file = `images/responsive/${key}-${size}.webp`
    await writeFile(`public/${file}`, output)
    variants.push({ file, width: size })
  }
  manifest[source] = { width, height, variants }
}
await writeFile('src/responsive-image-manifest.json', JSON.stringify(manifest, null, 2) + '\n')
console.log(`Prepared responsive variants for ${sources.length} audited images; originals preserved.`)
