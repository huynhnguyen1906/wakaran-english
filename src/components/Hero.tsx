'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'use-intl'

// import HeroImg from '@/assets/images/heroImg.jpg'

export default function Hero() {
    const t = useTranslations('banner')

    return (
        <div>
            <div className='mt-4 mb-[140px] hidden w-full bg-cover bg-bottom bg-no-repeat py-[48px] md:block'>
                <div className='mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-4'>
                    <div className='grid gap-8'>
                        <h1 className='text-4xl font-bold'>{t('title')}</h1>
                        <p className='tracking-wide text-[#333333]'>{t('desc')}</p>
                        <Link
                            href='https://www.youtube.com/@WakaranEnglish'
                            target='_blank'
                            className='flex w-[300px] items-center justify-center rounded-md border border-[#FF5E2D] py-2 transition hover:bg-[#FF5E2D] hover:text-amber-50'
                        >
                            <Image
                                src='/images/playButton.png'
                                alt={t('alt')}
                                width={40}
                                height={40}
                                className='mr-2 inline-block'
                            />
                            @WakaranEnglish
                        </Link>
                    </div>
                    <div className='relative hidden h-[482px] w-full md:block'>
                        <Image
                            src='/images/wakaranenglish_banner.png'
                            alt='Hero Image'
                            fill
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>

            <div className='relative mx-auto mb-16 h-[266px] w-[266px] md:hidden'>
                <Image
                    src='/images/heroImg_phone.webp'
                    alt='Phone Size Hero Imag'
                    width={266}
                    height={266}
                    className='object-cover object-center'
                />
            </div>
        </div>
    )
}
