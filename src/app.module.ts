import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeoCrawlerModule } from './modules/seo-crawler/seo-crawler.module';

@Module({
  imports: [SeoCrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
