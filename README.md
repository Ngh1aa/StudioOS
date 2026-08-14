# StudioOS

StudioOS is a considered project workspace for small creative teams. The first vertical slice focuses on the overview dashboard: project health, focus tasks, recent activity, review queue, search, notifications and project creation.

## Design direction

The interface follows **Quiet Precision**: a warm ivory canvas, graphite typography, muted copper action points, sage progress states and an editorial utility layout. The goal is to preserve the visual confidence of Atelier and LuxRoom while demonstrating a denser, more practical product workflow.

## Stack

The frontend uses React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui primitives and Lucide icons. The interface is client-only for this first slice and keeps the data in local React state so the interaction model can be reviewed before adding persistence.

## Run locally

```bash
pnpm install
pnpm dev
```

The production build is generated with:

```bash
pnpm run check
pnpm run build
```

## GitHub Pages

The included workflow builds the app and publishes `dist/public` to GitHub Pages. The Vite base path switches to `/StudioOS/` inside GitHub Actions, while local development continues to use `/`.

## Current interactions

The overview supports project search, responsive navigation, task completion, adding a focus task, project creation, project review dialogs and a notification popover. Navigation items that are outside the first vertical slice provide intentional feedback rather than dead ends.

## Next slice

The next product slice should add a project detail route with milestones, task filters, deliverable versions, comments and client-safe approval states. The data model should remain local until the information architecture is validated with real users.
