import Image from 'next/image'

import Backbtn from '@/components/Backbtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendPosts from '@/components/RecommendPosts'

interface BlogDetailProps {
    params: {
        id: string
        locale: string
    }
}

export default function BlogDetail({ params }: BlogDetailProps) {
    const blogId = parseInt(params.id)

    return (
        <div className='bg-[#edece8] md:bg-[#fefefe]'>
            <Header />

            <div className='md mx-auto mt-[40px] mb-24 w-full max-w-[1120px] px-6'>
                {/* page-navigation-btn */}
                <div className='mb-[40px]'>
                    <Backbtn blogTitle={blog.title} />
                </div>

                {/* Blog content */}
                <article className='mx-auto max-w-4xl'>
                    {/* Blog header */}
                    <header className='mb-8'>
                        <h1 className='text-main-color mb-4 text-4xl font-bold'>{blog.title}</h1>
                        <div className='mb-6 flex items-center gap-4 text-gray-600'>
                            <span>By {blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                        </div>
                    </header>

                    {/* Featured image */}
                    {blog.imageUrl && (
                        <div className='relative mb-8 h-[400px] w-full overflow-hidden rounded-lg'>
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
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

            <RecommendPosts currentPostId={blogId} />
            <Footer />
        </div>
    )
}
