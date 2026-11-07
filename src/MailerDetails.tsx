import { bags, tx, type Lang } from './data'
import { href } from './routes'

export default function MailerDetails({lang}:{lang:Lang}) {
  const t = (en:string, zh:string, es:string) => tx(en, zh, es)[lang]
  const formats = [
    {
      slug: 'self-adhesive-foil-bags',
      guidance: tx(
        'Trial the filled container through the opening, then check the flap can fold onto a clear sealing area. Include container corners and any coolant in the fit check.',
        '先用装好后的容器试装，再检查翻边能否落在完整封口区域。容器边角及拟配冰源都要计入适配检查。',
        'Pruebe la abertura con el recipiente lleno y compruebe que la solapa alcance una zona de sellado libre. Incluya las esquinas y cualquier refrigerante al revisar el ajuste.'
      ),
    },
    {
      slug: 'gusseted-self-seal-foil-bags',
      guidance: tx(
        'Compare the gusseted base when the package needs more depth. Check the expanded base against the box footprint, and confirm that the filled box passes through the opening before choosing a size.',
        '盒装内容物需要底部深度时，比较立体底款。按盒底占地核对底部展开空间，并先检查装好的盒子能否通过袋口。',
        'Compare la base con fuelle cuando el paquete necesite más fondo. Revise la base desplegada frente a la caja y confirme que la caja llena pase por la abertura antes de elegir medidas.'
      ),
    },
    {
      slug: 'foil-insulated-box-liners',
      guidance: tx(
        'Compare a liner when you are lining a separate shipping container. Use that container’s usable internal dimensions and allow for the goods, coolant and top closure. Confirm the outer container separately.',
        '如果要给独立运输外箱配置保温内衬，比较箱内衬款。按外箱有效内尺寸安排货物、冰源和顶部封合空间，外箱本身单独确认。',
        'Compare un revestimiento si va dentro de un contenedor de transporte independiente. Use las medidas interiores útiles y reserve espacio para mercancía, refrigerante y cierre superior. Confirme el contenedor exterior por separado.'
      ),
    },
  ]

  return <section className="detail-block" id="mailer-pack-out">
    <div className="detail-block-heading"><span>09</span><h2>{t(
      'Insulated mailer selection',
      '保温邮寄包装选型',
      'Selección para envíos aislados'
    )}</h2></div>
    <p>{t(
      'For small parcels, check this self-seal pouch together with the filled container and outer box. Allow space for the adhesive flap and any coolant. Test loading, corners and closure with a filled sample; a foil finish alone does not establish cushioning or thermal duration.',
      '用于小件邮寄包装时，应将本自粘封口袋与装好后的容器及外箱一并核对，为封口翻边和冰源预留空间。通过装载样品检查装入、边角和封口；铝箔外观本身不能证明缓冲效果或保温时长。',
      'Para pequeños paquetes, revise esta bolsa autoadhesiva con el recipiente lleno y la caja exterior. Reserve espacio para la solapa y el refrigerante. Compruebe carga, esquinas y cierre con una muestra llena; el acabado de aluminio no acredita amortiguación ni duración térmica.'
    )}</p>
    <ul className="mailer-format-options">{formats.map(format => {
      const product = bags.find(bag => bag.slug === format.slug)!
      return <li key={format.slug}>
        <h3>{format.slug === 'self-adhesive-foil-bags'
          ? product.short[lang]
          : <a href={href('/products/' + format.slug + '/', lang)}>{product.short[lang]} ↗</a>
        }</h3>
        <p>{format.guidance[lang]}</p>
      </li>
    })}</ul>
  </section>
}
