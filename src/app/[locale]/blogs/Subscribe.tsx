import React from 'react'

import Image from 'next/image'

import blogImage from '../../../../public/images/withiain.webp'

const Subscribe = () => {
    return (
        <div className='mx-auto md:max-w-[1120px] md:px-6 md:py-0 md:mt-0 mt-[-120px]'>
            <div className='grid items-center justify-between bg-[#ff5e2d] md:grid-cols-2 pb-[48px] md:pb-0 md:gap-10 md:rounded-2xl'>
                <div className='space-y-3 px-[16px] py-[40px] md:ms-10 md:space-y-6'>
                    <h1 className='text-main-color most-white text-[18px] font-bold md:text-3xl'>
                        We’d love to see you online! Follow us below!
                    </h1>
                    <p className='most-white text-[12px] md:text-[16px]'>
                        Follow us on Instagram for daily stories in Osaka!
                    </p>
                    <button className='most-white-bg mt-[24px] flex items-center gap-4 rounded-lg px-4 py-2 md:mt-0 md:px-6 md:py-4'>
                        <a href='https://www.youtube.com/@WakaranEnglish'>Youtube</a>
                        <div className='relative h-[20px] w-[20px] md:h-[45px] md:w-[45px]'>
                            <Image
                                src='/images/playButton.png'
                                // alt={t('playButtonAlt')}
                                alt='Play Button'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </button>
                </div>

                <div className='px-[16px] md:px-0'>
                    <div className='relative h-[200px] w-full overflow-hidden md:h-[400px]'>
                        <Image
                            src={blogImage}
                            alt='Subscribe Image'
                            className='object-cover rounded-md md:rounded-2xl'
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
