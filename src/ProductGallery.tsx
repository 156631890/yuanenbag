import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { tx, type Bag, type Lang } from './data'
import { ProductMedia } from './Catalog'
import { productImages, imageSize, imageUrl, imageLabel } from './product-media'

export default function ProductGallery({bag,lang}:{bag:Bag;lang:Lang}) {
  const [selected,setSelected]=useState(0)
  const dialog=useRef<HTMLDialogElement>(null)
  const photos=productImages(bag)
  const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
  if(!photos.length)return <div className={`product-figure visual-${bag.type}`}><ProductMedia bag={bag} lang={lang} detail/></div>
  const current=photos[selected], size=imageSize(current.file)
  const alt=`${bag.short[lang]} — ${imageLabel(current.kind,lang)}`
  const move=(delta:number)=>setSelected(i=>(i+delta+photos.length)%photos.length)
  return <div className="product-gallery">
    <div className="gallery-stage">
      <button className="gallery-main" onClick={()=>dialog.current?.showModal()} aria-label={t('Enlarge product image','放大产品图片','Ampliar foto del producto')}>
        <img src={imageUrl(current.file)} alt={alt} width={size.width} height={size.height}/>
        <span className="gallery-enlarge"><Expand size={17}/>{t('View image','查看图片','Ver imagen')}</span>
      </button>
      <div className="gallery-status"><span>{imageLabel(current.kind,lang)}</span><span>{String(selected+1).padStart(2,'0')} / {String(photos.length).padStart(2,'0')}</span></div>
    </div>
    {photos.length>1&&<div className="gallery-thumbnails" aria-label={t('Product images','产品图集','Fotos del producto')}>{photos.map((photo,i)=><button key={photo.file} aria-pressed={selected===i} aria-label={`${t('View photo','查看图片','Ver foto')} ${i+1} — ${imageLabel(photo.kind,lang)}`} onClick={()=>setSelected(i)}><img src={imageUrl(photo.file)} alt="" loading="lazy" width="100" height="100"/><span>{i+1}</span></button>)}</div>}
    <p className="gallery-caption">{current.kind==='measurement'?t('Shared material sample measurement. The gauge reading is not a specification for this product; confirm ordered thickness, measurement method and tolerance.','共用材料样品测厚参考。仪表读数不代表此款产品规格；请确认订单厚度、测量方法与公差。','Medición de una muestra de material compartida. La lectura no es una especificación del producto; confirme espesor, método y tolerancia del pedido.'):current.kind==='photograph'?t('Original sample photograph. Display contents are not included; confirm dimensions, materials and colours with your approved sample.','原始样品实拍。展示道具不包含在产品内；尺寸、材质与颜色请以确认样品为准。','Fotografía original de muestra. El contenido no está incluido; confirme medidas, materiales y colores con la muestra aprobada.'):['visualization','application','material','structure'].includes(current.kind)?t('AI-assisted product visualization. Confirm construction, printing and colour with a physical sample.','AI 辅助制作的产品效果图；结构、印刷与颜色请以实物样品确认为准。','Visualización del producto asistida por IA. Confirme construcción, impresión y color con una muestra física.'):current.kind==='detail'?t('Catalog construction reference. Details may illustrate a related format; confirm your order specification with a sample.','目录结构参考，部分细节用于说明同系列工艺；具体款式请结合样品确认。','Referencia de construcción del catálogo. Algunos detalles ilustran formatos relacionados; confirme la muestra de su pedido.'):t('Catalog and design references help with selection. Final materials, dimensions and artwork are agreed during sampling.','目录与款式图片用于选型，最终材料、尺寸及印花在打样时确认。','Las imágenes de catálogo ayudan a elegir. Materiales, medidas e impresión finales se confirman con muestras.')}</p>
    <dialog ref={dialog} className="photo-dialog product-lightbox" aria-label={t('Product image viewer','产品图片查看器','Visor de imágenes del producto')} onKeyDown={e=>{if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}if(e.key==='ArrowRight'){e.preventDefault();move(1)}}}>
      <div className="lightbox-toolbar"><span>{bag.short[lang]}</span><button className="icon-button" aria-label={t('Close image','关闭图片','Cerrar imagen')} onClick={()=>dialog.current?.close()}><X/></button></div>
      <div className="lightbox-stage"><img src={imageUrl(current.file)} alt={alt} width={size.width} height={size.height}/></div>
      <div className="lightbox-controls"><button className="icon-button" aria-label={t('Previous image','上一张图片','Imagen anterior')} disabled={photos.length===1} onClick={()=>move(-1)}><ChevronLeft/></button><span>{imageLabel(current.kind,lang)} · {selected+1} / {photos.length}</span><button className="icon-button" aria-label={t('Next image','下一张图片','Imagen siguiente')} disabled={photos.length===1} onClick={()=>move(1)}><ChevronRight/></button></div>
    </dialog>
  </div>
}
