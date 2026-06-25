# Codex Context Pack

This is the compact context pack for assigning staged work to Codex.

It intentionally avoids repeating every rule in full. Detailed rules live in `docs/rules/`, task status lives in `docs/05-step-by-step-task-plan.md`, and unresolved decisions live in `docs/07-uncertainty-register.md`.

## Project Snapshot

- Project: 南望玉叙
- Type: real client-facing jewelry showcase and consultation project
- Audience: domestic Chinese customers
- Primary device: mobile phones
- Visual direction: 轻奢温柔
- Categories: 项链、手链、耳钉、戒指
- MVP goal: mobile-first frontend preview deployable to GitHub Pages
- Current next task: `P1.26`

## Current Fixed Decisions

- Use Chinese as the primary language.
- Use high-quality placeholder product images for MVP.
- Show RMB prices or `询问价格`.
- Support labels: `新品`、`推荐`、`定制`.
- Include WeChat and Xiaohongshu QR code areas.
- Product detail flow: modal preview plus independent detail page.
- Hero direction: product display and consultation conversion.
- Do not build payment, order, admin, backend, or AI features in frontend MVP unless explicitly assigned.

## Required Read Order

For any implementation task, read:

```text
1. AGENTS.md
2. docs/05-step-by-step-task-plan.md
3. docs/06-task-briefing-context.md
4. docs/07-uncertainty-register.md
5. docs/documentation-sync-policy.md
```

For UI/product tasks, also read:

```text
docs/rules/01-product-decisions.md
docs/rules/02-visual-direction.md
docs/rules/03-mvp-scope.md
docs/rules/04-content-and-data.md
docs/rules/05-mobile-ux.md
docs/rules/08-acceptance.md
docs/mobile-qa-checklist.md
```

For deployment tasks, also read:

```text
docs/rules/06-technical-stack.md
docs/rules/07-deployment.md
docs/release-checklist.md
```

For AI-related tasks, also read:

```text
docs/ai-feature-plan.md
```

## Assignment Format

Preferred:

```text
请读取 AGENTS.md 和 docs/06-task-briefing-context.md。
执行任务：P1.26
范围限制：只确认或完成 GitHub Pages 发布，不引入后台、数据库、支付或订单。
验收重点：GitHub Actions Pages workflow 成功；产物可通过公开 URL 访问；`HashRouter` 商品详情路由可用。
遇到不确定项：参考 docs/07-uncertainty-register.md，非阻塞项按默认值推进。
完成后汇报：改了哪些文件、运行命令、检查结果、下一步建议。
```

Short:

```text
执行 P1.26。确认 GitHub Pages workflow 是否成功；如果 Pages 未启用或缺少权限，说明需要用户在 GitHub 仓库设置中处理什么。
```

## Execution Contract

Codex should:

- Do only the requested task IDs unless a small prerequisite is necessary.
- Ask before coding only when an uncertainty is marked `BLOCKING`.
- Use defaults from `docs/07-uncertainty-register.md` for `NON_BLOCKING` uncertainties.
- Keep MVP frontend tasks free of backend/admin/payment/order/AI scope.
- Preserve `assets/brand/logo.png`.
- Keep customer-facing UI free of technical, demo, or learning language.
- Treat mobile UX as the primary acceptance target.
- Follow `docs/documentation-sync-policy.md` after changes.

## Final Report Format

```text
完成内容：
- ...

修改文件：
- ...

验证：
- ...

未完成 / 已知限制：
- ...

文档同步：
- ...

下一步建议：
- ...
```

If checks could not run, state why.

## Common Task Prompts

### Start Frontend Scaffold

```text
请读取 AGENTS.md、docs/06-task-briefing-context.md、docs/07-uncertainty-register.md，然后执行 P1.1-P1.4。
范围：只做 React + TypeScript + Vite 脚手架、路由方案和基础目录，不做具体页面。
```

### Build Brand And Data Foundation

```text
请执行 P1.5-P1.9。
范围：接入 logo、定义商品类型、创建占位商品数据、创建联系方式数据。
要求：每个分类至少一个商品；价格统一人民币或询问价格；包含新品/推荐/定制标签；微信/小红书二维码可用占位块。
```

### Build MVP Page

```text
请执行 P1.10-P1.17，完成南望玉叙前台 MVP 页面。
要求：移动端优先、轻奢温柔、首屏偏商品展示和咨询转化、商品弹窗+详情页、微信/小红书二维码区域。
不要：后台、数据库、支付、订单、AI。
```

### Verify MVP

```text
请执行 P1.18-P1.24。
重点检查：手机端、商品详情弹窗、详情页跳转、联系方式区域、无对外不该出现的开发文案。
请按 docs/mobile-qa-checklist.md 和 docs/release-checklist.md 汇报结果。
```

### Deploy MVP

```text
请执行 P1.25-P1.26，把前端 MVP 配置为可部署到 GitHub Pages。
如果需要 GitHub 仓库或远程信息，先告诉我需要什么，不要猜。
```

### Plan Before Coding

```text
我要做：……
请先根据现有文档判断这属于哪个任务阶段，列出计划、影响文件、验收标准和不确定项。
先不要写代码。
```

## Current Blockers

- GitHub Pages deployment may need repository Pages settings enabled or a successful Actions run before a public URL exists.
- Real QR codes and real product photos remain optional replacement assets for founder feedback.
