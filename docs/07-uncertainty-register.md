# Uncertainty Register

This file tracks unresolved decisions for 南望玉叙.

## Status Legend

```text
BLOCKING       must decide before the related task starts
NON_BLOCKING   can use a sensible default for MVP
LATER          decide in a later phase
RESOLVED       already decided
```

## Blocking Before Specific Tasks

| ID | Question | Status | Blocks | Default If User Says "You Decide" |
| --- | --- | --- | --- | --- |
| U1 | Should the provided logo be used directly in the MVP header, footer, or both? | RESOLVED | P1.5 | Use transparent logo mark in header with text fallback; keep full transparent logo available for larger placements |
| U2 | Are real WeChat and Xiaohongshu QR images available? | NON_BLOCKING | P1.9, P1.16 | Use polished placeholder QR blocks marked as pending contact code |
| U3 | Should MVP include a contact form or only contact channels? | NON_BLOCKING | P1.16 | Use contact channels first; reserve form section only if requested |
| U4 | Should every placeholder product have an independent detail page? | NON_BLOCKING | P1.15 | Yes, generate detail routes for all placeholder products |
| U5 | Should every category have at least one placeholder product? | NON_BLOCKING | P1.7 | Yes, at least one item per category |
| U6 | Brand tone within 轻奢温柔: more modern luxury or more subtle oriental elegance? | NON_BLOCKING | P1.11-P1.17 | Subtle oriental elegance with modern restraint |

## Product Content Uncertainties

| ID | Question | Status | Phase | Default |
| --- | --- | --- | --- | --- |
| U7 | Is 南望玉叙 the long-term brand name? | LATER | Founder feedback | Treat as current public brand until user says otherwise |
| U8 | Does the founder have a preferred slogan? | NON_BLOCKING | P1.11 | Write a temporary elegant slogan |
| U9 | Are there real product names, prices, materials, and images? | NON_BLOCKING | P1.6-P1.8 | Use high-quality placeholder data |
| U10 | Is there a store address or only online consultation? | NON_BLOCKING | P1.16 | Online consultation only |
| U11 | Is Xiaohongshu the main conversion channel? | NON_BLOCKING | P1.16 | Yes |
| U12 | Should there be a custom jewelry section? | NON_BLOCKING | P1.11-P1.17 | Include custom as a label/CTA, not a full section |
| U13 | Should there be customer cases or buyer photos? | LATER | P2+ | Not in MVP |

## Technical Uncertainties

| ID | Question | Status | Phase | Default |
| --- | --- | --- | --- | --- |
| U14 | Tailwind CSS or CSS Modules for MVP styling? | NON_BLOCKING | P1.1-P1.4 | Tailwind if install/setup is smooth; otherwise CSS Modules |
| U15 | HashRouter or BrowserRouter for GitHub Pages? | NON_BLOCKING | P1.3 | HashRouter |
| U16 | GitHub Pages deploy via action or manual command? | NON_BLOCKING | P1.25-P1.26 | GitHub Actions if repo remote is available; otherwise document manual setup |
| U17 | Should frontend later migrate to Next.js? | LATER | After P2 | Reassess after founder feedback |
| U18 | Should formal backend use PostgreSQL only or support MySQL too? | LATER | P3 | PostgreSQL first |

## Commerce And Operations Uncertainties

| ID | Question | Status | Phase | Default |
| --- | --- | --- | --- | --- |
| U19 | Which domestic payment should be integrated first, WeChat Pay or Alipay? | LATER | P6 | Decide when payment phase starts |
| U20 | Will the project need a mini program? | LATER | P6+ | Not planned |
| U21 | Will inventory and SKU management be needed? | LATER | P6+ | Not in MVP |
| U22 | Will membership or coupons be needed? | LATER | P6+ | Not in MVP |
| U23 | Will analytics or customer behavior tracking be needed? | LATER | P5+ | Basic analytics can be considered after public launch |

## Current Summary

Current deployment blocker: GitHub Pages publishing needs the remote repository Pages source enabled for GitHub Actions.

P1.5-P1.9 applied sensible MVP defaults: transparent header logo, placeholder product data, high-quality product imagery, and WeChat / Xiaohongshu QR slots.

P1.10-P1.17 completed the customer-facing MVP page with sensible defaults: hero, categories, product grid, detail modal, independent detail page, contact cards, and footer.

P1.18-P1.24 completed multi-viewport QA, copy cleanup, accessibility basics, performance basics, build checks, and main-flow browser verification.

P1.25 and P1.27 are prepared locally: GitHub Pages workflow and founder feedback checklist exist.

P1.26 is blocked until the remote repository enables Pages with source `GitHub Actions`, then reruns the workflow.
