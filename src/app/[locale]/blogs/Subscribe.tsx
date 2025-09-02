import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

import blogImage from '../../../../public/images/withiain.webp'

const Subscribe = () => {
    const t = useTranslations('subscribe')

    return (
        <div className='mx-auto mt-[-120px] md:mt-0 md:max-w-[1120px] md:px-6 md:py-0'>
            <div className='grid items-center justify-between bg-[#ff5e2d] bg-radial-[at_200%_20%] from-[#FEFEFE] to-[#ff5e2d] to-80% pb-[48px] md:grid-cols-2 md:gap-10 md:rounded-2xl md:pb-0'>
                <div className='space-y-3 px-[16px] py-[40px] md:ms-10 md:space-y-6'>
                    <h1 className='text-main-color most-white text-[24px] font-bold md:text-3xl'>{t('title')}</h1>
                    <p className='most-white text-[16px] md:text-[16px]'>{t('desc')}</p>
                    <Link
                        href='https://www.youtube.com/@WakaranEnglish'
                        className='most-white-bg mt-[24px] inline-flex items-center gap-4 rounded-lg px-8 py-3 md:mt-0 md:px-8 md:py-2'
                    >
                        <p>Youtube</p>
                        <div className='relative h-[20px] w-[20px] md:h-[45px] md:w-[45px]'>
                            <Image
                                src='/images/playButton.png'
                                alt='Play Button'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </Link>
                </div>

                <div className='px-[16px] md:px-0'>
                    <div className='relative h-[200px] w-full overflow-hidden md:h-[400px]'>
                        <Image
                            src={blogImage}
                            alt='Subscribe Image'
                            className='rounded-md object-cover md:rounded-2xl'
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
