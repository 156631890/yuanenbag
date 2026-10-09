# 询盘邮件投递

网站表单通过 `/api/enquiry` 向服务端提交，服务端验证内容后使用阿里企业邮箱 SMTP 将邮件投递到业务邮箱。

## 配置

Vercel Production 需要 `SMTP_HOST`、`SMTP_PORT`、`SMTP_USER`、`SMTP_PASS`、`ENQUIRY_TO`。发件显示名称固定为 YUANEN；当前业务邮箱为 info@yuanenbag.com，SMTP 为 smtp.qiye.aliyun.com:465（SSL/TLS）。SMTP_PASS 必须保存为敏感变量，不得以 VITE_ 前缀暴露、写入 Git、聊天回复或日志。修改环境变量后必须重新部署才能生效。

发件人和收件人由服务端配置决定。客户邮箱只用于 Reply-To；不发送客户自动回执。只有 SMTP 接受固定收件人后才返回成功编号，最终是否投递仍需核对收件箱或垃圾箱。

## 验证

- `npm run build` 与 `npm run verify` 验证全部页面及询盘接口。
- `npm run verify:enquiry` 使用模拟邮件传输，不发送真实邮件；覆盖字段、来源、请求大小、固定收件人、TLS、缺配置、SMTP 接受/拒绝、日志脱敏、并发/频率控制、去重和 HTTP 解析。
- `node scripts/verify-enquiry.mjs --serve` 仅监听本机 4175，不加载真实凭证；详情含 TEST SMTP REJECT 时模拟失败。
- 发布验收必须通过正式站浏览器提交明确标注测试的询盘，核对实际邮件中的编号、产品、数量、正文、From、To 和 Reply-To。不能把模拟成功当成真实投递。

## 行为与边界

三语表单保留产品预选和草稿下载。发送期间禁用重复点击，失败保留填写内容，网络超时提示先核实结果再重发。统计只记录操作名，不记录客户资料。服务端不另设客户资料数据库，日志不输出表单内容、SMTP 响应或凭证。

频率限制和十分钟去重仅覆盖同一运行实例，冷启动或扩缩容会重置，不是分布式硬限额或持久邮件队列。若需要更强限制，另行配置 Vercel Firewall 或共享存储；本次没有引入新付费服务。
