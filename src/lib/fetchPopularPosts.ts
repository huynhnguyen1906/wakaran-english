export interface BlogPost {
    id: number
    title: string
    content: string
    excerpt: string
    slug: string
    date: {
        published: string
        published_formatted: string
    }
    featured_image: {
        id: number
        url: string
        thumbnail: string
        medium: string
        large: string
        alt: string
    } | null
    views: number
    author: {
        id: number
        name: string
    }
}

export async function fetchPopularPosts(): Promise<BlogPost[]> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/wp-json/api/v1/posts/popular`, {
            cache: 'no-store',
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data.posts || []
    } catch (error) {
        console.error('Error fetching popular posts:', error)
        // エラー時は空配列を返す
        return []
    }
}
