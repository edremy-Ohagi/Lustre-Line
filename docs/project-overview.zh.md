# 南望玉叙项目总览

这份文档是给项目 owner 阅读的简版总览，用来快速了解项目目标、预期功能、当前进度和下一步怎么给 Codex 布置任务。

## 1. 项目定位

南望玉叙是一个面向国内客户的珠宝展示与咨询转化项目。

当前不是完整电商系统，而是先做：

```text
品牌展示 + 商品图册 + 商品详情 + 多渠道咨询入口
```

后续再扩展：

```text
后台内容管理 + Java 后端 + 数据库 + 图片上传 + 正式部署 + 支付订单
```

## 2. 已确定方向

- 品牌名：南望玉叙
- 视觉方向：轻奢温柔
- 主要语言：中文
- 主要访问设备：手机
- 商品分类：项链、手链、耳钉、戒指
- 商品图片：第一版先用高质量占位图
- 价格展示：人民币价格，也支持“询问价格”
- 商品标签：新品、推荐、定制
- 商品详情：弹窗预览 + 独立详情页
- 联系方式：需要微信 / 小红书二维码区域
- 首屏重点：商品展示和咨询转化
- 第一阶段部署：GitHub Pages
- 正式阶段部署：DigitalOcean Droplet + Docker Compose

## 3. MVP 预期功能

第一版前台 MVP 需要具备：

- 手机端优先的首页
- 品牌 Logo / 品牌名展示
- 首屏商品氛围图和咨询按钮
- 商品分类入口
- 商品列表
- 商品卡片展示图片、名称、标签、价格
- 商品详情弹窗
- 独立商品详情页
- 微信二维码区域
- 小红书二维码区域
- 多联系方式展示
- 可通过 GitHub Pages 分享给学姐查看

第一版暂不做：

- 后台管理
- 数据库
- Java 后端
- 支付
- 订单
- 库存
- 会员
- AI 功能

## 4. 后续正式版功能

学姐确认前台效果后，可以继续做：

- 管理员登录
- 商品新增、编辑、删除、上下架
- 分类管理
- 商品图片上传
- 联系方式 / 二维码配置
- 咨询记录管理
- Java Spring Boot API
- PostgreSQL 数据库
- DigitalOcean Spaces 图片存储
- Nginx + Docker Compose 正式部署
- 后续接入微信支付 / 支付宝

## 5. 当前进度

已完成：

- 清理旧学习项目和旧静态原型
- 建立 `AGENTS.md` 作为 Codex 开发上下文
- 拆分项目规则到 `docs/rules/`
- 建立任务计划 `docs/05-step-by-step-task-plan.md`
- 建立上下文包 `docs/06-task-briefing-context.md`
- 建立不确定项登记 `docs/07-uncertainty-register.md`
- 建立移动端 QA 清单
- 建立发布前检查清单
- 建立 Codex 文档同步 Stop hook
- 保存用户提供的 Logo 到 `assets/brand/logo.png`
- 搭建 `apps/web` 前台工程脚手架
- 接入 React Router HashRouter 基础路由
- 建立 `components`、`pages`、`data`、`types`、`assets`、`styles` 等前台目录
- 配置 Oxlint 和 Prettier 基础脚本
- 接入透明背景 Logo 到前台资源
- 建立商品分类、商品类型和占位商品数据
- 每个分类已至少准备 1 个占位商品
- 建立微信 / 小红书联系方式与二维码占位数据

当前前台已经具备品牌与数据基础，但还没有开始制作完整商品展示页面和详情弹窗。

下一步推荐任务：

```text
P1.10-P1.17：完成前台 MVP 页面，包括首屏、分类、商品列表、详情弹窗、详情页和联系方式区域
```

## 6. 当前不确定项

这些不阻塞脚手架阶段：

- 是否已有真实微信 / 小红书二维码
- MVP 是否要联系表单
- 是否每个占位商品都生成详情页
- 是否每个分类至少一个占位商品
- 视觉更偏现代轻奢还是东方含蓄
- 是否已有真实商品名、价格、材质、图片
- 是否有门店地址

默认策略见：

```text
docs/07-uncertainty-register.md
```

## 7. 后续怎么给 Codex 布置任务

最推荐的派活方式：

```text
请读取 AGENTS.md、docs/06-task-briefing-context.md、docs/07-uncertainty-register.md，然后执行 P1.5-P1.9。
范围：接入 logo、定义商品类型、创建占位商品数据、创建联系方式数据。
```

当前下一步可以直接改成：

```text
请读取 AGENTS.md、docs/06-task-briefing-context.md、docs/07-uncertainty-register.md，然后执行 P1.10-P1.17。
范围：完成移动端优先的前台 MVP 页面，不做后台、数据库、支付、订单、AI。
```

如果你想先让 Codex 规划，不写代码：

```text
我要做：……
请先根据现有文档判断这属于哪个任务阶段，列出计划、影响文件、验收标准和不确定项。
先不要写代码。
```

如果你想查看项目状态：

```text
请根据 docs/05-step-by-step-task-plan.md 汇报当前项目进度、下一步、阻塞项和需要我确认的内容。
```

## 8. 你主要需要看哪些文档

日常只需要看这几份：

- `docs/project-overview.zh.md`：项目总览，也就是本文档
- `docs/05-step-by-step-task-plan.md`：任务编号和阶段计划
- `docs/06-task-briefing-context.md`：给 Codex 派任务的上下文包
- `docs/07-uncertainty-register.md`：不确定项和默认值
- `docs/documentation-sync-policy.md`：开发后文档同步规则
- `docs/mobile-qa-checklist.md`：手机端验收
- `docs/release-checklist.md`：发给学姐前检查

更细的规则文件在 `docs/rules/`，一般是 Codex 开发时读取，不需要你每次都看。
