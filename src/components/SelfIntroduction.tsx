'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SelfIntroduction() {
    return (
        <div className='mx-auto w-full max-w-[1120px]'>
            <h2 className='mb-6 text-center text-2xl'>Hello</h2>
            <h3 className='mb-4 text-center text-5xl font-semibold'>
                WE ARE <span className='main-color'>WAKARAN ENGLISH!</span>
            </h3>
            <p className='text-sub-color mx-auto mb-4 w-4/5 text-center text-base leading-8'>
                We are a group of students from ECC Computer College’s Website Design Course, creating English-learning
                content to improve our skills and connect with learners like you.
            </p>
            <div className='w-full'>
                <div className='relative h-[510px] w-full overflow-hidden rounded-2xl'>
                    <Image
                        src='/images/introductionThumb.jpg'
                        alt='Self Introduction Thumbnail'
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt='YouTube Play Button'
                            width={82}
                            height={58}
                            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
