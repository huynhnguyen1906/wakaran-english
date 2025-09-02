import React from 'react'

import Image from 'next/image'

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

const BlogCardLists = () => {
    return (
        <div className='mx-auto mt-[136px] mb-48 w-full max-w-[1120px]'>
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
                {[...Array(10)].map((_, i) => (
                    <div
                        className='mt-[32px]'
                        key={i}
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
                            <p className='text-main-color font-semibold'>WE ARE WAKARAN ENGLISH!</p>
                        </div>
                        <div className='mt-[16px]'>
                            <p className='text-sm'>Post Member：HuYnH</p>
                            <p className='off-color text-sm'>Posted day 2025/07/08</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* pagination */}
            <div className='mt-[48px]'>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href='#' />
                        </PaginationItem>
                        <PaginationItem>
                            {
                                [...Array(3)].map((_,i) => (
                                    <div key={i}>
                                        <PaginationLink href='#'>1</PaginationLink>
                                    </div>
                                ))
                            }
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
