# Michele Du reference notes

## Source

- Homepage: https://micheledu.com/
- Project route: https://micheledu.com/project
- Profile route: https://micheledu.com/my-profile

## Patterns worth studying

The site treats the portfolio as an exploratory personal workspace rather than a conventional landing page. Its navigation exposes Dashboard, Project, Case Study and My Profile as separate mental models, which is relevant to StudioOS because the product already has Overview, Projects and Notes/Insights surfaces.

The experience uses a strong narrative device: a short identity prompt, a repeated “Hello / Stranger” motif, location coordinates and time-spent data. The useful lesson is not the literal copy, but the use of a small, memorable narrative layer to make otherwise abstract experience data feel personal and intentional.

The profile content is organized as a skill matrix with grouped skills and tools, plus an explicit self-assessment framing. For StudioOS, the transferable pattern is clearer information grouping and a visible relationship between a metric, its label and its implication—not a decorative skills chart.

The site uses restrained monochrome presentation, large typographic statements and progressive disclosure through routes. StudioOS should borrow the pacing, narrative hierarchy and metric-to-meaning relationship, while retaining its own warm linen canvas, dark studio rail, copper accent and task-first SaaS behavior.

## Guardrails for StudioOS

Do not copy the site’s identity copy, coordinates, repeated “Stranger” motif, exact typography, page composition or animation choreography. Any adaptation must make task status, project context and next action clearer for a small creative team.

## Initial StudioOS translation ideas

1. Add a compact “studio pulse” narrative on Overview: one meaningful metric, one sentence of interpretation and one suggested next action.
2. Give project surfaces a stronger case-study rhythm: context, current signal, implication and next move, rather than only status labels.
3. Make the existing Insights page feel more authored through restrained editorial headings and metric captions, while preserving table/chart accessibility.
4. Use progressive disclosure for detail panels and route-level transitions, keeping all keyboard and reduced-motion behavior intact.

## Additional route observations

The Project route separates filtering from browsing: it groups work by All, Dashboard, App, Website, Visual and 4 Fun, then offers a “View by” control and a repeated “Discover” action on each project. The transferable StudioOS pattern is to make filters explain the information architecture and to let the user browse a clear project index before opening detail.

The My Profile route uses short narrative sections such as “Inspired by Art”, “Curiosity = Dev”, “Product Designer” and “People”, each pairing a point of view with a compact set of evidence. The useful adaptation for StudioOS is an editorial layer around operational data: explain why a signal matters, then provide the relevant action or detail.

The source repeats content in its extracted public markup because of animation/carousel rendering. This is treated as an implementation detail, not a design goal; StudioOS should keep one semantic source of truth and preserve the existing reduced-motion and accessibility behavior.

## Applied StudioOS slice

The first translation is a project taxonomy layer on the Projects route. It adds a restrained “View by” control for Brand, Digital, Campaign and Research work, keeps status filters separate, updates the result count, and preserves search plus keyboard-accessible buttons. This borrows the source site's separation between browsing and filtering without copying its visual language or copy.

The slice was verified at desktop and 390px mobile widths. The Research view resolves to Field Notes with one result, while the Digital view preserves the active state and card layout. The taxonomy remains horizontally scrollable on narrow screens so the control does not force the project grid to overflow.
