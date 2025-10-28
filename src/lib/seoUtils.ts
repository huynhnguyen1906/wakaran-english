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
    
    // Map internal locale codes to ISO 639-1 language codes
    const localeToLanguage: Record<string, string> = {
        en: 'en',
        vi: 'vi',
        ja: 'ja',
        cn: 'zh-CN', // Changed from 'zh' to 'zh-CN' for proper ISO format
    }

    const path = slug ? `/blogs/${slug}` : ''

    return Object.entries(localeToLanguage).map(([locale, hreflang]) => ({
        rel: 'alternate',
        hrefLang: hreflang,
        href: `${baseUrl}/${locale}${path}`,
    }))
}

export function cleanTextForSEO(text: string, maxLength = 160): string {
    // Return empty string if input is falsy
    if (!text) return ''
    
    // Remove HTML tags
    const cleanText = text.replace(/<[^>]*>/g, '')
    // Remove extra whitespace
    const trimmedText = cleanText.replace(/\s+/g, ' ').trim()
    
    // Return as is if already short enough
    if (trimmedText.length <= maxLength) {
        return trimmedText
    }
    
    // Truncate at word boundary
    const truncated = trimmedText.substring(0, maxLength - 3)
    const lastSpace = truncated.lastIndexOf(' ')
    
    if (lastSpace > maxLength * 0.8) {
        return truncated.substring(0, lastSpace) + '...'
    }
    
    return truncated + '...'
}

export function generateSlugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Validate and ensure meta description meets SEO requirements
 * - Minimum 50 characters for good SEO
 * - Maximum 160 characters to avoid truncation in search results
 * - No duplicate descriptions
 */
export function validateMetaDescription(description: string | undefined, fallback: string): string {
    if (!description || description.trim().length === 0) {
        return fallback
    }

    const cleaned = cleanTextForSEO(description, 160)
    
    // If too short, append fallback
    if (cleaned.length < 50) {
        return `${cleaned} ${fallback}`.substring(0, 160)
    }

    return cleaned
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
