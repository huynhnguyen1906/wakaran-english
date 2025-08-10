import React from 'react'

import Image from 'next/image'

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

const BlogCardLists = () => {
    return (
        <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1120px] px-5'>
            {/* page-navigation-btn */}
            <div className='mb-[40px]'>
                <Backbtn />
            </div>

            {/* header-section */}
            <header className='grid gap-4'>
                <h1 className='main-color text-[32px] font-bold md:text-[48px]'>ALL BLOGS <span className='text-[12px] md:text-[24px]'>( 69 Posts )</span></h1>
                <p className='text-[#4c4c4c] text-[14px] md:text-[24px]'>
                    We also share cool things about life in Osaka, and our members write blogs to help you learn and
                    connect.
                </p>
            </header>

            {/* blog-card-section */}
            <section className='grid md:grid-cols-5'>
                {[...Array(10)].map((_, i) => (
                    <div
                        className='mt-[32px] flex gap-[8px] md:block md:border-b-0 md:pb-0 border-b-2 pb-4'
                        key={i}
                    >
                        <div className='card-image relative h-[72px] w-[72px] md:h-[115px] md:w-[205px]'>
                            <Image
                                fill
                                alt='blog-card-image'
                                src={cardImage}
                                className='rounded-lg object-cover'
                            />
                        </div>

                        <div>
                            <div className='card-desc mt-[8px]'>
                                <p className='text-main-color text-[16px] font-semibold'>WE ARE WAKARAN ENGLISH!</p>
                            </div>
                            <div className='mt-[16px] flex gap-[8px] md:block'>
                                <p className='text-[12px]'>
                                    <span className='hidden md:inline'>Post Member:</span> HuYnH
                                </p>
                                <p className='off-color text-[12px]'>
                                    <span className='hidden md:inline'>Posted day </span> 2025/07/08
                                </p>
                            </div>
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
