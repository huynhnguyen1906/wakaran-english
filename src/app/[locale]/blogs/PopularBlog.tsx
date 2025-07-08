'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

// image
import blogImage from '../../../../public/images/huynh_futama.jpg'

const PopularBlog = () => {
    const [text] = useState([
        {
            title: 'RICE INTERVIEW',
            desc: 'We will dispel public concerns about rice prices with even greater speed and a greater sense of urgency',
        },
        {
            title: 'Manga about natural Disaster',
            desc: 'A Japanese manga claims a natural disaster is imminent. Now, some tourists are canceling their trips',
        },
    ])

    const [openIndex, setOpenIndex] = useState<null | number>(null)

    const toggleBlog = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className='mx-auto mt-20 w-full max-w-[1120px] px-6'>
            <div className='mt-10 grid grid-cols-6 '>
                {/* image */}
                <div className='relative col-span-2 col-start-1 h-[507px] w-[466px] overflow-hidden rounded-2xl'>
                    <Image
                        fill
                        src={blogImage}
                        alt='Popular Blog'
                        className='rounded-2xl object-cover'
                    />
                </div>

                {/* content */}
                <div className='col-span-3 col-start-4  md:mt-10'>
                    <h1 className='text-main-color text-4xl font-bold tracking-wider'>POPULAR BLOGS</h1>

                    {text.map((item, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div key={index} className='mt-10 space-y-2'>
                                <button
                                    onClick={() => toggleBlog(index)}
                                    className='flex items-center w-full text-main-color text-left text-2xl font-semibold'
                                >
                                    <div>
                                        <span className='main-color'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>{' '}
                                        {item.title}
                                    </div>
                                    <div className='ml-2'>
                                        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                    </div>
                                </button>

                                {isOpen && (
                                    <p className='text-main-color'>{item.desc}</p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr className='my-[96px]'/>
        </div>
    )
}

export default PopularBlog
