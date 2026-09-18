import sharp from 'sharp'
await sharp('public/images/packaging-concept.png').webp({ quality: 85 }).toFile('public/images/packaging-concept.webp')
for (const name of ['customization-process','company-profile','product-families','production-workshops','manufacturing-capabilities','dispatch-network']) {
  await sharp(`public/images/factory/${name}.jpg`).webp({quality:88}).toFile(`public/images/factory/${name}.webp`)
}
console.log('Optimized concept image as WebP')
