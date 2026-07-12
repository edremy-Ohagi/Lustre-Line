# Mobile QA Checklist

Use this checklist before accepting UI work or sending a preview link to the founder.

## Required Viewports

Check at minimum:

```text
360 x 800   common Android narrow width
375 x 812   iPhone mini / older iPhone width
390 x 844   common modern iPhone width
430 x 932   large iPhone width
768 x 1024  tablet portrait
1280 x 720  desktop baseline
```

## First Screen

- Brand name or logo is visible.
- Jewelry product atmosphere is visible.
- Primary CTA is visible without scrolling too much.
- Header does not consume excessive vertical space.
- The page does not look like a generic template.

## Navigation

- Header links are readable and tappable.
- Mobile menu or compact navigation is easy to use if present.
- Category filters are reachable.
- No hover-only interactions are required.

## Product Cards

- Images keep stable aspect ratio.
- Product name is readable.
- Labels `新品 / 推荐 / 定制` do not crowd the card.
- RMB price or `询问价格` is clear.
- Cards do not overflow horizontally.
- Card tap/click target is comfortable.

## Search And Category Browsing

- Search input, magnifier icon, placeholder, and clear action remain usable at narrow widths.
- Search results update for product, category, material, and gemstone keywords.
- 热门款式 appears first in the category strip.
- The expanded category strip scrolls horizontally without forcing page-level horizontal overflow.
- Empty categories show an intentional message and a reachable consultation action.

## Product Detail Modal

- Modal opens from product card.
- Modal can be closed easily on mobile.
- Close control is visible and tappable.
- Product image, title, price, material, and description are readable.
- Modal has a clear link to independent product detail page.
- Body scroll is handled correctly while modal is open.

## Product Detail Page

- Page loads correctly from the product modal link.
- Back navigation is obvious.
- Gallery or main image does not dominate the whole page.
- Consultation CTA is easy to find.

## Contact And QR Codes

- WeChat QR area is visible and legible.
- The supplied WeChat QR image is fully visible without cropping.
- Xiaohongshu QR area is visible and legible.
- Placeholder QR state is visually intentional if real QR images are missing.
- Multiple contact channels do not become crowded.
- Copy or contact actions are tappable if implemented.

## Text And Layout

- No text overlaps another element.
- No text spills out of cards or buttons.
- No button label is clipped.
- No section has awkward empty space on mobile.
- Typography feels refined, not oversized.

## Performance

- Images are optimized or constrained.
- Offscreen images lazy-load where appropriate.
- No heavy animation blocks first render.
- Page remains smooth while scrolling.

## Customer-Facing Language

Confirm the page does not contain:

```text
demo
学习项目
练习
后端阶段
占位数据说明
技术栈
GitHub Pages
Vite
React
```

Technical wording may exist in docs, but not in customer-facing UI.
