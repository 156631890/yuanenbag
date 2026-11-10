import type { Lang } from './data'
import Frame from './ExpandedGuideFrame'
import content from './revised-guides/ice-pack-selection'
export default function ExpandedIceGuide({lang}:{lang:Lang}){return <Frame lang={lang} slug="ice-pack-selection" content={content}></Frame>}
