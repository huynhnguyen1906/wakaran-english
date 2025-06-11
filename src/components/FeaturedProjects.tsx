'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProjects() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    useEffect(() => {
        checkScrollButtons()
    }, [])

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -430,
                behavior: 'smooth',
            })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 430,
                behavior: 'smooth',
            })
        }
    }
    return (
        <div className='mx-auto mb-48 w-full max-w-[1120px]'>
            <div className='mx-auto'>
                <h2 className='mb-4 text-5xl leading-18 font-semibold'>
                    We ARE WAKARAN ENGLISH AND
                    <br />
                    THIS IS <span className='main-color'>OUR PROJECTS!</span>
                </h2>
                <p className='text-sub-color mb-6 text-base leading-8'>
                    Our featured projects showcase the innovative ways we are learning and using English. From
                    interactive quizzes to engaging
                    <br />
                    blog posts, we invite you to explore our work and join us on this exciting journey!
                </p>
            </div>
            <div
                ref={scrollContainerRef}
<<<<<<< HEAD
                className='scrollbar-hide -mr-[50vw] mb-10 flex w-auto gap-4 overflow-x-scroll overflow-y-visible pr-[50vw]'
=======
                className='scrollbar-hide -mr-[50vw] mb-10 flex w-auto gap-4 overflow-x-scroll pr-[50vw]'
>>>>>>> df1e1cc (Implement code changes to enhance functionality)
                onScroll={checkScrollButtons}
            >
                <div className='relative h-[478px] w-[413px] shrink-0'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt='Yuki & Iain Thumbnail'
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt='YouTube Play Button'
                            width={82}
                            height={58}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center'
                        />
                    </Link>
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>2025.05.13</p>
                        <p className='text-2xl font-medium text-white'>Interview Quiz with IAIN</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt='Yuki & Iain Thumbnail'
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt='YouTube Play Button'
                            width={82}
                            height={58}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center'
                        />
                    </Link>
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>2025.05.13</p>
                        <p className='text-2xl font-medium text-white'>Interview Quiz with IAIN</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt='Yuki & Iain Thumbnail'
                        fill
                        className='object-cover object-center'
                    />
                    <Image
                        src='/images/playButton.png'
                        alt='YouTube Play Button'
                        width={82}
                        height={58}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center'
                    />
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>2025.05.13</p>
                        <p className='text-2xl font-medium text-white'>Interview Quiz with IAIN</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt='Yuki & Iain Thumbnail'
                        fill
                        className='object-cover object-center'
                    />
                    <Image
                        src='/images/playButton.png'
                        alt='YouTube Play Button'
                        width={82}
                        height={58}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center'
                    />
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>2025.05.13</p>
                        <p className='text-2xl font-medium text-white'>Interview Quiz with IAIN</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-16'>
                <button
                    onClick={scrollLeft}
                    className={`flex h-18.5 w-18.5 items-center justify-center rounded-full text-3xl text-white ${
                        canScrollLeft ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    }`}
                    aria-label='Previous'
                >
                    &lt;
                </button>
                <button
                    onClick={scrollRight}
                    className={`flex h-18.5 w-18.5 items-center justify-center rounded-full text-3xl text-white ${
                        canScrollRight ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    }`}
                    aria-label='Next'
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
