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
- Category browsing starts with 热门款式 and includes all currently confirmed categories.
- Keyword search returns relevant products for representative terms such as 翡翠、手镯、海蓝宝、标本.
- Product cards show image, name, labels, and RMB price or `询问价格`.
- The supplied WeChat QR code renders without cropping; the Xiaohongshu pending state remains intentional until real information is provided.

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
- The Xiaohongshu pending state looks intentional until the remaining real QR/profile information is provided.

## Handoff Notes

Before sending a link, prepare a short feedback request covering:

- Overall visual feeling
- Product image direction
- Product names, prices, materials, and sizes
- WeChat / Xiaohongshu QR codes
- Contact conversion wording
