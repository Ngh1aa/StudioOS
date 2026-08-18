# StudioOS UX audit observations

## Overview

Production Overview xác nhận sidebar đang active đúng với Overview, nhưng heading nội dung là `Projects`, khiến ngữ cảnh màn hình bị lệch: người dùng vào Overview nhưng mắt lại nhận một project dashboard.

Project card hiện hiển thị progress ở cả cover (`Preview artwork · 78% complete`) và phần body (`Project progress 78%` + progress bar), tạo lặp thông tin. Status trong card cần được mã hóa semantic rõ hơn thay vì phụ thuộc vào text và dot đen.

## Projects

Production Projects xác nhận có hai nhóm điều khiển liên quan đang tách thành hai hàng: nhóm status (`All`, `In review`, `On track`, `Not started`) nằm trong page toolbar cùng Sort, còn nhóm taxonomy (`All work`, `Brand`, `Digital`, `Campaign`, `Research`) nằm ở hàng `VIEW BY`. Mối quan hệ giữa hai bộ lọc chưa được giải thích.

Nút Sort nằm cùng thanh toolbar nhưng cách biệt về mặt thị giác so với nhóm lọc do khoảng trống và phân nhóm hiện tại. Metric strip đặt `Studio note` cùng hàng với các số liệu định lượng, làm giảm hierarchy dữ liệu.

Project screen đang có active nav `Projects` và heading `Projects.` nhất quán hơn Overview. Các filter là button nhưng cần bổ sung semantics rõ ràng hơn cho active state, group label và khả năng keyboard/focus.
