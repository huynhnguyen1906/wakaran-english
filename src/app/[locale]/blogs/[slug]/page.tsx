// import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { formatDate } from '@/utils/textUtils'
import { getTranslations } from 'next-intl/server'

import Backbtn from '@/components/Backbtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendPostsServer from '@/components/RecommendPostsServer'

import { generateBlogMetadata } from '@/lib/metadata'
import { generateBlogPostSchema, generateBreadcrumbSchema } from '@/lib/structuredData'

interface BlogDetailProps {
    params: Promise<{
        locale: string
        slug: string
    }>
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

// Fetch single blog post by slug
async function fetchBlogPost(slug: string): Promise<WordPressPost | null> {
    try {
        const wpApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://api.wakaran-eng.com'

        // Next.js automatically decodes URL params, so we need to encode for the API call
        // But WordPress API handles both encoded and decoded slugs, so we'll use the original slug
        const response = await fetch(`${wpApiUrl}/wp-json/api/v1/posts/slug/${slug}`, {
            cache: 'no-store', // For real-time view counting
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            console.error('WordPress API error:', response.status, response.statusText)
            return null
        }

        const post = await response.json()
        return post
    } catch (error) {
        console.error('ブログ記事の取得に失敗しました:', error)
        return null
    }
}

// Generate metadata for blog post
export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
    const { locale, slug } = await params

    // Fetch blog post data for metadata
    const post = await fetchBlogPost(slug)

    if (!post) {
        return {
            title: 'Post Not Found | Wakaran English',
            description: 'The requested blog post could not be found.',
        }
    }

    return generateBlogMetadata(
        post.title,
        post.excerpt,
        slug,
        locale,
        post.date.published,
        post.author.name,
        post.featured_image?.url
    )
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const { slug } = await params

    // Get translations
    const t = await getTranslations('blogDetail')

    // Fetch blog post data
    const post = await fetchBlogPost(slug)

    if (!post) {
        notFound()
    }

    // Generate structured data
    const blogPostSchema = generateBlogPostSchema(
        post.title,
        post.content,
        post.date.published,
        post.author.name,
        post.featured_image?.url,
        `/${slug}/blogs/${slug}`
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: `/${slug}` },
        { name: 'Blogs', url: `/${slug}/blogs` },
        { name: post.title, url: `/${slug}/blogs/${slug}` },
    ])

    return (
        <div>
            {/* Structured Data */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(blogPostSchema),
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <Header />

            <div className='mx-auto mt-[40px] mb-24 w-full max-w-[1120px] px-6'>
                {/* page-navigation-btn */}
                <div className='mb-[40px]'>
                    <Backbtn blogTitle={post.title} />
                </div>

                {/* Blog Post Content */}
                <article className='wp-block-post-content'>
                    {/* Post Header */}
                    <header className='mb-8'>
                        <h1 className='mb-4 text-3xl leading-tight font-bold md:text-4xl'>{post.title}</h1>

                        {/* Post Meta */}
                        <div className='mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-600'>
                            <time dateTime={post.date.published}>{formatDate(post.date.published)}</time>
                            <span className='flex items-center gap-1'>
                                <svg
                                    className='h-4 w-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                                    />
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                                    />
                                </svg>
                                {post.views} {t('views')}
                            </span>
                            <span>
                                {t('by')} {post.author.name}
                            </span>
                        </div>

                        {/* Featured Image */}
                        {/* {post.featured_image && (
                            <div className='mb-8'>
                                <Image
                                    src={post.featured_image.url}
                                    alt={post.featured_image.alt || post.title}
                                    width={1120}
                                    height={630}
                                    className='h-auto w-full rounded-lg object-cover'
                                    priority
                                />
                            </div>
                        )} */}
                    </header>

                    {/* Post Content - WordPress Gutenberg Blocks */}
                    <div
                        className='wp-block-library prose prose-lg max-w-none overflow-hidden'
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>

            <RecommendPostsServer currentPostSlug={slug} />
            <Footer />
        </div>
    )
}
