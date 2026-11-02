import { tx, type Lang } from './data'

const customerBrands = [
  { key: 'walmart', file: 'walmart.svg', width: 201, height: 36, name: tx('Walmart', '沃尔玛 Walmart', 'Walmart') },
  { key: 'yonghui', file: 'yonghui.png', width: 390, height: 84, name: tx('Yonghui Superstores', '永辉超市', 'Yonghui Superstores') },
  { key: 'mixue', file: 'mixue.svg', width: 146, height: 46, name: tx('MIXUE', '蜜雪冰城', 'MIXUE') },
  { key: 'haidilao', file: 'haidilao.svg', width: 164, height: 62, name: tx('Haidilao', '海底捞', 'Haidilao') },
]

export default function CustomerBrands({ lang }: { lang: Lang }) {
  return <section className="customer-strip container" aria-label={tx('Brands we have served', '曾服务的品牌客户', 'Marcas a las que hemos prestado servicio')[lang]}>
    <span className="eyebrow">{tx('BRANDS WE HAVE SERVED', '曾服务的品牌客户', 'MARCAS A LAS QUE HEMOS PRESTADO SERVICIO')[lang]}</span>
    <ul className="customer-brand-list">
      {customerBrands.map(brand => <li key={brand.key} className={`customer-brand customer-brand--${brand.key}`}>
        <img src={`${import.meta.env.BASE_URL}images/brands/${brand.file}`} width={brand.width} height={brand.height} alt={brand.name[lang]} loading="lazy" decoding="async"/>
      </li>)}
    </ul>
  </section>
}
