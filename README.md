<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Crawl SEO Info API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Mô tả

API để lấy thông tin SEO từ một URL bất kỳ, được xây dựng bằng NestJS và TypeScript theo kiến trúc DDD (Domain-Driven Design). API này giúp phân tích và trích xuất các thông tin SEO quan trọng từ bất kỳ trang web nào.

## Tính năng chính

- Crawl và phân tích thông tin SEO từ URL
- Trích xuất metadata (title, description, keywords)
- Phân tích Open Graph tags và Twitter Cards
- Trích xuất cấu trúc heading (h1-h6)
- Phân tích canonical URL
- Trích xuất structured data (Schema.org)
- Liệt kê tất cả hình ảnh trên trang

## Yêu cầu hệ thống

- Node.js (>= 16.x)
- npm (>= 8.x)

## Cài đặt

```bash
# Clone repository
git clone [repository-url]

# Di chuyển vào thư mục dự án
cd crawl-seo-info

# Cài đặt dependencies
npm install

# Tạo file .env từ mẫu
cp .env.example .env

# Chỉnh sửa các biến môi trường trong file .env
```

## Chạy ứng dụng

```bash
# Chạy ở môi trường development
npm run start:dev

# Build và chạy ở môi trường production
npm run build
npm run start:prod
```

## Sử dụng API

### Lấy thông tin SEO từ URL

**Endpoint**: `POST /seo-crawler/crawl`

**Request Body**:

```json
{
  "url": "https://example.com"
}
```

**Response**:

```json
{
  "url": "https://example.com",
  "title": "Example Domain",
  "description": "Example Description",
  "keywords": ["example", "domain"],
  "ogTags": {
    "title": "Example Domain",
    "description": "Example Description",
    "image": "https://example.com/image.jpg"
  },
  "twitterTags": {
    "card": "summary_large_image",
    "title": "Example Domain",
    "description": "Example Description"
  },
  "headings": {
    "h1": ["Heading 1"],
    "h2": ["Heading 2.1", "Heading 2.2"],
    "h3": [],
    "h4": [],
    "h5": [],
    "h6": []
  },
  "canonicalUrl": "https://example.com",
  "structuredData": [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Example Domain"
    }
  ],
  "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
}
```

## Kiến trúc DDD

Dự án được tổ chức theo kiến trúc Domain-Driven Design (DDD) với cấu trúc thư mục:

```
src/
├── domain/           # Domain layer
│   ├── entities/     # Domain entities
│   ├── value-objects/# Value objects
│   └── interfaces/   # Domain interfaces
├── application/      # Application layer
│   ├── services/     # Application services
│   └── use-cases/    # Use cases
├── infrastructure/   # Infrastructure layer
│   ├── repositories/ # Repository implementations
│   └── services/     # External services
└── interfaces/       # Interface layer
    ├── controllers/  # API controllers
    └── dtos/        # Data transfer objects
```

## Công nghệ sử dụng

- **NestJS**: Framework Node.js hiện đại và mạnh mẽ
- **TypeScript**: Ngôn ngữ lập trình type-safe
- **Puppeteer**: Thư viện để crawl dữ liệu từ trình duyệt headless
- **Cheerio**: Thư viện phân tích và xử lý HTML
- **Class Validator**: Thư viện validate dữ liệu
- **Jest**: Framework testing

## Testing

```bash
# Chạy unit tests
npm run test

# Chạy e2e tests
npm run test:e2e

# Chạy test coverage
npm run test:cov
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng đọc [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết về quy trình đóng góp.

## Giấy phép

Dự án này được cấp phép theo [MIT License](LICENSE).
