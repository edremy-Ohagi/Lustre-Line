# Documentation Sync Policy

This file defines when Codex must update project documentation after making changes.

## Goal

Keep implementation, project context, task plans, and owner-facing docs aligned.

## When Documentation Must Be Updated

Update docs in the same task when a change affects any of these:

- Product scope
- Confirmed decisions
- MVP requirements
- User-facing features
- Technical stack
- App structure
- Deployment approach
- Task status
- Acceptance criteria
- Open questions or uncertainty defaults
- Owner-facing project status

## What To Update

Use this mapping:

| Change Type | Documents To Check |
| --- | --- |
| New or changed project decision | `docs/07-uncertainty-register.md`, relevant `docs/rules/*`, possibly `docs/adr/*` |
| Task completed or task status changed | `docs/05-step-by-step-task-plan.md` |
| Owner-facing progress changed | `docs/project-overview.zh.md` |
| Assignment workflow changed | `docs/06-task-briefing-context.md` |
| Acceptance or QA changed | `docs/mobile-qa-checklist.md`, `docs/release-checklist.md`, `docs/rules/08-acceptance.md` |
| Architecture or stack decision changed | `docs/adr/*`, `docs/rules/06-technical-stack.md` |
| Deployment decision changed | `docs/rules/07-deployment.md`, `docs/release-checklist.md` |
| AI feature decision changed | `docs/ai-feature-plan.md` |
| Brand or content rule changed | `docs/rules/01-product-decisions.md`, `docs/rules/02-visual-direction.md`, `docs/rules/04-content-and-data.md` |

## When Documentation May Not Need Changes

Documentation may be left unchanged when the task is purely mechanical and does not alter behavior or project understanding, such as:

- Formatting only
- Fixing a typo in code
- Refactoring without behavior change
- Updating generated files
- Running checks without changing files

Even then, the final report must say:

```text
文档同步：本次无需同步，原因是……
```

## Final Report Requirement

Every implementation final report must include:

```text
文档同步：
- 已同步：...
- 无需同步：...
```

If documentation should have been updated but was not, say why and mark it as follow-up work.

## Codex Stop Hook

This repository includes a Codex `Stop` hook:

```text
.codex/hooks.json
.codex/hooks/check-documentation-sync.ps1
```

The hook runs when a Codex turn stops. It checks git status and warns when implementation/config paths changed without documentation changes.

Watched implementation/config paths include:

```text
apps/
services/
infra/
scripts/
.codex/
.github/
package.json
lock files
vite.config.*
tsconfig*
Dockerfile
docker-compose*
```

Documentation paths include:

```text
AGENTS.md
README.md
docs/
assets/brand/README.md
```

To temporarily bypass the check for one run:

```text
DOC_SYNC_CHECK_DISABLE=1
```

Codex may require the project-local hook to be reviewed and trusted before it runs.

## Guardrail

Do not update docs just to create noise. Sync only the documents that help future work remain accurate.
