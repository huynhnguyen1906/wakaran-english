import React from 'react'

import Image from 'next/image'

import { Link } from '@/i18n/navigation'

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

import cardImage from '../../../../public/images/heroImg.jpg'

// ダミーブログデータ
const blogData = [
    { id: 1, title: 'WE ARE WAKARAN ENGLISH!', author: 'HuYnH', date: '2025/07/08' },
    { id: 2, title: 'Learning English in Osaka', author: 'Yuki', date: '2025/07/07' },
    { id: 3, title: 'Cultural Exchange Experience', author: 'Aya', date: '2025/07/06' },
    { id: 4, title: 'English Study Tips', author: 'Iain', date: '2025/07/05' },
    { id: 5, title: 'Life in Japan as International Student', author: 'HuYnH', date: '2025/07/04' },
    { id: 6, title: 'Japanese vs English Grammar', author: 'Yuki', date: '2025/07/03' },
    { id: 7, title: 'Best Places to Practice English', author: 'Aya', date: '2025/07/02' },
    { id: 8, title: 'Language Exchange Events', author: 'Iain', date: '2025/07/01' },
    { id: 9, title: 'Motivation for Language Learning', author: 'HuYnH', date: '2025/06/30' },
    { id: 10, title: 'Common English Mistakes', author: 'Yuki', date: '2025/06/29' },
]

const BlogCardLists = () => {
    return (
        <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1120px]'>
            {/* page-navigation-btn */}
            <div className='mb-[40px]'>
                <Backbtn />
            </div>

            {/* header-section */}
            <header className='grid gap-4'>
                <h1 className='main-color text-4xl font-bold'>ALL BLOGS</h1>
                <p className='text-sub-color'>
                    We also share cool things about life in Osaka, and our members write blogs to help you learn and
                    connect.
                </p>
            </header>

            {/* blog-card-section */}
            <section className='grid grid-cols-5'>
                {blogData.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className='mt-[32px] block transition-transform hover:scale-105'
                    >
                        <div className='card-image relative h-[115px] w-[205px]'>
                            <Image
                                fill
                                alt='blog-card-image'
                                src={cardImage}
                                className='rounded-lg object-cover'
                            />
                        </div>
                        <div className='card-desc mt-[8px]'>
                            <p className='text-main-color font-semibold'>{blog.title}</p>
                        </div>
                        <div className='mt-[16px]'>
                            <p className='text-sm'>Post Member：{blog.author}</p>
                            <p className='off-color text-sm'>Posted day {blog.date}</p>
                        </div>
                    </Link>
                ))}
            </section>

            {/* pagination */}
            <div className='mt-[48px]'>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href='#' />
                        </PaginationItem>
                        <PaginationItem className='flex'>
                            {[...Array(3)].map((_, i) => (
                                <div key={i}>
                                    <PaginationLink href='#'>{i}</PaginationLink>
                                </div>
                            ))}
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href='#' />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default BlogCardLists
