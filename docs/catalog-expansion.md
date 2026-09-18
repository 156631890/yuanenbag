# 产品目录扩充与 SEO / GEO 记录

日期：2026-09-18。项目：`C:\Users\Administrator\Desktop\yuanenbag`。

## 用户范围与实现

用户选择导入 TryingMePack 全部产品品类。按材质整理为 18 个分类，保留远恩既有 6 个产品系列 URL，新增 16 个系列页，共 22 个产品系列。不是复制参考站全部重复 SKU。

参考站目录：<https://www.tryingmepack.com/products.html>。用正常浏览器筛选并读取代表款详情，资料记录在 [product-sources.json](product-sources.json)。源站部分普通 HTTP 请求返回 403，浏览器正常；没有绕过安全提示或更改 TLS。

| 源分类 | 远恩主页面路径（英文；中文加 /zh，西语加 /es） |
|---|---|
| Non woven | /products/non-woven-bags/ |
| Cooler Bag | /products/zipper-insulated-bags/，关联原有其他保温袋与冰袋 |
| PP Woven | /products/pp-woven-bags/ |
| Rpet non woven | /products/rpet-non-woven-bags/ |
| Rpet polyester | /products/rpet-polyester-bags/ |
| Polyester | /products/polyester-bags/ |
| Cotton/Canvas | /products/cotton-canvas-bags/ |
| Reflective cloth | /products/reflective-bags/ |
| Felt | /products/felt-bags/ |
| Paper/Washable paper | /products/paper-washable-paper-bags/ |
| Glitter | /products/glitter-metallic-bags/ |
| Tyvek | /products/tyvek-bags/ |
| PVC/TPU | /products/pvc-tpu-bags/ |
| Mesh(Cotton/Polyester) | /products/mesh-bags/ |
| Jute | /products/jute-bags/ |
| Bamboo | /products/bamboo-fiber-bags/ |
| Leather | /products/leather-bags/ |
| Others | /products/other-custom-bags/ |

12 个袋型方向：手提、邮差/单肩、折叠、抽绳/背包、沙滩、保龄球/旅行、服装、拉链、圆角、超声波热合、篮式、其他。

16 个用途方向：购物、鞋袋、促销礼赠、保温保冷、沙滩垫、收纳箱、商超、化妆收纳、垃圾收集、西装防尘、反光配件、自行车配件、酒瓶、电脑平板、眼镜袋、其他。

袋型、用途为开发方向筛选，不是每种组合均已完成量产的承诺。组合筛选不生成额外可索引 URL；底部提供全部材质的真实页面链接。

## 来源质量与照片

- 保存了 16 张代表款参考图，约 1.2 MB，作为本地静态资源；保留原始水印与品牌信息，未去标。
- 列表、首页及详情明确标注参考款，详情说明不是远恩生产样品并链接来源。正式自有产品展示应后续替换为远恩确认的实拍图和样品规格。
- Leather 筛选返回标题为 `Reusable Metallic non woven bag` 的产品，未当作皮革证据；使用示意图，内容明确是定制评估。
- Others 材质没有产品结果，保留特殊材质开发入口；未捏造 SKU 或照片。
- Glitter 中的代表款实际为金属效果覆膜无纺布，分类命名为“闪光 / 金属效果”，正文区分不同表层工艺。
- 源站 Comesic 拼写修正为 Cosmetics；PVC 首页错误地指向 Reflective cloth 的链接未复用。
- 原站的尺寸、MOQ 等只记为来源观察，未当作远恩规格、起订量或供应承诺。远恩企业实力继续只用用户确认资料。

## 内容与搜索意图

页面面向采购选型和定制询价：材质结构、用途、三个具体审样要点、材质相关问答、相近系列链接、预选询价入口。新内容中英西三语完整覆盖，不使用英文占位。

新增三语 `/guides/bag-material-comparison/`：九个常见系列对照、GSM/旦数/厚度区别、环保表述核对、统一询价范围。全站现为 33 个内容路由 × 3 语言 = 99 页，加 3 个本地化 404，共 102 HTML。

2026-09-18 查询 Ubersuggest，美国（locId 2840）、英文；工具未提供设备维度：

- `custom canvas bags` SERP：数据更新于 2026-09-07，返回 Tote Bag Factory 批发页、Lands’ End 定制 tote 分类、Merchery 企业礼赠页等，支持产品分类及定制采购意图。没有据此推导远恩排名。
- `custom rpet bags` 返回平均月量 0、KD 12、无月度序列。工具零值不能证明无需求，未据此做流量承诺。
- `custom canvas bags` 和 `custom jute bags` 搜索量查询达到账户每日 3 次报告额度；未取得数字，未重试或升级套餐。
- 原有 non-woven/cooler 历史估算见 `keyword-data.json`。中文、西语关键词量及真实转化仍待验证，不把英语数据外推为当地市场数据。

## 技术 SEO / GEO

- 保留已有 URL，新增页输出完整预渲染 HTML；title、description、H1、FAQ 与可见内容一致。
- 每页独立 canonical，en / zh-CN / es / x-default 对应页链接；所有内容页均进入正式索引模式 sitemap。
- 产品总览新增 CollectionPage + ItemList，列出 22 个真实页面链接。系列页保持 WebPage、Breadcrumb、可见 FAQ；没有伪造 SKU Offer、库存、价格或评分。
- 默认 noindex 预览；正式索引模式可生成 99 URL。没有额外 AI 专属 schema、虚构引用或搜索效果保证。
- 明确分开材质一般知识与产品性能证明：RPET 认证、Tyvek 真伪、竹纤维加工、反光防护、食品接触、可洗/防水/降解等均要求具体材料与测试依据。

## 本轮验证

- TypeScript、客户端与 SSR 构建通过。
- `npm run verify` 在 SITE_INDEXABLE=true 与 false 均通过：102 HTML、唯一标题、H1、三语正文必要字段、canonical、四个 hreflang、JSON-LD、内部链接/图片、sitemap 与 404；检查 18/12/16 分类完整覆盖、有效标签及可抓取目录。
- 本地 HTTP：99 内容页 200，三语不存在路径 404。
- 1440px 中文桌面目录已目视检查；390px 西语目录、详情及新增指南无页面横向溢出（document width 375、viewport 390）。
- 棉帆布 + 手提 + 礼赠得到唯一对应系列；改为保温用途得到空结果；重置恢复 22 系列。
- 西语无重音查询 `poliester rpet` 得到唯一 RPET 涤纶系列；详情参考图加载成功。
- 产品进入西语询价自动选中 RPET 涤纶；本地草稿包含 Plegable、Compras、España、三语产品名称及未发送声明。未进行外部发送。
- 西语新增指南语言菜单切换到对应中文指南路径。浏览器日志检查无 error/warn。

## 效果观察与剩余业务输入

尚未正式部署，没有 GSC、分析或 AI 引用效果数据。正式域名上线后，分别观察收录、展示、点击、询盘，按材质页面与语言分组；不能把构建和 GitHub 同步等同流量增长。

后续需要公开邮箱 / WhatsApp、远恩确认的新增品类供应与样品规格、自有产品照片。当前询价为本地需求单，未配置自动收件后台。
