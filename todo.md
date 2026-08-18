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

## Task drag-and-drop follow-up

- [x] Audit task order state, render lifecycle và interaction conflicts.
- [x] Thêm kéo thả để reorder task trong danh sách hiện tại.
- [x] Thêm drag handle, grabbed/dragging/drop indicator và keyboard reorder fallback.
- [x] Kiểm thử reorder với search/filter, completion, Undo, responsive và reduced motion.
- [x] Commit và deploy tính năng drag-and-drop lên GitHub Pages.

## UI cleanup follow-up

- [x] Gỡ thẻ giới thiệu “Small teams, clear work.” khỏi giao diện.
- [x] Kiểm thử, commit và deploy thay đổi UI cleanup.

## Performance and SEO follow-up

- [x] Audit baseline asset weight, request hints, loading behavior và cache strategy.
- [x] Tối ưu các tài nguyên tĩnh và JavaScript không làm thay đổi trải nghiệm chính.
- [x] Bổ sung và kiểm tra các metadata SEO cơ bản, canonical, robots và sitemap.
- [x] Kiểm tra production, commit và deploy các tối ưu performance/SEO.

## Micheledu reference follow-up

- [x] Phân tích pattern UI/UX từ micheledu.com và lưu các insight có thể học.
- [x] Chọn các cải tiến phù hợp với Quiet Precision, không sao chép nguyên mẫu.
- [x] Triển khai, kiểm tra accessibility/responsive và deploy các cải tiến StudioOS.

## Monochrome highlight and typography follow-up

- [x] Chuyển highlight project active sang màu trắng theo reference.
- [x] Dùng Inter cho text nội dung và serif cho tiêu đề trong toàn bộ StudioOS.
- [x] Đặt cỡ chữ content tối thiểu trong khoảng 12–16px, regenerate assets và deploy.

## StudioOS black-and-white implementation follow-up

- [x] Chuyển visual system StudioOS sang monochrome đen–trắng, gồm canvas, surface, navigation và trạng thái tương tác.
- [x] Điều chỉnh hierarchy, typography và project portfolio để phù hợp hướng monochrome.
- [x] Sửa workflow GitHub Pages, kiểm tra lại static interactions và xác minh bản cập nhật công khai.

## Portfolio layout implementation follow-up

- [x] Thay shell Overview cũ bằng bố cục Portfolio ba vùng: icon rail, project canvas và client inbox.
- [x] Dựng project cards monochrome theo mẫu, gồm tiến độ, collaborators, deadline và hành động ngữ cảnh.
- [x] Hoàn thiện responsive behavior, kiểm thử tương tác của Project inbox và xuất bản GitHub Pages sau khi xác nhận Portfolio layout hiển thị đầy đủ.

## Projects refinement follow-up

- [x] Chuẩn hóa filter Search, Status và Type thành một hệ thống tag thống nhất, không dùng khung bao thừa.
- [x] Tách Total Value, Moving Well và Needs Attention thành các widget độc lập; giữ accent cảnh báo ở Needs Attention.
- [x] Làm sạch thumbnail project, chỉ hiển thị CTA View project ở hover/focus và loại bỏ các hình học overlay.
- [x] Làm mảnh progress bar, đổi màu Review về neutral với accent chỉ khi hover/focus.
- [ ] Kiểm thử desktop/mobile, commit và đồng bộ Projects refinement lên GitHub Pages.

## Calendar and Tasks calm UI follow-up

- [x] Đưa mọi panel Calendar về surface sáng, làm nhẹ Week/Month filter và bỏ border bao ngoài không cần thiết.
- [x] Thay các khối sidebar Tasks nền đen/ngọc bằng surface sáng cùng ngôn ngữ, thêm khoảng cách rõ ràng giữa các panel.
- [x] Tách metrics và khu vực Search/Filter Tasks bằng khoảng trắng thay cho khung viền và divider dọc.
- [x] Giảm visual weight của bộ lọc Tasks; dùng active state nhẹ, không cạnh tranh với nút Add task.
- [x] Tiết chế semantic color của priority/due: dot đỏ cho High, chữ trung tính; Due today cam/amber và đỏ chỉ dành cho overdue.
- [ ] Kiểm thử Calendar/Tasks desktop-mobile, commit và đồng bộ toàn bộ calm UI refinements lên GitHub Pages.
