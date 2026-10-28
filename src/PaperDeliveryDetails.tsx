import { tx, type Lang } from './data'
import { FAQ } from './BuyerResources'
import { href } from './routes'

const content = {
  en: {
    sections: [
      ['Start with the container', 'Supply the outside dimensions and filled weight of closed takeaway cartons or grocery items. Check that the wide opening, side gusset and flat base support the actual arrangement without crushing lids.'],
      ['Specify the complete laminate', 'Agree the paper grade, any intermediate insulation, reflective inner surface, bonding and handle attachment as one construction. The design image cannot establish foil grade, thickness or wet-use behavior.'],
      ['Sample the handling route', 'Use a loaded sample to assess hand carrying, base shape and the exposed open top. If a closure or coolant is required, develop and test that as a separately specified option.'],
    ],
    faqs: [
      ['Is the bag made entirely of paper?', 'No such claim is made. The proposed design has a reflective inner layer. Confirm every material and any destination-market recycling or disposal statement against the finished sample.'],
      ['Can it carry chilled groceries or ice cream?', 'It may be planned for closed products and short local handovers, but an open top does not seal the load. Specify the product, coolant if any, route and acceptance conditions, then test the complete pack-out.'],
      ['Are the cartons and handles a rated capacity?', 'The carton is a visual prop and the handles are a proposed construction. Confirm handle attachment and safe working load on a physical sample; no capacity follows from the image.'],
      ['Can the bag be printed?', 'Define the printable area, ink or finish and artwork on the chosen paper grade. Approve a printed sample before ordering; color and print method are not fixed by this visualization.'],
    ],
    order: 'For a useful quotation, send closed-container dimensions, filled weight, expected quantity, paper and inner-layer requirements, desired print area, destination and the handling route. Ask YUANEN to confirm sample scope, materials, price and lead time in writing.',
  },
  zh: {
    sections: [
      ['先按容器选袋', '提供封盖餐盒或商超商品的外尺寸与装载重量，用实物核对宽口、侧褶和平底是否便于排列且不挤压盒盖。'],
      ['确认完整复合层', '将纸种、中间隔热层、银色反射内层、连接方式及提手固定作为一套结构确认。设计图不能证明铝箔等级、厚度或遇水表现。'],
      ['按实际流程打样', '使用装载样品检查手提、底部形态和敞口状态。若需要封口或冰源，应作为另行约定的配置开发和测试。'],
    ],
    faqs: [
      ['这款袋全部由纸制成吗？', '不作此声明。拟定方案含银色反射内层；每层材质及目的地可回收或处理表述，均需根据成品样品核实。'],
      ['能装冷藏商品或冰淇淋吗？', '可以围绕封盖商品与短途交接规划，但敞口不能密封装载。应明确产品、冰源（如有）、路线和验收条件，再测试完整包装。'],
      ['图中的餐盒和提手代表额定容量吗？', '餐盒只是展示道具，提手连接是拟定结构。安全装载量需在实物样品上核对，不能由图片推断。'],
      ['可以定制印刷吗？', '按选定纸种确定可印区域、油墨或表面处理及图稿，生产前核对印刷样品。效果图不锁定颜色或印刷工艺。'],
    ],
    order: '询价时请提供封盖容器尺寸、装载重量、预计数量、纸材与内层要求、印刷区域、目的地及搬运路线。样品范围、材质、价格和交期由远恩书面确认。',
  },
  es: {
    sections: [
      ['Parta del envase', 'Envíe medidas exteriores y peso lleno de envases cerrados o compras. Revise con muestra si la boca ancha, el fuelle y la base admiten la disposición sin comprimir las tapas.'],
      ['Defina el laminado completo', 'Acuerde papel, aislamiento intermedio, capa interior reflectante, unión y fijación de asas como un conjunto. La imagen no demuestra grado de aluminio, espesor ni comportamiento ante humedad.'],
      ['Muestree el recorrido', 'Revise transporte manual, base y abertura expuesta con una muestra cargada. Si necesita cierre o refrigerante, especifíquelo y ensáyelo como opción aparte.'],
    ],
    faqs: [
      ['¿Está hecha totalmente de papel?', 'No se afirma. La propuesta contiene una capa interior reflectante. Verifique todos los materiales y cualquier declaración de reciclaje o eliminación con la muestra terminada.'],
      ['¿Sirve para compras frías o helado?', 'Puede planificarse para productos cerrados y trayectos locales cortos, pero la abertura no sella la carga. Defina producto, refrigerante si procede, ruta y criterios; ensaye el conjunto.'],
      ['¿El envase y las asas indican capacidad nominal?', 'El envase es demostrativo y las asas son una propuesta. Compruebe fijación y carga segura en una muestra física; la imagen no establece capacidad.'],
      ['¿Se puede imprimir?', 'Defina área imprimible, tinta o acabado y diseño según el papel elegido. Apruebe una muestra impresa antes de pedir; esta imagen no fija color ni proceso.'],
    ],
    order: 'Para cotizar, envíe medidas de envases cerrados, peso lleno, cantidad, papel y capa interior requeridos, área de impresión, destino y recorrido. YUANEN confirmará por escrito alcance de muestra, materiales, precio y plazo.',
  },
} as const

export default function PaperDeliveryDetails({ lang }: { lang: Lang }) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  const copy = content[lang]
  return <>
    <section className="detail-block" id="paper-packout"><div className="detail-block-heading"><span>09</span><h2>{t('Paper carrier pack-out planning', '纸基手提袋装载规划', 'Planificación de carga de la bolsa de papel')}</h2></div><div className="function-grid">{copy.sections.map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div></section>
    <section className="detail-block" id="paper-questions"><div className="detail-block-heading"><span>10</span><h2>{t('Paper insulated bag buying questions', '纸基保温袋采购问答', 'Preguntas de compra de bolsas térmicas de papel')}</h2></div><FAQ lang={lang} items={content.en.faqs.map((_, i) => ({ q: tx(content.en.faqs[i][0], content.zh.faqs[i][0], content.es.faqs[i][0]), a: tx(content.en.faqs[i][1], content.zh.faqs[i][1], content.es.faqs[i][1]) }))}/></section>
    <section className="detail-block" id="paper-quote"><div className="detail-block-heading"><span>11</span><h2>{t('Prepare a custom sample brief', '准备定制样品需求', 'Prepare la solicitud de muestra')}</h2></div><p>{copy.order}</p><a className="text-link" href={href('/products/self-seal-non-woven-delivery-bags/', lang)}>{t('Compare the existing non-woven delivery bag', '对比现有无纺布外卖袋', 'Comparar la bolsa no tejida existente')}</a></section>
  </>
}
