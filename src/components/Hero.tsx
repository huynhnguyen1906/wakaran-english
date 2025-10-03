'use client'

import Image from 'next/image'
import Link from 'next/link'
// import { useTranslations } from 'use-intl'

export default function Hero() {

    // const t = useTranslations('hero');

    return (
        <div>
            <div className='mt-4 mb-[140px] hidden md:block w-full bg-[url(/images/wakaranenglish_banner_bg.png)] bg-no-repeat bg-bottom bg-cover py-[48px]'>
                <div className='mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-4'>
                    <div className='grid gap-8'>
                        <h1 className='text-4xl font-bold'>
                            Come and See how we <span className='text-[#FF5E2D]'> Learn English </span>in funny way
                        </h1>
                        <p className='text-[#333333] tracking-wide'>
                            We’re working to improve our English speaking skills by sharing videos that help us practice
                            like interviews with native speakers!
                        </p>
                        <Link
                            href='https://www.youtube.com/@WakaranEnglish'
                            target='_blank'
                            className='flex w-[300px] items-center justify-center hover:text-amber-50 rounded-md border border-[#FF5E2D] transition hover:bg-[#FF5E2D] py-2'
                        >
                            <Image
                                src='/images/playbutton.png'
                                alt='Play Button Icon'
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
