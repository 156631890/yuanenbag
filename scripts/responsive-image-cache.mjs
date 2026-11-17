import sharp from 'sharp'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, isAbsolute, resolve, sep } from 'node:path'

const cacheVersion = 1
const digest = value => createHash('sha256').update(value).digest('hex')
const stableJson = value => JSON.stringify(value, (_, item) => (
  item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b)))
    : item
))

// This build-only index accompanies the committed image files. It is separate
// from the manifest imported by the website, so it adds no client-side payload.
export async function createResponsiveImageCache({
  publicDirectory = 'public',
  cacheFile = 'scripts/responsive-image-cache.json',
  versions = sharp.versions,
} = {}) {
  let previous = {}
  try {
    const saved = JSON.parse(await readFile(cacheFile, 'utf8'))
    if (saved && saved.version === cacheVersion && saved.outputs &&
        typeof saved.outputs === 'object' && !Array.isArray(saved.outputs)) {
      previous = saved.outputs
    }
  } catch (error) {
    if (error.code !== 'ENOENT' && !(error instanceof SyntaxError)) throw error
  }

  const root = resolve(publicDirectory)
  const renderer = { cacheVersion, versions, platform: process.platform, arch: process.arch }
  const sourceInformation = new WeakMap()
  const outputs = {}
  const stats = { generated: 0, reused: 0 }

  function destination(file) {
    const absolute = resolve(root, file)
    if (isAbsolute(file) || !absolute.startsWith(`${root}${sep}`)) {
      throw new Error(`Image output must remain inside the public directory: ${file}`)
    }
    return absolute
  }

  async function transform(input, { extract, width, quality, fixedFile } = {}) {
    let source = sourceInformation.get(input)
    if (!source) {
      source = { digest: digest(input), metadata: await sharp(input).metadata() }
      sourceInformation.set(input, source)
    }
    const inputWidth = extract?.width ?? source.metadata.width
    const inputHeight = extract?.height ?? source.metadata.height
    const outputWidth = width === undefined ? inputWidth : Math.min(width, inputWidth)
    const resize = width === undefined ? null : { width, withoutEnlargement: true }
    const webp = { quality }
    const key = digest(stableJson({
      source: source.digest, renderer, extract: extract ?? null, resize, webp,
      fixedFile: fixedFile ?? null,
    }))
    const fileFor = hash => fixedFile ?? `images/responsive/${hash.slice(0, 12)}-${outputWidth}.webp`
    const validDimensions = metadata => (
      metadata.format === 'webp' && metadata.width === outputWidth &&
      Number.isInteger(metadata.height) && metadata.height > 0 &&
      Math.abs(metadata.height - inputHeight * outputWidth / inputWidth) <= 1
    )

    const cachedDigest = outputs[key] ?? previous[key]
    if (typeof cachedDigest === 'string' && /^[a-f0-9]{64}$/.test(cachedDigest)) {
      const file = fileFor(cachedDigest)
      try {
        const existing = await readFile(destination(file))
        if (digest(existing) === cachedDigest) {
          const metadata = await sharp(existing).metadata()
          if (validDimensions(metadata)) {
            outputs[key] = cachedDigest
            stats.reused += 1
            return { file, width: metadata.width, height: metadata.height }
          }
        }
      } catch (error) {
        // Missing or malformed output is regenerated; access and filesystem
        // errors still surface instead of silently turning into a cache miss.
        if (error.code && error.code !== 'ENOENT') throw error
      }
    }

    let image = sharp(input)
    if (extract) image = image.extract(extract)
    if (resize) image = image.resize(resize)
    const { data, info } = await image.webp(webp).toBuffer({ resolveWithObject: true })
    if (!validDimensions(info)) throw new Error('Generated responsive image has unexpected dimensions')
    const outputDigest = digest(data)
    const file = fileFor(outputDigest)
    const absolute = destination(file)
    await mkdir(dirname(absolute), { recursive: true })
    await writeFile(absolute, data)
    outputs[key] = outputDigest
    stats.generated += 1
    return { file, width: info.width, height: info.height }
  }

  async function save() {
    const contents = `${JSON.stringify({
      version: cacheVersion,
      outputs: Object.fromEntries(Object.entries(outputs).sort(([a], [b]) => a.localeCompare(b))),
    }, null, 2)}\n`
    await mkdir(dirname(cacheFile), { recursive: true })
    // Preserve timestamps when the source images, transforms and outputs match.
    const existing = await readFile(cacheFile, 'utf8').catch(error => {
      if (error.code !== 'ENOENT') throw error
      return null
    })
    if (existing !== contents) await writeFile(cacheFile, contents)
  }

  return { transform, save, stats }
}
