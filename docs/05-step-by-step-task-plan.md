# Step-By-Step Task Plan

This is the detailed task plan for 南望玉叙. Use task IDs when assigning work.

## Status Legend

```text
DONE      completed
NEXT      recommended next task
PENDING   not started
BLOCKED   needs user decision or external asset
LATER     intentionally deferred
```

## Phase 0: Project Preparation

Goal: establish product direction, rules, and agent context before implementation.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P0.1 | Confirm real-project positioning | DONE | Project is not treated as a learning demo |
| P0.2 | Confirm brand name and visual direction | DONE | 南望玉叙 / 轻奢温柔 recorded |
| P0.3 | Confirm MVP product categories | DONE | 项链、手链、耳钉、戒指 recorded |
| P0.4 | Split rules into focused files | DONE | `docs/rules/` exists |
| P0.5 | Create root agent context | DONE | `AGENTS.md` exists |
| P0.6 | Move user-provided logo | DONE | `assets/brand/logo.png` exists |
| P0.7 | Create detailed task plan | DONE | This file exists |
| P0.8 | Create task briefing context | DONE | `docs/06-task-briefing-context.md` exists |
| P0.9 | Create ADR folder and first decisions | DONE | `docs/adr/0001-vibe-coding-workflow.md` and `docs/adr/0002-frontend-mvp-stack.md` exist |
| P0.10 | Create mobile QA checklist | DONE | `docs/mobile-qa-checklist.md` exists |
| P0.11 | Create release checklist | DONE | `docs/release-checklist.md` exists |
| P0.12 | Create AI feature plan | DONE | `docs/ai-feature-plan.md` exists |
| P0.13 | Create owner-facing Chinese overview | DONE | `docs/project-overview.zh.md` exists |
| P0.14 | Create documentation sync policy | DONE | `docs/documentation-sync-policy.md` exists |
| P0.15 | Add Codex documentation sync hook | DONE | `.codex/hooks.json` runs `.codex/hooks/check-documentation-sync.ps1` on Stop |

## Phase 1: Frontend MVP

Goal: create a mobile-first React + TypeScript + Vite customer-facing MVP that can be shared through GitHub Pages.

Recommended project location:

```text
apps/web
```

### 1.1 Project Scaffold

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P1.1 | Scaffold Vite React TypeScript app | DONE | `apps/web` runs locally |
| P1.2 | Add baseline formatting and linting | DONE | package scripts exist and pass |
| P1.3 | Add routing strategy for GitHub Pages | DONE | Home and product detail routes work after static deploy |
| P1.4 | Define source folder structure | DONE | `components`, `pages`, `data`, `types`, `assets`, `styles` exist |

Recommended routing note:

For GitHub Pages MVP, prefer `HashRouter` or an equivalent static-host-safe route strategy so independent product detail pages work without server rewrite configuration.

### 1.2 Brand And Data Foundation

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P1.5 | Integrate logo asset | DONE | Header can render 南望玉叙 logo or text fallback |
| P1.6 | Create product type definitions | DONE | Product supports labels, RMB price, inquiry price, gallery, detail slug |
| P1.7 | Create placeholder product data | DONE | Each category has at least one product |
| P1.8 | Select high-quality placeholder images | DONE | Images match light luxury gentle jewelry tone |
| P1.9 | Create contact channel data | DONE | WeChat and Xiaohongshu QR slots exist |

### 1.3 Customer-Facing Layout

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P1.10 | Build mobile-first app shell | DONE | Header does not dominate mobile viewport |
| P1.11 | Build hero section | DONE | First screen shows brand, product vibe, and consultation CTA |
| P1.12 | Build category section | DONE | 项链、手链、耳钉、戒指 are visible |
| P1.13 | Build product grid | DONE | Cards show image, name, labels, price or 询问价格 |
| P1.14 | Build product detail modal | DONE | Modal opens, closes, and shows product details |
| P1.15 | Build product detail page | DONE | Modal can link to independent detail route |
| P1.16 | Build contact section | DONE | WeChat and Xiaohongshu QR areas are clear |
| P1.17 | Build footer | DONE | Footer contains brand and contact summary |

### 1.4 Mobile And Polish

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P1.18 | Mobile layout pass | DONE | 375px and 390px widths have no overlap or text overflow |
| P1.19 | Desktop layout pass | DONE | 1280px layout feels refined and not sparse |
| P1.20 | Customer-facing copy cleanup | DONE | No demo, learning, backend, or technical wording appears |
| P1.21 | Accessibility basics | DONE | Buttons, links, images, modal labels are reasonable |
| P1.22 | Performance basics | DONE | Images lazy-load where appropriate; build size remains sensible |

### 1.5 MVP Verification And Share

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P1.23 | Run build checks | DONE | Build succeeds |
| P1.24 | Browser verification | DONE | Main flow works: home -> product modal -> detail page -> contact |
| P1.25 | Prepare GitHub Pages deployment | DONE | Deployment script or action exists |
| P1.26 | Deploy MVP to GitHub Pages | DONE | Public site is available at `https://edremy-ohagi.github.io/Lustre-Line/` |
| P1.27 | Prepare founder feedback checklist | DONE | Questions for style, product data, contact, and layout are ready |

## Phase 2: Founder Feedback Iteration

Goal: use founder feedback to refine the public-facing MVP before backend work.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P2.1 | Collect visual feedback | DONE | Founder identified excessive AI-like styling and requested a bold redesign |
| P2.2 | Collect product content feedback | DONE | Real catalogue categories, materials, descriptions, prices, and reference images were provided |
| P2.3 | Collect contact channel feedback | PENDING | QR codes, WeChat ID, Xiaohongshu link are clarified |
| P2.4 | Apply first feedback round | DONE | Editorial redesign, catalogue search, expanded categories, real products, and WeChat QR are implemented |
| P2.5 | Freeze frontend MVP scope | PENDING | Backend phase can start without constant UI churn |

## Phase 3: Backend And Admin Planning

Goal: design the maintainable content system before writing Java backend code.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P3.1 | Define admin MVP scope | PENDING | Product/category/contact/media/inquiry management boundaries are clear |
| P3.2 | Define database schema | PENDING | ER draft exists |
| P3.3 | Define API contract | PENDING | OpenAPI-style endpoint list exists |
| P3.4 | Define image upload strategy | PENDING | Local dev and DigitalOcean Spaces plan exists |
| P3.5 | Define authentication model | PENDING | Admin login and session/token approach is chosen |

## Phase 4: Java Backend And Admin Implementation

Goal: create the maintainable real system.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P4.1 | Scaffold Spring Boot API | PENDING | API starts locally |
| P4.2 | Add PostgreSQL integration | PENDING | Migrations/schema can initialize database |
| P4.3 | Implement product/category APIs | PENDING | Frontend can read managed data |
| P4.4 | Implement admin auth | PENDING | Admin endpoints protected |
| P4.5 | Implement media upload | PENDING | Product images can be uploaded |
| P4.6 | Implement admin frontend | PENDING | Founder can manage content |
| P4.7 | Implement inquiry handling | PENDING | Consultation submissions are persisted |

## Phase 5: Formal DigitalOcean Deployment

Goal: deploy the full-stack version with real infrastructure.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P5.1 | Prepare Dockerfiles | PENDING | Frontend/backend images build |
| P5.2 | Prepare Docker Compose | PENDING | API, admin/front, PostgreSQL, Redis, Nginx can run |
| P5.3 | Configure Nginx | PENDING | Frontend and API route correctly |
| P5.4 | Create DigitalOcean Droplet | PENDING | Server is reachable over SSH |
| P5.5 | Deploy full stack | PENDING | Public frontend and protected admin work |
| P5.6 | Add HTTPS | PENDING | Public site uses HTTPS |
| P5.7 | Add backup plan | PENDING | Database/media backup approach documented |

## Phase 6: Commerce And Job-Value Enhancements

Goal: add commerce features and Java-backend depth after the core product is useful.

| ID | Task | Status | Acceptance |
| --- | --- | --- | --- |
| P6.1 | Domestic payment research | LATER | WeChat Pay / Alipay integration path chosen |
| P6.2 | Order model design | LATER | Order, payment, product snapshot model exists |
| P6.3 | Redis enhancement | LATER | Caching or rate limit use case implemented |
| P6.4 | RabbitMQ enhancement | LATER | Async notification or inquiry processing implemented |
| P6.5 | Kafka enhancement | LATER | Product view or behavior event stream implemented |
| P6.6 | Testcontainers tests | LATER | Database integration tests run |
| P6.7 | CI/CD | LATER | Build and deploy pipeline exists |

## How To Assign Work

Use task IDs:

```text
请执行 P1.1-P1.4，只做脚手架和基础结构，不做页面细节。
```

Or:

```text
请执行 P1.10-P1.17，完成前台 MVP 页面，但先不要部署。
```

Or:

```text
请根据 P1.18-P1.24 做一次移动端和主流程验收。
```
