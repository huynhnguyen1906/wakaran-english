import Image from 'next/image'
import React from 'react'
import cardImage from '../../../../public/images/heroImg.jpg'

const BlogCardLists = () => {
    return (
        <div className='mx-auto mt-[136px] mb-48 w-full max-w-[1120px]'>

            {/* header-section */}
            <header className='grid gap-4'>
                <h1 className='text-4xl font-bold main-color'>ALL BLOGS</h1>
                <p className='text-sub-color'>We also share cool things about life in Osaka, and our members write blogs to help you learn and connect.</p>
            </header>


            {/* blog-card-section */}
            <section className='mt-[32px]'>
                <div className="card-image relative w-[205px] h-[115px]">
                    <Image
                        fill
                        alt='blog-card-image'
                        src={cardImage}
                        className='object-cover'
                    />
                </div>
                <div className="card-desc mt-[8px]">
                    <p className='font-semibold text-main-color'>WE ARE WAKARAN ENGLISH!</p>
                </div>
                <div className='mt-[16px] flex-col'>
                    <span>Post Member：HuYnH</span>
                    <span className='text-on-color'>Posted day 2025/07/08</span>
                </div>  
            </section>
        </div>
    )
}

export default BlogCardLists
