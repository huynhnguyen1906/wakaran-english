import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'],
            },
            // AI Search Engine Crawlers - Allow for training and search
            {
                userAgent: [
                    'GPTBot', // OpenAI - training
                    'ChatGPT-User', // OpenAI - user actions
                    'OAI-SearchBot', // OpenAI - search results
                    'ClaudeBot', // Anthropic Claude
                    'claude-web', // Anthropic Claude (alternative)
                    'anthropic-ai', // Anthropic
                    'Google-Extended', // Google Bard/Gemini
                    'GoogleOther', // Google AI
                    'PerplexityBot', // Perplexity AI
                    'Bytespider', // ByteDance (TikTok)
                    'Meta-ExternalAgent', // Meta AI
                    'Amazonbot', // Amazon AI
                    'PetalBot', // Huawei AI
                    'Applebot-Extended', // Apple Intelligence
                    'YouBot', // You.com
                    'cohere-ai', // Cohere
                ],
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
