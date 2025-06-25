'use client'

import Link from 'next/link'

import { useTranslations } from 'next-intl'

import BlogCard from './BlogCard'

// ブログコンテンツができたら、ulの中身を変更する
export default function Blog() {
    const t = useTranslations('blog')

    // ダミーのブログデータ（実際のデータに置き換えてください）
    const blogCards = Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        title: `${t('blogTitle')} ${index + 1}`,
        description: t('blogDescription'),
        imageUrl: undefined, // 実際の画像URLがある場合はここに設定
    }))

    return (
        <div className='rounded-t-[64px] p-6 md:bg-stone-300 md:pt-24 md:pb-24'>
            <div className='mx-auto md:max-w-[1120px]'>
                <h2 className='mb-2 text-[32px] font-semibold md:text-center md:text-5xl'>BLOG</h2>
                <p className='hidden text-base md:mb-14 md:block md:text-center'>{t('description')}</p>
                <section className='mb-8 flex gap-x-4 overflow-x-auto scroll-smooth md:mb-14 md:gap-x-10 md:overflow-x-visible'>
                    {blogCards.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            imageUrl={blog.imageUrl}
                        />
                    ))}
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
