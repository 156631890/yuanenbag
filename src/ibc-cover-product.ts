import type { Bag } from './data'
import type { ProductImage } from './product-media'
const imageFile=(n:number)=>`standardized/insulated-ibc-covers/${String(n).padStart(2,'0')}.webp`
export const ibcCover:Bag={
  "slug": "insulated-ibc-covers",
  "name": {
    "en": "Insulated IBC Covers",
    "zh": "IBC 吨桶保温罩",
    "es": "Fundas térmicas para IBC"
  },
  "short": {
    "en": "Insulated IBC cover",
    "zh": "IBC 吨桶保温罩",
    "es": "Funda térmica para IBC"
  },
  "seoTitle": {
    "en": "Insulated IBC Covers with Cap & Valve Access | YUANEN",
    "zh": "IBC 吨桶保温罩定制 | 加注口与阀门检修口 | 远恩",
    "es": "Fundas térmicas para IBC con acceso a tapa y válvula | YUANEN"
  },
  "intro": {
    "en": "Passive reflective covers fitted around the cage and top of an intermediate bulk container (IBC). Separate top-cap and lower-valve access flaps allow inspection without removing the full cover. Confirm the tank envelope, fitting positions and laminate with a sample.",
    "zh": "适配中型散装容器（IBC）外框架与顶部的无源反射保温罩。顶部加注口与底部出液阀分别设置检修翻盖，便于局部开启检查。按样品确认桶体外廓、接口位置及复合材料。",
    "es": "Fundas reflectantes pasivas para el bastidor y techo de un contenedor IBC. Las solapas independientes de tapa superior y válvula inferior permiten inspeccionar sin retirar toda la funda. Confirme contorno, conexiones y laminado con muestra."
  },
  "material": {
    "en": "Reflective laminate; facing, core and seams by sample",
    "zh": "反射复合层；面层、芯层与接缝按样品确认",
    "es": "Laminado reflectante; cara, núcleo y uniones según muestra"
  },
  "use": {
    "en": "IBC tank wrapping · warehouse handling · transfer-point access",
    "zh": "吨桶包覆 · 仓储周转 · 接口检修",
    "es": "Protección de IBC · manejo en almacén · acceso a conexiones"
  },
  "group": "cold-chain",
  "type": "foil",
  "color": "#b8bab9",
  "colourName": {
    "en": "Silver / black trim",
    "zh": "银色／黑色包边",
    "es": "Plateado / ribete negro"
  },
  "category": "materials",
  "styles": [],
  "uses": [
    "thermal"
  ],
  "collection": "custom-designs-2026",
  "image": imageFile(1),
  "gallery": [
    imageFile(2),
    imageFile(3),
    imageFile(4),
    imageFile(5),
    imageFile(6),
    imageFile(7)
  ],
  "considerations": [
    {
      "en": "Measure external width, depth and height above the pallet deck. Locate cap, valve and fork openings separately; tank volume is not a cover dimension.",
      "zh": "测量最大外宽、外深及托盘面以上高度，另列桶盖、阀门与进叉口位置。桶体容积不能代替罩体尺寸。",
      "es": "Mida ancho, fondo y altura desde plataforma. Ubique tapa, válvula y horquillas aparte; el volumen no define medidas de funda."
    },
    {
      "en": "Confirm laminate, seams and closure by sample. The cover does not contact liquid, contain leaks, bear load or approve the tank. Tank and pallet are props.",
      "zh": "复合层、接缝与闭合按样品确认。罩体不接触液体、不承接泄漏、不承载，也不能替代桶体资质；桶体与托盘为道具。",
      "es": "Confirme laminado, uniones y cierre con muestra. No contacta líquido, contiene fugas ni soporta carga. Tanque y palé son accesorios de exposición."
    },
    {
      "en": "Passive insulation supplies no heat or cooling. Validate contents, tank and route; images establish no freeze guarantee, temperature range, duration or certification.",
      "zh": "无源保温层不产生热量或冷量。按物料、桶体与路线验证，不由图片推定防冻保证、温区、时长或认证。",
      "es": "Sin aporte de calor o frío. Valide contenido, tanque y ruta; las imágenes no acreditan anticongelación, rango, duración ni certificación."
    }
  ],
  "question": {
    "en": "Is an IBC insulation cover the same as an IBC heater?",
    "zh": "IBC 保温罩与吨桶加热器是一回事吗？",
    "es": "¿Es lo mismo que un calefactor para IBC?"
  },
  "answer": {
    "en": "No. This is passive insulation outside the tank cage, without heating, cooling or a temperature setpoint. Specify and verify heating, refrigeration, hazardous-area use and freeze protection separately.",
    "zh": "不是。本款是桶体外框架上的无源保温层，无加热、制冷或设定温度。加热、制冷、危险区域适用性及防冻保护需另行选型验证。",
    "es": "No. Es aislamiento pasivo exterior, sin calor, frío ni consigna. Especifique y verifique por separado calefacción, refrigeración, zonas peligrosas y protección contra congelación."
  }
}
const imageLabels=[
  {
    "en": "Closed reflective IBC cover with two access flaps",
    "zh": "闭合反射面吨桶罩与两处检修翻盖",
    "es": "Funda reflectante cerrada con dos accesos"
  },
  {
    "en": "Top flap open above the closed filler cap",
    "zh": "顶部翻盖打开，露出闭合桶盖",
    "es": "Solapa superior abierta sobre tapa cerrada"
  },
  {
    "en": "Lower flap open for valve inspection",
    "zh": "底部翻盖打开以检查阀门",
    "es": "Solapa inferior abierta para inspeccionar válvula"
  },
  {
    "en": "Bound overlap and closure detail",
    "zh": "包边搭接与闭合细节",
    "es": "Detalle de solape y cierre ribeteado"
  },
  {
    "en": "Width, depth and deck-to-top height boundaries",
    "zh": "宽深及托盘面以上高度的测量边界",
    "es": "Límites de ancho, fondo y altura desde plataforma"
  },
  {
    "en": "Lower hem above unobstructed fork openings",
    "zh": "下摆位于畅通进叉口上方",
    "es": "Borde sobre entradas de horquilla libres"
  },
  {
    "en": "Cover removed and folded for storage",
    "zh": "罩体取下后的折叠存放",
    "es": "Funda retirada y plegada"
  }
]
export const ibcCoverImages:ProductImage[]=imageLabels.map((label,i)=>({file:imageFile(i+1),kind:"visualization",label}))
