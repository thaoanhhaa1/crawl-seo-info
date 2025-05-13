import { SeoData } from '../entities/seo-data.entity';
import { Url } from '../value-objects/url.value-object';

export interface SeoCrawlerRepositoryInterface {
  crawlSeoData(url: Url): Promise<SeoData>;
}
