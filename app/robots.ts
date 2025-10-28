import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://soyres.com' // Update with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // Add any paths you want to disallow
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}