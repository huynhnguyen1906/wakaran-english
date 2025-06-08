'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
    return (
        <div className='mb-48 flex w-full items-center justify-between gap-12 px-20'>
            <div className='relative h-[500px] w-[500px] shrink-0'>
                <Image
                    src='/images/jumpHoju.jpg'
                    alt='About Us Image'
                    fill
                    className='object-cover object-center'
                />
            </div>
            <div className='pt-12 pb-23.5'>
                <h2 className='mb-4 text-base text-[#FF5E2D]'>About Us</h2>
                <h3 className='mb-4 text-[32px] font-semibold'>
                    THE STORY OF WAKARAN ENGLISH
                    <br />ー THIS IS HOW WE CAME TO BE!
                </h3>
                <p className='mb-4'>
                    Wakarana English was founded with the mission to provide high-quality English language education to
                    students around the world. Our team of experienced educators is dedicated to helping learners
                    achieve their language goals through personalized instruction and engaging learning materials.
                </p>
                <div className='items-left flex gap-6'>
                    <Link href=''>
                        <Image
                            src='/images/youtubeIcon.png'
                            alt='To YouTube Channel'
                            width={31}
                            height={31}
                            className='object-cover object-center'
                        />
                    </Link>
                    <Link href=''>
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
