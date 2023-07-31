1. File-system Routing
- Index routes
- Nested routes
- Dynamic routes

2. Navigation between Page

3. SSG, SSR, CSR, ISR

- Pre-rendering: là quá trình tạo ra các trang web tĩnh trước khi chúng được gửi đến browser.
  Có 2 phương pháp chính để pre-render: + SSG + SSR

  Lợi ích: + Tốc độ tải nhanh + SEO tốt + Tiết kiệm tài nguyên máy chủ

- SSG: Static Side Generation: khi build time các trang web được tạo ra và lưu trữ dưới dạng các file HTML

- SSR: Server Side Rendering: các trang web được tạo ra khi có request từ browser.

- CSR: Client Side Rendering: các trang web được tạo ra và hiện thị bằng JS chạy trực tiếp trên rowser

- ISR - Incremental Static Regeneration: ISR kết hợp giữa tạo trước các trang web tĩnh (SSG) và tái tạo tĩnh dựa trên yêu cầu (dynamic static regeneration). Với ISR, bạn có thể tạo ra các trang web tĩnh trong giai đoạn xây dựng ban đầu, nhưng cũng cho phép cập nhật nội dung của chúng dựa trên yêu cầu từ người dùng.

4. Automatic Static Optimization: Automatic Static Optimization (tự động tối ưu hóa tĩnh) là một tính năng trong Next.js, một framework phát triển web.

Khi bật Automatic Static Optimization, Next.js sẽ tự động xác định xem trang web nào có thể được pre-rendered và phân phối dưới dạng các tệp HTML tĩnh. Tính năng này sẽ tự động xử lý các yêu cầu và trả về trang web tĩnh từ bộ nhớ cache, giảm thiểu sự tương tác với máy chủ và cải thiện hiệu suất tải trang.

5. SSG getStaticProps: là một phương thức pre-rendering trong Next.js giúp tạo ra các trang web tĩnh (static pages) có dữ liệu động. Hàm getStaticProps được sử dụng chủ yếu trong trường hợp các trang web có nội dung ít thay đổi hoặc nếu dữ liệu có thể được xây dựng trước và lưu trữ dưới dạng các trang tĩnh.

6. SSG getStaticPahts: là một phương thức pre-rendering trong Next.js giúp xác định các đường dẫn cho các trang tĩnh dựa trên dữ liệu động. Khi sử dụng getStaticPaths trong một trang, bạn có thể định nghĩa các đường dẫn tĩnh mà Next.js nên pre-render. Các đường dẫn này có thể dựa trên dữ liệu động từ nguồn bên ngoài, chẳng hạn như cơ sở dữ liệu hoặc API. 
Hàm getStaticPaths được sử dụng chủ yếu trong trường hợp các trang web có nội dung đa dạng và bạn muốn pre-render từng trang theo các đường dẫn cụ thể.

7. SSG and Data Fetching  on client side