import { useId } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import { faq, guides, steps, tx, type Lang } from './data'
import { href } from './routes'

type Props = { lang: Lang }
const asset = (path: string) => `${import.meta.env.BASE_URL}images/${path}`
const processIcons = ['select', 'specify', 'sample', 'produce', 'dispatch', 'support']

export function Process({ lang }: Props) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  return <div className="buyer-process">
    <figure className="process-factory">
      <img src={asset('factory/2026/longgang-converting.webp')} width="1536" height="1024" loading="lazy" alt={t('Material processing at the Longgang factory', '龙港新厂材料加工现场', 'Procesamiento de materiales en Longgang')} />
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

const guidePhotos = ['guide-materials', 'guide-specification', 'guide-order']

export function GuideCards({ lang }: Props) {
  return <div className="buyer-guides">{guides.map((guide, i) => <a key={guide.slug} className={`buyer-guide ${i === 0 ? 'buyer-guide-featured' : ''}`} href={href(`/guides/${guide.slug}/`, lang)}>
    <div className="buyer-guide-photo"><img src={asset(`ui/packy/${guidePhotos[i]}.webp`)} width="1200" height="800" loading="lazy" alt="" /><span>{tx('AI-assisted illustration', 'AI 场景示意', 'Ilustración asistida por IA')[lang]}</span></div>
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
      <div className="buyer-faq-contact"><img className="buyer-support-image" src={asset('ui/packy/faq-support.webp')} width="600" height="400" loading="lazy" alt="" /><span>{tx('Have a project in mind?', '已有具体项目需求？', '¿Tiene un proyecto en mente?')[lang]}</span><a className="buyer-heading-link" href={href('/contact/', lang)}>{tx('Talk to our team', '与我们沟通', 'Hable con nuestro equipo')[lang]}<ArrowUpRight size={19} /></a></div>
    </div>
    <FAQ lang={lang} />
  </section>
}
