import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SeoCrawlerService } from '../../application/services/seo-crawler.service';
import { CrawlSeoRequestDto, CrawlSeoResponseDto } from '../dtos/crawl-seo.dto';

@Controller('seo-crawler')
export class SeoCrawlerController {
  constructor(private readonly seoCrawlerService: SeoCrawlerService) {}

  @Post('crawl')
  async crawlSeoData(
    @Body(new ValidationPipe({ transform: true })) dto: CrawlSeoRequestDto,
  ): Promise<CrawlSeoResponseDto> {
    return this.seoCrawlerService.crawlSeoData(dto.url);
  }
}
