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

const BlogCardLists = async ({
    params,
    searchParams,
}: {
    params: Promise<{ locale: string }>
    searchParams: { page?: string }
}) => {
    const { locale } = await params
    const t = await getTranslations('blogList')
    const posts = await fetchBlogPosts()

    const ITEMS_PER_PAGE = 10
    const currentPage = Number(searchParams.page ?? 1)
    const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE)

    const paginatedPosts = posts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

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

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = []
        
        if (totalPages <= 5) {
            // Show all pages if 5 or fewer
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            // Always show first page
            pages.push(1)
            
            if (currentPage > 3) {
                pages.push('ellipsis-start')
            }
            
            // Show pages around current page
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                pages.push(i)
            }
            
            if (currentPage < totalPages - 2) {
                pages.push('ellipsis-end')
            }
            
            // Always show last page
            pages.push(totalPages)
        }
        
        return pages
    }

    const pageNumbers = getPageNumbers()

    return (
        <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1200px] px-4'>
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
            <section className='grid gap-4 md:grid-cols-5'>
                {paginatedPosts.length > 0 ?
                    paginatedPosts.map((post: BlogPost) => {
                        const decodedTitle = decodeHtmlEntities(post.title)
                        const decodedAlt = decodeHtmlEntities(post.featured_image?.alt || post.title)

                        return (
                            <Link
                                className='mt-[32px] flex gap-[8px] border-b-2 pb-4 md:block md:border-b-0 md:pb-0'
                                key={post.id}
                                href={`/blogs/${post.slug}`}
                            >
                                <div className='card-image relative h-[72px] w-[72px] md:h-[115px] md:w-full'>
                                    <Image
                                        fill
                                        alt={decodedAlt}
                                        src={post.featured_image?.medium || cardImage}
                                        className='rounded-lg object-cover'
                                    />
                                </div>

                                <div>
                                    <div className='card-desc mt-[8px]'>
                                        <p className='text-main-color [display:-webkit-box] overflow-hidden px-1 text-[16px] font-semibold [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'>
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
            {totalPages > 1 && (
                <div className='mt-[48px]'>
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                {currentPage > 1 ?
                                    <PaginationPrevious href={`?page=${currentPage - 1}`} />
                                :   <span className='cursor-not-allowed opacity-50 px-4 py-2'>Prev</span>}
                            </PaginationItem>
                            
                            {pageNumbers.map((page, index) => {
                                if (page === 'ellipsis-start' || page === 'ellipsis-end') {
                                    return (
                                        <PaginationItem key={`ellipsis-${index}`}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    )
                                }
                                
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            href={`?page=${page}`}
                                            isActive={page === currentPage}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}
                            
                            <PaginationItem>
                                {currentPage < totalPages ?
                                    <PaginationNext href={`?page=${currentPage + 1}`} />
                                :   <span className='cursor-not-allowed opacity-50 px-4 py-2'>Next</span>}
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    )
}

export default BlogCardLists