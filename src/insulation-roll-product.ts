import type { Bag, Text } from './data'
import type { ProductImage } from './product-media'
const t=(en:string,zh:string,es:string):Text=>({en,zh,es})
export const insulationRoll:Bag={
 slug:'epe-foam-foil-insulation-rolls',
 name:t('EPE Foam Foil Insulation Rolls','EPE 铝箔保温卷材','Rollos de espuma EPE aluminizada'),
 short:t('EPE foil insulation roll','EPE 铝箔保温卷材','Rollo EPE aluminizado'),
 seoTitle:t('EPE Foam Foil Insulation Rolls for Packaging | YUANEN','EPE 铝箔保温卷材与裁切片材定制 | 远恩','Rollos EPE aluminizados para embalaje | YUANEN'),
 intro:t('Flexible EPE foam with a reflective facing, supplied as rolls or cut sheets for packaging conversion and secondary wrapping. Specify the roll width, length and foam thickness, or the required cut-sheet size, to develop the material around your packing process.','由柔性 EPE 泡棉与反射面层复合，可按卷或裁切片材供货，用于包装加工及外包装包覆。按打包流程提供幅宽、卷长、泡棉厚度，或所需片材尺寸，确定对应材料规格。','Espuma EPE flexible con cara reflectante, en rollos o láminas cortadas para transformación y envoltura secundaria. Indique ancho, longitud y espesor, o las medidas de corte, para adaptar el material al proceso de embalaje.'),
 material:t('Reflective facing + EPE foam; facing composition and laminate confirmed by sample','反射面层＋EPE 泡棉；面层成分及复合结构按样品确认','Cara reflectante + espuma EPE; composición y laminado según muestra'),
 use:t('Packaging conversion · cut-sheet supply · secondary wrapping','包装加工 · 裁切片材 · 外包装包覆','Transformación · láminas cortadas · envoltura secundaria'),
 group:'cold-chain',type:'foil',color:'#b8bab9',colourName:t('Silver / white','银色／白色','Plateado / blanco'),category:'materials',styles:[],uses:['thermal'],collection:'custom-designs-2026',
 image:'standardized/epe-foam-foil-insulation-rolls/01.webp',
 gallery:Array.from({length:6},(_,i)=>`standardized/epe-foam-foil-insulation-rolls/0${i+2}.webp`),
 considerations:[
 t('State roll width and length in metres, foam thickness in millimetres, and order quantity in rolls or sheets. Agree tolerances and any splice policy.','幅宽、卷长注明米，泡棉厚度注明毫米，数量明确为卷或片；分别约定公差与接头要求。','Indique ancho y longitud en metros, espesor en milímetros y cantidad en rollos o láminas. Acuerde tolerancias y empalmes.'),
 t('Confirm the reflective facing, EPE substrate, bonding and surface finish on the sample. This is foam laminate, not air-bubble wrap.','用样品确认反射面层、EPE 基材、复合及表面效果；泡棉复合卷材不能与气泡卷材混称。','Confirme cara reflectante, base EPE, unión y acabado con una muestra. Es un laminado de espuma, no plástico de burbujas.'),
 t('Validate the complete packaging and route. The material alone does not establish cooling duration, direct food contact approval or cushioning performance.','验证完整包装与实际路线；卷材本身不代表已确认保冷时长、直接食品接触合规或缓冲性能。','Valide el embalaje completo y la ruta. El material por sí solo no acredita duración térmica, contacto alimentario directo ni amortiguación.')],
 question:t('Is this the same as insulated bubble wrap?','这和保温气泡卷材一样吗？','¿Es lo mismo que el plástico de burbujas térmico?'),
 answer:t('No. EPE foam is a foam substrate; bubble wrap has separate formed air cells. Specify the required substrate and reflective facing separately. Silver appearance is not enough to identify the facing chemistry or confirm performance.','不一样。EPE 是泡棉基材，气泡卷材由独立成型的气泡结构组成。基材与反射面层需要分别确认，仅凭银色外观无法判断面层成分或性能。','No. EPE es una base de espuma; el plástico de burbujas tiene celdas de aire moldeadas. Especifique base y cara reflectante por separado. El aspecto plateado no identifica la composición ni acredita prestaciones.')
}
const labels=[
 t('Roll with unrolled silver face and white reverse','卷材展开的银色面与白色背面','Rollo desplegado con cara plateada y reverso blanco'),
 t('Curved sample showing both material faces','弯曲样片展示正反面','Muestra curvada con ambas caras'),
 t('Wound layers and cardboard core','卷绕层次与纸芯','Capas enrolladas y núcleo de cartón'),
 t('Stacked cut sheets and clean edges','裁切片材与切边','Láminas cortadas y bordes'),
 t('Sample thickness check','样片厚度检查','Comprobación del espesor de la muestra'),
 t('Trial wrapping around a closed outer carton','闭合外包装盒的试包覆','Prueba de envoltura de una caja cerrada'),
 t('Roll inside a protective shipping sleeve','保护袋中的卷材','Rollo en funda protectora')]
export const insulationRollImages:ProductImage[]=labels.map((label,i)=>({file:`standardized/epe-foam-foil-insulation-rolls/0${i+1}.webp`,kind:'visualization',label}))
