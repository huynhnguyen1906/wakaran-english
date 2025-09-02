import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'
    const locales = ['en', 'vi', 'ja', 'cn']

    // Static pages for each locale
    const staticPages: MetadataRoute.Sitemap = []

    locales.forEach((locale) => {
        // Home page
        staticPages.push({
            url: `${baseUrl}/${locale}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        })

        // Blogs listing page
        staticPages.push({
            url: `${baseUrl}/${locale}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        })
    })

    // TODO: Add dynamic blog posts from WordPress API
    // This would require fetching all posts and adding them to sitemap
    // For now, we'll use static sitemap

    return staticPages
}
