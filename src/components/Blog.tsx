import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import { BlogPost } from '@/lib/fetchPopularPosts'

import BlogCard from './BlogCard'

type Props = {
    blogPosts: BlogPost[]
}

export default function Blog({ blogPosts }: Props) {
    const t = useTranslations('blog')

    return (
        <div id='blogs' className='rounded-t-[64px] p-6 md:bg-stone-300 md:pt-24 md:pb-24'>
            <div className='mx-auto md:max-w-[1120px]'>
                <h2 className='mb-2 text-[32px] font-semibold md:text-center md:text-5xl'>BLOG</h2>
                <p className='hidden text-base md:mb-14 md:block md:text-center'>{t('description')}</p>
                <section className='mb-8 flex gap-x-4 overflow-x-auto scroll-smooth md:mb-14 md:justify-center md:overflow-x-visible lg:gap-x-10'>
                    {
                        blogPosts.length > 0 ?
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
                        href='/blogs'
                        className='bg-[url("/images/more_btn.svg")] bg-contain bg-bottom bg-no-repeat pr-6 text-lg font-normal md:pr-14 md:text-2xl'
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    )
}
