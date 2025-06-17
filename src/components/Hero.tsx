'use client'

import Image from 'next/image'

export default function Hero() {
    return (
        <>
            <div className='relative mb-24 hidden h-[482px] w-full md:block'>
                <Image
                    src='/images/heroImg.jpg'
                    alt='Hero Image'
                    fill
                    className='object-cover object-[50%_60%]'
                />
            </div>
            <div className='relative mb-16 block h-[266px] w-full md:hidden'>
                <Image
                    src='/images/heroImg_phone.webp'
                    alt='Phone Size Hero Imag'
                    fill
                    className='object-cover object-[50%_60%]'
                />
            </div>
        </>
    )
}
