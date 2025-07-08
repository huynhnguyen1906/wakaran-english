'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { useTranslations } from 'next-intl'

import BlogCard from './BlogCard'

interface BlogPost {
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

export default function Blog() {
    const t = useTranslations('blog')
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPopularPosts = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
                const response = await fetch(`${baseUrl}/wp-json/api/v1/posts/popular`)

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }

                const data = await response.json()
                setBlogPosts(data.posts || [])
            } catch (error) {
                console.error('Error fetching popular posts:', error)
                // エラー時は空配列を設定（フォールバックが表示される）
                setBlogPosts([])
            } finally {
                setLoading(false)
            }
        }

        fetchPopularPosts()
    }, [])

    return (
        <div className='rounded-t-[64px] p-6 md:bg-stone-300 md:pt-24 md:pb-24'>
            <div className='mx-auto md:max-w-[1120px]'>
                <h2 className='mb-2 text-[32px] font-semibold md:text-center md:text-5xl'>BLOG</h2>
                <p className='hidden text-base md:mb-14 md:block md:text-center'>{t('description')}</p>
                <section className='mb-8 flex gap-x-4 overflow-x-auto scroll-smooth md:mb-14 md:justify-center md:overflow-x-visible lg:gap-x-10'>
                    {loading ?
                        // ローディング状態
                        Array.from({ length: 3 }, (_, index) => (
                            <BlogCard
                                key={index}
                                title={t('blogTitle')}
                                description={t('blogDescription')}
                                imageUrl={undefined}
                            />
                        ))
                    : blogPosts.length > 0 ?
                        // APIから取得したデータ
                        blogPosts.slice(0, 3).map((post) => (
                            <BlogCard
                                key={post.id}
                                title={post.title}
                                description={post.excerpt}
                                imageUrl={post.featured_image?.medium || undefined}
                                slug={post.slug}
                            />
                        ))
                        // データがない場合のフォールバック
                    :   Array.from({ length: 3 }, (_, index) => (
                            <BlogCard
                                key={index}
                                title={`${t('blogTitle')} ${index + 1}`}
                                description={t('blogDescription')}
                                imageUrl={undefined}
                            />
                        ))
                    }
                </section>
                <div className='text-end'>
                    <Link
                        href={'#'}
                        className='bg-[url("/images/more_btn.svg")] bg-contain bg-bottom bg-no-repeat pr-6 text-lg font-normal md:pr-14 md:text-2xl'
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    )
}
