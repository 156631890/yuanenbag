import type { Bag, Text } from './data'
import type { ProductImage } from './product-media'

const tx = (en: string, zh: string, es: string): Text => ({ en, zh, es })
const slug = 'insulated-drum-covers'
const imageFile = (index: number) => 'standardized/' + slug + '/0' + index + '.webp'
const labels = [
  tx('Silver drum wrap with its circular cap fitted', '银色圆桶侧围与装好的圆顶盖', 'Envolvente plateada con su tapa circular colocada'),
  tx('Cap set aside with the closed drum bungs visible', '保温顶盖取下，露出闭合桶塞', 'Tapa térmica retirada y tapones del bidón cerrados'),
  tx('Side wrap opened at the vertical overlap', '侧围沿纵向搭接处展开', 'Envolvente abierta en el solape vertical'),
  tx('Black fastening tab and bound seam', '黑色扣带与包边接缝', 'Lengüeta negra y costura ribeteada'),
  tx('Bare steel drum beside the removed insulation cap', '裸桶与拆下的保温顶盖', 'Bidón sin funda junto a la tapa térmica retirada'),
  tx('Wrap hem above the blue steel base rim', '保温侧围下摆位于蓝色桶底卷边上方', 'Borde de la envolvente sobre el aro inferior azul'),
  tx('Folded side wrap and separate circular cap', '折叠侧围与独立圆顶盖', 'Envolvente plegada y tapa circular separada'),
]
export const drumCoverImages: ProductImage[] = labels.map((label, index) => ({
  file: imageFile(index + 1), kind: 'visualization', label,
}))
export const drumCover: Bag = {
  slug,
  name: tx('Insulated Drum Covers', '工业圆桶保温罩', 'Fundas térmicas para bidones'),
  short: tx('Insulated drum cover', '工业圆桶保温罩', 'Funda térmica para bidón'),
  seoTitle: tx('Insulated Drum Covers with Removable Cap | YUANEN', '工业圆桶保温罩定制｜可拆圆顶盖｜远恩', 'Fundas térmicas para bidones con tapa desmontable | YUANEN'),
  intro: tx(
    'Passive insulation for upright closed-head drums. The side wrap fastens around the drum and the separate circular cap lifts off for bung access.',
    '用于直立闭口圆桶的无源保温罩。环抱侧围以扣带固定，可拆圆顶盖方便接近桶塞。',
    'Aislamiento pasivo para bidones verticales de tapa fija. La envolvente se cierra en el lateral y la tapa circular se retira para acceder a los tapones.'
  ),
  material: tx('Reflective laminate with bound edges, specified by sample', '带包边的反射复合层，具体结构按样品确认', 'Laminado reflectante ribeteado, según muestra'),
  use: tx('Upright drum storage and transfer', '直立圆桶存放与周转', 'Almacenamiento y traslado de bidones verticales'),
  group: 'cold-chain', type: 'foil', color: '#b8bab9',
  colourName: tx('Silver with black binding', '银色／黑色包边', 'Plateado con ribete negro'),
  category: 'materials', styles: [], uses: ['thermal'], collection: 'custom-designs-2026',
  image: drumCoverImages[0].file, gallery: drumCoverImages.slice(1).map(image => image.file),
  considerations: [
    tx('Measure the widest outside diameter and overall height. Locate bungs, rings and protrusions on a sketch.', '测量最大外径与总高，并在草图上标出桶塞、卷边与突出部位。', 'Mida el diámetro exterior máximo y la altura total. Marque tapones, aros y salientes en un croquis.'),
  ],
  question: tx('Can I access the drum bungs with the side wrap fitted?', '侧围装着时可以接近桶塞吗？', '¿Puedo acceder a los tapones sin retirar la envolvente?'),
  answer: tx('Yes. Lift the separate insulating cap to expose the fixed drum head. Check overhead clearance and the bung layout on the actual drum before ordering.', '可以。取下独立保温顶盖即可露出固定桶顶，订购前按实桶核对上方取盖空间和桶塞位置。', 'Sí. Retire la tapa térmica independiente para dejar visible la parte superior fija. Compruebe el espacio superior y la posición de los tapones en el bidón real.'),
}
