import { useRef, useState } from 'react'
import { Expand, X } from 'lucide-react'
import { tx, type Bag, type Lang } from './data'
import { ProductMedia } from './Catalog'

export default function ProductGallery({bag,lang}:{bag:Bag;lang:Lang}) {
  const [selected,setSelected]=useState(0)
  const dialog=useRef<HTMLDialogElement>(null)
  const photos=bag.image?[bag.image,...(bag.gallery||[])]:[]
  const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
  if(!photos.length)return <div className={`product-figure visual-${bag.type}`}><ProductMedia bag={bag} lang={lang} detail/></div>
  const alt=`${bag.short[lang]} — ${selected+1} / ${photos.length}`
  return <div className="product-gallery">
    <button className="gallery-main" onClick={()=>dialog.current?.showModal()} aria-label={t('Enlarge product image','放大产品图片','Ampliar foto del producto')}>
      <img src={`${import.meta.env.BASE_URL}images/products/${photos[selected]}`} alt={alt} width="800" height="800"/>
      <span className="gallery-source">{bag.collection?t('YUANEN 2026 COLLECTION','远恩 2026 产品目录','COLECCIÓN YUANEN 2026'):t('REFERENCE DESIGN','参考款图片','DISEÑO DE REFERENCIA')}</span><Expand size={20}/>
    </button>
    {photos.length>1&&<div className="gallery-thumbnails" aria-label={t('Product images','产品图集','Fotos del producto')}>{photos.map((photo,i)=><button key={photo} aria-pressed={selected===i} aria-label={`${t('View photo','查看图片','Ver foto')} ${i+1}`} onClick={()=>setSelected(i)}><img src={`${import.meta.env.BASE_URL}images/products/${photo}`} alt={`${bag.short[lang]} ${i+1}`} loading="lazy" width="100" height="100"/></button>)}</div>}
    <p className="gallery-caption">{t('Product views, print variations and construction details. Final artwork and specifications are confirmed with your sample.','产品场景、印花方案与结构细节。最终图案及规格以确认样品为准。','Vistas, variantes de impresión y detalles de construcción. Diseño y especificaciones finales según muestra aprobada.')}</p>
    <dialog ref={dialog} className="photo-dialog product-lightbox"><button className="icon-button close-dialog" aria-label={t('Close image','关闭图片','Cerrar imagen')} onClick={()=>dialog.current?.close()}><X/></button><img src={`${import.meta.env.BASE_URL}images/products/${photos[selected]}`} alt={alt}/><p>{alt}</p></dialog>
  </div>
}
