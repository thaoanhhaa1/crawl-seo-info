import { Url } from '../value-objects/url.value-object';

export class SeoData {
  constructor(
    private readonly url: Url,
    private readonly title: string,
    private readonly description: string,
    private readonly keywords: string[],
    private readonly ogTags: Record<string, string>,
    private readonly twitterTags: Record<string, string>,
    private readonly headings: Record<string, string[]>,
    private readonly canonicalUrl: string,
    private readonly structuredData: Record<string, any>[],
    private readonly images: string[],
  ) {}

  getUrl(): string {
    return this.url.get();
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getKeywords(): string[] {
    return [...this.keywords];
  }

  getOgTags(): Record<string, string> {
    return { ...this.ogTags };
  }

  getTwitterTags(): Record<string, string> {
    return { ...this.twitterTags };
  }

  getHeadings(): Record<string, string[]> {
    return { ...this.headings };
  }

  getCanonicalUrl(): string {
    return this.canonicalUrl;
  }

  getStructuredData(): Record<string, any>[] {
    return [...this.structuredData];
  }

  getImages(): string[] {
    return [...this.images];
  }

  toObject(): Record<string, any> {
    return {
      url: this.getUrl(),
      title: this.getTitle(),
      description: this.getDescription(),
      keywords: this.getKeywords(),
      ogTags: this.getOgTags(),
      twitterTags: this.getTwitterTags(),
      headings: this.getHeadings(),
      canonicalUrl: this.getCanonicalUrl(),
      structuredData: this.getStructuredData(),
      images: this.getImages(),
    };
  }
}
