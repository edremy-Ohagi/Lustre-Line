# GitHub Pages Deployment

This project deploys the frontend MVP from `apps/web` to GitHub Pages.

## Workflow

Deployment workflow:

```text
.github/workflows/deploy-pages.yml
```

It runs when:

- `main` is pushed
- the workflow is manually triggered from GitHub Actions

## Build Source

```text
apps/web
```

Build command:

```bash
npm ci
npm run build
```

The workflow uploads:

```text
apps/web/dist
```

## Static Routing

The frontend uses `HashRouter`, so product detail pages work on GitHub Pages without server rewrite rules.

Example route:

```text
https://<user>.github.io/<repo>/#/products/moon-pearl-necklace
```

## Vite Base Path

`apps/web/vite.config.ts` uses:

```text
GITHUB_PAGES=true
```

inside the workflow to set the Vite `base` path to the repository name, such as:

```text
/Jewel-show/
```

Local development and local builds keep:

```text
/
```

## GitHub Settings

In the GitHub repository settings, Pages should use:

```text
Source: GitHub Actions
```

After a successful workflow run, the deployment URL appears in the workflow summary.
