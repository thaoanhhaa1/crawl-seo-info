import { Injectable } from '@nestjs/common';
import { SeoCrawlerRepositoryInterface } from '../../domain/repositories/seo-crawler.repository.interface';
import { SeoData } from '../../domain/entities/seo-data.entity';
import { Url } from '../../domain/value-objects/url.value-object';
import * as cheerio from 'cheerio';
import axios from 'axios';

@Injectable()
export class SeoCrawlerRepository implements SeoCrawlerRepositoryInterface {
  async crawlSeoData(url: Url): Promise<SeoData> {
    try {
      const urlString = url.get();

      // Gọi API để lấy HTML content
      const response = await axios.get<string>(urlString, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
      });

      const content = response.data;

      // Phân tích HTML bằng cheerio
      const $ = cheerio.load(content);

      // Lấy structured data
      const structuredData: Record<string, unknown>[] = [];
      $('script[type="application/ld+json"]').each((_, element) => {
        try {
          const jsonText = $(element).html() || '{}';
          const data = JSON.parse(jsonText) as Record<string, unknown>;
          structuredData.push(data);
        } catch {
          // Bỏ qua nếu không parse được JSON
        }
      });

      // Lấy title, description, và keywords
      const title = $('title').text().trim();
      const description = $('meta[name="description"]').attr('content') || '';
      const keywordsContent = $('meta[name="keywords"]').attr('content') || '';
      const keywords = keywordsContent
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean);

      // Lấy canonical URL
      const canonicalUrl = $('link[rel="canonical"]').attr('href') || '';

      // Lấy Open Graph tags
      const ogTags: Record<string, string> = {};
      $('meta[property^="og:"]').each((_, element) => {
        const property = $(element).attr('property')?.replace('og:', '') || '';
        const content = $(element).attr('content') || '';
        if (property && content) {
          ogTags[property] = content;
        }
      });

      // Lấy Twitter tags
      const twitterTags: Record<string, string> = {};
      $('meta[name^="twitter:"]').each((_, element) => {
        const name = $(element).attr('name')?.replace('twitter:', '') || '';
        const content = $(element).attr('content') || '';
        if (name && content) {
          twitterTags[name] = content;
        }
      });

      // Lấy headings
      const headings: Record<string, string[]> = {
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
      };

      for (let i = 1; i <= 6; i++) {
        $(`h${i}`).each((_, element) => {
          const text = $(element).text().trim();
          if (text) {
            headings[`h${i}`].push(text);
          }
        });
      }

      // Lấy tất cả hình ảnh
      const images: string[] = [];
      $('img').each((_, element) => {
        const src = $(element).attr('src');
        if (src) {
          const imageUrl = new URL(src, urlString).href;
          images.push(imageUrl);
        }
      });

      return new SeoData(
        url,
        title,
        description,
        keywords,
        ogTags,
        twitterTags,
        headings,
        canonicalUrl,
        structuredData,
        images,
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Lỗi không xác định';
      throw new Error(`Lỗi khi crawl dữ liệu SEO: ${errorMessage}`);
    }
  }
}
