# 搜索与 AI 可见性检查

检查日期：2026-09-19。网站：https://yuanenbag.com/ 。当前只发布13款保温冷链产品，中英西三语共75个内容页。

## 已上线的技术基础

- Production 启用 `SITE_INDEXABLE=true`，内容页 `index, follow`；Vercel Preview 强制 noindex，3个404文档保持 noindex。
- sitemap.xml 列出75个正式 canonical URL，robots.txt提供网站地图地址。正式域名首页、中文产品页、西语资料页200；不存在路径404。
- 独立标题、描述、H1、canonical、en/zh-CN/es/x-default hreflang与静态正文。产品、FAQ、面包屑、指南及资料页有对应结构化数据。
- Google Search Console 和 Bing Webmaster Tools 均已通过 HTML 标签验证，资源为 `https://yuanenbag.com/`，并非DNS网域资源。
- Google已成功处理地图并发现75页。发现页面不等于已收录，搜索数据仍待处理。
- Bing地图处理Success，发现75页。首页Live URL显示可以索引，收录请求显示Indexing requested。旧索引状态的DNS失败未在实时测试中复现，Google和Cloudflare公开DNS均解析正常。
- Google首页与英文产品中心收录申请已受理并进入优先抓取队列；当前尚未确认实际收录。

## GEO现状与测量口径

产品页已有应用、材质工艺、功能、数量分段、MOQ、样品费用、交期、尺寸和出口资料入口。9款产品商业条款来自用户工作簿；4款保温包条款仍需按订单确认。样品价不是产品成交价，不能增加虚假Product offers。

资料库保留文件原主体与适用范围，用户确认属自有/关联工厂。BSCI、材料测试和面料证书均不能扩展为所有现有成品的认证或温控性能证明。

2026-09-19读取Bing AI Performance，区间2026-06-19至2026-09-18，显示总引用0、平均被引用页面0，查询表暂无数据。来源只覆盖页面注明的Microsoft Copilots and Partners抽样报告；新接入资源数据可能延迟。这不是全网AI引用统计。ChatGPT、Gemini等独立采购问答测试尚未执行。

以下是后续固定观察问题，不是已验证搜索量或排名的关键词。保持原问题重复测量，分别记录品牌提及和本站URL引用：

| 语言 | 采购问题 | 主要答案页 |
| --- | --- | --- |
| EN | What should I specify when sourcing insulated bags for food delivery? | /guides/insulated-bag-materials/ |
| EN | What is the minimum order for custom printed water-fill ice packs? | /products/water-fill-ice-packs/ |
| EN | How do foil laminates and EPE fit into a cold-chain packaging system? | /guides/bag-material-comparison/ |
| EN | Which factory audit and material test documents can YUANEN provide? | /quality/ |
| ES | ¿Qué debo especificar al comprar bolsas térmicas para reparto de alimentos? | /es/guides/insulated-bag-materials/ |
| ES | ¿Cuál es el pedido mínimo de bolsas de hielo rellenables con impresión personalizada? | /es/products/water-fill-ice-packs/ |
| ES | ¿Qué informes de materiales y auditorías puede proporcionar YUANEN? | /es/quality/ |

每次记录产品/模型、是否联网、日期、语言、地区是否可控、原始问题、品牌是否提及、引用URL及限制；未执行写“待测”，不要填0替代。AI引用和搜索排名均不可保证。无需把llms.txt当作收录前提。

## 暂缓及资料缺口

- 用户最新决定：先完成收录，访问统计暂缓。Vercel Analytics未启用，未安装GA4，无新增统计费用或追踪脚本。
- Vercel Pro Analytics按量收费，官方文档为$0.03/千事件。团队Spend Management不能提供单个网站统计$1硬上限，且暂停会影响全团队生产站点，所以没有擅自启用或改团队限额。
- 询价仍为浏览器草稿、下载与mailto。SMTP凭证未配置，不声称网站已经在线投递或实测入箱。
- 下一轮优先按搜索平台实际收录/查询数据细化英语、西语采购词；再补4款保温包商业条款与整套装载温控测试。不能根据旧全类目研究扩回已下线类目。

参考费用文档：https://vercel.com/docs/analytics/limits-and-pricing 、https://vercel.com/docs/spend-management 。
