# StudioOS Typography System

StudioOS dùng cặp font **Instrument Serif + DM Sans** theo direction Quiet Precision. Instrument Serif tạo orientation và nhịp editorial cho các tiêu đề lớn; DM Sans đảm nhiệm toàn bộ thao tác, metadata, trạng thái, dữ liệu và văn bản cần quét nhanh.

## Font pairing

| Vai trò | Font | Weights | Cách dùng |
|---|---|---:|---|
| Display / editorial | Instrument Serif | 400, italic 400 | Page title, section heading, metric number, calendar title, review preview |
| UI / operational | DM Sans | 400, 500, 600, 700 | Navigation, button, form, task, filter, status, metadata, chart labels |
| Fallback | Georgia / system sans | — | Dùng khi Google Fonts chưa tải hoặc offline |

## Type scale

| Token | Kích thước | Line-height | Tracking | Semantic role |
|---|---:|---:|---:|---|
| `--type-display-lg` | `clamp(46px, 5vw, 70px)` | `.90` | `-.052em` | Page titles |
| `--type-display-md` | `33px` | `.95` | `-.045em` | Major section headings |
| `--type-display-sm` | `29px` | `.95` | `-.035em` | Focus cards, settings cards |
| `--type-xl` | `20px` | `1.10` | `-.025em` | Large data or calendar numbers |
| `--type-lg` | `16px` | `1.25` | `-.01em` | Brand and prominent UI labels |
| `--type-md` | `14px` | `1.55` | `0` | Default body text |
| `--type-sm` | `12px` | `1.55` | `0` | Descriptions and supporting copy |
| `--type-xs` | `10px` | `1.35` | `.01em` | Buttons, task labels, card metadata |
| `--type-2xs` | `9px` | `1.20–1.45` | `.03–.16em` | Kicker, status, table headings, microcopy |

## Usage rules

Headings use Instrument Serif only when they provide orientation or hierarchy. They should not be used for long paragraphs, status labels, buttons or task rows. DM Sans is the default operational voice and should remain visually quiet through weight and spacing rather than excessive color.

Uppercase labels use `--type-2xs`, weight 700 and `--tracking-label`. Task and data rows use tabular-looking spacing, compact line-height and strong alignment between label, project context, priority and due date. Body copy stays at least 12px with a comfortable `1.55` line-height; microcopy below 10px is reserved for non-essential metadata.

## Page hierarchy

Every page follows the same sequence: kicker → display title → one-sentence description → primary action → section heading → operational content. Tasks adds a compact list header and a live result count so the user can scan state before reading individual rows.

## Accessibility and resilience

Typography never communicates status through color alone. Priority includes a text label and marker; completed tasks retain readable text with a copper strike-through. The system relies on local fallback fonts, preserves visible focus states, and keeps reduced-motion behavior independent from font loading.
