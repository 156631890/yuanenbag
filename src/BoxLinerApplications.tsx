import { tx, type Lang } from './data'
import { href } from './routes'
import { responsiveImage } from './responsive-images'

const applications = [
  {
    id: 'chocolate-packaging', image: 'chocolate-foam-v2',
    title: tx('Insulated chocolate packaging', '巧克力运输保温包装', 'Embalaje aislante para chocolate'),
    intro: tx('Plan a liner around the finished gift box, its protective packing and the agreed coolant arrangement. A shallow gift box needs a different layout from a deeper foam shipping box, even when both use the same foil liner material.', '围绕装好后的巧克力礼盒、防护包装及约定冰源规划内衬。扁平礼盒与较深的泡沫运输箱的装载布局不同，可以使用同系列铝箔内衬按实际尺寸适配。', 'Diseñe el forro alrededor de la caja de regalo terminada, su protección y la disposición acordada del refrigerante. Una caja baja requiere una distribución distinta de una caja de espuma más profunda, aunque utilicen el mismo material aislante.'),
    checks: [
      tx('Measure the closed gift box, including sleeves and ribbons. Reserve space for corner protection and the liner’s top fold.', '测量含外套、装饰带的闭合礼盒，为边角防护及内衬顶部折合预留空间。', 'Mida la caja cerrada con funda y cintas. Reserve espacio para proteger las esquinas y plegar la parte superior del forro.'),
      tx('Specify any separation between coolant and the gift packaging. Check moisture exposure and box appearance in the agreed trial.', '明确冰源与礼盒之间的隔离方式，在约定试验中观察受潮情况及礼盒外观。', 'Defina la separación entre refrigerante y caja de regalo. Revise la exposición a humedad y el aspecto de la caja en el ensayo acordado.'),
      tx('Provide the chocolate’s required temperature conditions and delivery route for a complete pack-out test. The liner alone does not guarantee that chocolate will not melt.', '提供巧克力所需温度条件和配送路线，测试整套装载方案；单凭内衬不能承诺巧克力不融化。', 'Indique las condiciones de temperatura del chocolate y la ruta para ensayar el embalaje completo. El forro por sí solo no garantiza que el chocolate no se funda.'),
    ],
    brief: tx('Gift-box dimensions and packed mass; protective layers; proposed coolant and separator; route and ambient conditions; order quantity.', '礼盒尺寸与装载重量、防护层、拟用冰源和隔离层、路线与环境条件、订单数量。', 'Medidas y masa de la caja llena; capas protectoras; refrigerante y separador previstos; ruta, ambiente y cantidad.'),
  },
  {
    id: 'meal-kit-packaging', image: 'meal-kit-foam-v2',
    title: tx('Meal-kit and prepared-meal shipping liners', '食材包与预制餐运输内衬', 'Forros para kits de comida y platos preparados'),
    intro: tx('Fit the liner to a foam shipping box carrying separately sealed food packs or closed meal containers. This is a box-lining proposal for shipment, with its own loading and closure requirements.', '将内衬适配到泡沫运输外箱，用于分别密封的食材包装或闭合餐盒。这是整箱运输应用方案，需要单独核对装载布局与外箱闭合。', 'Adapte el forro a una caja de espuma para transporte con alimentos en envases sellados o recipientes cerrados. Esta propuesta para envío en caja requiere comprobar su propia distribución y cierre.'),
    checks: [
      tx('List every filled pack and its maximum outside dimensions. Check the combined stack rather than multiplying one nominal container height.', '逐项记录装好后的包装及最大外尺寸；实测组合堆叠高度，不能只用标称单盒高度相乘。', 'Registre cada envase lleno y sus medidas exteriores máximas. Compruebe la pila real, no solo la altura nominal de un recipiente multiplicada.'),
      tx('Allocate coolant space without pressing on lids or seals. Separate products with incompatible storage requirements; do not assume that one liner provides independent temperature zones.', '安排冰源空间，避免压迫盒盖或封口。储存条件不相容的食品分别规划，不能认为一个内衬自带独立温区。', 'Reserve refrigerante sin presionar tapas ni sellos. Planifique por separado alimentos con requisitos incompatibles; un solo forro no crea zonas térmicas independientes.'),
      tx('Review box corners, top-fold clearance and removal order with the loaded sample. Confirm the foam outer box and complete route test separately.', '使用装载样品检查箱角、顶部折合余量和取货顺序；外箱规格及整套路线试验分别确认。', 'Revise esquinas, espacio del pliegue superior y orden de extracción con la muestra cargada. Confirme por separado la caja exterior y el ensayo de la ruta completa.'),
    ],
    brief: tx('Foam box’s usable interior; filled container list and loading sketch; total mass; coolant layout; required storage conditions and route; quantity.', '外箱可用内尺寸、装好后的容器清单及布局图、总重量、冰源布局、所需储存条件与路线、数量。', 'Interior útil de la caja; lista y croquis de los recipientes llenos; masa total; refrigerante; condiciones de conservación, ruta y cantidad.'),
  },
  {
    id: 'seafood-packaging', image: 'seafood',
    title: tx('Insulated liners for packaged seafood', '海鲜与生鲜装箱保温内衬', 'Forros aislantes para pescado y marisco envasados'),
    intro: tx('Use the foil liner around separately packaged seafood inside an agreed foam outer box. Specify the food package, any secondary leak containment and the insulating liner as distinct components.', '在约定泡沫外箱内，用铝箔内衬配合独立包装的海鲜生鲜。食品内包装、必要的第二层防漏容器和隔热内衬应分别指定。', 'Utilice el forro de aluminio con pescado o marisco envasado por separado dentro de una caja de espuma acordada. Especifique por separado el envase alimentario, la contención secundaria de fugas y el forro aislante.'),
    checks: [
      tx('Measure the sealed food package and inspect its corners and closures. Keep exposed food and loose liquid out of direct contact with the liner unless the exact intended use has supporting evidence.', '测量密封食品包装并检查边角与封口。未取得对应使用证据前，不让裸露食品或散液直接接触内衬。', 'Mida el envase sellado y revise esquinas y cierres. Evite contacto directo del alimento descubierto o líquido suelto con el forro sin evidencia para ese uso concreto.'),
      tx('Agree leak containment and coolant positioning for the selected package. Do not treat an insulating seam as a watertight barrier or the liner as a live-fish transport bag.', '针对选定包装确认防漏措施与冰源位置。隔热封边不等于水密屏障，内衬也不作为活鱼运输袋。', 'Acuerde la contención de fugas y la posición del refrigerante. Una unión aislante no acredita estanqueidad y el forro no es una bolsa para transportar peces vivos.'),
      tx('State whether the shipment is chilled or frozen and define the required conditions. Check loaded handling and thermal performance with the actual outer box and route.', '明确冷藏或冷冻运输及对应要求，使用实际外箱和路线条件检查装载搬运与温度表现。', 'Indique si el envío es refrigerado o congelado y defina sus requisitos. Compruebe manipulación y comportamiento térmico con la caja y ruta reales.'),
    ],
    brief: tx('Sealed-package dimensions and mass; usable box interior; leak-containment proposal; coolant and target conditions; route; order quantity.', '密封内包装尺寸与重量、外箱可用内尺寸、防漏方案、冰源及目标条件、路线、订单数量。', 'Medidas y masa del envase sellado; interior útil de la caja; contención de fugas; refrigerante y condiciones objetivo; ruta y cantidad.'),
  },
]

export default function BoxLinerApplications({ lang }: { lang: Lang }) {
  const t = (en: string, zh: string, es: string) => tx(en, zh, es)[lang]
  return <div className="liner-applications">
    <nav className="detail-jump-nav" aria-label={t('Box-liner packing applications', '箱内衬装载方案', 'Aplicaciones del forro')}>
      {applications.map(item => <a key={item.id} href={`#${item.id}`}>{item.title[lang]}</a>)}
    </nav>
    {applications.map((item, index) => {
      const image = `images/products/standardized/liner-applications-2026/${item.image}.webp`
      return <section className="detail-block liner-application" id={item.id} key={item.id}>
        <div className="detail-block-heading"><span>{String(index + 9).padStart(2, '0')}</span><h2>{item.title[lang]}</h2></div>
        <div className="liner-application-layout">
          <figure className="product-editorial-figure">
            <img src={`${import.meta.env.BASE_URL}${image}`} alt={item.title[lang]} loading="lazy" {...responsiveImage(image, '(max-width:650px) 90vw, 440px')} />
            <figcaption>{t('Contents, foam outer box and coolant are props; confirm the supplied items in the quotation.', '内装物、泡沫外箱与冰源为道具，供货范围以报价确认为准。', 'Contenido, caja de espuma y refrigerante son elementos demostrativos; confirme el suministro en la cotización.')}</figcaption>
          </figure>
          <div><p>{item.intro[lang]}</p><ul className="detail-list">{item.checks.map(check => <li key={check.en}>{check[lang]}</li>)}</ul>
            <div className="liner-enquiry"><h3>{t('Send these details for a quotation', '询价时请提供', 'Datos para solicitar una cotización')}</h3><p>{item.brief[lang]}</p>
              <a className="text-link" href={`${href('/contact/', lang)}?bag=foil-insulated-box-liners`}>{t('Discuss this packing arrangement', '咨询此装载方案', 'Consultar esta disposición de embalaje')} ↗</a>
            </div>
          </div>
        </div>
      </section>
    })}
    <p className="technical-note">{t('These are three applications of the existing foil box-liner range. Final liner dimensions, layer construction, closure, MOQ and delivery terms follow the agreed sample and quotation. Food-contact suitability and temperature performance require evidence for the intended use.', '以上为现有铝箔箱内衬系列的三种应用。内衬最终尺寸、复合结构、闭合方式、起订量及交付条件按样品和报价确认；食品接触适用性及温度表现需有对应使用证据。', 'Son tres aplicaciones de la gama existente de forros de aluminio. Medidas, capas, cierre, pedido mínimo y entrega se confirman mediante muestra y cotización. La aptitud para contacto alimentario y el comportamiento térmico requieren evidencia del uso previsto.')}</p>
  </div>
}
