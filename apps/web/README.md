# 南望玉叙 Web Frontend

This is the customer-facing MVP frontend for 南望玉叙.

## Stack

- React
- TypeScript
- Vite
- React Router with `HashRouter` for GitHub Pages compatibility
- Lucide React icons
- Oxlint
- Prettier

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run format
npm run format:check
```

## Current Scope

The frontend currently includes:

- App shell and static-host-safe routes
- Runtime logo assets under `public/brand/`
- Product and contact TypeScript types
- Static placeholder product data
- WeChat and Xiaohongshu contact channel placeholders
- Mobile-first home page with hero, categories, product cards, contact section, and footer
- Product detail modal
- Independent product detail route
- Multi-viewport QA pass for mobile, tablet, and desktop
- Main-flow browser verification: home -> product modal -> detail page -> contact
- GitHub Pages-compatible Vite base path configuration

The next implementation stage is confirming the GitHub Pages workflow deployment URL.
