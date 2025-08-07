'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { useTranslations } from 'next-intl'

export default function LatestPosts() {
    const t = useTranslations('latestPosts')
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScroll = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }

    useEffect(() => {
        checkScroll()
    }, [])

    const scrollByAmount = (amount: number) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }

    return (
        <div className='mx-auto mt-[136px] mb-48 w-full max-w-[1120px]'>
            <div className='text-sub-color mb-6 text-2xl font-semibold'>{t('title')}</div>
            <div className='relative mb-10 w-full overflow-hidden'>
                <div
                    className={`pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#fefefe]/100 to-transparent transition-opacity duration-300 ${
                        canScrollLeft ? 'opacity-100' : 'opacity-0'
                    } `}
                />
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className='scrollbar-hide flex gap-4 overflow-x-auto'
                >
                    {[1, 2, 3, 4].map((_, i) => (
                        <div
                            key={i}
                            className='shrink-0'
                        >
                            <div className='h-[300px] w-[450px]'>
                                <Image
                                    src='/images/heroImg.jpg'
                                    alt=''
                                    width={450}
                                    height={300}
                                    className='object-cover object-center'
                                />
                            </div>
                            <div className='mt-4 w-[450px]'>
                                <p className='main-color mb-4 text-2xl font-semibold'>{t('blogTitle')}</p>
                                <p className='text-sub-color mb-6 text-base'>{t('blogContent')}</p>
                            </div>
                            <button className='text-bg-color most-white flex gap-2 rounded-[10px] px-12 py-3.5 md:rounded-xl md:px-10 md:py-3 md:text-base'>
                                {t('detailBtn')}
                                <Image
                                    src='/images/next_btn.svg'
                                    alt={t('nextButton')}
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    ))}
                </div>
                <div
                    className={`pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#fefefe]/100 to-transparent transition-opacity duration-300 ${
                        canScrollRight ? 'opacity-100' : 'opacity-0'
                    } `}
                />
            </div>

            <div className='flex items-center justify-end gap-12 max-md:hidden md:pr-6 lg:gap-16 lg:pr-0'>
                <button
                    onClick={() => scrollByAmount(-430)}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white lg:h-18.5 lg:w-18.5 ${
                        canScrollLeft ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    } `}
                    aria-label={t('previousButton')}
                >
                    &lt;
                </button>
                <button
                    onClick={() => scrollByAmount(430)}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white lg:h-18.5 lg:w-18.5 ${
                        canScrollRight ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    } `}
                    aria-label={t('nextButton')}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
