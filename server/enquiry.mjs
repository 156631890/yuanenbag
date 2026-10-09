import { createHash, randomUUID } from 'node:crypto'
import nodemailer from 'nodemailer'

const maxBytes = 24_000
const emailPattern = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?\.[A-Za-z]{2,63}$/
const fields = { name: 80, email: 160, company: 140, bag: 120, style: 100, usage: 100, dimensions: 100, destination: 100, details: 3000 }

function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null
  const result = {}
  for (const [key, max] of Object.entries(fields)) {
    if (body[key] !== undefined && typeof body[key] !== 'string') return null
    const value = (body[key] || '').trim()
    if (value.length > max || (key !== 'details' && /[\r\n\x00-\x1f]/.test(value))) return null
    result[key] = value
  }
  if (!result.name || !emailPattern.test(result.email) || !/^[a-z0-9-]+$/.test(result.bag) || !result.destination || result.details.length < 10) return null
  if (body.consent !== true || !['en', 'zh', 'es'].includes(body.lang) || body.website) return null
  const quantity = String(body.quantity ?? '')
  if (!/^\d{1,9}$/.test(quantity) || Number(quantity) < 1 || Number(quantity) > 100000000) return null
  return { ...result, quantity, lang: body.lang }
}

function smtpConfig(env) {
  const { SMTP_HOST: host, SMTP_USER: user, SMTP_PASS: pass } = env
  const port = Number(env.SMTP_PORT || 465)
  const to = env.ENQUIRY_TO || 'info@yuanenbag.com'
  if (!host || !user || !pass || !emailPattern.test(user) || !emailPattern.test(to) || ![465, 587].includes(port)) return null
  return { host, port, secure: port === 465, requireTLS: true, auth: { user, pass },
    connectionTimeout: 8000, greetingTimeout: 8000, socketTimeout: 15000,
    disableFileAccess: true, disableUrlAccess: true, to }
}

// These bounds protect a warm function instance. They are not a distributed quota.
// No contact data is stored: only salted digests, counts and delivery references.
export function createEnquiryHandler({ env = process.env, createTransport = nodemailer.createTransport, now = Date.now } = {}) {
  const attempts = new Map(), delivered = new Map(), pending = new Set()
  const salt = randomUUID()
  const digest = value => createHash('sha256').update(salt + value).digest('hex')
  return async function enquiry(req, res) {
    res.setHeader('Cache-Control', 'no-store')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    const reply = (status, data) => { res.statusCode = status; res.end(JSON.stringify(data)) }
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, { error: 'method_not_allowed' }) }
    const origins = new Set(['https://yuanenbag.com', 'https://www.yuanenbag.com', 'https://yuanenbag.vercel.app'])
    if (env.VERCEL_URL) origins.add(`https://${env.VERCEL_URL}`)
    if (env.NODE_ENV !== 'production' && !env.VERCEL) origins.add('http://127.0.0.1:4175')
    if (!origins.has(req.headers.origin)) return reply(403, { error: 'origin_not_allowed' })
    if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) return reply(415, { error: 'json_required' })
    if (Number(req.headers['content-length']) > maxBytes) return reply(413, { error: 'too_large' })
    let body
    try {
      if (req.body !== undefined) {
        const raw = typeof req.body === 'string' || Buffer.isBuffer(req.body) ? req.body.toString() : JSON.stringify(req.body)
        if (Buffer.byteLength(raw) > maxBytes) return reply(413, { error: 'too_large' })
        body = JSON.parse(raw)
      } else {
        const chunks = []; let bytes = 0
        for await (const chunk of req) {
          bytes += Buffer.byteLength(chunk)
          if (bytes > maxBytes) return reply(413, { error: 'too_large' })
          chunks.push(Buffer.from(chunk))
        }
        body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
      }
    } catch { return reply(400, { error: 'invalid_json' }) }
    const data = validate(body)
    if (!data) return reply(400, { error: 'invalid_fields' })
    const config = smtpConfig(env)
    if (!config) return reply(503, { error: 'mail_unavailable' })
    const time = now()
    for (const [key, item] of attempts) if (item.until <= time) attempts.delete(key)
    for (const [key, item] of delivered) if (item.until <= time) delivered.delete(key)
    const fingerprint = digest(JSON.stringify(data))
    const previous = delivered.get(fingerprint)
    if (previous) return reply(200, { ok: true, reference: previous.reference })
    if (pending.has(fingerprint)) { res.setHeader('Retry-After', '15'); return reply(409, { error: 'already_sending' }) }
    const ip = req.headers['x-vercel-forwarded-for'] || req.socket?.remoteAddress || 'unknown'
    const keys = [digest(String(ip)), digest(data.email.toLowerCase())]
    if (keys.some(key => (attempts.get(key)?.count || 0) >= 5) || attempts.size > 10000 || pending.size >= 10) {
      res.setHeader('Retry-After', '600'); return reply(429, { error: 'too_many_requests' })
    }
    for (const key of keys) {
      const entry = attempts.get(key) || { count: 0, until: time + 600000 }
      entry.count++; attempts.set(key, entry)
    }
    pending.add(fingerprint)
    const reference = `YE-${randomUUID()}`
    let transport
    try {
      const { to, ...options } = config
      transport = createTransport(options)
      const info = await transport.sendMail({
        from: { name: 'YUANEN website', address: config.auth.user },
        to, replyTo: { name: data.name, address: data.email },
        subject: `[YUANEN enquiry] ${data.bag} · ${reference}`,
        text: `New website enquiry\nReference: ${reference}\n\n${Object.entries(data).map(([key, value]) => `${key}: ${value}`).join('\n\n')}\n\nConsent: customer agreed to be contacted about this enquiry.\nPrices and delivery terms require confirmation.`,
      })
      if (!info.accepted?.some(address => String(address).toLowerCase() === to.toLowerCase()) || info.rejected?.length) throw new Error('recipient_rejected')
      delivered.set(fingerprint, { reference, until: time + 600000 })
      return reply(200, { ok: true, reference })
    } catch {
      // Never log the form, SMTP response, credentials or customer address.
      console.error('enquiry_mail_failed', reference)
      return reply(502, { error: 'mail_failed', reference })
    } finally { pending.delete(fingerprint); transport?.close() }
  }
}
