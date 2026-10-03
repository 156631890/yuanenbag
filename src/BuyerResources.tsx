import { useId } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { faq, guides, steps, tx, type Lang } from './data'
import { href } from './routes'
import { responsiveImage } from './responsive-images'

type Props = { lang: Lang }
type Guide = (typeof guides)[number]
const asset = (path: string) => `${import.meta.env.BASE_URL}images/${path}`
const processIcons = ['select', 'specify', 'sample', 'produce', 'dispatch', 'support']

export function GuideMeta({ lang, guide }: Props & { guide: Guide }) {
  const date = new Intl.DateTimeFormat({ en: 'en-GB', zh: 'zh-CN', es: 'es' }[lang], {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${guide.dateModified}T00:00:00Z`))
  return <p className="article-meta"><a href={href('/about/', lang)}>{tx('By YUANEN', '远恩编写', 'Por YUANEN')[lang]}</a> · {tx('Updated', '更新于', 'Actualizado')[lang]} <time dateTime={guide.dateModified}>{date}</time> · {tx('Buyer reference', '采购参考', 'Referencia de compra')[lang]}</p>
}

export function GuideSources({ lang }: Props) {
  return <section className="guide-sources" aria-labelledby="guide-sources-title">
    <h2 id="guide-sources-title">{tx('About this guide and its sources', '编写主体与资料来源', 'Autoría y fuentes de la guía')[lang]}</h2>
    <p>{tx('YUANEN publishes this purchasing reference using its product catalogue, sample photographs and specification information. Confirm the construction and order terms for your selected product; this guide does not establish a tested cooling duration or certify a shipment.', '本采购参考由远恩根据产品目录、样品照片及规格资料整理。所选产品的结构和订购条件应另行确认；本文不能证明保冷时长，也不构成运输方案认证。', 'YUANEN publica esta referencia a partir de su catálogo, fotografías de muestras e información de especificaciones. Confirme la estructura y condiciones del producto elegido; la guía no acredita una duración de frío ni certifica un envío.')[lang]}</p>
    <div className="related-links">
      <a href={href('/about/', lang)}>{tx('About YUANEN', '了解远恩', 'Acerca de YUANEN')[lang]}<ArrowUpRight size={16}/></a>
      <a href={href('/products/', lang)}>{tx('Product catalogue and sample photos', '产品目录与样品照片', 'Catálogo y fotos de muestras')[lang]}<ArrowUpRight size={16}/></a>
      <a href={href('/quality/', lang)}>{tx('Document holders, dates and scope', '文件主体、日期与范围', 'Titulares, fechas y alcance de documentos')[lang]}<ArrowUpRight size={16}/></a>
      <a href={href('/customization/', lang)}>{tx('Specification and sample approval', '规格与样品确认', 'Especificación y aprobación de muestras')[lang]}<ArrowUpRight size={16}/></a>
    </div>
  </section>
}

export function Process({ lang }: Props) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  return <div className="buyer-process">
    <figure className="process-factory">
      <img src={asset('factory/2026/longgang-converting.webp')} {...responsiveImage('images/factory/2026/longgang-converting.webp','(max-width:520px) calc(100vw - 36px), (max-width:800px) 50vw, (max-width:1150px) 35vw, 467px')} loading="lazy" alt={t('Material processing at the Longgang factory', '龙港新厂材料加工现场', 'Procesamiento de materiales en Longgang')} />
      <figcaption>
        <span className="eyebrow">{t('FROM OUR FACTORY', '从工厂到交付', 'DESDE NUESTRA FÁBRICA')}</span>
        <strong>{t('Your specification.\nOur shared starting point.', '以您的规格，\n作为生产的起点。', 'Su especificación.\nNuestro punto de partida.')}</strong>
        <span className="process-location">YUANEN / LONGGANG</span>
      </figcaption>
    </figure>
    <ol className="buyer-steps">{steps.map((step, i) => <li key={step.title.en}>
      <div className="buyer-step-visual" aria-hidden="true"><img src={asset(`ui/packy/process-${processIcons[i]}.webp`)} width="160" height="160" loading="lazy" alt="" /><span>{String(i + 1).padStart(2, '0')}</span></div>
      <div><h3>{step.title[lang]}</h3><p>{step.body[lang]}</p></div>
    </li>)}</ol>
  </div>
}

export function ProcessSection({ lang }: Props) {
  return <section className="section container buyer-process-section" id="manufacturing-process">
    <div className="buyer-section-heading">
      <div><span className="eyebrow">{tx('CUSTOM MANUFACTURING', '定制生产')[lang]}</span><h2>{tx('From Specification to Delivery', '从规格确认到生产交付')[lang]}</h2></div>
      <a className="buyer-heading-link" href={href('/customization/', lang)}>{tx('Explore customization', '了解定制流程')[lang]}<ArrowUpRight size={19} /></a>
    </div>
    <Process lang={lang} />
  </section>
}

const guidePhotos: Record<string, string> = {
  'bag-material-comparison': 'ui/packy/guide-materials.webp',
  'insulated-bag-materials': 'ui/packy/guide-specification.webp',
  'custom-bag-order-checklist': 'ui/packy/guide-order.webp',
  'ice-pack-selection': 'products/standardized/packy/water-fill-ice-packs-cooler-application.webp',
}

export function GuideCards({ lang }: Props) {
  return <div className="buyer-guides">{guides.map((guide, i) => <a key={guide.slug} className={`buyer-guide ${guides.length === 3 && i === 0 ? 'buyer-guide-featured' : ''}`} href={href(`/guides/${guide.slug}/`, lang)}>
    <div className="buyer-guide-photo"><img src={asset(guidePhotos[guide.slug])} {...responsiveImage(`images/${guidePhotos[guide.slug]}`,'(max-width:520px) calc(100vw - 36px), (max-width:800px) 42vw, (max-width:1150px) 21vw, 288px')} loading="lazy" alt="" /><span>{tx('AI-assisted illustration', 'AI 场景示意', 'Ilustración asistida por IA')[lang]}</span></div>
    <div className="buyer-guide-copy">
      <span className="eyebrow">{guide.label[lang]}</span>
      <h3>{guide.title[lang]}</h3><p>{guide.summary[lang]}</p>
      <span className="buyer-guide-link">{tx('Read the guide', '阅读指南')[lang]}<ArrowUpRight size={20} /></span>
    </div>
  </a>)}</div>
}

export function GuidesSection({ lang }: Props) {
  return <section className="buyer-resources-section" id="buying-guides"><div className="section container">
    <div className="buyer-section-heading">
      <div><span className="eyebrow">{tx('TECHNICAL & PURCHASING RESOURCES', '选材与采购资源')[lang]}</span><h2>{tx('Packaging Materials & Buying Guides', '包装材质与采购指南')[lang]}</h2></div>
      <div className="buyer-heading-aside"><p>{tx('Practical guidance to make your next sourcing conversation more productive.', '实用的选材与采购参考，让下一次沟通更有效。')[lang]}</p><a className="buyer-heading-link" href={href('/guides/', lang)}>{tx('All buying guides', '查看全部指南', 'Todas las guías')[lang]}<ArrowUpRight size={19} /></a></div>
    </div>
    <GuideCards lang={lang} />
  </div></section>
}

export function FAQ({ lang, items = faq }: Props & { items?: typeof faq }) {
  const group = useId()
  return <div className="buyer-faq">{items.map((item, i) => <details key={item.q.en} name={group} open={i === 0}>
    <summary><span className="faq-question-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span><span>{item.q[lang]}</span><span className="faq-toggle" aria-hidden="true"><Plus size={19} /></span></summary>
    <div className="faq-answer"><p>{item.a[lang]}</p></div>
  </details>)}</div>
}

export function FAQSection({ lang }: Props) {
  return <section className="section container buyer-faq-section" id="manufacturer-faq">
    <div className="buyer-faq-intro"><span className="eyebrow">{tx('FREQUENTLY ASKED QUESTIONS', '采购常见问题')[lang]}</span><h2>{tx('Manufacturer & Product FAQ', '工厂与产品常见问题')[lang]}</h2><p>{tx('Clear specifications are the foundation of a successful packaging project.', '清晰的规格，是做好包装项目的基础。')[lang]}</p>
      <div className="buyer-faq-contact"><img className="buyer-support-image" src={asset('ui/packy/faq-support.webp')} {...responsiveImage('images/ui/packy/faq-support.webp','210px')} loading="lazy" alt="" /><span>{tx('Have a project in mind?', '已有具体项目需求？', '¿Tiene un proyecto en mente?')[lang]}</span><a className="buyer-heading-link" href={href('/contact/', lang)}>{tx('Talk to our team', '与我们沟通', 'Hable con nuestro equipo')[lang]}<ArrowUpRight size={19} /></a></div>
    </div>
    <FAQ lang={lang} />
  </section>
}
