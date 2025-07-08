import React from 'react'

import Image from 'next/image'

import blogImage from '../../../../public/images/withiain.webp'

const Subscribe = () => {
    return (
        <div className='mx-auto my-20 w-full max-w-[1120px] px-6'>
            <div className='grid grid-cols-2 items-center justify-between gap-10 rounded-2xl bg-[#ff5e2d]'>
                <div className='space-y-6 md:ms-10'>
                    <h1 className='text-main-color most-white text-3xl font-bold'>
                        We’d love to see you online! Follow us below!
                    </h1>
                    <p className='most-white'>Follow us on Instagram for daily stories in Osaka!</p>
                    <button className='flex items-center gap-4 most-white-bg rounded-lg px-6 py-3' >
                        <a href='https://www.youtube.com/@WakaranEnglish'>Youtube</a>
                        <Image
                            src='/images/playButton.png'
                            // alt={t('playButtonAlt')}
                            alt='Play Button'
                            width={45}
                            height={45}
                            className='object-cover'
                        />
                    </button>
                    
                </div>

                <div className='relative h-[400px] w-full overflow-hidden rounded-2xl'>
                    <Image
                        src={blogImage}
                        alt='Subscribe Image'
                        className='rounded-2xl object-cover'
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
