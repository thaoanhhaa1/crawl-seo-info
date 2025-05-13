import { IsNotEmpty, IsUrl } from 'class-validator';

export class CrawlSeoRequestDto {
  @IsNotEmpty({ message: 'URL không được để trống' })
  @IsUrl({}, { message: 'URL không hợp lệ' })
  url: string;
}

export class CrawlSeoResponseDto {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  ogTags: Record<string, string>;
  twitterTags: Record<string, string>;
  headings: Record<string, string[]>;
  canonicalUrl: string;
  structuredData: Record<string, any>[];
  images: string[];

  constructor(data: CrawlSeoResponseDto) {
    this.url = data.url;
    this.title = data.title;
    this.description = data.description;
    this.keywords = data.keywords;
    this.ogTags = data.ogTags;
    this.twitterTags = data.twitterTags;
    this.headings = data.headings;
    this.canonicalUrl = data.canonicalUrl;
    this.structuredData = data.structuredData;
    this.images = data.images;
  }
}
