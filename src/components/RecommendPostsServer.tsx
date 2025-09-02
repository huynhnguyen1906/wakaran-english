import RecommendPostsClient from './RecommendPostsClient'

type Post = {
    id: number
    title: string
    description: string
    imageUrl: string
}

type WordPressPost = {
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
        id: string
        name: string
    }
}

type Props = {
    currentPostSlug: string // 現在の記事のスラッグ
}

// WordPressのレスポンスを内部型に変換する関数
function transformWordPressPost(wpPost: WordPressPost): Post {
    return {
        id: wpPost.id,
        title: wpPost.title,
        description: wpPost.excerpt,
        imageUrl: wpPost.featured_image?.url || '/images/heroImg.jpg',
    }
}

// サーバーサイドでデータを取得する関数
async function fetchRecommendPostsBySlug(currentPostSlug: string): Promise<Post[]> {
    try {
        const wpApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://api.wakaran-eng.com'

        // WordPress API handles both encoded and decoded slugs, so we use the original slug
        const response = await fetch(`${wpApiUrl}/wp-json/api/v1/recommend/slug/${currentPostSlug}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.error('WordPress API error:', response.status, response.statusText)
            return []
        }

        const data = await response.json()
        const recommendedPosts = data.recommended_posts || []

        // WordPress APIのレスポンスを内部型に変換
        return recommendedPosts.map(transformWordPressPost)
    } catch (error) {
        console.error('おすすめ記事の取得に失敗しました:', error)
        return []
    }
}

export default async function RecommendPostsServer({ currentPostSlug }: Props) {
    // サーバーサイドでデータを取得
    const posts = await fetchRecommendPostsBySlug(currentPostSlug)

    // クライアントコンポーネントにデータを渡す
    return <RecommendPostsClient initialPosts={posts} />
}
