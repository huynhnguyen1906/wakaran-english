import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

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

const BlogCardLists = async () => {
    const posts = await fetchBlogPosts()

    return (
        <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1120px] px-5'>
            {/* page-navigation-btn */}
            <div className='mb-[40px]'>
                <Backbtn />
            </div>

            {/* header-section */}
            <header className='grid gap-4'>
                <h1 className='main-color text-[32px] font-bold md:text-[48px]'>
                    ALL BLOGS <span className='text-[12px] md:text-[24px]'>( {posts.length} Posts )</span>
                </h1>
                <p className='text-[14px] text-[#4c4c4c] md:text-[24px]'></p>
            </header>

            {/* blog-card-section */}
            <section className='grid md:grid-cols-5'>
                {posts.length > 0 ?
                    posts.map((post: BlogPost) => (
                        <Link
                            className='mt-[32px] flex gap-[8px] border-b-2 pb-4 md:block md:border-b-0 md:pb-0'
                            key={post.id}
                            href={`/blogs/${post.slug}`}
                        >
                            <div className='card-image relative h-[72px] w-[72px] md:h-[115px] md:w-[205px]'>
                                <Image
                                    fill
                                    alt={post.featured_image?.alt || post.title}
                                    src={post.featured_image?.medium || cardImage}
                                    className='rounded-lg object-cover'
                                />
                            </div>

                            <div>
                                <div className='card-desc mt-[8px]'>
                                    <p className='text-main-color line-clamp-2 text-[16px] font-semibold'>
                                        {post.title}
                                    </p>
                                </div>
                                <div className='mt-[16px] flex gap-[8px] md:block'>
                                    <p className='text-[12px]'>
                                        <span className='hidden md:inline'>Post Member:</span> {post.author.name}
                                    </p>
                                    <p className='text-[12px] text-[#8D8D8D]'>
                                        <span className='hidden md:inline'>Posted day </span>
                                        {new Date(post.date.published).toLocaleDateString('ja-JP')}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                :   <div className='col-span-full mt-[32px] text-center'>
                        <p className='text-[16px] text-[#4c4c4c]'>投稿が見つかりませんでした。</p>
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
