import Image from 'next/image'
import React from 'react'
import cardImage from '@/'

const BlogCardLists = () => {
    return (
        <div className='mx-auto mt-[136px] mb-48 w-full max-w-[1120px]'>
            <header className='grid gap-4'>
                <h1 className='text-4xl font-bold main-color'>ALL BLOGS</h1>
                <p className='text-sub-color'>We also share cool things about life in Osaka, and our members write blogs to help you learn and connect.</p>
            </header>

            <section>
                <div className="card-image">
                    <Image
                        fill
                        alt='blog-card-image'
                        src={}
                    />
                </div>
                <div className="card-desc"></div>
            </section>
        </div>
    )
}

export default BlogCardLists
