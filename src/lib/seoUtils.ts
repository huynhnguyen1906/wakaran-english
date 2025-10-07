// Performance and SEO utilities

export function preloadCriticalImages(images: string[]) {
    if (typeof window === 'undefined') return

    images.forEach((src) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
    })
}

export function generateCriticalCSS() {
    // This would contain critical above-the-fold CSS
    return `
        /* Critical CSS for initial page load */
        .header { display: block; }
        .hero-section { display: block; }
        /* Add more critical styles here */
    `
}

export function optimizeImageLoading() {
    if (typeof window === 'undefined') return

    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img[data-lazy]')
    images.forEach((img) => {
        img.setAttribute('loading', 'lazy')
    })
}

// SEO helper functions
export function generateHreflangTags(currentLocale: string, slug?: string) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wakaran-eng.com'
    const locales = {
        en: 'en',
        vi: 'vi',
        ja: 'ja',
        cn: 'zh',
    }

    const path = slug ? `/blogs/${slug}` : ''

    return Object.entries(locales).map(([locale, hreflang]) => ({
        rel: 'alternate',
        hrefLang: hreflang,
        href: `${baseUrl}/${locale}${path}`,
    }))
}

export function cleanTextForSEO(text: string, maxLength = 160): string {
    // Remove HTML tags
    const cleanText = text.replace(/<[^>]*>/g, '')
    // Remove extra whitespace
    const trimmedText = cleanText.replace(/\s+/g, ' ').trim()
    // Truncate if needed
    if (trimmedText.length <= maxLength) {
        return trimmedText
    }
    return trimmedText.substring(0, maxLength - 3) + '...'
}

export function generateSlugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Core Web Vitals helpers
export function reportWebVitals(metric: { name: string; value: number; id: string }) {
    if (typeof window === 'undefined') return

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric)
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
        // Send to your analytics service
        // Example: gtag('event', 'web_vital', { metric })
    }
}
