import { Inject, Injectable } from '@nestjs/common';
import { SeoCrawlerRepositoryInterface } from '../../domain/repositories/seo-crawler.repository.interface';
import { SeoData } from '../../domain/entities/seo-data.entity';
import { Url } from '../../domain/value-objects/url.value-object';
import { CrawlSeoResponseDto } from '../../interfaces/dtos/crawl-seo.dto';

@Injectable()
export class SeoCrawlerService {
  constructor(
    @Inject('SeoCrawlerRepositoryInterface')
    private readonly seoCrawlerRepository: SeoCrawlerRepositoryInterface,
  ) {}

  async crawlSeoData(urlString: string): Promise<CrawlSeoResponseDto> {
    const url = new Url(urlString);
    const seoData = await this.seoCrawlerRepository.crawlSeoData(url);
    return this.mapToResponseDto(seoData);
  }

  private mapToResponseDto(seoData: SeoData): CrawlSeoResponseDto {
    return new CrawlSeoResponseDto({
      url: seoData.getUrl(),
      title: seoData.getTitle(),
      description: seoData.getDescription(),
      keywords: seoData.getKeywords(),
      ogTags: seoData.getOgTags(),
      twitterTags: seoData.getTwitterTags(),
      headings: seoData.getHeadings(),
      canonicalUrl: seoData.getCanonicalUrl(),
      structuredData: seoData.getStructuredData(),
      images: seoData.getImages(),
    });
  }
}
