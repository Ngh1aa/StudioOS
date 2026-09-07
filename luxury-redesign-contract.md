# StudioOS — Luxury Redesign Contract

Date: 2026-09-08
Mode: interactive prototype / UI redesign
Scope: all existing workspace views and shared overlays

## Project truth preserved

- Existing navigation and page set: Overview, Projects, Calendar, Tasks, Team, Notes, Insights, Settings.
- Existing project/task/workspace data, filters, dialogs, keyboard behavior and application state remain owned by `script.js`.
- Current URLs, metadata, sitemap and GitHub Pages delivery remain unchanged.
- Existing editorial project imagery and StudioOS brand mark are reused.

## Current visible problems

| Current problem | Why it matters | New behavior | Visible delta | Verification |
|---|---|---|---|---|
| Multiple historical theme layers compete in the cascade | Shared components can drift between pages/states | `minimal.css` becomes a stable theme-owner shim importing one authoritative luxury layer | One coherent visual system across every route/state | Compare shared controls, surfaces and states across all views |
| Minimal SaaS cards make project work feel generic | StudioOS is a creative workspace and should foreground the work itself | Overview uses an editorial hierarchy with a featured first project and larger imagery | First project reads like a portfolio feature, not another equal card | Desktop/tablet/mobile overview review |
| Navigation and content have similar visual weight | Weak orientation and insufficient brand character | Obsidian rail separates navigation from the warm editorial canvas | Strong dark/light spatial hierarchy | Sidebar expanded/collapsed/mobile drawer review |
| Context panels visually blend with primary work | Decisions, agenda and capacity compete with core content | Contextual right rails use dark “concierge” surfaces | Inbox, agenda and capacity read as deliberate secondary decision zones | Overview/Calendar/Team screenshots |
| Existing UI relies on neutral sans hierarchy only | Functional but not distinctive enough for requested luxury direction | Editorial serif is reserved for page/project/content hierarchy; Inter remains the UI typeface | Premium editorial voice without sacrificing control legibility | Heading/body/control visual sanity |
| Blue accent reads as generic SaaS | Conflicts with luxury direction | Champagne metal accent is limited to focus, progress, selected states and micro-emphasis | Warmer premium signature with less decorative color | State and contrast review |

## Design contract

### Visual character

**Obsidian Editorial Luxury** — quiet, architectural, mature and image-led. Avoid fashion-site theatrics, excessive gold, glossy gradients, pill-heavy controls and decorative glass.

### Color roles

- Canvas: warm ivory `#F6F1E9`
- Paper: `#FBF8F2` / `#FFFAF3`
- Obsidian: `#15120F` / `#1B1713`
- Primary ink: `#17130F`
- Muted copy: warm stone `#766B60`
- Metal accent: champagne `#B8945F`, dark gold `#8E6D3E`
- Success: muted sage
- Warning: bronze
- Danger: muted oxblood

Gold is an accent, not a background system.

### Typography

- Display/content hierarchy: Cormorant Garamond with Baskerville/Georgia fallback.
- UI, controls and body copy: Inter.
- Display type may be expressive; control labels remain compact and precise.

### Geometry

- 3–6px default radius.
- Circular geometry reserved for avatars, brand mark and a small number of icon controls.
- No broad pill language for cards, filters or panels.

### Composition

- Overview: asymmetric 1.85fr / 0.72fr workspace + concierge rail.
- Overview project grid: 2 columns, first project spans full width as the featured work object.
- Projects: two-column index on large screens.
- Calendar / Tasks / Team: primary work + complementary context panel.
- Notes: browse + reading composition with paper-like reader.
- Settings: dark navigation rail + warm content forms.
- Insights: dark signal hero + restrained editorial data surfaces.

### Media contract

- Existing project editorial images remain primary visual proof.
- Image treatment is low-saturation, warm-neutral and high-clarity.
- Hover uses only a very small scale change; no aggressive crop motion.
- Overview featured image returns to standard 16:10 on compact screens.

### Interaction contract

- Existing JS behavior is preserved.
- Focus is champagne and always visible.
- Hover never removes labels or inverts text into low contrast.
- Reduced-motion preferences disable non-essential transforms/transitions.
- Disabled primary actions remain visibly disabled while retaining readable labels.

## Page-family decisions

| Family | Decision |
|---|---|
| Shared shell/navigation/topbar | IMPROVE — stronger orientation and brand signature |
| Overview | IMPROVE — editorial hierarchy + featured work + dark decision rail |
| Projects | IMPROVE — refined filters, metrics and image-led project index |
| Calendar | IMPROVE — light planning surface + dark agenda context |
| Tasks | IMPROVE — quiet task queue + stronger daily focus context |
| Team | IMPROVE — restrained member cards + dark capacity context |
| Notes | IMPROVE — editorial browse/read hierarchy |
| Insights | IMPROVE — premium signal hero and simplified chart styling |
| Settings | IMPROVE — clearer navigation/content separation |
| Popovers/dialogs/toasts | IMPROVE — shared luxury overlay language |

## Implementation owner

- `minimal.css`: stable final-theme entry point.
- `luxury.css`: authoritative visual system for this redesign.
- `script.js`: unchanged behavior/state owner.

## QA gates

Due now before merge:

- shared text/control visibility in default + hover + focus + disabled states;
- desktop/mobile sidebar states;
- Overview, Projects, Calendar, Tasks, Team, Notes, Insights and Settings visual sanity;
- project image crop sanity at large and compact widths;
- no horizontal overflow at 390px / 768px / desktop pressure points;
- dialogs/popovers remain readable over both light and dark nearby surfaces;
- reduced-motion behavior remains functional.

Production deploy verification is future-phase until the branch is reviewed and merged.
