import type { Lang } from './data'
import Frame from './ExpandedGuideFrame'
import content from './revised-guides/bag-material-comparison'
export default function ExpandedComparisonGuide({lang}:{lang:Lang}){return <Frame lang={lang} slug="bag-material-comparison" content={content}></Frame>}
