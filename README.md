# 南望玉叙

南望玉叙是一个面向国内客户的珠宝展示与咨询转化项目。当前阶段以真实项目方式推进：先完成可给品牌方确认的前台 MVP，再逐步扩展后台、Java 后端、数据库、图片存储、部署和支付能力。

## 当前状态

项目处于前台 MVP 工程阶段，`apps/web` 已完成移动端优先的前台页面、本地多视口 QA、主流程验证、品牌资源和静态商品数据基础。

当前明确规则：

- 临时品牌名：南望玉叙
- 视觉方向：轻奢温柔
- 主要客户：国内客户
- 主要语言：中文
- 商品类型：项链、手链、耳钉、戒指
- 价格策略：可以展示价格，也可以展示“询问价格”
- 联系方式：允许展示多个渠道
- SEO：第一阶段不作为重点
- 域名：暂无
- 支付：未来大概率接国内支付，第一阶段暂不做

## 推荐推进方式

第一阶段先做前台 MVP：

```text
React + TypeScript + Vite
GitHub Pages 展示
静态商品数据
```

目标是快速给学姐确认整体视觉、页面结构、商品展示方式和咨询入口。

第二阶段做真实内容维护能力：

```text
Next.js / React 前台
React + Ant Design 管理后台
Java + Spring Boot 后端
PostgreSQL 数据库
DigitalOcean Spaces 图片存储
DigitalOcean Droplet + Docker Compose 部署
```

第三阶段再考虑：

```text
微信支付 / 支付宝
订单
库存
Redis
RabbitMQ / Kafka
CI/CD
监控
```

## 文档

- `AGENTS.md`：开发上下文和约束索引
- `docs/project-overview.zh.md`：给项目 owner 阅读的中文项目总览
- `docs/00-vibe-coding-kickoff.md`：开工规格、规则、验收标准、待确认项
- `docs/05-step-by-step-task-plan.md`：一步步任务规划和任务编号
- `docs/06-task-briefing-context.md`：便于阶段性布置任务的上下文集合
- `docs/07-uncertainty-register.md`：不确定项、默认决策和阻塞状态登记
- `docs/rules/`：拆分后的单项规则和验收文件
- `docs/adr/`：关键技术和流程决策记录
- `docs/mobile-qa-checklist.md`：移动端验收清单
- `docs/release-checklist.md`：发布前检查清单
- `docs/github-pages-deployment.md`：GitHub Pages 部署说明
- `docs/founder-feedback-checklist.md`：发给学姐后的反馈收集清单
- `docs/documentation-sync-policy.md`：开发后文档同步规则
- `docs/ai-feature-plan.md`：后续 AI 功能规划

## 当前部署状态

GitHub Pages workflow 已配置，构建步骤通过；部署步骤需要在 GitHub 仓库 `Settings -> Pages` 中启用 `GitHub Actions` 作为来源后重跑。

## Codex Hook

- `.codex/hooks.json`：配置 Codex `Stop` hook
- `.codex/hooks/check-documentation-sync.ps1`：检查实现/config 变更后是否同步文档

## 品牌资产

- `assets/brand/logo.png`：用户提供的 Logo 源文件
- `assets/brand/logo_transparent_bg.png`：用户重新制作的透明背景 Logo 源文件
- `apps/web/public/brand/`：前台运行时使用的 Logo 副本
