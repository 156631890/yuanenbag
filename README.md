# YUANEN · 远恩保温包装

温州远恩工艺品有限公司的中英西三语 B2B 包装展示与询价网站。使用 React、TypeScript 和 Vite，构建时输出 48 个独立 HTML 页面，以及三语 404、robots.txt 和 sitemap.xml。

## 本地运行

建议使用 Node.js 22.12+（Vite 8 的运行环境要求）。

```powershell
npm ci
npm run build
npm run verify
npm run preview
```

打开 <http://127.0.0.1:4173/>；中文入口 <http://127.0.0.1:4173/zh/>；西班牙语入口 <http://127.0.0.1:4173/es/>。开发热更新使用 `npm run dev`，端口 5173。验收以构建后的预览为准，预览服务器支持目录重定向与真正的 HTTP 404 状态。

## 现有页面与业务行为

- 六类产品：拉链保温包、魔术贴保温包、无纺布手提袋、铝箔保温袋、珍珠棉铝箔保温袋、冰袋。
- 独立产品页、应用场景、定制流程、工厂介绍、两篇采购指南、询价及隐私说明，均有英文、中文和西班牙语 URL。页头可在对应页面切换语言，西语产品搜索支持忽略重音符号。
- 工厂实拍来自用户提供的六张企业资料海报，页面用 SVG viewBox 展示原始照片区域。
- 产能按用户确认的新资料：温州 20,000㎡、山东 5,000㎡、湖南 3,800㎡，合计 28,800㎡，日产 300 万+；实际订单按规格与排期确认。
- 产品插画明确标注袋型示意，不作为真实样品照片。
- 询价表只在浏览器中生成需求草稿和文本下载；配置邮箱后提供邮件应用草稿入口。没有自动邮件投递或服务器留资，不显示发送成功。

## 对外联系与索引配置

复制 `.env.example` 为 `.env.local`，按实际资料填写。以下值会公开显示，不能填入任何密钥：

```dotenv
VITE_CONTACT_EMAIL=
VITE_WHATSAPP=
SITE_BASE_PATH=/
SITE_INDEXABLE=false
```

- 正式域名已按用户提供的 `https://yuanenbag.com` 配置在 `src/data.ts`。
- `SITE_INDEXABLE=false` 是预览默认值，各页输出 `noindex, follow`；robots 允许读取 noindex，预览 sitemap 不列页面。
- 确认公开联系方式和上线内容后，正式构建设 `SITE_INDEXABLE=true`，重新构建会输出可索引页面及含 48 个 URL 的 sitemap。
- 部署到正式域名根目录时保持 `SITE_BASE_PATH=/`。在 GitHub 项目 Pages 子目录预览时可设置 `/yuanenbag/`，同时保持 `SITE_INDEXABLE=false`，避免把预览地址当正式站点。
- 修改构建配置后需重新构建；修改预览服务器配置后需重启预览。

## 发布说明

将 `dist` 的内容部署至支持目录 `index.html` 的静态托管平台；将未知路径返回 `404.html` 并保留 HTTP 404，不要把未知地址重写成首页 200。GitHub 仓库同步不等于正式站已上线；此项目未设置自动发布或修改域名 DNS。

正式上线后验证 canonical、语言切换、资源路径、404、robots 与 sitemap，再在 GSC/Bing 提交并观察抓取与询盘。静态 HTML 和结构化数据不等于已收录或获得 AI 引用。

资料来源见 `docs/research.md`；本次检查与续做状态见 `docs/HANDOFF.md`。

## 翻译维护

西语文本位于 `src/es.ts`，产品与页面共用同一词典。新增文案时需补齐西语；缺失翻译会让构建失败，避免静默显示其他语言。页面地址保留原有英文路径，西语使用 `/es/` 前缀，语言标签为通用 `es`。公司注册中文名和品牌名保留原文。
