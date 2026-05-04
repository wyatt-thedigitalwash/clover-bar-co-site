import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    /* UPDATE: Replace cloverbarco.com with the production domain before launch */
    sitemap: 'https://cloverbarco.com/sitemap.xml',
  };
}
