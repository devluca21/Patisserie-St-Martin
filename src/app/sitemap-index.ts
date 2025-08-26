import { MetadataRoute } from 'next'

export default function sitemapIndex(): MetadataRoute.Sitemap {
  const baseUrl = 'https://patisseriestmartin.com'
  const currentDate = new Date()
  
  return [
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-services.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sitemap-english.xml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
