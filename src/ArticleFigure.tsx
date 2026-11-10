import type { Lang } from './data'
import type { EditorialFigure } from './editorial'
import { responsiveImage } from './responsive-images'

export default function ArticleFigure({ image, lang, eager = false }: { image: EditorialFigure; lang: Lang; eager?: boolean }) {
  return <figure className="editorial-image">
    <img src={`${import.meta.env.BASE_URL}${image.file}`} alt={image.alt[lang]} {...responsiveImage(image.file, '(max-width:650px) calc(100vw - 36px), (max-width:1150px) 75vw, 1000px')} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} />
    <figcaption>{image.caption[lang]}</figcaption>
  </figure>
}
