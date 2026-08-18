# Visual verification notes — Calm UI refinements

## Projects desktop preview

The updated Projects page renders with a borderless filter rail, a single filter-tag language for Status and Type, and three independent summary widgets. The `Needs attention` widget keeps a narrow vermilion accent rule without introducing a containing card. Project thumbnails no longer render geometric overlays; the only image affordance is the centered `View project` CTA. Further browser checks will cover Calendar, Tasks, responsive layout and interactions before commit.

## Calendar and Tasks desktop preview

Calendar renders as an uninterrupted light workspace: the weekly grid and `Next up` agenda are separated by whitespace rather than contrasting surfaces. The active Week state uses a white inset with a slim blue underline inside a pale neutral switcher. Tasks displays independent metrics and has no black or teal sidebar cards; the former suggested-focus and guidance panels are separate pale surfaces with a 24px gap. `High` retains only a vermilion dot, while its label is neutral; `Due today` uses amber and leaves vermilion reserved for an overdue state.

## Interaction spot checks

The Tasks `Open` filter continues to limit the queue to the three open items and keeps the understated active treatment. Calendar navigation returns to the revised weekly surface without visual regressions. The remaining interaction check is the Month view; responsive checks will follow before the GitHub synchronization.

The existing Month control intentionally presents the `Month view is coming next` notice and retains that behavior after the visual restyle. Returning to Projects confirms the four-card grid and filter rail render without regression. This verification covered the agreed UI scope; the explicit Month implementation remains out of scope for this refinement.
