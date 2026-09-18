import { useId } from 'react'
import type { Bag, Lang } from './data'

export default function BagDrawing({bag, lang='en', dimensions=false}:{bag:Bag;lang?:Lang;dimensions?:boolean}) {
  const id = useId().replace(/:/g,'')
  const body = bag.type==='cooler' ? 'M102 160 270 150 297 177 293 278 104 287Z' : bag.type==='ice' ? 'M113 105Q188 99 268 105L267 289Q190 298 115 289Z' : 'M103 140 259 132 288 156 285 287 103 290Z'
  return <svg viewBox="0 0 400 360" className="bag-drawing" aria-hidden="true">
    <defs><linearGradient id={`${id}shade`} x1="0" x2="1" y2=".3"><stop stopColor={bag.color}/><stop offset=".6" stopColor={bag.color}/><stop offset="1" stopColor="#142b20" stopOpacity=".8"/></linearGradient><pattern id={`${id}texture`} width="3" height="3" patternUnits="userSpaceOnUse"><path d="M0 0H5M0 0V3" stroke="#fff" strokeWidth=".5" opacity=".2"/></pattern><filter id={`${id}shadow`}><feGaussianBlur stdDeviation="9"/></filter></defs>
    <ellipse cx="199" cy="301" rx="104" ry="12" fill="#1f3429" opacity=".15" filter={`url(#${id}shadow)`}/>
    <g transform="rotate(-6 200 190)">
      {bag.type!=='ice'&&<path d={bag.type==='cooler'?'M144 169V118Q144 69 205 85Q237 94 239 157':'M140 155V96Q140 50 181 50Q220 50 220 101V155'} fill="none" stroke={bag.color} strokeWidth="15"/>}
      <path d={body} fill={`url(#${id}shade)`}/><path d={body} fill={`url(#${id}texture)`}/>
      {bag.type!=='ice'&&<path d="M259 143 258 279 285 287M258 279 104 285" stroke="#172a20" opacity=".24" fill="none"/>}
      <path d={bag.type==='cooler'?'M105 177 271 165 293 179':'M113 140Q189 152 267 137M121 148V282M263 150V283'} fill="none" stroke="#fff" opacity=".24" strokeWidth="1.5" strokeDasharray="3 2"/>
      {bag.type!=='ice'&&<><path d={bag.type==='cooler'?'M139 172V127Q139 94 184 94Q222 94 222 131V170':'M139 148V102Q139 61 179 61Q219 61 219 105V148'} fill="none" stroke={bag.color} strokeWidth="13"/><path d={bag.type==='cooler'?'M139 172V127Q139 94 184 94Q222 94 222 131V170':'M139 148V102Q139 61 179 61Q219 61 219 105V148'} fill="none" stroke="#fff" opacity=".25" strokeWidth="1.3" strokeDasharray="3 2"/></>}
      <rect x="150" y="192" width="79" height="54" rx="1" fill="none" stroke="#fff" strokeOpacity=".5" strokeDasharray="3 4"/>
      <text x="190" y="220" textAnchor="middle" fill="#fff" opacity=".85" fontSize="10" letterSpacing="2" fontFamily="Arial">{lang==='es'?'SU LOGO':lang==='zh'?'您的标志':'YOUR LOGO'}</text>
    </g>
    {dimensions&&<g stroke="#647165" fill="#647165" fontFamily="Arial" fontSize="10"><path d="M78 135V293M73 135H83M73 293H83M115 326H283M115 321V331M283 321V331" fill="none"/><text x="56" y="216" stroke="none">{lang==='es'?'Al':'H'}</text><text x="193" y="344" stroke="none">{lang==='es'?'An':'W'}</text></g>}
  </svg>
}
