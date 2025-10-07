// Image proxy utilities for handling mixed content issues

export function getProxyImageUrl(originalUrl: string): string {
    if (!originalUrl) return '/images/heroImg.jpg' // fallback image

    // If already HTTPS, return as is
    if (originalUrl.startsWith('https://')) {
        return originalUrl
    }

    // If HTTP from our API domain, use proxy
    if (originalUrl.startsWith('http://api.wakaran-eng.com')) {
        const encodedUrl = encodeURIComponent(originalUrl)
        return `/api/image-proxy?url=${encodedUrl}`
    }

    // For other HTTP URLs, use proxy
    if (originalUrl.startsWith('http://')) {
        const encodedUrl = encodeURIComponent(originalUrl)
        return `/api/image-proxy?url=${encodedUrl}`
    }

    // Relative URLs or other protocols
    return originalUrl
}

export function isHttpUrl(url: string): boolean {
    return url.startsWith('http://') && !url.startsWith('https://')
}

// Alternative: Convert HTTP to HTTPS (if server supports)
export function forceHttps(url: string): string {
    if (url.startsWith('http://')) {
        return url.replace('http://', 'https://')
    }
    return url
}

/**
 * Process WordPress content to fix mixed content issues
 * Converts HTTP image URLs to proxy URLs or HTTPS
 */
export function processWordPressContent(content: string): string {
    if (!content) return content

    // Replace HTTP image sources with proxy URLs
    let processedContent = content.replace(/<img([^>]*)\ssrc=['"]http:\/\/([^'"]*)['"]/g, (match, attributes, url) => {
        const fullUrl = `http://${url}`
        const proxyUrl = getProxyImageUrl(fullUrl)
        return `<img${attributes} src="${proxyUrl}"`
    })

    // Also handle srcset attributes for responsive images
    processedContent = processedContent.replace(/srcset=['"]([^'"]*http:\/\/[^'"]*)['"]/g, (match, srcsetValue) => {
        const processedSrcset = srcsetValue.replace(/http:\/\/([^\s,]+)/g, (urlMatch: string) =>
            getProxyImageUrl(urlMatch)
        )
        return `srcset="${processedSrcset}"`
    })

    return processedContent
}
