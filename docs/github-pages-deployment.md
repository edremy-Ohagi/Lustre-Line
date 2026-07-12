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
https://<user>.github.io/<repo>/#/products/natural-stone-beads
```

## Vite Base Path

`apps/web/vite.config.ts` uses:

```text
GITHUB_PAGES=true
```

inside the workflow to set the Vite `base` path to the repository name, such as:

```text
/Lustre-Line/
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

## Current Deployment Blocker

The first workflow run built successfully but failed in the deploy step while the GitHub Pages API returned `404`.

That usually means Pages is not enabled for the repository yet.

To unblock:

1. Open the GitHub repository.
2. Go to `Settings` -> `Pages`.
3. Set `Build and deployment` source to `GitHub Actions`.
4. Open `Actions`.
5. Rerun `Deploy Web MVP to GitHub Pages`.

Expected preview URL after success:

```text
https://edremy-ohagi.github.io/Lustre-Line/
```
