# StudioOS — Design direction notes

## Approach 1: Quiet Precision

**Very Brief Intro:** Một workspace SaaS bình tĩnh, có cấu trúc và giàu khoảng thở; dùng editorial typography để tạo cá tính nhưng đặt hierarchy và khả năng quét thông tin lên trước. Đây là hướng được chọn vì nối được thế mạnh visual của Atelier/LuxRoom với product UX thực dụng hơn.

**Probability:** 0.07

## Approach 2: Warm Utility

**Very Brief Intro:** Một công cụ cộng tác thân thiện với nền sáng ấm, màu trạng thái rõ và nhiều microcopy mang tính hỗ trợ. Hướng này gần gũi hơn nhưng dễ bị giống các productivity SaaS phổ biến.

**Probability:** 0.04

## Approach 3: Signal / Command

**Very Brief Intro:** Một workspace tối, tương phản cao, nhấn vào shortcut, command palette và nhịp điệu điều hành dự án. Hướng này mạnh về tool personality nhưng không được dùng làm mặc định để tránh rơi vào dark-tech cliché.

**Probability:** 0.03

## Chosen approach: Quiet Precision

### Design Movement

Swiss editorial modernism giao với calm productivity: cấu trúc chính xác, typography có nhịp điệu và khoảng trắng được dùng để giảm cognitive load.

### Core Principles

1. **Clarity before decoration:** người dùng phải biết mình đang ở đâu, điều gì cần chú ý và hành động tiếp theo là gì.
2. **Quiet hierarchy:** chỉ dùng màu accent cho hành động, trạng thái và thông tin cần ưu tiên.
3. **Editorial utility:** brand layer có cá tính, nhưng data layer phải dễ quét, ổn định và predictable.
4. **States are part of the product:** empty, loading, review, overdue, success và error cần được thiết kế từ đầu.

### Color Philosophy

Warm ivory làm nền để giảm cảm giác lạnh của SaaS; graphite tạo độ tin cậy và đọc tốt; sage biểu thị trạng thái đang tiến triển; copper là signature accent cho các điểm cần hành động. Màu không dùng để trang trí mà để phân cấp attention.

### Layout Paradigm

Một sidebar bền vững kết hợp với canvas chính bất đối xứng: dashboard mở đầu bằng một vùng chào ngắn, sau đó chuyển sang nhịp 8/4 giữa project overview và daily focus. Không dùng một grid card đồng nhất cho mọi thứ.

### Signature Elements

- Dấu hiệu thương hiệu là một khung vuông mở với điểm lệch, biểu thị project đang chuyển động.
- Đường kẻ mảnh và số thứ tự nhỏ để tạo nhịp editorial cho section label.
- Project cover dùng texture trừu tượng nhẹ, không dùng stock photo làm nền cho dữ liệu.

### Interaction Philosophy

Mỗi action có phản hồi tức thời và rõ, nhưng không gây ồn. Hover chỉ nâng hierarchy; create/review là các moment cần drawer/dialog; shortcut và keyboard action phải nhanh, không animate thừa.

### Animation

Dùng ease-out ngắn cho button press, popover và toast; project card chỉ nâng nhẹ khi hover; entrance animation theo nhóm với độ trễ nhỏ. Tôn trọng `prefers-reduced-motion`, không dùng parallax hoặc animation làm chậm thao tác dữ liệu.

### Typography System

`DM Serif Display` dành cho brand headline, greeting và các điểm neo cảm xúc. `Manrope` dành cho navigation, labels, metadata, table và body copy. Heading lớn dùng letter-spacing hơi âm; UI text ưu tiên line-height thoáng và weight 500–700.

### Brand Essence

StudioOS là workspace giúp các creative studio nhỏ biến feedback phân tán thành tiến độ có thể nhìn thấy. Tính cách: **precise, calm, considered**.

### Brand Voice

Headline nói ngắn và có điểm nhìn; CTA dùng động từ cụ thể; microcopy cho biết trạng thái và bước tiếp theo, không dùng filler.

> “Make the next step visible.”

> “Three projects are moving. One needs your eye.”

### Wordmark & Logo

Biểu tượng là open square kết hợp một điểm lệch và đường nối mảnh; wordmark dùng chữ sans-serif viết hoa nhỏ với tracking rộng, không dùng logo chữ mặc định của font hệ thống.

### Signature Brand Color

Muted copper `#B96E4B`, dùng tiết chế cho primary action, selected marker và những điểm cần người dùng đưa ra quyết định.

## Style Decisions

### Monochrome readability refresh — 2026-08-14

StudioOS chuyển sang hệ trắng–đen với graphite làm màu neo, nền trắng và thang xám cho trạng thái. Typography được tăng nhẹ ở navigation, body copy, task rows và metadata để workspace dễ đọc hơn; màu sắc vẫn giữ vai trò semantic nhưng không còn dùng accent màu để trang trí.
