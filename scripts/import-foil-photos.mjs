import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

const source = process.argv[2]
if (!source) throw new Error('Provide the owner-supplied foil-bag photo directory')
const selections = {
 'gusseted-self-seal-foil-main':'立体带胶.jpg',
 'foil-box-liner-insert':'微信图片_20240816162617.jpg',
 'handmade-foil-bag-shape':'手工立体.JPG',
 'gusseted-foil-open-interior':'微信图片_20230529172335.jpg',
 'flat-foil-bag-loading':'微信图片_20240813132905.jpg',
 'flat-foil-bag-standing':'微信图片_20240813140142.jpg',
 'foil-material-measurement-a':'微信图片_20230708132816.jpg',
 'foil-material-measurement-b':'微信图片_20230718132137.jpg',
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
  } else record.reason='Stacked item awaiting owner identification as finished pouches or separate sheets; retained in source folder.'
  files.push(record)
}
if (files.filter(f=>f.selected).length!==Object.keys(selections).length) throw new Error('Missing selected source photographs')
await writeFile('src/product-image-sizes.json',JSON.stringify(sizes,null,2)+'\n')
await writeFile('docs/foil-photo-import-2026-09.json',JSON.stringify({date:'2026-09-22',source:'Owner-supplied foil-bag photography folder',processing:'EXIF orientation, proportional resize to maximum 1600px, WebP quality 86; metadata stripped; original transparency retained; no generative changes',files},null,2)+'\n')
console.log(JSON.stringify({reviewed:files.length,selected:files.filter(f=>f.selected).length,bytes:files.reduce((n,f)=>n+(f.outputBytes||0),0)}))
