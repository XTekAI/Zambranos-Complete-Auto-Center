import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/landing', '/landing/'],
      },
    ],
    sitemap: 'https://www.zambranosauto.com/sitemap.xml',
    host: 'https://www.zambranosauto.com',
  };
}
