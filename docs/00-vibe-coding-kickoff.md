# 南望玉叙 Vibe Coding 开工索引

This file is the entry point for project rules. Detailed constraints are split into single-purpose files under `docs/rules/`.

## Current Project Summary

南望玉叙 is a real mobile-first jewelry showcase and consultation project for domestic customers.

Current confirmed direction:

- Brand name: 南望玉叙
- Visual direction: 轻奢温柔
- Categories: 项链、手链、耳钉、戒指
- MVP images: high-quality placeholders
- Contact: WeChat and Xiaohongshu QR code areas required
- Price: RMB by default, with support for 询问价格
- Labels: 新品、推荐、定制
- Detail flow: modal preview plus dedicated detail page
- Hero: product display and consultation conversion first
- MVP deployment: GitHub Pages
- Formal deployment: DigitalOcean Droplet + Docker Compose

## Rule Files

- `docs/05-step-by-step-task-plan.md`
- `docs/06-task-briefing-context.md`
- `docs/07-uncertainty-register.md`
- `docs/rules/01-product-decisions.md`
- `docs/rules/02-visual-direction.md`
- `docs/rules/03-mvp-scope.md`
- `docs/rules/04-content-and-data.md`
- `docs/rules/05-mobile-ux.md`
- `docs/rules/06-technical-stack.md`
- `docs/rules/07-deployment.md`
- `docs/rules/08-acceptance.md`
- `docs/rules/09-open-questions.md`
- `docs/rules/10-collaboration.md`

## Agent Context

Root-level `AGENTS.md` records the development context I should follow before making implementation changes.

## Brand Asset

The provided logo has been moved to:

```text
assets/brand/logo.png
```

## Next Step

After these rules are accepted, the next implementation phase should be the React + TypeScript + Vite front-end MVP.
