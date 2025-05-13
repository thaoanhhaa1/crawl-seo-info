import { Module } from '@nestjs/common';
import { SeoCrawlerController } from './interfaces/controllers/seo-crawler.controller';
import { SeoCrawlerService } from './application/services/seo-crawler.service';
import { SeoCrawlerRepository } from './infrastructure/repositories/seo-crawler.repository';

@Module({
  controllers: [SeoCrawlerController],
  providers: [
    SeoCrawlerService,
    {
      provide: 'SeoCrawlerRepositoryInterface',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      useClass: SeoCrawlerRepository,
    },
  ],
  exports: [SeoCrawlerService],
})
export class SeoCrawlerModule {}
