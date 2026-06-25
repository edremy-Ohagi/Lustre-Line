# ADR 0002: Frontend MVP Stack

## Status

Accepted

## Date

2026-06-23

## Context

The first deliverable should be a polished, mobile-first frontend MVP that can be shared quickly with the founder. The site should show the brand, product categories, product cards, product details, RMB prices, consultation channels, and QR code areas.

The project may later grow into a full-stack system with admin, Java backend, PostgreSQL, image upload, DigitalOcean deployment, and domestic payments.

## Decision

Use this stack for the first frontend MVP:

```text
React
TypeScript
Vite
GitHub Pages
HashRouter or static-host-safe routing
```

Place the formal app under:

```text
apps/web
```

Use high-quality placeholder product images for MVP, with data structured so real backend data can replace static data later.

## Alternatives Considered

### Plain HTML / CSS / JavaScript

Pros:

- Very fast to ship.
- Simple hosting.

Cons:

- Less useful for job readiness.
- Harder to evolve into a structured app.

### Next.js immediately

Pros:

- Better long-term structure.
- Better route and rendering options.

Cons:

- More deployment complexity for the first preview.
- SEO is not a current priority.

### Vue

Pros:

- Strong domestic ecosystem.

Cons:

- The current project also aims to improve React / TypeScript job relevance.

## Consequences

Positive:

- Fast MVP delivery.
- Good fit for GitHub Pages.
- Useful for frontend and full-stack job positioning.
- Keeps backend complexity out of the first preview.

Tradeoffs:

- Hash routing may be less elegant than clean URLs.
- A later migration to Next.js may be considered when SEO, server rendering, or full-stack frontend needs become important.

## Follow-Up

When the MVP is validated by the founder, reassess whether to:

- keep Vite for the public frontend,
- migrate frontend to Next.js,
- or keep Vite frontend and add separate Spring Boot backend/admin.
