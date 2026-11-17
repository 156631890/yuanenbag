import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtemp, readFile, rm, unlink, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import sharp from 'sharp'
import { createResponsiveImageCache } from './responsive-image-cache.mjs'

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'yuanen-image-cache-'))
  t.after(() => rm(root, { recursive: true, force: true }))
  const options = { publicDirectory: join(root, 'public'), cacheFile: join(root, 'cache.json') }
  const input = await sharp({ create: { width: 48, height: 32, channels: 3, background: '#135bce' } }).png().toBuffer()
  return { root, options, input, read: file => readFile(join(options.publicDirectory, file)) }
}

test('cold output matches the existing encoder; a fresh build reuses verified bytes', async t => {
  const f = await fixture(t)
  const cold = await createResponsiveImageCache(f.options)
  const result = await cold.transform(f.input, { width: 24, quality: 82 })
  const expected = await sharp(f.input).resize({ width: 24, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer()
  assert.deepEqual(await f.read(result.file), expected)
  assert.deepEqual(cold.stats, { generated: 1, reused: 0 })
  await cold.save()
  const index = await readFile(f.options.cacheFile, 'utf8')

  const warm = await createResponsiveImageCache(f.options)
  assert.deepEqual(await warm.transform(f.input, { width: 24, quality: 82 }), result)
  assert.deepEqual(warm.stats, { generated: 0, reused: 1 })
  await warm.save()
  assert.equal(await readFile(f.options.cacheFile, 'utf8'), index)
})

test('source content, resize width and encoding quality each invalidate the cache', async t => {
  const f = await fixture(t)
  const first = await createResponsiveImageCache(f.options)
  await first.transform(f.input, { width: 24, quality: 82 })
  await first.save()

  const changedInput = await sharp({ create: { width: 48, height: 32, channels: 3, background: '#db3812' } }).png().toBuffer()
  for (const [input, parameters] of [
    [changedInput, { width: 24, quality: 82 }],
    [f.input, { width: 16, quality: 82 }],
    [f.input, { width: 24, quality: 60 }],
  ]) {
    const build = await createResponsiveImageCache(f.options)
    await build.transform(input, parameters)
    assert.deepEqual(build.stats, { generated: 1, reused: 0 })
  }
})

test('a codec or sharp version change forces regeneration even with unchanged sources', async t => {
  const f = await fixture(t)
  const first = await createResponsiveImageCache(f.options)
  await first.transform(f.input, { width: 24, quality: 82 })
  await first.save()
  for (const component of ['sharp', 'vips', 'webp']) {
    const build = await createResponsiveImageCache({
      ...f.options, versions: { ...sharp.versions, [component]: `${sharp.versions[component]}-changed` },
    })
    await build.transform(f.input, { width: 24, quality: 82 })
    assert.deepEqual(build.stats, { generated: 1, reused: 0 })
  }
})

test('missing, truncated and replaced outputs are repaired without changing the manifest URL', async t => {
  const f = await fixture(t)
  const first = await createResponsiveImageCache(f.options)
  const result = await first.transform(f.input, { width: 24, quality: 82 })
  const original = await f.read(result.file)
  await first.save()

  const otherImage = await sharp({ create: { width: 24, height: 16, channels: 3, background: '#000000' } }).webp().toBuffer()
  for (const replacement of [null, original.subarray(0, 20), otherImage]) {
    if (replacement === null) await unlink(join(f.options.publicDirectory, result.file))
    else await writeFile(join(f.options.publicDirectory, result.file), replacement)
    const build = await createResponsiveImageCache(f.options)
    assert.deepEqual(await build.transform(f.input, { width: 24, quality: 82 }), result)
    assert.deepEqual(build.stats, { generated: 1, reused: 0 })
    assert.deepEqual(await f.read(result.file), original)
  }
})

test('valid image bytes with incorrect dimensions cannot be reused from a corrupt index', async t => {
  const f = await fixture(t)
  const first = await createResponsiveImageCache(f.options)
  const result = await first.transform(f.input, { width: 24, quality: 82 })
  await first.save()
  const index = JSON.parse(await readFile(f.options.cacheFile, 'utf8'))
  const wrong = await sharp({ create: { width: 12, height: 8, channels: 3, background: '#135bce' } }).webp().toBuffer()
  const hash = createHash('sha256').update(wrong).digest('hex')
  index.outputs[Object.keys(index.outputs)[0]] = hash
  await writeFile(join(f.options.publicDirectory, `images/responsive/${hash.slice(0, 12)}-24.webp`), wrong)
  await writeFile(f.options.cacheFile, JSON.stringify(index))
  const build = await createResponsiveImageCache(f.options)
  assert.deepEqual(await build.transform(f.input, { width: 24, quality: 82 }), result)
  assert.deepEqual(build.stats, { generated: 1, reused: 0 })
})

test('factory crop coordinates and source changes invalidate fixed-file outputs', async t => {
  const f = await fixture(t)
  const parameters = { extract: { left: 2, top: 2, width: 30, height: 20 }, quality: 90, fixedFile: 'images/factory/crop.webp' }
  const first = await createResponsiveImageCache(f.options)
  const result = await first.transform(f.input, parameters)
  const expected = await sharp(f.input).extract(parameters.extract).webp({ quality: 90 }).toBuffer()
  assert.deepEqual(await f.read(result.file), expected)
  await first.save()
  const warm = await createResponsiveImageCache(f.options)
  await warm.transform(f.input, parameters)
  assert.deepEqual(warm.stats, { generated: 0, reused: 1 })
  const changed = await createResponsiveImageCache(f.options)
  await changed.transform(f.input, { ...parameters, extract: { ...parameters.extract, left: 4 } })
  assert.deepEqual(changed.stats, { generated: 1, reused: 0 })
  const changedInput = await sharp({ create: { width: 48, height: 32, channels: 3, background: '#db3812' } }).png().toBuffer()
  const changedSource = await createResponsiveImageCache(f.options)
  await changedSource.transform(changedInput, parameters)
  assert.deepEqual(changedSource.stats, { generated: 1, reused: 0 })
})

test('a malformed index is expendable, while invalid output destinations fail closed', async t => {
  const f = await fixture(t)
  for (const invalid of ['{invalid', 'null', '{"version":1,"outputs":[]}']) {
    await writeFile(f.options.cacheFile, invalid)
    const recovered = await createResponsiveImageCache(f.options)
    await recovered.transform(f.input, { width: 24, quality: 82 })
    assert.deepEqual(recovered.stats, { generated: 1, reused: 0 })
  }
  const build = await createResponsiveImageCache(f.options)
  await assert.rejects(build.transform(f.input, { quality: 82, fixedFile: '../outside.webp' }), /inside the public directory/)
})
