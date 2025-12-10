import { MetadataRoute } from 'next';
import { SITE_CONFIG, TEST_MODE } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  // If in test mode, disallow all crawlers
  if (TEST_MODE) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
      sitemap: undefined, // Remove sitemap in test mode
      host: baseUrl,
    };
  }

  // Normal production robots.txt
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

