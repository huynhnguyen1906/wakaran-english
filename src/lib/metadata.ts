import { Metadata } from 'next'

export interface SEOConfig {
    title: string
    description: string
    keywords: string[]
    image?: string
    url?: string
}

export const defaultSEO: Record<string, SEOConfig> = {
    en: {
        title: 'Wakaran English - Learn English with Fun & Interactive Content',
        description:
            'Join Wakaran English for engaging English learning content including videos, blogs, and interactive lessons. Improve your English skills with native speaker interviews and daily practice.',
        keywords: [
            'English learning',
            'English education',
            'language learning',
            'English conversation',
            'English practice',
            'native speakers',
            'English videos',
            'learn English online',
            'English study',
            'English improvement',
        ],
        image: '/images/heroImg_phone.webp',
    },
    vi: {
        title: 'Wakaran English - Học Tiếng Anh Thú Vị & Tương Tác',
        description:
            'Tham gia Wakaran English để có nội dung học tiếng Anh hấp dẫn bao gồm video, blog và bài học tương tác. Cải thiện kỹ năng tiếng Anh với phỏng vấn người bản xứ và luyện tập hàng ngày.',
        keywords: [
            'học tiếng Anh',
            'giáo dục tiếng Anh',
            'học ngoại ngữ',
            'hội thoại tiếng Anh',
            'luyện tập tiếng Anh',
            'người bản xứ',
            'video tiếng Anh',
            'học tiếng Anh online',
            'nghiên cứu tiếng Anh',
            'cải thiện tiếng Anh',
        ],
        image: '/images/heroImg_phone.webp',
    },
    ja: {
        title: 'Wakaran English - 楽しくインタラクティブな英語学習',
        description:
            'Wakaran Englishで魅力的な英語学習コンテンツを体験しよう。ビデオ、ブログ、インタラクティブレッスンで英語力向上。ネイティブスピーカーインタビューと日々の練習で英語を上達させよう。',
        keywords: [
            '英語学習',
            '英語教育',
            '語学学習',
            '英会話',
            '英語練習',
            'ネイティブスピーカー',
            '英語動画',
            'オンライン英語学習',
            '英語研究',
            '英語向上',
        ],
        image: '/images/heroImg_phone.webp',
    },
    cn: {
        title: 'Wakaran English - 有趣互动的英语学习',
        description:
            '加入Wakaran English，获得引人入胜的英语学习内容，包括视频、博客和互动课程。通过母语人士访谈和日常练习提高英语技能。',
        keywords: [
            '英语学习',
            '英语教育',
            '语言学习',
            '英语对话',
            '英语练习',
            '母语人士',
            '英语视频',
            '在线英语学习',
            '英语研究',
            '英语提高',
        ],
        image: '/images/heroImg_phone.webp',
    },
}

export function generateMetadata(config: SEOConfig, locale: string): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'
    const url = config.url ? `${baseUrl}${config.url}` : `${baseUrl}/${locale}`
    const imageUrl = config.image ? `${baseUrl}${config.image}` : `${baseUrl}/images/heroImg_phone.webp`

    return {
        title: config.title,
        description: config.description,
        keywords: config.keywords,
        authors: [{ name: 'Wakaran English Team' }],
        creator: 'Wakaran English',
        publisher: 'Wakaran English',

        // Open Graph
        openGraph: {
            title: config.title,
            description: config.description,
            url: url,
            siteName: 'Wakaran English',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: config.title,
                },
            ],
            locale: locale,
            type: 'website',
        },

        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            title: config.title,
            description: config.description,
            images: [imageUrl],
            creator: '@wakaraneng',
        },

        // Additional metadata
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // Verification
        verification: {
            google: 'googlebadeb436b82f9aba',
        },

        // Canonical URL
        alternates: {
            canonical: url,
            languages: {
                en: `${baseUrl}/en`,
                vi: `${baseUrl}/vi`,
                ja: `${baseUrl}/ja`,
                zh: `${baseUrl}/cn`,
            },
        },
    }
}

// Blog post metadata generator
export function generateBlogMetadata(
    title: string,
    description: string,
    slug: string,
    locale: string,
    publishedTime?: string,
    author?: string,
    image?: string
): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'
    const url = `${baseUrl}/${locale}/blogs/${slug}`
    const imageUrl = image || `${baseUrl}/images/heroImg_phone.webp`

    return {
        title: `${title} | Wakaran English`,
        description: description,
        authors: [{ name: author || 'Wakaran English Team' }],
        creator: 'Wakaran English',
        publisher: 'Wakaran English',

        openGraph: {
            title: title,
            description: description,
            url: url,
            siteName: 'Wakaran English',
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: locale,
            type: 'article',
            publishedTime: publishedTime,
            authors: [author || 'Wakaran English Team'],
        },

        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [imageUrl],
            creator: '@wakaraneng',
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        alternates: {
            canonical: url,
        },
    }
}
