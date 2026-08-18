# Expanded UI/UX verification

## Production build
- URL: https://ngh1aa.github.io/StudioOS/?v=20260818-expanded-ux-v1
- Asset version observed in production: uiux-director-v2.
- Overview loaded successfully with Overview heading, project cards, Project inbox and task list.
- Project inbox shows the updated task names: Review Lumen House feedback, Share final type specimens, Move launch checklist to review, Add notes from client sync.
- Navigation exposes Calendar, Tasks and Team routes for follow-up verification.

## Static checks
- `node --check script.js` passed.
- `git diff --check` passed.
- No leaked audit copy found in source for the removed labels.
- Commit pushed: f021481.


## Route verification

Tasks production rendered the corrected `04 / Tasks` breadcrumb and the user-facing copy `Queue / Guidance`, with no leaked design-note language. The task list uses the same labels as Overview, including `Review Lumen House feedback` and `Share final type specimens`.

Calendar production rendered the corrected `03 / Calendar` breadcrumb. The calendar grid and the right-side agenda now use the shared event data: `Review Lumen House feedback`, `Share final type specimens`, and `Launch sync`, with the fourth grid event `Client feedback window`. The agenda exposes Review, Handoff and Meeting legend labels.


Team production rendered `05 / People` consistently in both the page heading and directory section. Each member now exposes a readable capacity state alongside the percentage: `watch capacity` at 72%, `healthy capacity` at 54% and 36%, and `near capacity` at 81%. The progress bars also expose ARIA progressbar metadata with current values.
