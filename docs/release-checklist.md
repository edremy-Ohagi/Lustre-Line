# Release Checklist

Use this checklist before sharing a preview link with the founder or deploying the MVP.

## Scope

- Confirm the preview is customer-facing, not a learning/demo page.
- Confirm the current phase does not include backend, payment, orders, login, or admin features.
- Confirm placeholder product images and QR codes are acceptable for this preview round.

## Content

- Brand name `南望玉叙` appears clearly.
- Copy is in Chinese and sounds like a real jewelry brand.
- No customer-facing text mentions demo, learning, technical stack, backend stage, GitHub Pages, Vite, or React.
- Product categories include 项链、手链、耳钉、戒指.
- Product cards show image, name, labels, and RMB price or `询问价格`.
- WeChat and Xiaohongshu contact areas are present.

## UX

- Run `docs/mobile-qa-checklist.md`.
- Home -> product modal -> detail page -> contact flow works.
- Header and primary CTA are visible on mobile.
- Product detail modal can be closed easily.
- Independent product detail page is readable on mobile.
- Contact / QR code area is legible and not crowded.

## Technical

- `npm run lint` passes.
- `npm run format:check` passes.
- `npm run build` passes.
- Browser console has no blocking application errors.
- Static routing works with `HashRouter`.

## Assets

- Logo renders with transparent background.
- Product images load and keep stable aspect ratios.
- Placeholder QR states look intentional until real QR files are provided.

## Handoff Notes

Before sending a link, prepare a short feedback request covering:

- Overall visual feeling
- Product image direction
- Product names, prices, materials, and sizes
- WeChat / Xiaohongshu QR codes
- Contact conversion wording
