import Image from 'next/image'
import { notFound } from 'next/navigation'

import Backbtn from '@/components/Backbtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendPosts from '@/components/RecommendPosts'

import { fetchBlogPost } from '@/lib/fetchBlogPosts'

interface BlogDetailProps {
    params: {
        slug: string
        locale: string
    }
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const blog = await fetchBlogPost(params.slug)

    if (!blog) {
        notFound()
    }

    return (
        <div>
            <Header />

            <div className='md mx-auto mt-[40px] mb-24 w-full max-w-[1120px] px-6'>
                {/* page-navigation-btn */}
                <div className='mb-[40px]'>
                    <Backbtn />
                </div>

                {/* Blog content */}
                <article className='mx-auto max-w-4xl'>
                    {/* Blog header */}
                    <header className='mb-8'>
                        <h1 className='text-main-color mb-4 text-4xl font-bold'>{blog.title}</h1>
                        <div className='mb-6 flex items-center gap-4 text-gray-600'>
                            <span>By {blog.author.name}</span>
                            <span>•</span>
                            <span>{new Date(blog.date.published).toLocaleDateString('ja-JP')}</span>
                        </div>
                    </header>

                    {/* Featured image */}
                    {blog.featured_image && (
                        <div className='relative mb-8 h-[400px] w-full overflow-hidden rounded-lg'>
                            <Image
                                src={blog.featured_image.large || blog.featured_image.url}
                                alt={blog.featured_image.alt || blog.title}
                                fill
                                className='object-cover'
                            />
                        </div>
                    )}

                    {/* Blog content */}
                    <div
                        className='prose prose-lg max-w-none'
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </article>
            </div>

            <RecommendPosts currentPostId={blog.id} />
            <Footer />
        </div>
    )
}
