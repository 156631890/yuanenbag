import {ArrowUpRight,FileText} from 'lucide-react'
import {tx,type Lang} from './data'
import {href} from './routes'
export default function DocumentationLink({lang}:{lang:Lang}) {
 const t=(en:string,zh:string,es:string)=>tx(en,zh,es)[lang]
 return <div className="documentation-link"><FileText size={29} strokeWidth={1.4}/><div><span className="eyebrow">{t('QUALITY & DOCUMENTATION','质量与资料','CALIDAD Y DOCUMENTACIÓN')}</span><h3>{t('Review the records behind the specification.','按具体范围，查阅审核与检测资料。','Consulte los documentos de la especificación.')}</h3><p>{t('Explore affiliated-factory audits and material sample reports, with the named holder and scope. Confirm the match to your cold-chain order.','查看关联工厂审核与材料样品报告，了解文件主体和适用范围，并核对与冷链订单的对应关系。','Consulte auditorías de fábricas vinculadas e informes de muestras, con titular y alcance. Confirme su correspondencia con el pedido térmico.')}</p></div><a className="text-link" href={href('/quality/',lang)}>{t('View documents','查看资料','Ver documentos')}<ArrowUpRight size={18}/></a></div>
}

