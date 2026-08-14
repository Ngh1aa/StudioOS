# Remaining pages browser findings

Date: 2026-08-14

The currently published GitHub Pages build loads the existing StudioOS Overview correctly with the Quiet Precision visual system and Instrument Serif / DM Sans typography.

Clicking the published `Projects` navigation currently changes the breadcrumb but keeps the Overview content visible and shows the toast `Projects workspace is queued for the next slice.` This confirms the public site is still running the previous commit; the new local page templates have not been pushed and deployed yet.

Next validation target after deployment: Projects should render its own page header, search/filter toolbar, project index and metric strip; the remaining routes should render their own page content instead of the placeholder toast.

After commit `c6d271c` and successful workflow `31763709101`, the public page still renders the old Overview and the Projects click still shows the old placeholder toast. The deployment job reports success, so the next debugging step is to inspect the workflow artifact path and verify that the deployed artifact contains the new `script.js` functions.

After cache-busting commit `a4a2d6c` and successful workflow `31763802860`, Pages serves the new versioned asset references, but the browser still shows Overview after clicking Projects. The next likely issue is JavaScript runtime/event binding rather than Pages artifact caching.

The exact versioned production script contains `projectsPage`, `renderPage` and the new `[data-nav]` handler, and the deployed `index.html` hash matches the local repository. A fresh query URL still changes the breadcrumb to `Projects` but leaves Overview mounted. This points to a runtime exception during the click handler, likely before `renderPage` completes; browser console inspection or an explicit defensive error guard is needed next.
