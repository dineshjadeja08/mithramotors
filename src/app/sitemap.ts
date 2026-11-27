import { MetadataRoute } from 'next';
import siteConfig from '@/config/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/bikes', '/spare-parts', '/service', '/about', '/contact'];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
