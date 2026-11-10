import type { Lang } from './data'
import Frame from './ExpandedGuideFrame'
import content from './revised-guides/custom-bag-order-checklist'
import OrderReference from './OrderReference'
export default function ExpandedOrderGuide({lang}:{lang:Lang}){return <Frame lang={lang} slug="custom-bag-order-checklist" content={content}><OrderReference lang={lang}/></Frame>}
