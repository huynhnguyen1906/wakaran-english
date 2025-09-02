export interface JSONLDData {
    '@context': string
    '@type': string
    [key: string]: unknown
}

export function generateOrganizationSchema(): JSONLDData {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'

    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Wakaran English',
        description: 'Educational website for English learners with fun and interactive content.',
        url: baseUrl,
        logo: `${baseUrl}/images/heroImg_phone.webp`,
        sameAs: ['https://www.youtube.com/@wakaran-english', 'https://www.instagram.com/wakaran_english/'],
        foundingDate: '2024',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Vietnamese', 'Japanese', 'Chinese'],
        },
    }
}

export function generateWebsiteSchema(): JSONLDData {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'

    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Wakaran English',
        description: 'Learn English with fun and interactive content',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
        inLanguage: ['en', 'vi', 'ja', 'zh'],
    }
}

export function generateEducationalOrganizationSchema(): JSONLDData {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'

    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Wakaran English',
        description: 'Educational platform for English language learning',
        url: baseUrl,
        logo: `${baseUrl}/images/heroImg_phone.webp`,
        educationalCredentialAwarded: 'English Language Skills',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'English Learning Resources',
            itemListElement: [
                {
                    '@type': 'Course',
                    name: 'English Conversation Practice',
                    description: 'Interactive English conversation lessons with native speakers',
                },
                {
                    '@type': 'Course',
                    name: 'English Grammar & Vocabulary',
                    description: 'Comprehensive English grammar and vocabulary lessons',
                },
            ],
        },
    }
}

export function generateBlogPostSchema(
    title: string,
    content: string,
    publishedTime: string,
    author: string,
    image?: string,
    url?: string
): JSONLDData {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'
    const imageUrl = image || `${baseUrl}/images/heroImg_phone.webp`
    const postUrl = url || baseUrl

    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        articleBody: content.replace(/<[^>]*>/g, '').substring(0, 1000), // Remove HTML and limit
        datePublished: publishedTime,
        dateModified: publishedTime,
        author: {
            '@type': 'Person',
            name: author,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Wakaran English',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/images/introductionThumb.webp`,
            },
        },
        image: {
            '@type': 'ImageObject',
            url: imageUrl,
            width: 1200,
            height: 630,
        },
        url: postUrl,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': postUrl,
        },
    }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): JSONLDData {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'

    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.url}`,
        })),
    }
}
