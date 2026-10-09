# 询盘直接发送：实现与待完成项（2026-10-09）

## 当前状态

本地已实现，尚未提交或发布。生产站旧表单只生成草稿和打开 mailto，并不自动发送。不得把本地模拟测试当成真实收件验证。

- `api/enquiry.js` → `server/enquiry.mjs`：Vercel Node Function，使用 Nodemailer 和 SMTP TLS。
- `src/Enquiry.tsx`：三语直接发送、等待状态、成功参考编号、失败保留表单、邮箱/WhatsApp 备用入口，保留产品预选和下载。
- `src/App.tsx`：三语隐私说明同步邮件处理方式。
- 只有 SMTP 接受固定收件人后才返回成功并记录 `enquiry_sent`。这不是邮箱最终投递或人工阅读的确认。
- 发件人、收件人只能由服务器配置；客户邮箱只用于 Reply-To。无客户自动回执，无任意收件人参数，无表单内容或 SMTP 响应日志。

## 唯一外部阻碍

项目原有配置、Vercel 环境变量均未找到 SMTP 发信凭证；本机 `.env.smtp.local` 的 `SMTP_PASS` 留空且已被 Git 忽略。阿里企业邮箱当前是登录页，仅记住 postmaster 用户名。需要用户完成登录后检查 info 邮箱的 SMTP 设置；不应重置密码或把凭证写入聊天、提交、客户端变量或日志。

生产需要：`SMTP_HOST`、`SMTP_PORT`、`SMTP_USER`、`SMTP_PASS`、`ENQUIRY_TO`。示例见 `.env.example`。不要使用 `VITE_` 前缀。默认收件人 info@yuanenbag.com，阿里 SMTP 465；另支持强制 STARTTLS 的 587。

## 验证证据

- `npm run typecheck` 通过。
- `npm run build` 通过，最后文案调整后重新编译客户端/SSR及预渲染。
- `npm run verify` 全部通过：153 HTML 页面、150 URL 的 SEO、195 个图片源、统计隐私、关键 CSS 和性能预算。
- `npm run verify:enquiry` 验证字段、跨站来源、请求大小、固定收件人、TLS、缺配置、SMTP 接受/拒绝、错误脱敏、同实例重复/并发和频率控制、真实 HTTP 请求体解析。全部使用模拟邮件传输，不发真实邮件。
- 浏览器 `node scripts/verify-enquiry.mjs --serve`：中文产品预选、模拟失败保留内容、模拟成功显示编号并禁用重复提交；西语文案/预选正常。该模式仅监听本机 4175，永远不加载真实凭证。详情含 `TEST SMTP REJECT` 时模拟失败。

## 发布前必须完成

1. 获取可用的 info 邮箱发信授权并安全配置 Vercel Production 服务端变量。
2. 验证真实 SMTP 认证、部署后的 `/api/enquiry` 路由与函数调用。
3. 用明确标注测试的询盘验证实际收件、Reply-To、内容和成功编号；核对收件箱/垃圾箱。
4. 所有检查通过后一次发布，不能提前把缺配置的新按钮发布为可用功能。

频率控制与十分钟去重目前只覆盖同一运行实例，扩缩容或冷启动会重置，不构成分布式硬限额或持久队列。网络超时后投递可能已发生，界面会要求先核实结果。若需要更强的全局限制，需另配置 Vercel Firewall 或共享存储；当前没有新增收费服务。

原先未提交的 `docs/HANDOFF.md` 和 `docs/outreach/` 属于既有工作，本次未修改，不应混入询盘修复提交。
