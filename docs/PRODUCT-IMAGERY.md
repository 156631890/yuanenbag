# 保温冷链产品图片（2026-09-19）

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

每张主图经视觉检查后接入。原目录图片仍保留在图集与 Product schema 中，AI 效果图不冒充实物照片、测试证据或交付样品。旧内置生成图片未用于此次网站。

## 工厂素材

来源为用户提供的桌面“龙港新厂”和“台州工厂”文件夹。9 张素材压缩至 `public/images/factory/2026/`，没有生成人物、设备或厂房。首页、工厂页和定制页目前展示其中 8 张；taizhou-processing 暂作备用。原始路径映射保存在本地 `.verification/factory-manifest.json`。

longgang-quality 的展示名称为“生产操作”，不将操作设备的画面当作检测或认证证明。台州照片不用于推算额外厂区面积或产能。

## 商业资料边界

产品页包含应用、材料工艺、功能、数量分段、MOQ/价格、交期、尺寸和出口资料 8 个模块。尚未取得真实报价、最低数量、交期或出口证书，相关内容显示按订单确认和所需资料范围，不虚构数字、认证或保温时间。

参考 ipcpack.com 的工业制造商布局与信息层次，未套用其品牌、产品承诺、最低数量、检测认证或客户评价。
