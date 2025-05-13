# Chính sách Bảo mật

## Báo cáo lỗ hổng bảo mật

Chúng tôi coi trọng việc bảo mật của dự án crawl-seo-info. Nếu bạn phát hiện bất kỳ lỗ hổng bảo mật nào, vui lòng báo cáo cho chúng tôi ngay lập tức. Chúng tôi cam kết sẽ phản hồi nhanh chóng và xử lý nghiêm túc mọi báo cáo.

### Cách báo cáo

1. **KHÔNG** công khai lỗ hổng trên GitHub Issues hoặc các kênh công khai khác
2. Gửi email chi tiết về lỗ hổng đến địa chỉ: anhthaodev@gmail.com
3. Tiêu đề email nên bắt đầu bằng "[SECURITY]"
4. Bao gồm các thông tin sau trong email:
   - Mô tả chi tiết về lỗ hổng
   - Các bước để tái tạo lỗ hổng
   - Tác động tiềm ẩn của lỗ hổng
   - Đề xuất cách khắc phục (nếu có)

### Quy trình xử lý

1. Chúng tôi sẽ xác nhận việc nhận được báo cáo trong vòng 48 giờ
2. Đánh giá và xác minh lỗ hổng
3. Phát triển và kiểm tra bản vá
4. Phát hành bản cập nhật bảo mật
5. Công khai thông tin về lỗ hổng (sau khi đã được khắc phục)

## Các biện pháp bảo mật được khuyến nghị

### Cho người dùng

1. Luôn cập nhật lên phiên bản mới nhất của dự án
2. Sử dụng các biến môi trường để lưu trữ thông tin nhạy cảm
3. Không chia sẻ API keys hoặc thông tin xác thực
4. Giới hạn quyền truy cập API theo IP nếu có thể
5. Sử dụng HTTPS cho tất cả các kết nối

### Cho nhà phát triển

1. Tuân thủ nguyên tắc "principle of least privilege"
2. Thực hiện kiểm tra đầu vào cho tất cả các API endpoints
3. Sử dụng rate limiting để ngăn chặn tấn công brute force
4. Mã hóa dữ liệu nhạy cảm
5. Thực hiện logging và monitoring
6. Thường xuyên cập nhật dependencies
7. Sử dụng các công cụ phân tích bảo mật tĩnh (SAST)

## Cập nhật bảo mật

Chúng tôi cam kết:

- Phát hành các bản cập nhật bảo mật kịp thời
- Duy trì một danh sách các thay đổi bảo mật trong CHANGELOG.md
- Thông báo cho người dùng về các vấn đề bảo mật nghiêm trọng
- Cung cấp hướng dẫn nâng cấp an toàn

## Liên hệ

Nếu bạn có bất kỳ câu hỏi hoặc lo ngại về bảo mật, vui lòng liên hệ với chúng tôi qua email bảo mật được cung cấp ở trên.

## Cảm ơn

Chúng tôi đánh giá cao sự đóng góp của cộng đồng trong việc giúp dự án crawl-seo-info an toàn hơn. Cảm ơn bạn đã dành thời gian để báo cáo các vấn đề bảo mật.
