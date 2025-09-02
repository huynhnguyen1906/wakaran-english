import { MetadataRoute } from 'next'

interface WordPressBlogPost {
    id: number
    slug: string
    date: {
        published: string
    }
}

// Fetch all blog posts from WordPress API
async function fetchAllBlogPosts(): Promise<WordPressBlogPost[]> {
    try {
        const wpApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://api.wakaran-eng.com'
        const response = await fetch(`${wpApiUrl}/wp-json/api/v1/posts?per_page=-1`, {
            cache: 'no-store',
        })

        if (!response.ok) {
            console.error('Failed to fetch blog posts for sitemap:', response.status)
            return []
        }

        const data = await response.json()
        return data.posts || []
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
        return []
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

    // Fetch blog posts from WordPress API
    const blogPosts = await fetchAllBlogPosts()
    const blogPages: MetadataRoute.Sitemap = []

    blogPosts.forEach((post: WordPressBlogPost) => {
        locales.forEach((locale) => {
            blogPages.push({
                url: `${baseUrl}/${locale}/blogs/${post.slug}`,
                lastModified: new Date(post.date.published),
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        })
    })

    return [...staticPages, ...blogPages]
}
