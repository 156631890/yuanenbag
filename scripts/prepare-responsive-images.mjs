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
  'images/editorial/2026-10-26/flat-pouch-reverse-side-edge-strips.webp',
  'images/editorial/2026-10-26/two-film-coolant-pouches-surface-view.webp',
  'images/editorial/2026-10-26/white-film-coolant-pouch-blue-print.webp',
  'images/editorial/2026-10-25/empty-molded-fiber-trays.webp',
  'images/editorial/2026-10-25/clear-film-roll-on-workbench.webp',
  "images/editorial/2026-10-25/empty-navy-carrier-separate-tray.webp",
  "images/editorial/2026-10-25/navy-carrier-loose-colour-cards.webp",
  "images/editorial/2026-10-25/empty-foam-box-silver-liner.webp",
  "images/editorial/2026-10-24/fiber-tray-clear-loose-film.webp",
  "images/editorial/2026-10-24/kraft-paper-rolls-storage.webp",
  "images/editorial/2026-10-24/plain-flat-pouch-white-top-strip.webp",
  "images/editorial/2026-10-24/flat-silver-pouches-paper-band.webp",
  "images/editorial/2026-10-24/silver-pouch-postal-carton.webp",
  "images/editorial/2026-10-23/plain-sealed-aluminium-food-tray.webp",
  "images/editorial/2026-10-23/plain-clear-packaging-film-roll.webp",
  "images/editorial/2026-10-23/open-red-pizza-bag-separate-carton.webp",
  "images/editorial/2026-10-23/silver-pouch-open-release-flap.webp",
  "images/editorial/2026-10-23/open-foam-box-soft-silver-liner.webp",
  "images/editorial/2026-10-22/plain-retail-carton-in-corrugated-outer.webp",
  "images/editorial/2026-10-22/kraft-paperboard-two-bottle-carrier.webp",
  "images/editorial/2026-10-22/olive-meal-bag-glass-container.webp",
  "images/editorial/2026-10-22/closed-teal-custom-beverage-bag.webp",
  "images/editorial/2026-10-22/white-foam-box-folded-foil-liner.webp",
  "images/editorial/2026-10-21/plain-pouch-sample-review.webp",
  "images/editorial/2026-10-21/silver-packaging-film-roll.webp",
  'images/editorial/2026-10-21/closed-silver-foil-parcel.webp',
  'images/editorial/2026-10-21/open-red-passive-pizza-carrier.webp',
  'images/editorial/2026-10-21/closed-teal-beverage-carrier.webp',
  'images/editorial/2026-10-19/open-navy-carrier-lidded-aluminium-tray.webp',
  'images/editorial/2026-10-19/navy-carrier-stainless-platform-trolley.webp',
  'images/editorial/2026-10-19/open-navy-carrier-empty-foil-interior.webp',
  'images/editorial/2026-10-17/folded-foil-liner-foam-box-separate-lid.webp',
  'images/editorial/2026-10-17/closed-navy-carrier-loose-white-tag.webp',
  'images/editorial/2026-10-17/open-foil-liner-white-foam-box.webp',
  'images/editorial/2026-10-16/plain-wrapped-packs-steel-tray.webp',
  'images/editorial/2026-10-16/plain-parcels-dispatch-workbench.webp',
  'images/editorial/2026-10-16/silver-flat-pouches-white-release-strip.webp',
  'images/editorial/2026-10-16/navy-front-opening-carrier-two-tray-scene.webp',
  'images/editorial/2026-10-16/upright-grocery-tote-shipping-carton.webp',
  'images/editorial/2026-10-15/molded-fiber-trays-separate-lid.webp',
  'images/editorial/2026-10-15/neutral-packaging-paper-roll.webp',
  'images/editorial/2026-10-15/closed-navy-catering-bag-envelope.webp',
  'images/editorial/2026-10-15/blue-gold-grocery-tote-blank-card.webp',
  'images/editorial/2026-10-15/open-catering-bag-folded-cloth.webp',
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
  'images/editorial/2026-10-10/insulated-packaging-carton-workbench.webp',
  'images/editorial/2026-10-12/pizza-carrier-kraft-cartons.webp',
  'images/editorial/2026-10-12/navy-front-opening-tray-carrier.webp',
  'images/editorial/2026-10-12/teal-beverage-tote-cup-dividers.webp',
  'images/editorial/2026-10-12/food-dispatch-cartons-labels.webp',
  'images/editorial/2026-10-12/thermal-carton-warehouse-handoff.webp',
  'images/editorial/2026-10-13/cylindrical-tub-carrier.webp',
  'images/editorial/2026-10-13/meal-container-tote.webp',
  'images/editorial/2026-10-13/foil-pouch-shipping-carton.webp',
  'images/editorial/2026-10-13/cold-chain-tray-dispatch.webp',
  'images/editorial/2026-10-13/foil-nonwoven-material-workbench-v2.webp',
  'images/editorial/2026-10-14/foam-box-foil-liner-lid.webp',
  'images/editorial/2026-10-14/chocolate-gift-box-foil-liner.webp',
  'images/editorial/2026-10-14/seafood-pouches-secondary-container.webp',
  'images/editorial/2026-10-14/sealed-food-pouches-foil-lined-foam-box.webp',
  'images/editorial/2026-10-14/lidded-meal-trays-roller-conveyor.webp',
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
