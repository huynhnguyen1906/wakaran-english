'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { renderTextWithLineBreaks } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

type ShortVideo = {
    id: string
    title: string
    publishedAt: string
    thumbnail: string
}

export default function FeaturedProjects() {
    const t = useTranslations('featuredProjects')
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [videos, setVideos] = useState<ShortVideo[]>([])
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    useEffect(() => {
        fetch('/api/shorts')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data.shorts)) {
                    setVideos(data.shorts)
                } else {
                    console.warn('API の shorts が配列ではありません:', data)
                    setVideos([])
                }
            })
    }, [])

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
        }
    }

    useEffect(() => {
        checkScrollButtons()
    }, [videos])

    console.log('videos:', videos)

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
        <div
            id='projects'
            className='mx-auto mb-20 w-full max-w-[1120px] max-md:mb-12 max-md:px-6'
        >
            <div className='mx-auto md:px-6 lg:px-0'>
                {/* PC用h2 */}
                <h2 className='mb-4 hidden font-semibold md:block md:text-4xl md:leading-14 lg:text-5xl lg:leading-18'>
                    {t('title')}
                    <br />
                    {t('titleMiddle')}
                    <span className='main-color'>{t('titleHighlight')}</span>
                </h2>
                {/* スマホ用h2 */}
                <h2 className='mb-4 block text-[32px] leading-12 font-semibold whitespace-pre-line md:hidden'>
                    {t('mobileTitle')}
                    <br />
                    <span className='main-color'>{t('mobileTitleHighlight')}</span>
                </h2>
                <p className='text-sub-color mb-6 text-base leading-8'>{renderTextWithLineBreaks(t('description'))}</p>
            </div>

            <div className='relative mb-10 w-full overflow-hidden'>
                <div
                    className={`pointer-events-none absolute top-0 left-0 z-10 hidden h-full w-24 bg-gradient-to-r from-[#edece8]/100 to-transparent transition-opacity duration-300 md:block ${
                        canScrollLeft ? 'opacity-100' : 'opacity-0'
                    }`}
                />
                <div
                    ref={scrollContainerRef}
                    className='scrollbar-hide flex gap-4 overflow-x-auto md:px-6'
                    onScroll={checkScrollButtons}
                >
                    {videos.map((v) => {
                        const isDummy = v.publishedAt === ''
                        return (
                            <div
                                key={v.id}
                                className='relative h-[478px] w-[413px] shrink-0 max-md:h-[354px] max-md:w-[305px]'
                            >
                                {isDummy ?
                                    <div className='absolute inset-0 flex items-center justify-center rounded-3xl bg-[#e1d9d6]'>
                                        <Image
                                            src='/images/heroImg_phone.webp'
                                            alt='Coming Soon'
                                            width={300}
                                            height={300}
                                            className='object-contain'
                                        />
                                    </div>
                                :   <>
                                        <Image
                                            src={v.thumbnail}
                                            alt={v.title}
                                            fill
                                            className='rounded-3xl object-cover object-[50%_70%]'
                                        />
                                        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 rounded-3xl rounded-t-none bg-gradient-to-t from-black/60' />
                                        <Link
                                            href={`https://youtube.com/watch?v=${v.id}`}
                                            target='_blank'
                                            className='absolute inset-0 flex items-center justify-center'
                                        >
                                            <Image
                                                src='/images/playButton.png'
                                                alt={t('playButtonAlt')}
                                                width={82}
                                                height={58}
                                                className='drop-shadow-playBtn max-md:h-[44px] max-md:w-[62px]'
                                            />
                                        </Link>
                                    </>
                                }

                                <div className='absolute bottom-4 left-4 flex flex-col'>
                                    {!isDummy && (
                                        <p className='text-base text-white'>
                                            {new Date(v.publishedAt).toLocaleDateString()}
                                        </p>
                                    )}
                                    <p className='text-xl font-medium text-white max-md:text-base'>
                                        {isDummy ? 'coming soon...' : v.title}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div
                    className={`pointer-events-none absolute top-0 right-0 z-10 hidden h-full w-24 bg-gradient-to-l from-[#edece8]/100 to-transparent transition-opacity duration-300 md:block ${
                        canScrollRight ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            </div>

            <div className='flex items-center justify-end gap-12 max-md:hidden md:pr-6 lg:gap-16 lg:pr-0'>
                <button
                    onClick={scrollLeft}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white lg:h-18.5 lg:w-18.5 ${
                        canScrollLeft ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    }`}
                    aria-label={t('previousButton')}
                >
                    &lt;
                </button>
                <button
                    onClick={scrollRight}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white lg:h-18.5 lg:w-18.5 ${
                        canScrollRight ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    }`}
                    aria-label={t('nextButton')}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
