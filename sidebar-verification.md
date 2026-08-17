# Sidebar verification notes

## 17 Aug 2026

- Bản live hiện tại là rail icon-only, các nhãn điều hướng bị ẩn bởi `portfolio-layout.css`.
- Sau khi chuyển sang layout mở rộng 248px, các nhãn `Workspace`, `Manage`, tên workspace và nhãn từng mục điều hướng đã hiển thị.
- Active navigation dùng nền đen và icon/text trắng; trạng thái thường dùng icon/text xám đậm trên nền trắng để tăng contrast.
- Bản đầu tiên có brand/workspace text bị chìm do rule màu trắng từ hệ thống sidebar cũ; đã bổ sung màu chữ đen/xám trong `portfolio-layout.css`.
- Sidebar được bổ sung `overflow-y: auto` và vùng `.sidebar-bottom` sticky để nút Collapse không bị rơi khỏi viewport thấp.
- Toggle dùng `localStorage` key `studioos-sidebar-collapsed`; khi thu gọn, layout chuyển từ 248px sang 72px, ẩn nhãn và giữ icon-only.
- Mobile vẫn dùng menu mở sidebar; nút desktop Collapse được ẩn dưới 900px để tránh trùng với mobile menu.
- `node --check script.js`, `curl` local và `git diff --check` đều đã chạy thành công.


## Interaction check

Ở trạng thái mở rộng, nút `Collapse` xuất hiện ở cuối sidebar với icon mũi tên trái. Sau khi bấm, sidebar chuyển thành rail 72px, toàn bộ nhãn được ẩn, icon vẫn giữ được trạng thái active, và nút đổi accessible label/title thành `Expand sidebar`. Nội dung chính tự giãn sang trái, không tạo khoảng trắng thừa.
