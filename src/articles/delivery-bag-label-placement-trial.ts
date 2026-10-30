import type { EditorialArticle } from '../editorial'
const t = (en: string, zh: string, es: string) => ({ en, zh, es })

const article: EditorialArticle = {
  kind: 'guide', slug: 'delivery-bag-label-placement-trial', publishedAt: '2026-10-17',
  title: t('Check Delivery-Bag Labels With the Sample Loaded', '配送袋贴标位置，要在装满和提起后再确认', 'Compruebe la posición de la etiqueta con la bolsa de reparto cargada'),
  description: t('Compare proposed label positions on a loaded catering-bag sample at rest, during lifting and with the front panel open, without assuming adhesive compatibility.', '用实际餐盘配送袋样件比较静置、提起及前幅打开时的标签可见性，记录位置和识别条件，固定方式与材料相容性另行确认。', 'Compare posiciones de etiqueta con una muestra cargada en reposo, al levantarla y con el panel frontal abierto. Confirme aparte la fijación y compatibilidad.'),
  intro: t('A label position marked on a flat drawing may be covered by a hand, a handle or the opened front panel during delivery. Compare positions on the intended loaded sample before approving the layout. Record where the reader stands and how the bag is being handled, so the result can be repeated.', '平面图上选好的标签位置，在配送中可能被手、提手或打开的前面板遮挡。批准位置前，用拟采用的满载样件进行比较，同时记录识别人员站在哪里、袋子处于什么搬运状态，便于复核。', 'La posición elegida en un plano puede quedar tapada por una mano, un asa o el panel abierto durante el reparto. Compare las posiciones en la muestra cargada prevista antes de aprobarlas. Anote desde dónde se lee y cómo se manipula la bolsa para poder repetir la revisión.'),
  sections: [
    {
      heading: t('Use the current construction as the starting point', '先以当前袋型确定可能遮挡的位置', 'Parta de la construcción actual'),
      paragraphs: [
        t('YUANEN’s current catering-bag proposal has a front panel that opens downward and short side grips. The verified material revision uses a non-woven exterior and aluminum-foil interior. A proposed mark on the moving front panel needs a different visibility check from one near a side grip. The product does not establish a standard label window or adhesive system.', '远恩当前餐盘配送包方案采用向下打开的前面板和短侧提手，已核验材质为无纺布外层与铝箔内层。拟放在活动前面板上的标识，与靠近侧提手的标识，需要核对的遮挡情况不同。产品资料没有确定标准标签窗或胶粘体系。', 'La propuesta actual de YUANEN tiene panel frontal abatible hacia abajo y asas laterales cortas. La revisión verificada usa exterior no tejido e interior de lámina de aluminio. Una marca en el panel móvil requiere una revisión distinta a otra junto al asa. El producto no define una ventana de etiqueta ni un sistema adhesivo estándar.'),
        t('Identify the sample revision and draw each candidate position relative to a seam or panel edge. Ask the supplier how a temporary position marker may be used on that sample without damage. Confirm the final label material and attachment method separately; do not assume a sticker will bond to the non-woven surface.', '标明样品版本，用接缝或面板边缘作为基准画出候选位置。先向供应方确认如何在样件上临时定位而不损伤材料。最终标签材料和固定方式单独确认，不默认贴纸能够粘牢无纺布表面。', 'Identifique la revisión de muestra y dibuje posiciones respecto a una costura o borde. Consulte cómo usar un marcador temporal sin dañar la muestra. Confirme por separado material de etiqueta y fijación final; no asuma que una pegatina se adherirá al no tejido.'),
      ],
    },
    {
      heading: t('Repeat the review in the intended handling states', '按实际使用状态重复核对', 'Repita la revisión en los estados de uso previstos'),
      paragraphs: [
        t('Use the intended closed containers and an agreed, supported sample load. Confirm the handling method before lifting; the trial is not a load-rating test. Keep the label content and size unchanged while comparing candidate positions. Otherwise a change in lettering may be mistaken for an improvement in position.', '使用拟采用的闭合容器和约定、妥善支撑的样品装载，提起前确认搬运方法；这次核对不是承重测试。比较候选位置时，保持标签内容和尺寸不变，避免把字号变化误当成位置改善。', 'Use envases cerrados previstos y una carga de muestra acordada y apoyada. Confirme la manipulación antes de levantar; no es una prueba de carga nominal. Mantenga contenido y tamaño de etiqueta iguales al comparar posiciones para no atribuir a la posición una mejora causada por las letras.'),
      ],
      bullets: [
        t('At rest: record the bag orientation, folds crossing the proposed label area and the viewing side used at the handover point.', '静置时：记录袋子朝向、候选贴标区域的褶皱，以及交接点实际采用的观察侧。', 'En reposo: anote orientación, pliegues que atraviesan la zona propuesta y lado de lectura utilizado en la entrega.'),
        t('During lifting and set-down: observe whether the normal hand position or the side grip covers the mark. Photograph the agreed state with the load supported where required.', '提起和放下时：观察正常抓握位置或侧提手是否挡住标识；按需要支撑装载，并拍下约定状态。', 'Al levantar y apoyar: observe si la mano o el asa tapa la marca. Fotografíe el estado acordado con la carga apoyada cuando sea necesario.'),
        t('With the front panel open: check where the panel and proposed mark end up during removal. Record any need to turn or close the bag to identify it.', '前幅打开时：查看取物过程中前面板和拟用标识落在何处，记录是否需要转动或重新闭合袋子才能识别。', 'Con el frontal abierto: compruebe dónde quedan panel y marca durante la extracción. Anote si hace falta girar o cerrar la bolsa para identificarla.'),
      ],
    },
    {
      heading: t('Keep one position record for each comparison', '每个候选位置保留可复核的记录', 'Conserve un registro por posición comparada'),
      paragraphs: [
        t('A useful proposed record names the sample, load arrangement, label revision, position reference and handling state, followed by a photograph and the observation. Add the viewer’s direction and any turn or extra action needed. Distinguish a mark that is hidden from one that is visible but difficult to read.', '建议记录样品、装载布局、标签版本、定位基准及搬运状态，再附照片与观察结果，同时写明观察方向，以及是否需要转动或额外操作。把“被遮挡”与“可见但难以辨认”分开记录。', 'El registro propuesto identifica muestra, carga, versión de etiqueta, referencia de posición y estado de manipulación, con foto y observación. Añada dirección de lectura y cualquier giro o acción adicional. Distinga una marca oculta de otra visible pero difícil de leer.'),
        t('If the operation uses a barcode or another machine-readable mark, use the actual intended device and record its identity and trial conditions. A visual check or a successful trial read does not establish a verified barcode grade, long-term adhesion or performance under conditions that were not tested.', '若流程使用条码或其他机器识别标记，采用实际拟用设备，并记录设备标识和试样条件。目视核对或一次试读成功，不代表已取得条码等级、长期粘贴性能，或未测试条件下的识别能力。', 'Si el proceso usa códigos de barras u otra marca de lectura automática, utilice el dispositivo previsto y registre su identidad y condiciones. Una inspección visual o lectura de prueba no establece un grado verificado del código, adhesión a largo plazo ni rendimiento en condiciones no probadas.'),
      ],
    },
    {
      heading: t('Approve the position together with its unresolved conditions', '确认位置时，同时列出尚未解决的条件', 'Apruebe la posición con sus condiciones pendientes'),
      paragraphs: [
        t('Send YUANEN the selected position drawing, comparison photographs, label dimensions and intended identification process. Ask whether the proposed attachment can be evaluated on the confirmed construction. A request for a pocket, window or permanent marking is a separate proposed customization, not a feature already included with this bag.', '向远恩提供选定位置图、对照照片、标签尺寸及拟用识别流程，询问能否在确认结构上评估拟定固定方式。如需口袋、透明窗或永久标识，应作为另外提出的定制方案，不写成这款袋子已有的标配。', 'Envíe a YUANEN plano elegido, fotos comparativas, medidas de etiqueta y proceso de identificación. Consulte si puede evaluarse la fijación en la construcción confirmada. Un bolsillo, ventana o marcado permanente solicitado es una propuesta de personalización aparte, no una característica incluida.'),
        t('This article proposes a sample review, not evidence of completed testing or guaranteed identification. Confirm the final sample, order specification and any cleaning or reuse conditions that could affect the chosen method. The loose white card in the cover is a prop and is not a supplied accessory.', '本文建议的是样品核对方法，不是已完成测试或识别保证。最终样品、订单规格，以及可能影响所选方式的清洁或周转条件仍需确认。封面上的白色卡片为道具，不代表随包配件。', 'El artículo propone una revisión de muestra, no demuestra ensayos realizados ni garantiza identificación. Confirme muestra final, especificación y condiciones de limpieza o reutilización que puedan afectar al método. La tarjeta blanca de portada es un elemento de escena, no un accesorio incluido.'),
      ],
    },
  ],
  sources: [
    { title: t('YUANEN current catering-bag construction and boundaries', '远恩当前餐盘配送包结构与边界', 'Construcción actual y límites de la bolsa de catering YUANEN'), url: 'https://yuanenbag.com/products/insulated-catering-bags/' },
    { title: t('YUANEN sample and artwork approval requirements', '远恩样品与图稿确认要求', 'Requisitos YUANEN de aprobación de muestras y diseño'), url: 'https://yuanenbag.com/guides/custom-bag-order-checklist/' },
  ],
  relatedProducts: ['insulated-catering-bags'],
  image: {
  "file": "images/editorial/2026-10-30-cover-repairs/delivery-bag-label-placement-trial.webp",
  "kind": "illustration",
  "alt": {
    "en": "Closed navy catering bag with a blank label away from its zipper and a spare label beside it",
    "zh": "闭合的深蓝团餐包在远离拉链处贴空白标签，旁边另放一张标签",
    "es": "Bolsa azul marino cerrada con etiqueta en blanco alejada de la cremallera y otra etiqueta al lado"
  },
  "caption": {
    "en": "Label placement trial proposal; adhesion, removal and surface compatibility require sample checks.",
    "zh": "标签位置试贴方案；粘附、移除与表面相容性须用样品检查。",
    "es": "Propuesta de colocación; adhesión, retirada y compatibilidad requieren pruebas con muestras."
  }
},
}
export default article
