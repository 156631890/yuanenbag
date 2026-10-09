import { ArrowUpRight } from 'lucide-react'
import { tx, type Lang } from './data'
import { href } from './routes'
import './customization-order-options.css'

export default function CustomizationOrderOptions({ lang }: { lang: Lang }) {
  const options = [
    {
      name: tx('Existing size + screen printing', '现有尺寸 + 丝网印刷', 'Medida existente + serigrafía'),
      description: tx(
        'Choose an existing bag size and colour. Use one print colour for both sides within the available print area. Custom dimensions are not available with this method.',
        '选择现有袋型尺寸和袋色，在指定印刷区域内正反面使用同一种印刷颜色。此方式不支持定制尺寸。',
        'Elija una medida y un color de bolsa existentes. Utilice el mismo color de impresión en ambas caras, dentro del área disponible. Este método no permite medidas personalizadas.',
      ),
    },
    {
      name: tx('Existing size + digital printing', '现有尺寸 + 数码印刷', 'Medida existente + impresión digital'),
      description: tx(
        'Use full-bag artwork in one or multiple colours on an existing size. Custom dimensions are not available with this method.',
        '在现有尺寸上进行全袋单色或多色图稿印刷。此方式不支持定制尺寸。',
        'Utilice un diseño de uno o varios colores en toda la bolsa, con una medida existente. Este método no permite medidas personalizadas.',
      ),
    },
    {
      name: tx('Fully custom production', '全定制生产', 'Producción totalmente personalizada'),
      description: tx(
        'Specify the bag dimensions, bag colour and full-bag artwork. Confirm the construction and order requirements for your chosen specification.',
        '指定袋子尺寸、袋色及全袋图稿，并按所选规格确认结构和订购要求。',
        'Especifique las medidas, el color de la bolsa y el diseño para toda su superficie. Confirme la estructura y las condiciones del pedido según la especificación elegida.',
      ),
    },
  ]

  return <section className="detail-section customization-order-options" aria-labelledby="choose-order-method">
    <h2 id="choose-order-method">{tx(
      'Choose your insulated bag and order method',
      '选择保温袋和订购方式',
      'Elija su bolsa térmica y la modalidad de pedido',
    )[lang]}</h2>
    <p>{tx(
      'Start with the bag format that fits your packed products. For our self-seal non-woven delivery bags, printing on an existing size and fully custom production have different order requirements.',
      '先选择适合实际内装物的袋型。以我们的自封无纺布外卖保温袋为例，现有尺寸加印与全定制生产的订购要求不同。',
      'Empiece por el formato de bolsa que se adapte a sus productos embalados. En nuestras bolsas de reparto de tejido no tejido con cierre autoadhesivo, la impresión sobre medidas existentes y la producción totalmente personalizada tienen condiciones de pedido distintas.',
    )[lang]}</p>
    <table>
      <thead><tr>
        <th scope="col">{tx('Order method', '订购方式', 'Modalidad de pedido')[lang]}</th>
        <th scope="col">{tx('What you can specify', '可指定的内容', 'Qué puede especificar')[lang]}</th>
      </tr></thead>
      <tbody>{options.map(option => <tr key={option.name.en}>
        <th scope="row">{option.name[lang]}</th>
        <td>{option.description[lang]}</td>
      </tr>)}</tbody>
    </table>
    <p className="customization-sampling-note">{tx(
      'Existing-size screen and digital printing use digital artwork approval; a physical custom sample is not provided for these methods. Fully custom orders offer paid digital-print samples, whose colour and finish may differ from bulk production.',
      '现有尺寸的丝印和数码印刷仅确认电子稿，不提供定制实物样。全定制订单可提供收费数码印刷样品，样品的颜色和表面效果可能与大货不同。',
      'La serigrafía y la impresión digital sobre medidas existentes se aprueban mediante un diseño digital; estas modalidades no incluyen una muestra física personalizada. Los pedidos totalmente personalizados ofrecen muestras de impresión digital de pago, cuyo color y acabado pueden diferir de la producción en serie.',
    )[lang]}</p>
    <div className="related-links">
      <a href={`${href('/products/self-seal-non-woven-delivery-bags/', lang)}#order-quantities`}>
        {tx('Compare delivery-bag order options', '比较外卖保温袋订购方式', 'Compare las modalidades de pedido de bolsas de reparto')[lang]}<ArrowUpRight size={16} />
      </a>
      <a href={`${href('/products/self-seal-non-woven-delivery-bags/', lang)}#delivery`}>
        {tx('Check sampling and production terms', '查看打样和生产条件', 'Consulte las condiciones de muestras y producción')[lang]}<ArrowUpRight size={16} />
      </a>
    </div>
    <p>{tx(
      'For cakes, meals or groceries that need a zipper bag,',
      '蛋糕、餐食或商超商品需要拉链袋时，可以',
      'Si necesita una bolsa con cremallera para tartas, comidas o compras,',
    )[lang]}{' '}<a className="customization-format-link" href={href('/collections/custom-cooler-bags/', lang)}>
      {tx('compare our cooler bag formats', '比较我们的保温袋款式', 'compare nuestros formatos de bolsas térmicas')[lang]}
    </a>{lang === 'zh' ? '。' : '. '}{tx(
      'Order quantities, sampling terms and production times depend on the selected product and order method.',
      '订购数量、打样条件和生产时间取决于所选产品与订购方式。',
      'Las cantidades, las condiciones de las muestras y los plazos de producción dependen del producto y de la modalidad de pedido elegidos.',
    )[lang]}</p>
  </section>
}
