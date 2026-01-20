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

const BlogCardLists = async ({ params, searchParams }: { 
    params: Promise<{ locale: string }> 
    searchParams?: Promise<{ page?: string }> 
}) => {
    const { locale } = await params
    const resolvedSearchParams = await searchParams
    const currentPage = Number(resolvedSearchParams?.page) || 1
    const t = await getTranslations('blogList')
    const POSTS_PER_PAGE = 15

    // Fetch blog posts with pagination
    const { posts: allPosts, pagination } = await fetchBlogPosts(currentPage, POSTS_PER_PAGE)

    // When API doesn't support pagination, it returns ALL posts at once
    // So we need to handle client-side pagination
    const useClientPagination = !pagination
    
    // Calculate total based on API or all posts returned
    const totalPosts = pagination?.total || allPosts.length
    const totalPages = pagination?.total_pages || Math.ceil(allPosts.length / POSTS_PER_PAGE)
    
    // If using client-side pagination, slice the posts array
    const posts = useClientPagination 
        ? allPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
        : allPosts

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
                        ( {totalPosts} {t('postsCount')} )
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
            {totalPages > 1 ? (
                <div className='mt-[48px]'>
                    <Pagination>
                        <PaginationContent>
                            {currentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious href={currentPage === 2 ? '/blogs' : `/blogs?page=${currentPage - 1}`} />
                                </PaginationItem>
                            )}
                            
                            <PaginationItem className='flex gap-1'>
                                {/* Show first page */}
                                <PaginationLink 
                                    href='/blogs'
                                    isActive={currentPage === 1}
                                >
                                    1
                                </PaginationLink>
                                
                                {/* Show ellipsis if current page > 3 */}
                                {currentPage > 3 && totalPages > 5 && (
                                    <PaginationEllipsis />
                                )}
                                
                                {/* Show pages around current page */}
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter(page => {
                                        // Show pages adjacent to current page (not first or last)
                                        if (page === 1 || page === totalPages) return false
                                        return Math.abs(page - currentPage) <= 1
                                    })
                                    .map(page => (
                                        <PaginationLink 
                                            key={page}
                                            href={`/blogs?page=${page}`}
                                            isActive={currentPage === page}
                                        >
                                            {page}
                                        </PaginationLink>
                                    ))
                                }
                                
                                {/* Show ellipsis if current page < totalPages - 2 */}
                                {currentPage < totalPages - 2 && totalPages > 5 && (
                                    <PaginationEllipsis />
                                )}
                                
                                {/* Show last page if more than 1 page */}
                                {totalPages > 1 && (
                                    <PaginationLink 
                                        href={`/blogs?page=${totalPages}`}
                                        isActive={currentPage === totalPages}
                                    >
                                        {totalPages}
                                    </PaginationLink>
                                )}
                            </PaginationItem>
                            
                            {currentPage < totalPages && (
                                <PaginationItem>
                                    <PaginationNext href={`/blogs?page=${currentPage + 1}`} />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                </div>
            ) : null}
        </div>
    )
}

export default BlogCardLists
