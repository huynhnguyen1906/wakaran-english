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

export interface BlogPostsResponse {
    posts: BlogPost[]
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/wp-json/api/v1/posts`, {
            cache: 'no-store', // 最新のデータを取得するため
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: BlogPostsResponse = await response.json()
        return data.posts
    } catch (error) {
        console.error('Failed to fetch blog posts:', error)
        return []
    }
}

export async function fetchBlogPostById(id: number): Promise<BlogPost | null> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/wp-json/api/v1/posts/${id}`, {
            cache: 'no-store', // 最新のデータを取得するため
        })

        if (!response.ok) {
            if (response.status === 404) {
                return null
            }
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: BlogPost = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch blog post by ID:', error)
        return null
    }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        const response = await fetch(`${baseUrl}/wp-json/api/v1/posts/slug/${slug}`, {
            cache: 'no-store', // 最新のデータを取得するため
        })

        if (!response.ok) {
            if (response.status === 404) {
                return null
            }
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: BlogPost = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch blog post:', error)
        return null
    }
}
