# AGENTS.md

This file records the operating context Codex must follow when working on this repository.

## Project

- Project name: 南望玉叙
- Nature: real client-facing jewelry showcase project, not a learning demo
- Current stage: GitHub Pages deployment prepared; publication blocked by remote Pages settings
- Primary audience: domestic Chinese customers
- Primary device: mobile phones first, desktop second

## Source Of Truth

Before coding, read these files:

1. `docs/00-vibe-coding-kickoff.md`
2. `docs/05-step-by-step-task-plan.md`
3. `docs/06-task-briefing-context.md`
4. `docs/07-uncertainty-register.md`
5. `docs/rules/01-product-decisions.md`
6. `docs/rules/02-visual-direction.md`
7. `docs/rules/03-mvp-scope.md`
8. `docs/rules/04-content-and-data.md`
9. `docs/rules/05-mobile-ux.md`
10. `docs/rules/06-technical-stack.md`
11. `docs/rules/07-deployment.md`
12. `docs/rules/08-acceptance.md`
13. `docs/rules/09-open-questions.md`
14. `docs/rules/10-collaboration.md`
15. `docs/mobile-qa-checklist.md`
16. `docs/release-checklist.md`
17. `docs/ai-feature-plan.md`
18. `docs/documentation-sync-policy.md`

## Current Decisions

- Temporary brand name: 南望玉叙
- Visual direction: 轻奢温柔
- Product categories: 项链、手链、耳钉、戒指
- MVP product images: use high-quality placeholders first
- Contact channels: include WeChat and Xiaohongshu QR code areas
- Price display: use RMB by default, with support for 询问价格
- Product labels: support 新品、推荐、定制
- Product detail pattern: modal preview plus link to a dedicated detail page
- Hero direction: product display and consultation conversion first
- SEO: not a first-stage priority
- Domain: not available yet
- Payment: likely domestic payment later, not part of MVP

## Hard Rules

- Do not present the site as a learning project, demo, or technical exercise in customer-facing UI.
- Treat mobile layout as the primary experience.
- Keep the brand tone soft, refined, jewelry-focused, and conversion-aware.
- Do not start large implementation work before the relevant rules and acceptance criteria are clear.
- Prefer small, reviewable steps with explicit verification.
- Preserve user-provided assets and move them only into intentional asset folders.
- Use task IDs from `docs/05-step-by-step-task-plan.md` when the user assigns staged work.
- Use `docs/07-uncertainty-register.md` to decide whether to ask the user or proceed with a default.
- Before sharing or deploying a preview, run through `docs/release-checklist.md`.
- Before accepting UI work, run through `docs/mobile-qa-checklist.md`.
- After implementation changes, follow `docs/documentation-sync-policy.md` and report document sync status in the final response.

## Brand Assets

- Logo source asset: `assets/brand/logo.png`
- Transparent logo source asset: `assets/brand/logo_transparent_bg.png`
- Frontend runtime copies: `apps/web/public/brand/logo.png` and `apps/web/public/brand/logo-mark.png`

This logo was originally placed in the repository root and has been moved into the brand asset folder.

## Decision Records

Project decisions that affect architecture or long-term workflow should be recorded under:

```text
docs/adr/
```

Current ADRs:

- `docs/adr/0001-vibe-coding-workflow.md`
- `docs/adr/0002-frontend-mvp-stack.md`
