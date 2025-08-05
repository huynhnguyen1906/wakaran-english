'use client'

import Image from 'next/image'

import HeroImg from '@/assets/images/heroImg.jpg'

export default function Hero() {
    return (
        <div className='mt-4 w-full'>
            <div className='relative mb-24 hidden h-[500px] w-full md:block'>
                <Image
                    src={HeroImg}
                    alt='Hero Image'
                    className='h-full w-full object-cover object-[50%_55%]'
                />
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
