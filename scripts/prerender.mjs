import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { render, paths } from '../.ssr/entry-server.js'
import { loadEnv } from 'vite'

const template = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder')
if (!template.includes('<!--page-head-->')) throw new Error('Missing metadata placeholder')
const env = {...loadEnv('production',process.cwd(),'SITE_'),...process.env}
const indexable = env.SITE_INDEXABLE === 'true'
const base = (env.SITE_BASE_PATH || '/').replace(/\/$/, '')
const urls = []
for (const path of [...paths, `${base}/404/`]) {
  const result = render(path, indexable)
  const relative = path.slice(base.length)
  const target = relative === '/404/' ? resolve('dist/404.html') : resolve('dist', `.${relative}`, 'index.html')
  await mkdir(dirname(target), {recursive:true})
  await writeFile(target, template.replace('lang="en"', `lang="${result.lang}"`).replace('<!--page-head-->', result.head).replace('<!--app-html-->', result.html))
  if (relative !== '/404/') urls.push(result.url)
}
const site = new URL(urls[0]).origin
await writeFile(resolve('dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable ? urls.map(url=>`  <url><loc>${url}</loc></url>`).join('\n') : ''}\n</urlset>\n`)
await writeFile(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n${indexable ? `Sitemap: ${site}${base}/sitemap.xml\n` : ''}`)
await writeFile(resolve('dist/.nojekyll'), '')
console.log(`Prerendered ${paths.length} bilingual pages + 404. Indexing: ${indexable ? 'enabled' : 'disabled for preview'}.`)
