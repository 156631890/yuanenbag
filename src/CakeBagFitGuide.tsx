import { tx, type Lang } from './data'
import { href } from './routes'
import './cake-bag-fit-guide.css'

export default function CakeBagFitGuide({ lang }: { lang: Lang }) {
  const checks = [
    tx(
      'Check the usable base against the widest parts of the packed box, including the cake board and wrapping.',
      '按装好后的盒体最宽处核对袋底可用空间，计入底托和外包装。',
      'Compare la base útil con las partes más anchas de la caja embalada, incluidas la base de la tarta y la envoltura.',
    ),
    tx(
      'Check that the box passes through the zipper opening and can be lifted out while kept level. Review the opening and hand clearance on a sample.',
      '用样品检查蛋糕盒能否保持水平通过拉链开口并取出，同时核对开口及手部操作余量。',
      'Compruebe que la caja pasa por la abertura de la cremallera y puede extraerse manteniéndola nivelada. Revise la abertura y el espacio para las manos con una muestra.',
    ),
    tx(
      'Close the lid with the box in place and check the clearance above it. If you plan to add coolant, include its size and position in the fit check.',
      '放入蛋糕盒后合上袋盖，检查盒顶净空。如果计划另配冰源，将其尺寸与摆放位置计入适配检查。',
      'Cierre la tapa con la caja dentro y compruebe el espacio libre por encima. Si va a añadir refrigerante, incluya su tamaño y posición al comprobar el ajuste.',
    ),
  ]

  return <div className="cake-fit-guide">
    <h2 id="cake-box-fit">{tx(
      'Check cake-box fit before ordering',
      '订购前核对蛋糕盒适配',
      'Compruebe el ajuste de la caja de tarta antes de pedir',
    )[lang]}</h2>
    <p>{tx(
      'Measure the outside width × depth × height of your fully assembled cake box, including any projecting board, ribbon or handle. Mark the units and send a photo showing how the box will sit inside the bag.',
      '测量组装完整后的蛋糕盒外部宽 × 深 × 高，包含突出盒体的底托、丝带或提手。注明单位，并提供盒子在袋内摆放方式的照片。',
      'Mida la anchura × profundidad × altura exteriores de la caja de tarta completamente montada, incluidas las partes que sobresalgan de la base, la cinta o el asa. Indique las unidades y envíe una foto que muestre cómo se colocará la caja dentro de la bolsa.',
    )[lang]}</p>
    <ul>{checks.map(check => <li key={check.en}>{check[lang]}</li>)}</ul>
    <p>{tx('For an adhesive-flap format, compare our', '如需自粘封口形式，可比较', 'Para un formato con solapa adhesiva, compare nuestras')[lang]}{lang === 'zh' ? '' : ' '}
      <a href={href('/products/self-seal-non-woven-cake-bags/', lang)}>{tx(
        'self-seal non-woven cake bags',
        '自封无纺布蛋糕袋',
        'bolsas de tejido no tejido con cierre autoadhesivo para tartas',
      )[lang]}</a>{tx(
        '. Check the loaded box against the side gusset, handle position and sealing area.',
        '，按装好后的蛋糕盒核对侧褶、提手位置及封口区域。',
        '. Compruebe la caja llena con respecto al fuelle lateral, la posición de las asas y la zona de sellado.',
      )[lang]}
    </p>
    <p>{tx(
      'For a foil-and-EPE format with a gusseted base, compare our',
      '如需立体底的铝箔与 EPE 复合袋，可比较',
      'Para un formato de aluminio y EPE con base con fuelle, compare nuestras',
    )[lang]}{lang === 'zh' ? '' : ' '}
      <a href={href('/products/gusseted-foil-cake-bags/', lang)}>{tx(
        'gusseted foil cake bags',
        '立体铝箔蛋糕袋',
        'bolsas de aluminio con fuelle para tartas',
      )[lang]}</a>{tx(
        '. Confirm the base footprint, packed height and space needed for the top closure.',
        '，确认底部占地、装载高度和顶部封口所需空间。',
        '. Confirme las dimensiones de la base, la altura del contenido embalado y el espacio necesario para el cierre superior.',
      )[lang]}
    </p>
    <p>{tx(
      'For this zipper bag, confirm the finished dimensions, material layers and print area with your sample. Request MOQ, sample charges and production timing for your selected specification in the written quotation.',
      '这款拉链袋的成品尺寸、材料层次及印刷区域需通过样品确认。按所选规格，在书面报价中分别确认起订量、样品费用和生产时间。',
      'Para esta bolsa con cremallera, confirme las medidas finales, las capas de material y el área de impresión con la muestra. Solicite que la cotización escrita indique el pedido mínimo, los costes de las muestras y el plazo de producción para la especificación elegida.',
    )[lang]}</p>
  </div>
}
