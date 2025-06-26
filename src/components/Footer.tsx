'use client'

import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='text-bg-color w-full pt-[64px] pb-[64px]'>
            <div className='w-full px-4'>
                {/* Top Section */}
                <div className='mb-[48px] text-center'>
                    <p className='most-white mb-[56px] text-[20px]'>Education Website for English Leaners</p>
                    <h1 className='most-white text-[60px] font-bold tracking-wider'>WAKARAN ENGLISH</h1>
                </div>

                {/* Navigation Links */}
                <div className='mb-[64px] flex items-center justify-center gap-[40px]'>
                    <a
                        href='#about'
                        className='most-white text-[16px] transition-opacity hover:opacity-80'
                    >
                        About Us
                    </a>
                    <a
                        href='#projects'
                        className='most-white text-[16px] transition-opacity hover:opacity-80'
                    >
                        Projects
                    </a>
                    <a
                        href='#members'
                        className='most-white text-[16px] transition-opacity hover:opacity-80'
                    >
                        Members
                    </a>
                    <a
                        href='#blogs'
                        className='most-white text-[16px] transition-opacity hover:opacity-80'
                    >
                        Blogs
                    </a>
                    <a
                        href='#contact'
                        className='most-white text-[16px] transition-opacity hover:opacity-80'
                    >
                        Contact
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className='mb-[56px] flex items-center justify-center gap-[32px]'>
                    <a
                        href='https://youtube.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='transition-opacity hover:opacity-80'
                    >
                        <Image
                            src='/images/icon(logo)/youtube-logo-light.svg'
                            alt='YouTube'
                            width={32}
                            height={32}
                        />
                    </a>
                    <a
                        href='https://instagram.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='transition-opacity hover:opacity-80'
                    >
                        <Image
                            src='/images/icon(logo)/ins-logo-light.svg'
                            alt='Instagram'
                            width={32}
                            height={32}
                        />
                    </a>
                </div>

                {/* Copyright */}
                <div className='text-center'>
                    <p className='most-white text-[12px]'>2025©WAKARAN ENGISH</p>
                </div>
            </div>
        </footer>
    )
}
