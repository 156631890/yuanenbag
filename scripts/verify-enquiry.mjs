import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import { once } from 'node:events'
import { createEnquiryHandler } from '../server/enquiry.mjs'

const env = { SMTP_HOST: 'smtp.example.test', SMTP_PORT: '465', SMTP_USER: 'info@example.test', SMTP_PASS: 'test-only', ENQUIRY_TO: 'info@example.test' }
const valid = { name: 'Enquiry flow test', email: 'buyer@example.test', company: 'TEST ONLY', bag: 'water-fill-ice-packs', quantity: '3000', dimensions: '15 × 20 cm', destination: 'United Kingdom', details: 'TEST ONLY — checking enquiry submission.', consent: true, lang: 'en' }
const headers = { origin: 'https://yuanenbag.com', 'content-type': 'application/json' }
let sent = [], options
const mockTransport = config => {
  options = config
  return { sendMail: async message => { sent.push(message); return { accepted: ['info@example.test'], rejected: [] } }, close() {} }
}
async function request(handler, body = valid, overrides = {}) {
  const req = { method: 'POST', headers: { ...headers }, body, socket: { remoteAddress: '127.0.0.1' }, ...overrides }
  const response = { headers: {}, setHeader(key, value) { this.headers[key] = value }, end(data) { this.data = JSON.parse(data) } }
  await handler(req, response)
  return response
}

const handler = createEnquiryHandler({ env, createTransport: mockTransport })
assert.equal((await request(handler, valid, { method: 'GET' })).statusCode, 405)
assert.equal((await request(handler, valid, { headers: { ...headers, origin: 'https://unrelated.example' } })).statusCode, 403)
assert.equal((await request(handler, valid, { headers: { origin: headers.origin, 'content-type': 'text/plain' } })).statusCode, 415)
assert.equal((await request(handler, '{')).statusCode, 400)
assert.equal((await request(handler, 'x'.repeat(24001))).statusCode, 413)
for (const change of [{ name: '' }, { email: 'buyer@example.test\r\nBcc: stranger@example.test' }, { consent: false }, { quantity: '3.5' }, { quantity: '100000001' }, { quantity: [] }, { details: 'short' }, { details: 'x'.repeat(3001) }, { website: 'bot.test' }, { lang: 'fr' }, { bag: '../file' }]) {
  assert.equal((await request(handler, { ...valid, ...change })).statusCode, 400, JSON.stringify(Object.keys(change)))
}
assert.equal(sent.length, 0)
assert.equal((await request(createEnquiryHandler({ env: {}, createTransport: mockTransport }))).statusCode, 503)
const success = await request(handler, { ...valid, to: 'attacker@example.test', from: 'fake@example.test' })
assert.equal(success.statusCode, 200)
assert.match(success.data.reference, /^YE-/)
assert.equal(sent.length, 1)
assert.equal(sent[0].to, env.ENQUIRY_TO)
assert.equal(sent[0].from.address, env.SMTP_USER)
assert.equal(sent[0].from.name, 'YUANEN')
assert.equal(sent[0].replyTo.address, valid.email)
assert.equal(options.secure, true)
assert.equal(options.requireTLS, true)
assert.equal(options.disableFileAccess, true)
assert.equal(options.disableUrlAccess, true)
assert.equal((await request(handler)).data.reference, success.data.reference)
assert.equal(sent.length, 1, 'Identical retry must reuse the result in the same instance')
for (const lang of ['zh', 'es']) assert.equal((await request(handler, { ...valid, lang })).statusCode, 200)
const noLogging = console.error
try {
  const logs = []; console.error = (...args) => logs.push(args)
  for (const reject of [false, true]) {
    const failing = createEnquiryHandler({ env, createTransport: () => ({ sendMail: async () => {
      if (reject) return { accepted: [], rejected: ['info@example.test'] }
      throw new Error('PRIVATE SMTP DETAIL')
    }, close() {} }) })
    const response = await request(failing)
    assert.equal(response.statusCode, 502)
    assert(!JSON.stringify(response).includes('PRIVATE'))
  }
  assert(!JSON.stringify(logs).includes('PRIVATE'))
  assert(!JSON.stringify(logs).includes(valid.email))
} finally { console.error = noLogging }
let release
const concurrent = createEnquiryHandler({ env, createTransport: () => ({ sendMail: () => new Promise(resolve => { release = () => resolve({ accepted: [env.ENQUIRY_TO] }) }), close() {} }) })
const first = request(concurrent)
assert.equal((await request(concurrent)).statusCode, 409)
release(); assert.equal((await first).statusCode, 200)
const limited = createEnquiryHandler({ env, createTransport: mockTransport })
for (let n = 0; n < 5; n++) assert.equal((await request(limited, { ...valid, details: valid.details + n })).statusCode, 200)
assert.equal((await request(limited, { ...valid, details: valid.details + 'next' })).statusCode, 429)

// Exercise the actual Node stream boundary used without Vercel's body parser.
const http = createServer(createEnquiryHandler({ env, createTransport: mockTransport }))
http.listen(0, '127.0.0.1'); await once(http, 'listening')
try {
  const response = await fetch(`http://127.0.0.1:${http.address().port}`, { method: 'POST', headers, body: JSON.stringify(valid) })
  assert.equal(response.status, 200)
  assert.equal((await response.json()).ok, true)
} finally { http.close(); http.closeAllConnections() }
console.log('Enquiry checks passed: validation, origin, payload size, fixed recipient, TLS, missing config, SMTP acceptance/rejection, privacy, repeat submits, throttling and HTTP body parsing. No real email sent.')

if (process.argv.includes('--serve')) {
  const { createServer: createVite } = await import('vite')
  const vite = await createVite({ server: { middlewareMode: true }, appType: 'spa' })
  const browserHandler = createEnquiryHandler({ env, createTransport: () => ({
    sendMail: async message => {
      if (message.text.includes('TEST SMTP REJECT')) throw new Error('simulated_failure')
      return { accepted: [env.ENQUIRY_TO], rejected: [] }
    }, close() {},
  }) })
  createServer((req, res) => {
    if (req.url === '/api/enquiry') return browserHandler(req, res)
    vite.middlewares(req, res)
  }).listen(4175, '127.0.0.1', () => console.log('MOCK SMTP preview: http://127.0.0.1:4175/contact/ — no real emails. Use TEST SMTP REJECT in project details for failure.'))
}
