import { readFile } from 'node:fs/promises'
import sharp from 'sharp'

// Photograph crops fill the square; isolated product images keep their matte.
// Offsets select the retained region within the excess width/height (0..1).
const photographs = [
  ['photos-2026-09/foil-material-measurement-a.webp', 0.5, 0.8],
  ['photos-2026-09/foil-material-measurement-b.webp', 0.5, 0.2],
  ['packy/double-film-self-absorbing-ice-packs-cooler-application.webp'],
  ['photos-2026-09/compact-lunch-bag-handles.webp'],
  ['photos-2026-09/gold-trim-cake-bag-stitching.webp'],
  ['photos-2026-09/gold-trim-cake-bag-zipper.webp'],
  ['packy/self-adhesive-foil-bags-new/06.webp'],
  ['packy/hand-finished-gusseted-foil-bags-new/02.webp'],
  ['packy/gusseted-foil-cake-bags-new/03.webp'],
  ['packy/water-fill-ice-packs-cooler-application.webp'],
  ['packy/self-absorbing-ice-packs-cooler-application.webp'],
  ['packy/segmented-ice-sheets-cooler-application.webp'],
  ['packy/details-v2/square-zipper-cake-cooler-detail-v2.webp'],
  ['photos-2026-09/mint-cake-bag-lining.webp'],
  ['photos-2026-09/mint-cake-bag-handles.webp'],
  ['photos-2026-09/mint-cake-bag-carrying.webp'],
  ['packy/details-v2/wide-base-meal-cooler-detail-v2.webp'],
  ['packy/details-v2/upright-grocery-cooler-detail-v2.webp'],
]
const standardized = JSON.parse(await readFile('src/standardized-product-images.json', 'utf8'))
for (const [source, horizontal = 0.5, vertical = 0.5] of photographs) {
  const target = standardized[source]
  if (!target) throw new Error(`Missing standardized image: ${source}`)
  const input = await readFile(`public/images/products/${source}`)
  const { width, height } = await sharp(input).metadata()
  const side = Math.min(width, height)
  const left = Math.round((width - side) * horizontal)
  const top = Math.round((height - side) * vertical)
  await sharp(input)
    .extract({ left, top, width: side, height: side })
    .resize(1200, 1200)
    .webp({ quality: 90 })
    .toFile(`public/images/products/${target}`)
  console.log(`${source}: square crop ${left},${top},${side}`)
}
