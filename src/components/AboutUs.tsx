'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

export default function AboutUs() {
    const t = useTranslations('aboutUs')

    return (
        <div className='mx-auto mb-48 flex w-full max-w-[1120px] items-center justify-between gap-12'>
            <div className='relative h-[500px] w-[500px] shrink-0'>
                <Image
                    src='/images/weareWakaran.webp'
                    alt='About Us Image'
                    fill
                    className='object-cover object-[30%_50%]'
                />
            </div>
            <div className='pt-12 pb-23.5'>
                <h2 className='main-color mb-4 text-base'>{t('title')}</h2>
                <h3 className='text-main-color mb-4 text-[32px] leading-12 font-semibold'>
                    {t('heading')}
                    <br />
                    {t('subheading')}
                </h3>
                <p className='text-sub-color font-regular mb-4 text-base leading-8'>{t('description')}</p>
                <div className='items-left flex gap-6'>
                    <Link
                        href='https://www.youtube.com/@WakaranEnglish'
                        target='_blank'
                    >
                        <Image
                            src='/images/youtubeIcon.png'
                            alt={t('youtubeAlt')}
                            width={31}
                            height={31}
                            className='object-cover object-center'
                        />
                    </Link>
                    <Link
                        href='https://www.instagram.com/wakaran.eng/'
                        target='_blank'
                    >
                        <Image
                            src='/images/instagramIcon.png'
                            alt={t('instagramAlt')}
                            width={31}
                            height={31}
                            className='object-cover object-center'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
