# Hướng dẫn đóng góp

Cảm ơn bạn đã quan tâm đến việc đóng góp cho dự án crawl-seo-info! Tài liệu này sẽ hướng dẫn bạn cách đóng góp một cách hiệu quả.

## Mục lục

- [Hướng dẫn đóng góp](#hướng-dẫn-đóng-góp)
  - [Mục lục](#mục-lục)
  - [Quy tắc ứng xử](#quy-tắc-ứng-xử)
  - [Bắt đầu](#bắt-đầu)
  - [Quy trình đóng góp](#quy-trình-đóng-góp)
  - [Quy tắc code](#quy-tắc-code)
    - [TypeScript/JavaScript](#typescriptjavascript)
    - [NestJS](#nestjs)
    - [Git](#git)
  - [Commit messages](#commit-messages)
  - [Pull Requests](#pull-requests)
  - [Kiểm thử](#kiểm-thử)
  - [Tài liệu](#tài-liệu)
  - [Quy trình review](#quy-trình-review)
  - [Hỗ trợ](#hỗ-trợ)
  - [Cảm ơn](#cảm-ơn)

## Quy tắc ứng xử

Dự án này và mọi người tham gia đều tuân theo [Quy tắc ứng xử của Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). Bằng cách tham gia, bạn cam kết sẽ tôn trọng quy tắc này.

## Bắt đầu

1. Fork repository
2. Clone repository về máy local:
   ```bash
   git clone https://github.com/thaoanhhaa1/crawl-seo-info.git
   cd crawl-seo-info
   ```
3. Cài đặt dependencies:
   ```bash
   npm install
   ```
4. Tạo branch mới cho tính năng/sửa lỗi của bạn:
   ```bash
   git checkout -b feature/ten-tinh-nang
   # hoặc
   git checkout -b fix/ten-loi
   ```

## Quy trình đóng góp

1. **Tạo issue** trước khi bắt đầu làm việc trên một tính năng lớn
2. **Cập nhật branch** của bạn với main branch:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
3. **Commit** các thay đổi của bạn
4. **Push** lên repository của bạn
5. **Tạo Pull Request**

## Quy tắc code

### TypeScript/JavaScript

- Tuân thủ [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- Sử dụng ESLint và Prettier để format code
- Đảm bảo code coverage tối thiểu 80%
- Viết unit test cho mọi tính năng mới
- Sử dụng async/await thay vì callbacks
- Sử dụng TypeScript strict mode

### NestJS

- Tuân thủ kiến trúc DDD (Domain-Driven Design)
- Sử dụng dependency injection
- Tách biệt business logic và infrastructure
- Sử dụng decorators một cách hợp lý
- Tuân thủ RESTful API best practices

### Git

- Sử dụng [Conventional Commits](https://www.conventionalcommits.org/)
- Giữ commit messages rõ ràng và mô tả đầy đủ
- Không commit code đã comment hoặc console.log
- Không commit file node_modules hoặc .env

## Commit messages

Sử dụng format sau cho commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types:

- feat: Tính năng mới
- fix: Sửa lỗi
- docs: Thay đổi tài liệu
- style: Thay đổi format code
- refactor: Refactor code
- test: Thêm/sửa test
- chore: Cập nhật build process, dependencies, etc.

## Pull Requests

1. Đảm bảo PR của bạn giải quyết một vấn đề cụ thể
2. Cập nhật tài liệu nếu cần
3. Thêm test cases cho tính năng mới
4. Đảm bảo tất cả tests đều pass
5. Cập nhật CHANGELOG.md
6. Mô tả rõ ràng các thay đổi trong PR

## Kiểm thử

```bash
# Chạy unit tests
npm run test

# Chạy e2e tests
npm run test:e2e

# Kiểm tra coverage
npm run test:cov

# Kiểm tra linting
npm run lint
```

## Tài liệu

- Cập nhật README.md nếu cần
- Thêm JSDoc comments cho các hàm mới
- Cập nhật API documentation
- Thêm examples nếu cần thiết

## Quy trình review

1. Tất cả PRs sẽ được review bởi ít nhất một maintainer
2. Maintainers có thể yêu cầu thay đổi
3. PR sẽ được merge khi:
   - Tất cả tests pass
   - Code review được approve
   - Không có conflicts
   - Tuân thủ quy tắc code

## Hỗ trợ

Nếu bạn cần hỗ trợ, vui lòng:

1. Kiểm tra documentation
2. Tìm kiếm trong issues
3. Tạo issue mới nếu cần

## Cảm ơn

Cảm ơn bạn đã đóng góp cho dự án crawl-seo-info! Mọi đóng góp, dù lớn hay nhỏ, đều rất được trân trọng.
