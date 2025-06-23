'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { renderTextWithLineBreaks } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

export default function FeaturedProjects() {
    const t = useTranslations('featuredProjects')
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
        <div className='mx-auto mb-20 w-full max-w-[1120px] max-md:mb-12 max-md:px-6'>
            <div className='mx-auto'>
                {/* PC用h2 */}
                <h2 className='mb-4 hidden text-5xl leading-18 font-semibold md:block'>
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
            <div
                ref={scrollContainerRef}
                className='scrollbar-hide -mr-[50vw] mb-10 flex w-auto gap-4 overflow-x-scroll pr-[50vw]'
                onScroll={checkScrollButtons}
            >
                <div className='relative h-[478px] w-[413px] shrink-0 max-md:h-[354px] max-md:w-[305px]'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt={t('thumbnailAlt')}
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt={t('playButtonAlt')}
                            width={82}
                            height={58}
                            className='drop-shadow-playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center max-md:h-[44px] max-md:w-[62px]'
                        />
                    </Link>
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>{t('videoDate')}</p>
                        <p className='text-2xl font-medium text-white max-md:text-base'>{t('videoTitle')}</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0 max-md:h-[354px] max-md:w-[305px]'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt={t('thumbnailAlt')}
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt={t('playButtonAlt')}
                            width={82}
                            height={58}
                            className='drop-shadow-playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center max-md:h-[44px] max-md:w-[62px]'
                        />
                    </Link>
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>{t('videoDate')}</p>
                        <p className='text-2xl font-medium text-white max-md:text-base'>{t('videoTitle')}</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0 max-md:h-[354px] max-md:w-[305px]'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt={t('thumbnailAlt')}
                        fill
                        className='object-cover object-center'
                    />
                    <Image
                        src='/images/playButton.png'
                        alt={t('playButtonAlt')}
                        width={82}
                        height={58}
                        className='drop-shadow-playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center max-md:h-[44px] max-md:w-[62px]'
                    />
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>{t('videoDate')}</p>
                        <p className='text-2xl font-medium text-white max-md:text-base'>{t('videoTitle')}</p>
                    </div>
                </div>
                <div className='relative h-[478px] w-[413px] shrink-0 max-md:h-[354px] max-md:w-[305px]'>
                    <Image
                        src='/images/shortsThumb.png'
                        alt={t('thumbnailAlt')}
                        fill
                        className='object-cover object-center'
                    />
                    <Image
                        src='/images/playButton.png'
                        alt={t('playButtonAlt')}
                        width={82}
                        height={58}
                        className='drop-shadow-playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center max-md:h-[44px] max-md:w-[62px]'
                    />
                    <div className='absolute bottom-4 left-4 flex flex-col'>
                        <p className='text-base text-white'>{t('videoDate')}</p>
                        <p className='text-2xl font-medium text-white max-md:text-base'>{t('videoTitle')}</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-end gap-16 max-md:hidden'>
                <button
                    onClick={scrollLeft}
                    className={`flex h-18.5 w-18.5 items-center justify-center rounded-full text-3xl text-white ${
                        canScrollLeft ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'
                    }`}
                    aria-label={t('previousButton')}
                >
                    &lt;
                </button>
                <button
                    onClick={scrollRight}
                    className={`flex h-18.5 w-18.5 items-center justify-center rounded-full text-3xl text-white ${
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
