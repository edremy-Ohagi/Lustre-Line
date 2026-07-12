# Acceptance Criteria

## MVP Frontend Acceptance

The first MVP is accepted when:

- The page clearly reads as 南望玉叙 within the first viewport.
- The visual style feels light luxury and gentle.
- Mobile layout has no obvious overlap, overflow, or broken spacing.
- Category browsing starts with 热门款式 and includes 项链、手链、耳钉、戒指、手串、手镯、标本、摆件、配件、高端珠宝、情侣款式.
- Keyword search can match product names, categories, materials, gemstones, and descriptions.
- Product cards show image, name, category, label, and RMB price or 询问价格.
- Product labels support 新品、推荐、定制.
- Product detail modal opens and closes correctly.
- Product detail modal can navigate to a dedicated detail page.
- The supplied WeChat QR code renders clearly, and the Xiaohongshu area has an intentional pending state.
- Contact channels are easy to find.
- Hero section focuses on product display and consultation conversion.
- No customer-facing text exposes implementation, learning, or demo context.
- The site can be shared through GitHub Pages.

## Mobile Acceptance

- Mobile first screen has a visible CTA.
- Buttons are tappable.
- Header does not dominate the screen.
- Product cards are readable.
- Detail modal works on small screens.
- QR code/contact area remains legible.

## Later Backend Acceptance

- Admin can log in.
- Admin can manage products.
- Admin can manage categories.
- Admin can upload product images.
- Admin can configure contact channels.
- Frontend reads data from backend.
- Basic validation and permission checks exist.

## Formal Deployment Acceptance

- Public frontend works.
- Admin is protected by login.
- API works behind Nginx.
- Database is not exposed directly.
- Images upload and render correctly.
- Logs are accessible.
- Basic backup strategy exists.
