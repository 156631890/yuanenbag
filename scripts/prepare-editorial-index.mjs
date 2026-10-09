import { readdir, writeFile } from 'node:fs/promises'

// Route and archive metadata stays small; article bodies load in separate chunks.
const directory = new URL('../src/articles/', import.meta.url)
const articles = []
for (const file of (await readdir(directory)).filter(file => file.endsWith('.ts')).sort()) {
  const { default: article } = await import(new URL(file, directory).href)
  const { kind, slug, publishedAt, updatedAt, title, description, image } = article
  articles.push({ kind, slug, publishedAt, ...(updatedAt ? { updatedAt } : {}), title, description, image })
}
await writeFile(new URL('../src/editorial-index.json', import.meta.url), JSON.stringify(articles, null, 2) + '\n')
console.log(`Prepared metadata for ${articles.length} editorial articles.`)
