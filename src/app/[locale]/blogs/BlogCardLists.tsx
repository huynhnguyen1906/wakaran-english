import React from 'react'

import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { decodeHtmlEntities } from '@/utils/textUtils'
import { getTranslations } from 'next-intl/server'

import Backbtn from '@/components/Backbtn'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

import { type BlogPost, fetchBlogPosts } from '@/lib/fetchBlogPosts'

import cardImage from '../../../../public/images/heroImg.jpg'

const BlogCardLists = async ({ params }: { params: Promise<{ locale: string }> }) => {
    const { locale } = await params
    const t = await getTranslations('blogList')
    const posts = await fetchBlogPosts()

    // ロケールに基づく日付フォーマット
    const getLocalizedDateFormat = (locale: string) => {
        switch (locale) {
            case 'en':
                return 'en-US'
            case 'cn':
                return 'zh-CN'
            case 'vi':
                return 'vi-VN'
            case 'ja':
            default:
                return 'ja-JP'
        }
    }

    return (
        <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1120px] px-5'>
            {/* page-navigation-btn */}
            <div className='mb-[40px]'>
                <Backbtn />
            </div>

            {/* header-section */}
            <header className='grid gap-4'>
                <h1 className='main-color text-[32px] font-bold md:text-[48px]'>
                    {t('title')}{' '}
                    <span className='text-[12px] md:text-[24px]'>
                        ( {posts.length} {t('postsCount')} )
                    </span>
                </h1>
                <p className='text-[14px] text-[#4c4c4c] md:text-[24px]'></p>
            </header>

            {/* blog-card-section */}
            <section className='grid md:grid-cols-5'>
                {posts.length > 0 ?
                    posts.map((post: BlogPost) => {
                        const decodedTitle = decodeHtmlEntities(post.title)
                        const decodedAlt = decodeHtmlEntities(post.featured_image?.alt || post.title)

                        return (
                            <Link
                                className='mt-[32px] flex gap-[8px] border-b-2 pb-4 md:block md:border-b-0 md:pb-0'
                                key={post.id}
                                href={`/blogs/${post.slug}`}
                            >
                                <div className='card-image relative h-[72px] w-[72px] md:h-[115px] md:w-[205px]'>
                                    <Image
                                        fill
                                        alt={decodedAlt}
                                        src={post.featured_image?.medium || cardImage}
                                        className='rounded-lg object-cover'
                                    />
                                </div>

                                <div>
                                    <div className='card-desc mt-[8px]'>
                                        <p className='text-main-color line-clamp-2 text-[16px] font-semibold'>
                                            {decodedTitle}
                                        </p>
                                    </div>
                                    <div className='mt-[16px] flex gap-[8px] md:block'>
                                        <p className='text-[12px]'>
                                            <span className='hidden md:inline'>{t('postMember')} </span>
                                            {post.author.name}
                                        </p>
                                        <p className='text-[12px] text-[#8D8D8D]'>
                                            <span className='hidden md:inline'>{t('postDate')} </span>
                                            {new Date(post.date.published).toLocaleDateString(
                                                getLocalizedDateFormat(locale)
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                :   <div className='col-span-full mt-[32px] text-center'>
                        <p className='text-[16px] text-[#4c4c4c]'>{t('noPostsFound')}</p>
                    </div>
                }
            </section>

            {/* pagination */}
            {posts.length > 10 && (
                <div className='mt-[48px]'>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href='#' />
                            </PaginationItem>
                            <PaginationItem className='flex'>
                                {[...Array(Math.min(3, Math.ceil(posts.length / 10)))].map((_, i) => (
                                    <div key={i}>
                                        <PaginationLink href='#'>{i + 1}</PaginationLink>
                                    </div>
                                ))}
                            </PaginationItem>
                            {Math.ceil(posts.length / 10) > 3 && (
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            )}
                            <PaginationItem>
                                <PaginationNext href='#' />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    )
}

export default BlogCardLists
