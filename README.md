# YUANEN · 远恩保温包装

温州远恩工艺品有限公司的中英西三语 B2B 包装展示与询价网站。使用 React、TypeScript 和 Vite，构建时输出 75 个独立内容 HTML 页面，以及三语 404、robots.txt 和 sitemap.xml。

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

- 仅上线13款保温冷链产品：5款铝箔袋、3款冰源、1款自粘无纺布外卖袋、4款拉链保温包。旧22个系列地址重定向到对应语言的产品中心。
- 独立产品页、应用场景、定制流程、工厂介绍、三篇采购指南、询价及隐私说明，均有英文、中文和西班牙语 URL。页头可在对应页面切换语言，西语产品搜索支持忽略重音符号。
- 工厂实拍来自用户提供的六张企业资料海报，页面用 SVG viewBox 展示原始照片区域。
- 产能按用户确认的新资料：温州 20,000㎡、山东 5,000㎡、湖南 3,800㎡，合计 28,800㎡，日产 300 万+；实际订单按规格与排期确认。
- 新增 36 张用户 2026 目录图片（WebP 合计约 1 MB），详情支持缩略图切换与放大。部分源图带 AI 生成标记，保留原标识，展示为目录图片，不宣称实拍。来源映射见 `docs/2026-catalog-sources.json`；未公开整本 PDF。
- 现有产品采用用户目录与已记录来源的AI示意配图；历史参考类目已下线。商业条款及关联工厂资料来源见 `docs/commercial-sources.json`、`docs/documentation-sources.json`。
- 询价表包括产品、袋型、用途选择，只在浏览器中生成需求草稿和文本下载；配置邮箱后提供邮件应用草稿入口。没有自动邮件投递或服务器留资，不显示发送成功。

## 对外联系与索引配置

默认公开邮箱为 `info@yuanenbag.com`，WhatsApp / 首要联系电话为 `+86 189 6971 7999`。如需覆盖，可复制 `.env.example` 为 `.env.local` 填写；留空使用已确认的默认值。以下值会公开显示，不能填入任何密钥：

```dotenv
VITE_CONTACT_EMAIL=
VITE_WHATSAPP=
SITE_BASE_PATH=/
SITE_INDEXABLE=false
```

- 正式域名已按用户提供的 `https://yuanenbag.com` 配置在 `src/data.ts`。
- `SITE_INDEXABLE=false` 是预览默认值，各页输出 `noindex, follow`；robots 允许读取 noindex，预览 sitemap 不列页面。
- 用户已授权正式收录，Vercel Production 构建设 `SITE_INDEXABLE=true`，重新构建会输出可索引页面及含 75 个 URL 的 sitemap。
- 部署到正式域名根目录时保持 `SITE_BASE_PATH=/`。在 GitHub 项目 Pages 子目录预览时可设置 `/yuanenbag/`，同时保持 `SITE_INDEXABLE=false`，避免把预览地址当正式站点。
- 修改构建配置后需重新构建；修改预览服务器配置后需重启预览。

## 发布说明

将 `dist` 的内容部署至支持目录 `index.html` 的静态托管平台；将未知路径返回 `404.html` 并保留 HTTP 404，不要把未知地址重写成首页 200。已通过 GitHub 导入 Vercel，`main` 更新会触发部署。在线地址为 https://yuanenbag.vercel.app/；正式域名 https://yuanenbag.com/ 已接通，www 永久跳转至主域名，HTTPS 正常。

正式上线后验证 canonical、语言切换、资源路径、404、robots 与 sitemap，再在 GSC/Bing 提交并观察抓取与询盘。静态 HTML 和结构化数据不等于已收录或获得 AI 引用。

资料来源见 `docs/research.md`；本次检查与续做状态见 `docs/HANDOFF.md`。

## 翻译维护

西语文本位于 `src/es.ts`，产品与页面共用同一词典。新增文案时需补齐西语；缺失翻译会让构建失败，避免静默显示其他语言。页面地址保留原有英文路径，西语使用 `/es/` 前缀，语言标签为通用 `es`。公司注册中文名和品牌名保留原文。


## Vercel 部署（2026-09-19）

- 项目：`stevens-projects-08c9c5b0/yuanenbag`，已部署为 Vercel production，公开地址 https://yuanenbag.vercel.app/ 。
- `vercel.json` 固定执行完整构建及验证，输出 `dist`；静态文件优先，未知路径返回对应语言 404。
- Production 环境变量 `SITE_BASE_PATH=/`、`SITE_INDEXABLE=true`。预览环境默认不索引，且 `VERCEL_ENV=preview` 时即使误传 true 也输出 noindex；三语404始终noindex。正式域名与canonical为 yuanenbag.com。
- 邮箱、WhatsApp 和首要联系电话已接入三语页脚与询价页，保留 2026 目录电话。邮件入口打开客户邮件应用中的草稿，需要客户自行发送；没有服务端自动投递。阿里免费邮箱账号已确认正常、5GB，收发尚未实测；未执行付费升级或域名购买。
