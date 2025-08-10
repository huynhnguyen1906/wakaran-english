'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

export default function AboutUs() {
    const t = useTranslations('aboutUs')
    const [hoverYT, setHoverYT] = useState(false)
    const [hoverIG, setHoverIG] = useState(false)

    return (
        <div className='mx-auto flex w-full max-w-[1120px] items-center justify-between gap-12 max-md:px-6 md:mb-48 md:px-6 lg:px-0'>
            <div className='hidden shrink-0 md:block md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]'>
                <Image
                    src='/images/weareWakaran.webp'
                    alt='About Us Image'
                    width={500}
                    height={500}
                    className='h-full w-full object-cover object-[30%_50%]'
                />
            </div>
            <div className='pt-12 pb-23.5 max-md:p-0 max-md:pb-12'>
                <h2 className='main-color mb-4 hidden text-base md:block'>{t('title')}</h2>
                <h3 className='text-main-color mb-4 text-[32px] leading-12 font-semibold'>
                    {t('heading')}
                    <br />
                    {t('subheading')}
                </h3>
                <p className='text-sub-color font-regular mb-4 text-base leading-8 max-md:m-0 max-md:p-0'>
                    {t('description')}
                </p>
                <div className='items-left flex gap-6 max-md:hidden'>
                    <Link
                        href='https://www.youtube.com/@WakaranEnglish'
                        target='_blank'
                    >
                        <Image
                            src={hoverYT ? '/images/youtubeIcon_hover.png' : '/images/youtubeIcon.png'}
                            alt={t('youtubeAlt')}
                            width={31}
                            height={31}
                            className='object-cover object-center'
                            onMouseEnter={() => setHoverYT(true)}
                            onMouseLeave={() => setHoverYT(false)}
                        />
                    </Link>
                    <Link
                        href='https://www.instagram.com/wakaran.eng/'
                        target='_blank'
                    >
                        <Image
                            src={hoverIG ? '/images/instagramIcon_hover.png' : '/images/instagramIcon.png'}
                            alt={t('instagramAlt')}
                            width={29}
                            height={29}
                            className='object-cover object-center'
                            onMouseEnter={() => setHoverIG(true)}
                            onMouseLeave={() => setHoverIG(false)}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
