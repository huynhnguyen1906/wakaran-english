'use client'

import Image from 'next/image'

export default function Hero() {
    return (
        <div className='relative mb-24 h-[482px] w-full'>
            <Image
                src='/images/heroImg.jpg'
                alt='Hero Image'
                fill
                className='object-cover object-[50%_90%]'
            />
        </div>
    )
}
