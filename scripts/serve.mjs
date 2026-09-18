import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
import { loadEnv } from 'vite'

const root = resolve('dist')
const port = Number(process.env.PORT || 4173)
const base = (process.env.SITE_BASE_PATH || loadEnv('production',process.cwd(),'SITE_').SITE_BASE_PATH || '/').replace(/\/$/, '')
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'}
const server = createServer(async (req,res)=>{
  if (req.method!=='GET' && req.method!=='HEAD') {res.writeHead(405,{Allow:'GET, HEAD'});return res.end()}
  let pathname
  try {pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)} catch {res.writeHead(400);return res.end('Bad request')}
  if (base && pathname===base) {res.writeHead(301,{Location:`${base}/`});return res.end()}
  let relative = pathname
  if (base && pathname.startsWith(`${base}/`)) relative=pathname.slice(base.length)
  else if(base) relative='/__not_found__'
  let file=resolve(root,`.${relative}`)
  if (!file.startsWith(root+sep) && file!==root) {res.writeHead(403);return res.end()}
  let status=200
  try {
    const info = await stat(file)
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) {const query=new URL(req.url,'http://localhost').search;res.writeHead(301,{Location:pathname+'/'+query});return res.end()}
      file=resolve(file,'index.html')
    }
    await stat(file)
    if (/\/404\.html$/.test(relative)) status=404
  } catch {status=404;const prefix=relative.match(/^\/(zh|es)(?:\/|$)/)?.[1];file=resolve(root,prefix || '', '404.html')}
  try {
    const content=await readFile(file)
    res.writeHead(status,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store','Content-Length':content.length,'X-Content-Type-Options':'nosniff'})
    res.end(req.method==='HEAD'?undefined:content)
  } catch {res.writeHead(500);res.end('Build the site before starting preview.')}
})
server.listen(port,'127.0.0.1',()=>console.log(`YUANEN preview: http://127.0.0.1:${port}${base}/`))
