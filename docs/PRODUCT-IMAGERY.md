# 保温冷链产品图片（2026-09-19）

## 最新：每款独立详情图（2026-09-19）

用户确认只有已生成的第一张白底主图可用，要求其余产品图用Packy重做并参考IPC工业产品展示。13张白底主图按Git逐字节核对均未改变；每款新生成装载场景、材质封边近景和袋型结构各1张，共39张1536×1024图片，WebP合计5,566,550字节。

成品：`public/images/products/packy/details-v2/`。完整最终提示词与原主图哈希：`docs/product-detail-prompts-v2.json`；成品哈希、审查与主图保留证据：`docs/product-detail-assets-v2.json`。使用imagegen内置CLI edit通过用户Packy调用gpt-image-2，输入为用户已认可主图。原始PNG与审阅拼图保存在忽略目录 `.verification/product-details-v2/`。凭证只从YUANEN_PACKY_IMAGE_KEY读取，没有写入项目。

图集现在每款4张：白底主图、装载应用、材质封边细节、袋型结构；旧目录图退出公开图集和Product schema，历史源文件保留作溯源。应用、材料、功能模块分别展示对应本款新图，撤下旧共用工艺图。图片保持无广告文字、无虚构尺寸/温控小时/认证。已逐张检查，带胶平口袋首版结构图误生成立体底褶，拒用后重新生成平放的平口结构。

新图均为AI效果示意，页面保留简洁说明，不作为实物照片或检测证据。规格、MOQ、交期、认证范围和工厂实拍沿用此前经核验资料。

## 历史图片批次

### 采购区块专用图标与配图

用户要求“该生成的 icon 和图片要生成”，沿用用户指定 Packy API，由 imagegen 技能内置 CLI generate-batch 调用 gpt-image-2。10 个任务全部成功；完整最终提示词在 `docs/buyer-visual-prompts.json`，无凭证。原始 PNG 在本地忽略目录 `.verification/buyer-visuals/`。

网页成品在 `public/images/ui/packy/`，10 张共 385,568 字节：

- process-select / specify / sample / produce / dispatch / support：6 张 160×160 WebP，深蓝和银灰等距立体图标，用于六步定制流程。页面显示 64–72px，保留原步骤名称和顺序；这些是概念图标，不代表特定设备型号。
- guide-materials / specification / order：3 张 1200×800 WebP，分别表现材料样片、尺寸规格确认、采购资料准备，替换指南之前重复使用的产品图；标明 AI 场景示意，不用作实物或检测证据。
- faq-support：600×400 WebP，包装与问答概念图，用于 FAQ 联系入口。

所有图片已检查主体、无文字与整体风格，尺寸和格式优化使用 Sharp。六张工艺图标与四张配图的本地审阅拼图为 `.verification/buyer-visuals/icon-contact.png`、`editorial-contact.png`。工厂实拍仍使用用户原素材。

本轮仅公开远恩 2026 目录的 13 个保温冷链产品。其余 22 个历史系列保留源数据，公开旧 URL 暂时跳转到相应语言的产品目录。

## Packy 图片

通过用户 Packy image 分组的 gpt-image-2 生成 20 张图片，并以 WebP 接入网站，总计约 2.42 MB。当前实际生图模型不是 Gemini。凭证只存用户环境变量 `YUANEN_PACKY_IMAGE_KEY`，不包含于代码、文档或部署。

13 张白底主图依据用户 PDF《压缩2026目录(1).pdf》的原产品图制作，保留袋型、提手、开口和封合结构，去除广告背景与印刷文字。前缀路径为 `public/images/products/packy/`，主图文件名为产品 slug 加 `-main.webp`。

| 产品 slug | PDF 提取图片编号 |
| --- | --- |
| self-adhesive-foil-bags | 402 |
| open-top-foil-bags | 447 |
| hand-finished-gusseted-foil-bags | 445 |
| machine-formed-gusseted-foil-bags | 452 |
| gusseted-foil-cake-bags | 453 |
| water-fill-ice-packs | 472 |
| self-absorbing-ice-packs | 473 |
| segmented-ice-sheets | 475 |
| self-seal-non-woven-delivery-bags | 499 |
| square-zipper-cake-cooler | 532 |
| upright-dessert-cooler | 535 |
| wide-base-meal-cooler | 536 |
| upright-grocery-cooler | 537 |

4 张细节图：foil-adhesive-detail（404）、cooler-lining-detail（538）、cooler-zipper-detail（495）、ice-pack-seal-detail（473）。最后一张展示填充冰袋封口，仅用于注水冰袋页；同系列图均标明细节和颜色以选定样品确认。

3 张页面图：cold-chain-range（银色铝箔袋组合）、delivery-application（外卖保温袋与餐盒）、bakery-application（蛋糕保温包与包装盒），分别用于首页和应用场景。均标明产品效果示意。

每张主图经视觉检查后接入。本批次最初将原目录图片保留在图集与 Product schema 中；现已按上述最新要求撤下，AI 效果图不冒充实物照片、测试证据或交付样品。旧内置生成图片未用于此次网站。

## 工厂素材

来源为用户提供的桌面“龙港新厂”和“台州工厂”文件夹。9 张素材压缩至 `public/images/factory/2026/`，没有生成人物、设备或厂房。首页、工厂页和定制页目前展示其中 8 张；taizhou-processing 暂作备用。原始路径映射保存在本地 `.verification/factory-manifest.json`。

longgang-quality 的展示名称为“生产操作”，不将操作设备的画面当作检测或认证证明。台州照片不用于推算额外厂区面积或产能。

## 商业资料边界

产品页包含应用、材料工艺、功能、数量分段、MOQ/价格、交期、尺寸和出口资料 8 个模块。9款产品的MOQ、样品费、交期及现货尺寸已按用户工作簿补充，关联工厂资料已独立展示。产品单价、4款保温包商业条款及整套温控测试仍需确认，不虚构数字、认证或保温时间。

参考 ipcpack.com 的工业制造商布局与信息层次，未套用其品牌、产品承诺、最低数量、检测认证或客户评价。
