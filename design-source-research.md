# StudioOS UI inspiration research

## Bright Pill OS refresh — August 2026

### Apple Human Interface Guidelines — Buttons

URL: https://developer.apple.com/design/human-interface-guidelines/buttons

Apple recommends using the app accent colour for primary actions and reserving system red for destructive actions. StudioOS maps that guidance to a consistent blue gradient for primary pills, neutral glass for secondary controls, green for success and pink-red only for destructive or error feedback.

### Apple Human Interface Guidelines — Color

URL: https://developer.apple.com/design/human-interface-guidelines/color

Apple's system colours are designed to remain legible across backgrounds and vibrancy. StudioOS uses the familiar blue, green, orange, pink, purple and cyan roles while keeping saturated colour on compact controls and status surfaces rather than flooding whole content areas.

### Apple Human Interface Guidelines — Materials

URL: https://developer.apple.com/design/human-interface-guidelines/materials

Apple describes materials as a way to separate foreground content from the background while retaining context. The StudioOS shell, navigation, top bar, menus and dialogs therefore use translucent white surfaces, blur and subtle borders, with solid or nearly solid backgrounds where dense text needs maximum clarity.

### Apple Human Interface Guidelines — Tab bars

URL: https://developer.apple.com/design/human-interface-guidelines/tab-bars

Apple reserves tab bars for navigation rather than actions. StudioOS keeps the left capsule rail exclusively for page changes and places create, filter, review and save actions inside page-specific toolbars and cards.

### Apple Human Interface Guidelines — Layout

URL: https://developer.apple.com/design/human-interface-guidelines/layout

Apple recommends familiar relationships between controls and the content they affect. StudioOS groups search and filter pills with their result collections, keeps status and progress inside each project card, and moves responsive navigation into a focused mobile sheet without changing page hierarchy.

## Initial source notes

### SaaSFrame

URL: https://www.saasframe.io/

SaaSFrame presents a library of 5,000+ real-world SaaS UX/UI examples covering websites, product interfaces, email sequences, desktop/mobile variants and user flows. It supports filtering by screen or flow and promotes access to related Figma files. The useful StudioOS angle is not copying a visual skin, but comparing how mature SaaS products structure dashboards, responsive versions, settings and task-oriented flows.

### SaaSUI

URL: https://www.saasui.design/

SaaSUI describes a curated library of 3,500+ SaaS UI patterns from real products such as Notion, Linear, Intercom, Figma and Airtable. It organizes examples by pattern type including dashboard, settings, navigation, empty state, modal, form, table, profile, search, notification, calendar and analytics. This is particularly useful for auditing StudioOS page-by-page while preserving its own Quiet Precision visual language.

### 60fps

URL: https://60fps.design/

60fps is a collection of interaction details from best-in-class apps with filters for buttons, calendars, cards, empty states, fade, input, invite, loading, progress, search, shared-element, slide, toast and other behaviors. The useful StudioOS approach is to study one interaction at a time—especially task completion, search feedback, dialog entry and page transitions—rather than adding broad decorative motion.

### Tubik editorial web design collection

URL: https://tubikstudio.com/blog/media-editorial-website-design/

The collection frames editorial UI around readability, margin, typography, spacing and information hierarchy. Its strongest StudioOS lessons are wide breathing room, restrained neutral surfaces, serif authority for headings, predictable navigation, careful scanning rhythm and using imagery as a deliberate editorial object rather than as decoration.

### SaaS Interface

URL: https://saasinterface.com/

SaaS Interface is a gallery of SaaS app UI and UX examples used by design teams. It is best treated as a visual breadth source for comparing product surfaces, not as a source of validated interaction rules. For StudioOS, it can help collect references for project cards, list/detail compositions and dashboard density before translating the useful parts into the existing token system.

### Linear

URL: https://linear.app/

Linear positions itself as a system for product development built around purpose-built workflows, speed and reduced noise. Its public product presentation shows issues, projects, cycles, calendars, comments, activity and command-driven agent workflows. The relevant StudioOS lessons are progressive disclosure, compact but legible status labels, strong keyboard/command affordances, predictable project hierarchy and keeping the main workspace focused rather than decorating every surface.

### Mobbin

URL: https://mobbin.com/

Mobbin focuses on design patterns and complete user journeys, including settings, sidebars, bottom sheets, icons, toasts, progress indicators, dialogs, tabs, buttons, search and onboarding. It also exposes flows with micro-interactions and animations rather than only static screenshots. This makes it a strong source for testing StudioOS transitions and mobile drawer behavior across a complete journey.

### Typewolf

URL: https://www.typewolf.com/

Typewolf is a typography reference with a practical checklist and visual examples. It should be used to audit StudioOS hierarchy, measure display/body contrast, tune line-height and letter-spacing, and find alternate serif/sans pairings only if Instrument Serif + DM Sans stops carrying the brand voice.

### Apple Human Interface Guidelines — Motion

URL: https://developer.apple.com/design/human-interface-guidelines/motion

Apple describes motion as a way to convey status, provide feedback and instruction, and enrich the experience. For StudioOS, this supports keeping page transitions, toast entry, task completion and dialog motion functional and brief rather than decorative.

### W3C WCAG 2.3.3 — Animation from Interactions

URL: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html

W3C explains that non-essential interaction animation should be disableable and recommends respecting user motion preferences through `prefers-reduced-motion`. The StudioOS implication is to preserve useful state feedback while removing page transitions, scroll-linked effects and decorative movement for users who request reduced motion.
