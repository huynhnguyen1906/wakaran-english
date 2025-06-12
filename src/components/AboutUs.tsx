'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
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
                <h2 className='main-color mb-4 text-base'>About Us</h2>
                <h3 className='text-main-color mb-4 text-[32px] leading-12 font-semibold'>
                    THE STORY OF WAKARAN ENGLISH
                    <br />ー THIS IS HOW WE CAME TO BE!
                </h3>
                <p className='text-sub-color font-regular mb-4 text-base leading-8'>
                    Our mission is to improve our English skills by creating fun and useful content — and to share our
                    progress with you along the way. From quiz games and daily blogs to English news, we’re learning by
                    doing and bringing you the best of our journey. Join us as we grow, learn, and explore English
                    together!
                </p>
                <div className='items-left flex gap-6'>
                    <Link
                        href='https://www.youtube.com/@WakaranEnglish'
                        target='_blank'
                    >
                        <Image
                            src='/images/youtubeIcon.png'
                            alt='To YouTube Channel'
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
                            alt='To Instagram Account'
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
