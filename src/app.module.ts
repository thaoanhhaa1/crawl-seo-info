import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeoCrawlerModule } from './modules/seo-crawler/seo-crawler.module';

@Module({
  imports: [ConfigModule.forRoot(), SeoCrawlerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
