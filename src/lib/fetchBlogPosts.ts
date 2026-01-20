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
    pagination?: {
        total: number
        per_page: number
        current_page: number
        total_pages: number
    }
}

export async function fetchBlogPosts(): Promise<{ posts: BlogPost[]; pagination?: BlogPostsResponse['pagination'] }> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
        // Note: Current API returns ALL posts at once, doesn't support pagination params yet
        const response = await fetch(`${baseUrl}/wp-json/api/v1/posts`, {
            cache: 'no-store',
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: BlogPostsResponse = await response.json()
        
        // API returns all posts - frontend will handle pagination
        return {
            posts: data.posts,
            pagination: data.pagination // Will be undefined until API supports it
        }
    } catch (error) {
        console.error('Failed to fetch blog posts:', error)
        return { posts: [] }
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
