import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

const source = process.argv[2]
if (!source) throw new Error('Provide the owner-supplied ice-pack photo directory')
const selections = {
  'side-absorbing-ice-pack-front':'双面侧吸.png',
  'side-absorbing-ice-pack-back':'双面侧吸背面.JPG',
  'side-absorbing-ice-pack-seams':'双面侧吸背面2.png',
  'double-film-ice-pack-front':'双面自吸.png',
  'double-film-ice-pack-back':'双面自吸2.JPG',
  'absorbing-ice-pack-range':'DSC07910.jpg',
  'absorbing-ice-pack-flat':'DSC07926.jpg',
  'absorbing-ice-pack-reverse':'DSC07914.jpg',
  'absorbing-ice-pack-hand':'DSC07915.jpg',
  'absorbing-ice-pack-front-back':'DSC07913.jpg',
  'water-fill-ice-pack-range':'DSC07920.jpg',
  'water-fill-ice-pack-sizes':'DSC07919.jpg',
  'water-fill-ice-pack-stacked':'DSC07923.jpg',
  'water-fill-ice-pack-closure':'DSC07922.jpg',
}
const destination=resolve('public/images/products/photos-2026-09')
await mkdir(destination,{recursive:true})
const sizes=JSON.parse(await readFile('src/product-image-sizes.json','utf8'))
const hash=bytes=>createHash('sha256').update(bytes).digest('hex')
const files=[]
for (const filename of (await readdir(source)).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort()) {
  const input=await readFile(join(source,filename)), metadata=await sharp(input).metadata()
  const selected=Object.entries(selections).find(([,name])=>name===filename)
  const record={filename,sourceSha256:hash(input),sourceBytes:input.length,width:metadata.width,height:metadata.height,selected:!!selected}
  if (selected) {
    const output=await sharp(input).rotate().resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:86}).toBuffer({resolveWithObject:true})
    const path=`photos-2026-09/${selected[0]}.webp`
    await writeFile(join(destination,`${selected[0]}.webp`),output.data)
    sizes[path]={width:output.info.width,height:output.info.height}
    Object.assign(record,{output:path,outputSha256:hash(output.data),outputBytes:output.data.length,outputWidth:output.info.width,outputHeight:output.info.height})
  } else record.reason='Repeated angle/background or exposed contents; retained in source folder rather than added as a duplicate product or unverified handling instruction.'
  files.push(record)
}
if (files.filter(f=>f.selected).length!==Object.keys(selections).length) throw new Error('Missing selected source photographs')
await writeFile('src/product-image-sizes.json',JSON.stringify(sizes,null,2)+'\n')
await writeFile('docs/ice-photo-import-2026-09.json',JSON.stringify({date:'2026-09-22',source:'Owner-supplied ice-pack photography folder',processing:'EXIF orientation, proportional resize to maximum 1600px, WebP quality 86; metadata stripped; original transparency retained; no generative changes',files},null,2)+'\n')
console.log(JSON.stringify({reviewed:files.length,selected:files.filter(f=>f.selected).length,bytes:files.reduce((n,f)=>n+(f.outputBytes||0),0)}))
