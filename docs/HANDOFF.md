# 最新检查点：关联工厂证书与报告资料页（2026-09-19）

- 用户提供微信接收文件夹 F，实际路径为 `D:/Users/Administrator/xwechat_files/wxid_4684926849812_be91/msg/attach/8bdb3a13cfec50b32f1f37df04741b98/2026-09/Rec/07c317a66e51077c/F`。8个PDF按SHA256去重为6份；原件只读。用户已明确确认创明工艺礼品公司和 QIANQUAN 纺织公司为“自有/关联工厂”；网页统一采用关联工厂表述，保留文件原主体。
- 起始main `765dd5eb47588037bfdfb1482b10a9d489aff7bd`，工作区干净。新增中英西 `/quality/`，工厂页、产品出口资料区及页脚入口。原件首页预览、类型筛选、可放大查看、报告编号邮件索取完整资料；完整PDF未放入public或Git。网站仍13款冷链产品，不为报告恢复其他商品类目。
- BSCI是创明指定场所的跟进审核，总评级C，工作时间D；载明到期日2026-09-29。3份CTT无纺布/聚酯/RPET袋报告只检测所列包装重金属；棉麻袋CTT只检测铅。OEKO-TEX 25.HCN.43344持证主体为SHAOXING KEQIAO QIANQUAN TEXTILE CO., LTD.，范围为指定全棉梭织面料，级别I/附录4，有效期至2027-06-30。不能扩展为整包认证、全部PPWR/CPSIA合规、GRS/RCS、食品接触或保温性能证明；无现有保温袋/冰袋成品对应证据。
- 来源、文件SHA256、范围及使用说明见 `docs/documentation-sources.json`；本地完整整理与原文页图在忽略目录 `.verification/certificates/`。已阅读13页BSCI文本并查看首页评级，四份CTT全部3页与OEKO-TEX证书页；未做发证机构在线独立验真。
- 新增 `documentation-data.ts`、`Quality.tsx`、`quality.css`，6张原文首页WebP。三语静态页增至78 HTML，保留noindex与原询价草稿机制。资料索取为mailto，已带编号与目的地/检测需求字段，未实际发送。
- build/verify通过78 HTML及新增资料来源/原主体/日期/范围/图片/索取链接检查。CUA检查1280英文及中文资料页、390西语证书与产品出口入口；筛选得到4份样品报告，原件预览可打开、按钮/Escape可关闭并返回触发点，无横向溢出，所查控制台无error/warn。发现并修复深底标题对比度后已复核。
- 发布沿用main自动部署授权；完成证据在 `.verification/documentation-release.json`，恢复时核对实际Git/Vercel状态。BSCI接近载明到期日，未来资料更新优先获取后续审核记录，不能在到期后沿用“当前有效”宣传。

---

# 历史检查点：导入真实 MOQ、打样、交期与规格（2026-09-19）

- 用户提供 `C:/Users/Administrator/Desktop/产品最低定制数量_打样与交期汇总.xlsx`，用于补齐网站商业资料。原工作簿只读；来源 SHA256、表页及导入规则记录在 `docs/commercial-sources.json`。起始 HEAD `86f213b27fb41407493fc288b07b5fe28869b177`，实际 checkout 为本项目 main；沿用同步 GitHub 与 Vercel 发布授权。
- 新增 `commercial-data.ts`、`stock-specifications.json`、`CommercialDetails.tsx` 与响应式样式。9款现有产品对应8组商业规格；140条源规格按相同尺寸合并厚度，展示89行。蛋糕袋与手工立体共用同组。4款保温包没有对应条款；双面自吸冰袋没有现有独立SKU，未擅自新增。
- 三语产品首屏、数量分段、MOQ/价格、打样/交期、尺寸及FAQ同步。现货/定制/印刷门槛分别说明；保留3.8mm特例。冰袋专版印刷单款100,000个起，仅现有尺寸；无纺布丝印100、数码常规200/特大1000、专版5000个起。尺寸单位cm，带胶袋另加4cm折口；无纺布显示五档尺寸名称。
- 只导入人民币样品费用，没有将其作为产品单价或schema offers。生产交期不含运输，不擅自写工作日；起算、库存与具体出货日期按订单确认。无新增承重/温度测试/食品级认证声明。产品单价、阶梯价格及出口证明仍需资料。
- 本地build/verify通过75 HTML，新增9款三语商业数据、140源行/89显示行、冰袋限制、可见FAQ与schema一致性检查。独立对照提取的工作簿，140条尺寸和厚度通过。CUA检查1280中文带胶订购卡、英文无纺布交期与5档尺寸、390西语冰袋数量/尺寸与询价预选；无横向溢出，所查控制台无error/warn。
- 本轮推送main触发既有Vercel自动部署。最新提交与远端READY以实际Git/Vercel核验；发布证据写入忽略的 `.verification/commercial-release.json`，不能把本段发布计划当上线完成。保持 `SITE_INDEXABLE=false`、13款冷链目录和询价草稿机制。

---

# 历史检查点：生成采购区块专用视觉（2026-09-19）

- 用户要求生成需要的 icon 和配图；起始 HEAD f2b1243b41bfc98cac5ea4a94a029cf65e5840e0，main 干净；沿用 Packy 生图及 GitHub/Vercel 发布授权。
- Packy gpt-image-2 实际生成10张：6流程图标、3指南封面、1 FAQ 插图。全部接入 public/images/ui/packy，共385,568字节。完整提示词 docs/buyer-visual-prompts.json；来源/使用说明 docs/PRODUCT-IMAGERY.md。凭证仍只在用户环境变量 YUANEN_PACKY_IMAGE_KEY。
- 保留真实工厂素材；指南新图标明 AI 场景示意，不添加未经确认的产品或商业事实。桌面检查10张全部加载、裁切合适；手机和部署证据见 .verification/buyer-visuals/release.json。
- 本轮沿用三语、75 HTML、noindex 和询价草稿机制。发布时推送main，恢复时读取实际Git/Vercel状态。

---

# 历史检查点：流程、指南与 FAQ 视觉优化（2026-09-19）

- 用户点名优化首页 From Specification to Delivery、Packaging Materials & Buying Guides、Manufacturer & Product FAQ。起始 HEAD c72a73e5781cfdaded2f3bd2c23fb5349373192c，main，工作区干净。
- 新增 BuyerResources.tsx 和 buyer-resources.css：流程为工厂实景加六步说明；指南为重点文章加两篇辅助图文；FAQ 为带问题序号的原生单项展开面板，包含键盘焦点与联系入口。复用已上线的工厂/Packy素材，没有额外生图。产品内容与业务数据未变。
- 同步三语首页、定制页、指南列表、产品详情 FAQ。页面锚点 manufacturing-process、buying-guides、manufacturer-faq 可直达三个首页区块。
- build/verify 通过75 HTML。浏览器检查1280桌面、390西语手机、768中文定制页；无横向溢出。验证FAQ点击/键盘Enter与单项展开、指南跳转和联系入口；所查控制台无error/warn，产品详情资源无断图。工具定位错误已修正，不是页面错误。
- 将沿用用户发布授权推送main触发Vercel，最新线上核验记录 .verification/buyer-resources-release.json。SITE_INDEXABLE=false及询价草稿机制保持。恢复时查询实际部署，不把本段计划当上线证据。

---

# 历史检查点：保温冷链聚焦与 Packy 配图（2026-09-19）

- 当前任务 01a0b39d-9359-76d2-bdad-39aaa199da0d；路径 C:/Users/Administrator/Desktop/yuanenbag，main；开始 HEAD 3b37644f33bd5e8b9b3de76b661cade351590d0e。本轮提交后推送既有 GitHub/Vercel 自动部署，最终线上证据保存在 .verification/cold-chain-release.json；恢复时核对实际 HEAD 与 Vercel 状态。
- 最新授权：只做保温冷链；参考 ipcpack.com 布局；使用用户 Packy 生成产品与 UI 图；使用桌面龙港新厂、台州工厂素材。无需再要求登录或更新 Packy 密钥。
- Packy image2 令牌现可用，image 分组，实际 gpt-image-2；20 张生图成功并接入（13 白底主图、4 细节、3 页面配图）。环境变量 YUANEN_PACKY_IMAGE_KEY；旧 Gemini 分组没有生图模型，不要再次误报整个 Packy 不可用。来源与限制见 docs/PRODUCT-IMAGERY.md。
- 仅展示 13 个远恩目录核心产品，旧 22 系列源数据保留，旧三语 URL 307 至对应产品中心。首页深蓝左右分栏，目录四系列筛选/搜索，图集缩略图、放大、键盘切换；产品详情包含用户指定的 8 模块。三语同步。
- 用户工厂素材导入 9 张，目前展示 8 张；台州加工备用。产品 AI 图标明效果示意，目录原图保留；没有生成厂房照片或虚构认证。
- 最终 build/verify 通过，72 内容页加 3 个404，共75 HTML。CUA 检查英文桌面首页、中文详情材料锚点、图库缩略图/下一张/键盘/Escape、工厂图放大、定制流程与应用图片；390px 西语首页/目录/详情/价格与询价页面无横向溢出，产品自动预选与邮箱/WhatsApp正确。所查控制台无 error/warn。修正应用及定制配图高度后已复核。
- 保留 info@yuanenbag.com、WhatsApp +86 189 6971 7999 和原目录两电话。询价仍仅草稿/下载/mailto，不是服务端自动投递。未实际发送邮件或 WhatsApp。
- 尚缺真实MOQ、阶梯价/币种、样品及大货交期、可公开的出口资料；页面显示按订单确认及文件清单。SITE_INDEXABLE=false 保持，没有开启搜索收录或验证流量增长。后续优先补齐真实商业资料、询盘投递与上线索引策略。

---

# 历史检查点：域名、免费邮箱与 WhatsApp（2026-09-19）

- 本轮路径 C:/Users/Administrator/Desktop/yuanenbag，main；开始 HEAD 97589cad3a9b1f2f405bba60efa9a158068e06f0，工作区干净。任务 01a0b39d-9359-76d2-bdad-39aaa199da0d。
- 阿里云网站 DNS：@ A 216.150.1.1；www CNAME 13f8666bb2aa1188.vercel-dns-016.com；TTL 600。保留全部 8 条原邮件记录。Vercel 两域名 Valid Configuration，主域名 Production，www 308 跳转主域名，三语 HTTPS 已验证。
- 复用原有阿里企业邮箱免费版；后台有效期至 2031-02-28。用户亲自设置密码并创建 info@yuanenbag.com；本轮员工列表显示正常，名称 YUANEN 远恩询盘，容量 5GB。未读取或保存密码，未实测邮件收发。
- 用户提供 WhatsApp / 电话 18969717999，按中国大陆 +86 接入。src/data.ts 提供确认后的公开默认邮箱及 WhatsApp，可由 VITE_CONTACT_EMAIL / VITE_WHATSAPP 覆盖；号码加在首位并保留 PDF 两个电话。三语页脚、询价、隐私联系入口及 Organization email/telephone 同步。
- 本地 npm run build 与 npm run verify 通过（141 HTML）；英中西 contact 产物的 mailto、wa.me、tel 及结构化电话均核验。main 推送触发既有 Vercel 自动部署；远端结果以实际最新部署及 .verification/domain-mail-setup.json 为准。
- 询价仍是浏览器草稿/下载/邮件应用入口，没有服务器自动投递；WhatsApp 仅打开聊天链接，未发送消息，也未验证号码注册状态。SITE_INDEXABLE=false 仍保持，未报告搜索收录或 AI 引用。

---

# 最新检查点：2026 产品目录与全站视觉升级（2026-09-19）

- 当前目标：用户要求补齐其 PDF 产品并改善网站不够大气的问题。目录为 `C:/Users/Administrator/Desktop/压缩2026目录(1).pdf`，10 个跨页；导入产品来源集中在 PDF 第 6–10 张。
- 实际项目 `C:/Users/Administrator/Desktop/yuanenbag`，main；本轮起始 HEAD b24c9ef，工作区干净。用户既有 GitHub/Vercel 发布授权继续适用；本轮完成后推送 main 自动发布，最终部署状态以 Vercel 查询和线上内容为准。
- 新增 13 个具体款式与 36 张 WebP 图片（997,226 bytes），保留 22 个系列，共 35 个产品/系列、138 内容页与 3 个本地化 404。印花变化收入图集，不冒充新 SKU。数据在 src/yuanen-catalog.ts，来源映射 docs/2026-catalog-sources.json。
- 首页改成全宽深蓝品牌版面、目录场景图、四大核心系列、精选产品、工厂与采购内容；同步更新全站间距/标题/产品卡/目录/详情/手机版式。图库支持缩略图和原图弹窗，远恩目录与 TryingMePack 参考明确区分。产品结构化数据只用于用户目录款，不虚构 offers/ratings。
- PDF 中部分图片带 AI 生成水印，保持原标记；不将其描述为工厂实拍或验证样品。保留原已确认 28,800㎡、日产300万+口径，不采用 PDF 冲突的500万口径。未补写无法确认的价格、MOQ、时效、认证或承重。
- PDF 封底电话 13968744777 / 13616655488 已核对，加入可点击电话入口。邮箱与 WhatsApp 仍未提供，表单仍仅生成/下载草稿。
- 验证：npm run build 和 npm run verify 通过，141 HTML（标题、H1、三语/hreflang、schema、本地资源/链接、404、sitemap）。新增目录来源/图片路径/Product schema检查。CUA 检查中英文桌面、西语手机、目录13/35筛选、搜索冰袋2/35、重置35/35、图集切换/放大、询价产品预选；修复较长西语产品选项导致的手机询价页溢出。检查控制台没有 error/warn。
- 本地预览 http://127.0.0.1:4173/（恢复时检查实际进程）。SITE_INDEXABLE=false；canonical 仍为 yuanenbag.com，未修改 DNS。尚未验证搜索收录、排名或 AI 引用。

---

# 最新部署检查点（2026-09-19）

- 用户明确授权通过浏览器部署其提供的 Vercel 导入链接。已使用 Chrome 现有登录态导入 GitHub `156631890/yuanenbag`，项目 `yuanenbag`，团队 `stevens-projects-08c9c5b0`。
- 公开地址：https://yuanenbag.vercel.app/；管理页：https://vercel.com/stevens-projects-08c9c5b0/yuanenbag 。
- 首次部署 `dpl_6p84S6y4w3posovDTtGbDy3CZdrQ`，Vercel production / READY；代码提交 `a64564cb1593c76da03ce4d440de3b41857b7dee`；构建约 11 秒。部署 URL `yuanenbag-r4ryrf8zx-stevens-projects-08c9c5b0.vercel.app`。
- Vercel 项目 ID `prj_lRt4cwiF53Y4LE86D13GVmEh2GT7`；team/org ID `team_f4eZTnVOClO7jVJlmtJJU0Us`。本地 `.vercel/project.json` 已保存关联且被忽略。
- 新增 vercel.json：npm ci；npm run build && npm run verify；dist；filesystem 优先；中/西/英 404 status 404。远端构建及本地 102 HTML 检查通过。
- 环境变量仅 SITE_BASE_PATH=/、SITE_INDEXABLE=false；无公开联系方式配置。未修改 DNS、未绑定 yuanenbag.com、未开启搜索索引。Vercel production 表示部署环境，不等于正式自定义域名接入。
- 线上 HTTP 检查：英/中/西首页、中文目录、西语产品和指南、带产品参数的询价为 200；三语不存在路径正确返回 404 与对应语言内容。浏览器验证棉帆布筛选得到 1/22，点击详情询价自动选中 cotton-canvas-bags；所查控制台无 error/warn。
- 已连接 GitHub main 自动部署。本记录同步时可能产生后续文档部署；恢复时核对 Vercel 最新 READY 与实际 commit，不重复导入项目。
- Vercel get_project 连接器此次 schema 出现 idOrName/projectId 不一致，使用 get_deployment 和浏览器取证成功。无需因该工具错误重复创建部署。

---

# 最新检查点：全产品品类扩充

更新时间：2026-09-18，Asia/Shanghai。任务 `01a0b39d-9359-76d2-bdad-39aaa199da0d`。

- 实际目录 `C:\Users\Administrator\Desktop\yuanenbag`，分支 `main`；开始本轮 HEAD `c352c67452415be4310cd9e291158a38b978e1cb`，当时工作区干净。最终提交以实际 Git 核对，不使用本文件推断现状。
- 用户最新要求：参考 TryingMePack 产品，按 SEO/GEO 优化专业度与流量；已明确选择全部产品品类，授权继续本地实现及同步既有 GitHub 仓库。
- 已实现全部 18 材质分类、12 袋型方向、16 用途方向；22 产品系列（原有 6 + 新增 16），新增材质对比指南。33 内容路由 × 3 语言 = 99 内容页，另 3 个本地化 404。
- 新增 `src/catalog-data.ts`、`src/Catalog.tsx`、16 张来源参考图；详情专属 FAQ、选材要点、相关产品、三语询价袋型/用途与预选，目录 CollectionPage/ItemList、完整 SSR 和内链。
- 16 张参考图来自 TryingMePack，保留原标识并显示来源，不宣称为远恩实拍或客户。Leather 源站错归类、Others 无结果，使用示意图与定制评估内容。证据见 `docs/product-sources.json`，详细说明见 `docs/catalog-expansion.md`。
- 构建及验证在正式索引/预览两模式均通过，最终 dist 恢复 noindex。102 HTML、99 页面 HTTP 200、三语 404 均通过。
- 浏览器已检查中文桌面、西语手机目录、详情、指南；组合筛选、空结果与重置、西语忽略重音搜索、对应页语言切换、产品预选及包含新增字段的询价草稿均通过。未测试或发送实际邮件。
- 本地预览仍在 http://127.0.0.1:4173/，脚本 `scripts/serve.mjs`。进程实际存活且本轮 HTTP 通过；恢复时再查，不依赖旧 PID。内置浏览器最终保留中文目录。
- 未正式部署或改 DNS；未验证收录、流量增长、AI 引用。继续缺公开邮箱/WhatsApp、远恩新增品类确认资料与自有实拍。
- Ubersuggest 本轮 canvas/jute 搜索量遇到每日报告限额，未重试；已取得 canvas 美国英语 SERP 和 RPET 词估算。无需因此阻塞实现，后续有额度再补数据。
- 本轮完成代码后同步 GitHub，提交/远端结果见实际 `git status -sb`、`git rev-parse HEAD` 与 `git ls-remote origin refs/heads/main`。下一步若继续产品完善，优先替换自有产品照片与确认规格，而非复制更多同质 SKU。

---

# 远恩项目续做记录

## 最新进度：加入西班牙语

更新时间：2026-09-18 16:59（Asia/Shanghai），仍在同一任务与 `main` 工作树。下方首版记录保留为历史，当前状态以本节及实际 Git HEAD 为准。

- 用户要求“多一个西语语种”，已完整加入 `/es/` 下的 16 页；站点现在有中、英、西三语共 48 页，以及三语 404。
- 页头改为三语菜单，语言切换保留当前页面路径。西语覆盖产品、工厂、应用、定制、指南、隐私、询价表与文本下载；公司注册中文名及品牌名保留原文。
- 翻译集中在 `src/es.ts`。缺失翻译会让构建失败；新增动态文案可通过 `tx` 第三个参数显式提供西语。西语搜索包含西语产品名称并忽略重音符号。
- 每页 canonical 保持自身语言 URL；hreflang 包含 en、zh-CN、es 和 x-default。JSON-LD、HTML lang、Open Graph 文案也匹配语言。正式索引模式 sitemap 共 48 URL；最终本地仍为 noindex 预览。
- 构建与 `npm run verify` 在预览及索引模式均通过，检查 51 个 HTML 的语言、独立标题、canonical、四个对应页语言链接、结构化数据与内部资源。
- HTTP 检查 48 页均为 200，中英西未知路径分别返回对应语言的 404。
- 浏览器检查：1280px 西语桌面首页、390px 手机产品目录无横向溢出；西语产品页切到同一中文产品页；输入 `termicas con cremallera` 返回唯一对应产品。
- Chrome 已验证西语产品自动预选、表单生成及下载，测试文件 `C:\Users\Administrator\Downloads\yuanen-enquiry-es.txt`（528 字节，2026-09-18 16:58），确认重音字符和未发送声明完整。
- 预览已重启，启动时 PID 30564，仍为 <http://127.0.0.1:4173/>，西语入口 <http://127.0.0.1:4173/es/>。恢复时重新核对进程。
- 本轮将代码和本记录一并提交同步 GitHub；公开联系方式、真实产品照片及正式部署仍沿用下方待办。

## 首版记录（历史）

更新时间：2026-09-18 16:43（Asia/Shanghai）。

## 目标、入口与授权

- 当前任务：`01a0b39d-9359-76d2-bdad-39aaa199da0d`；原建设任务：`01a0b358-2e66-7ed3-92ce-edae0aa69112`。
- 项目目录：`C:\Users\Administrator\Desktop\yuanenbag`，唯一工作树，分支 `main`。
- 实现提交：`a75d0b446aee0620058b666516e396028b9309fa`。本交接文档随后单独提交；恢复时重新查看当前 HEAD、工作区和远端状态。
- 用户授权建设本地独立站并同步 <https://github.com/156631890/yuanenbag>。最新要求为参考 IPC 的专业 B2B 视觉，强调生产实力，不走零售风格。
- 用户已授权使用六张本地工厂海报并确认三地 28,800㎡、日产 300 万+口径。官网域名是 `yuanenbag.com`，对外邮箱和 WhatsApp 未提供。
- 本轮未执行正式网站部署或 DNS 修改。

## 本轮已完成

- 恢复被中断的 React/Vite 项目；原项目没有任何 Git 提交，保留了已有代码、图片和调研文件。
- 补齐缺失的样式，统一深蓝白色制造业版式；首页直陈产品和制造商定位，接入真实工厂照片。
- 完成英文与中文各 16 页的静态输出，包含 6 类产品、应用场景、工厂、定制、2 篇指南、询价、隐私等。
- 独立标题、描述、canonical、双向 hreflang、Organization/WebPage/Breadcrumb/FAQ/Article 结构化数据；没有虚构价格和评价。
- 预览默认 noindex；正式索引模式可生成 32 URL 的 sitemap；静态预览服务器支持正确的 301 与 HTTP 404。
- 产品筛选、搜索、空结果重置、产品预选询价、必填校验、草稿生成下载、图集放大、双语切换和手机菜单已实现。
- README 记录本地运行、配置与静态发布方式。

## 验证证据

- `npm run build` 通过（TypeScript、Vite 客户端、SSR、32 页预渲染）。
- `npm run verify` 在 `SITE_INDEXABLE=true` 与默认 false 两种模式均通过，检查 33 个 HTML 的标题、H1、语言、canonical、hreflang、JSON-LD、本地链接与资源、sitemap 及 404。最终本地产物恢复为默认 noindex 预览。
- 本地 HTTP 检查：32 页均为 200，未知路径为 404，目录尾斜杠 301 保留查询参数。
- CUA 内置浏览器：1440px 桌面首页、390px 手机工厂/产品/询价布局已查看；检查的手机产品页宽度 375、viewport 390，无横向溢出；检查过的控制台未返回 error/warn。
- 浏览器交互：冷链筛选得到 2 类，未匹配搜索返回空结果，重置恢复 6 类；产品详情进入询价预选正确；空表单触发必填提示；生成草稿内容正确；图片弹窗与中英文切换通过；手机菜单询价入口通过。
- 内置浏览器未返回下载事件，转用 Chrome 后已确认文本下载成功。测试文件：`C:\Users\Administrator\Downloads\yuanen-enquiry.txt`（409 字节，2026-09-18 16:41），含测试采购者、产品、数量、目的地及明确的未发送声明。
- agent-browser CLI 本轮启动守护进程失败，未修改系统配置；使用已有 CUA 浏览器完成验证。

## 本地运行状态与下一步

- 本轮预览启动于 <http://127.0.0.1:4173/>，入口 `scripts/serve.mjs`，启动时 PID 25840。恢复时核对端口和进程，不能直接信任旧 PID。日志位于忽略目录 `.verification/`。
- 本轮同步 GitHub 在实现与交接提交之后执行；以 `git status -sb`、`git rev-parse HEAD` 与 `git ls-remote origin refs/heads/main` 核对是否一致。
- 下一项业务资料是正式询盘邮箱、WhatsApp，以及六类产品的实拍/已确认规格。收到资料后设置公开配置或接入经用户确认的收件服务，并完成真实投递验证。
- 产品目前为明确标注的袋型示意图；工厂为用户资料中的实拍。原先生成的概念图仍保留在仓库，但页面未使用。
- 尚未验证正式域名部署、邮件投递、搜索收录、排名或 AI 引用。不要把本地构建通过与 GitHub 同步称为官网上线。
