# StudioOS — Vanilla conversion checklist

- [x] Chuyển app shell và dashboard markup sang `index.html`.
- [x] Chuyển design tokens, responsive layout và component styles sang `styles.css`.
- [x] Chuyển project state, task state, search, dialogs và notifications sang `script.js`.
- [x] Cập nhật workflow GitHub Pages để build static mà không phụ thuộc React/Vite.
- [x] Kiểm thử static delivery, asset paths và JavaScript syntax.
- [x] Commit phiên bản HTML/CSS/JS lên nhánh `main`.

## GitHub Pages follow-up

- [x] Enable Pages in repository settings using GitHub Actions.
- [x] Re-run the deploy workflow after Pages is enabled.
- [x] Verify the published StudioOS URL.

## UI redesign follow-up

- [x] Chọn và áp dụng font pair mới cho display, body và data UI.
- [x] Nâng cấp color tokens, surfaces, borders, shadows và spacing rhythm.
- [x] Redesign sidebar, topbar, dashboard signals, project cards và lower panels.
- [x] Tinh chỉnh dialog, toast, focus states, hover states và mobile navigation.
- [x] Kiểm tra lại static paths, responsive layout và JavaScript syntax.

## Remaining screens follow-up

- [x] Thiết kế Projects với search, filter, status summary và project list.
- [x] Thiết kế Calendar với timeline tuần, deadlines và task detail.
- [x] Thiết kế Team với member directory, workload và invite state.
- [x] Thiết kế Notes với searchable notes, tags và note editor state.
- [x] Thiết kế Insights với project health, workload và chart language.
- [x] Thiết kế Settings với workspace profile, notifications và preferences.
- [x] Nối navigation, responsive shell và placeholder actions có feedback.
- [x] Kiểm thử, commit và deploy các trang mới.

## Fixed sidebar follow-up

- [x] Cố định sidebar theo viewport ở desktop.
- [x] Tách vùng cuộn riêng cho nội dung bên phải.
- [x] Bảo toàn mobile drawer và mobile scrim behavior.
- [x] Kiểm thử scroll, responsive layout và deploy bản sửa.

## Tasks motion follow-up

- [x] Thêm motion tokens cho hover, press, page transition, drawer và dialog.
- [x] Tạo trang Tasks với filter, task rows, priority và completion states.
- [x] Tích hợp Toast thông báo hoàn thành task.
- [x] Tích hợp Undo action cho task vừa hoàn thành.
- [x] Thêm reduced-motion fallback và kiểm thử responsive.
- [x] Commit và deploy bản Tasks mới.

## Color palette follow-up

- [x] Audit semantic color roles và contrast hiện tại.
- [x] Chốt palette mới cho canvas, surface, ink, copper, sage, blue và danger.
- [x] Áp dụng tokens vào component states và data visualization.
- [x] Kiểm tra contrast, hover/focus/disabled states và deploy.

## Shared icon system follow-up

- [x] Audit toàn bộ icon hiện tại và loại bỏ icon mix giữa nhiều style.
- [x] Chuẩn hóa một icon registry SVG dùng chung cho navigation, cards, controls và feedback states.
- [x] Thiết lập quy tắc stroke, kích thước, viewBox, màu semantic và accessibility label.
- [x] Kiểm thử icon trên Overview, Projects, Calendar, Tasks, Team, Notes, Insights và Settings.
- [x] Commit và deploy icon system mới lên GitHub Pages.

## Full project audit follow-up

- [x] Audit source syntax, missing selectors, duplicate handlers và unresolved icon keys.
- [x] Audit asset paths, external font loading và GitHub Actions static output.
- [x] Kiểm thử semantic markup, focus states, keyboard flow, reduced motion và responsive shell.
- [x] Kiểm thử navigation, search, filters, dialogs, toast/undo và placeholder actions.
- [x] Sửa lỗi phát hiện được, chạy regression và xác nhận production sau deploy.

## Brand imagery refresh follow-up

- [x] Audit logo, favicon, project covers và mọi asset reference hiện tại.
- [x] Tạo logo mark và bộ project imagery mới theo Quiet Precision.
- [x] Tích hợp asset mới vào sidebar, favicon, project cards và review dialog.
- [x] Kiểm tra asset paths, contrast, responsive rendering và production load.
- [x] Commit và deploy bộ nhận diện hình ảnh mới lên GitHub Pages.

## UI inspiration research follow-up

- [x] Nghiên cứu nguồn dashboard/workspace, editorial SaaS, typography và motion phù hợp Quiet Precision.
- [x] Kiểm tra trực tiếp các website và ghi lại pattern có thể học, không sao chép.
- [x] Chọn shortlist nguồn tham khảo và mapping vào các khu vực UI StudioOS.

## Tasks and typography system follow-up

- [x] Audit Tasks hierarchy, density, filters, status states và current font usage.
- [x] Nâng cấp Tasks theo pattern Linear/SaaSUI cho focus, grouping, filters và feedback.
- [x] Định nghĩa typography tokens, scale, pairing, weight, line-height và tracking.
- [x] Áp dụng typography system vào toàn bộ shell, pages, cards, dialogs, tables và data UI.
- [x] Kiểm thử responsive, accessibility, reduced motion, regression và deploy.
