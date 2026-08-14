# StudioOS — Vanilla conversion checklist

- [x] Chuyển app shell và dashboard markup sang `index.html`.
- [x] Chuyển design tokens, responsive layout và component styles sang `styles.css`.
- [x] Chuyển project state, task state, search, dialogs và notifications sang `script.js`.
- [x] Cập nhật workflow GitHub Pages để build static mà không phụ thuộc React/Vite.
- [x] Kiểm thử static delivery, asset paths và JavaScript syntax.
- [x] Commit phiên bản HTML/CSS/JS lên nhánh `main`.

## GitHub Pages follow-up

- [ ] Enable Pages in repository settings using GitHub Actions.
- [ ] Re-run the deploy workflow after Pages is enabled.
- [x] Verify the published StudioOS URL.

## UI redesign follow-up

- [x] Chọn và áp dụng font pair mới cho display, body và data UI.
- [x] Nâng cấp color tokens, surfaces, borders, shadows và spacing rhythm.
- [x] Redesign sidebar, topbar, dashboard signals, project cards và lower panels.
- [x] Tinh chỉnh dialog, toast, focus states, hover states và mobile navigation.
- [x] Kiểm tra lại static paths, responsive layout và JavaScript syntax.

## Remaining screens follow-up

- [ ] Thiết kế Projects với search, filter, status summary và project list.
- [ ] Thiết kế Calendar với timeline tuần, deadlines và task detail.
- [ ] Thiết kế Team với member directory, workload và invite state.
- [ ] Thiết kế Notes với searchable notes, tags và note editor state.
- [ ] Thiết kế Insights với project health, workload và chart language.
- [ ] Thiết kế Settings với workspace profile, notifications và preferences.
- [ ] Nối navigation, responsive shell và placeholder actions có feedback.
- [ ] Kiểm thử, commit và deploy các trang mới.
