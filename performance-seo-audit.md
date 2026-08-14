# StudioOS — Performance & Basic SEO Audit

**Ngày kiểm tra:** 14 August 2026

## Kết luận

StudioOS đã được tối ưu theo hướng an toàn cho một website static trên GitHub Pages. Phần tải ảnh hiện dùng WebP, các project cover ngoài vùng nhìn đầu tiên dùng lazy loading, CSS và JavaScript production được minify, còn các asset cũ không được runtime tham chiếu đã được loại khỏi artifact. Về SEO kỹ thuật cơ bản, trang đã có title rõ hơn, meta description, robots directive, canonical URL, Open Graph/Twitter metadata, `robots.txt` và `sitemap.xml`.

## Số liệu trước và sau tối ưu

| Hạng mục | Trước tối ưu | Bản production sau tối ưu | Thay đổi |
|---|---:|---:|---|
| CSS | 68,440 bytes | 59,016 bytes | Giảm khoảng 13.8% nhờ minify |
| JavaScript | 52,732 bytes | 46,032 bytes | Giảm khoảng 12.7% nhờ minify |
| Project cover runtime | PNG khoảng 0.8–1.2 MB/file | WebP khoảng 14–31 KB/file | Giảm mạnh dung lượng ảnh |
| Asset directory deploy | Nhiều PNG legacy và refresh | Logo PNG nhỏ + 4 WebP | Loại bỏ asset không dùng |

Các con số trên là số đo trực tiếp từ working tree và artifact production, không phải ước lượng. HTML production sau khi bổ sung metadata có thể lớn hơn một chút, nhưng phần tăng này là markup SEO tĩnh rất nhỏ so với phần dung lượng ảnh đã giảm.

## Thay đổi hiệu năng

Project cover đã chuyển sang WebP với kích thước hiển thị giữ nguyên. Renderer bổ sung `loading="lazy"`, `decoding="async"`, `width` và `height` cho ảnh card để trình duyệt có thể trì hoãn ảnh ngoài vùng nhìn đầu tiên và giữ ổn định layout. Logo sidebar vẫn tải eager vì là nhận diện ở vùng nhìn đầu tiên.

Production hiện tham chiếu `styles.min.css` và `script.min.js` với cache-busting query mới. Source `styles.css` và `script.js` vẫn được giữ nguyên để dễ bảo trì. GitHub Actions được cập nhật để đóng gói đúng các bản minified, `robots.txt`, `sitemap.xml` và asset WebP.

## Kiểm tra SEO cơ bản

Trang chính hiện có title mô tả rõ sản phẩm, meta description, `lang="en"` phù hợp với nội dung giao diện hiện tại, canonical URL đến bản GitHub Pages chính thức, robots directive, Open Graph và Twitter card metadata. `robots.txt` cho phép crawl toàn site và trỏ đến sitemap; sitemap hiện khai báo URL chính vì các màn hình Projects, Calendar, Tasks, Team, Notes, Insights và Settings là các trạng thái client-side trong cùng một document, không phải các URL HTML độc lập.

Các ảnh project card hiện có alt text theo tên project. Ảnh review dialog được cập nhật alt động khi mở project. Đây là cải thiện accessibility và giúp máy tìm kiếm hiểu ngữ cảnh ảnh hơn so với alt rỗng trước đó.

## Production verification

Production URL [StudioOS trên GitHub Pages](https://ngh1aa.github.io/StudioOS/) trả về HTTP 200. Các endpoint `robots.txt`, `sitemap.xml`, CSS minified, JavaScript minified và một WebP cover đều tải thành công. HTML production chứa canonical, description, robots, Open Graph title và các tham chiếu minified mới. JavaScript minified vẫn chứa logic task drag-and-drop hiện có.

Google PageSpeed Insights API không trả về điểm số trong lần kiểm tra này vì endpoint trả HTTP 429. Vì vậy báo cáo không đưa ra Lighthouse score hoặc Core Web Vitals giả định. Muốn có số liệu field data cần chạy PageSpeed Insights/Lighthouse độc lập sau khi cache production ổn định, đồng thời kết nối Google Search Console để kiểm tra indexation thực tế.

## Giới hạn dữ liệu

Audit này chỉ đánh giá source, artifact production, response headers và các metadata có thể kiểm tra trực tiếp. Chưa có dữ liệu Google Search Console, GA4, CrUX, backlink, crawl export hoặc log server nên chưa thể kết luận về organic traffic, từ khóa, backlink profile, index coverage hay Core Web Vitals thực tế của người dùng.

## Ưu tiên tiếp theo

1. Kết nối Google Search Console và submit `https://ngh1aa.github.io/StudioOS/sitemap.xml`.
2. Chạy Lighthouse/PageSpeed Insights từ thiết bị mobile sau khi CDN cache bản deploy mới.
3. Nếu muốn SEO cho từng màn hình nội bộ, chuyển các trạng thái client-side quan trọng thành URL có nội dung crawlable riêng; hiện sitemap chỉ khai báo trang chính.

## References

1. [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
2. [Google Search Central — Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
3. [Google Search Central — Robots.txt specifications](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)
4. [web.dev — Fast load times](https://web.dev/fast/)
