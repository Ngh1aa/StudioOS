# StudioOS

StudioOS is a considered project workspace for small creative teams. The first vertical slice focuses on the overview dashboard: project health, focus tasks, recent activity, review queue, search, notifications and project creation.

## Design direction

The interface follows **Quiet Precision**: a warm ivory canvas, graphite typography, muted copper action points, sage progress states and an editorial utility layout. The goal is to preserve the visual confidence of Atelier and LuxRoom while demonstrating a denser, more practical product workflow.

## Stack

The frontend is intentionally framework-free: semantic HTML, one stylesheet and one JavaScript file. The interface keeps its data in local JavaScript state so the interaction model can be reviewed before adding persistence. Generated project imagery and the brand mark live in `assets/`.

## Run locally

Because this is a static site, you can open `index.html` directly or serve the folder with any static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173` in a browser.

## GitHub Pages

The included workflow copies `index.html`, `styles.css`, `script.js` and `assets/` into a small static artifact, then publishes it to GitHub Pages. No Node.js, package installation or bundler is needed in CI.

## Current interactions

The overview supports project search, responsive navigation, task completion, adding a focus task, project creation, project review dialogs and a notification popover. Navigation items that are outside the first vertical slice provide intentional feedback rather than dead ends.

## Next slice

The next product slice should add a project detail route with milestones, task filters, deliverable versions, comments and client-safe approval states. The data model should remain local until the information architecture is validated with real users.
