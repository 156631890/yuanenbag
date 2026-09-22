import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

const source = process.argv[2]
if (!source) throw new Error('Provide the owner-supplied photo directory')
const selections = {
  'compact-lunch-bag-main':'IMG_4423.JPG',
  'compact-lunch-bag-front':'IMG_4425.JPG',
  'compact-lunch-bag-handles':'IMG_4413.JPG',
  'compact-lunch-bag-size-comparison':'IMG_4368.JPG',
  'compact-lunch-bag-carrying':'IMG_4430.JPG',
  'compact-lunch-bag-side':'IMG_4361.JPG',
  'gold-trim-cake-bag-main':'IMG_4685.JPG',
  'gold-trim-cake-bag-interior':'IMG_4657.JPG',
  'gold-trim-cake-bag-stitching':'IMG_4392.jpg',
  'gold-trim-cake-bag-loading':'IMG_4670.JPG',
  'gold-trim-cake-bag-range':'IMG_4541.JPG',
  'gold-trim-cake-bag-display':'DSC07841.jpg',
  'gold-trim-cake-bag-zipper':'IMG_4682.JPG',
  'gold-trim-cake-bag-carrying':'IMG_4701.JPG',
  'mint-cake-bag-front':'IMG_4353-.jpg',
  'mint-cake-bag-application':'IMG_4443.JPG',
  'mint-cake-bag-lining':'IMG_4442.JPG',
  'mint-cake-bag-open':'IMG_4435.JPG',
  'mint-cake-bag-handles':'IMG_4398.JPG',
  'mint-cake-bag-carrying':'IMG_4402.JPG',
}
const destination=resolve('public/images/products/photos-2026-09')
await mkdir(destination,{recursive:true})
const sizes=JSON.parse(await readFile('src/product-image-sizes.json','utf8'))
const hash=bytes=>createHash('sha256').update(bytes).digest('hex')
const files=[]
for (const filename of (await readdir(source)).filter(f=>/\.jpe?g$/i.test(f)).sort()) {
  const input=await readFile(join(source,filename))
  const metadata=await sharp(input).metadata()
  const selected=Object.entries(selections).find(([,name])=>name===filename)
  const record={filename,sourceSha256:hash(input),sourceBytes:input.length,width:metadata.width,height:metadata.height,selected:!!selected}
  if (selected) {
    const stem=selected[0], output=await sharp(input).rotate().resize({width:1600,height:1600,fit:'inside',withoutEnlargement:true}).webp({quality:86}).toBuffer({resolveWithObject:true})
    await writeFile(join(destination,`${stem}.webp`),output.data)
    sizes[`photos-2026-09/${stem}.webp`]={width:output.info.width,height:output.info.height}
    Object.assign(record,{output:`photos-2026-09/${stem}.webp`,outputSha256:hash(output.data),outputBytes:output.data.length,outputWidth:output.info.width,outputHeight:output.info.height})
  } else record.reason='Alternate angle, repeated take or another sample format; retained in owner source folder, not published in this batch.'
  files.push(record)
}
if (files.filter(f=>f.selected).length!==Object.keys(selections).length) throw new Error('Missing selected source photographs')
await writeFile('src/product-image-sizes.json',JSON.stringify(sizes,null,2)+'\n')
await writeFile('docs/sample-photo-import-2026-09.json',JSON.stringify({date:'2026-09-22',source:'Owner-supplied insulated-bag photography folder',processing:'EXIF orientation, proportional resize to maximum 1600px, WebP quality 86; metadata stripped; no generative edits, recolouring or shape changes',files},null,2)+'\n')
console.log(JSON.stringify({reviewed:files.length,published:files.filter(f=>f.selected).length,bytes:files.reduce((n,f)=>n+(f.outputBytes||0),0)}))
