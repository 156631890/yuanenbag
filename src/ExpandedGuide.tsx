import type { Lang } from './data'
import Frame from './ExpandedGuideFrame'
import content from './revised-guides/materials'
export default function ExpandedGuide({lang}:{lang:Lang}){return <Frame lang={lang} slug="insulated-bag-materials" content={content}/> }
