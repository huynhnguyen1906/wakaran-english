import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations('footer')
    return (
        <footer className='text-bg-color w-full pt-6 pb-12 md:pt-16 md:pb-16'>
            <div className='w-full px-6 md:px-4'>
                {/* Desktop & Tablet Layout */}
                <div className='hidden md:block'>
                    {/* Top Section */}
                    <div className='mb-12 text-center'>
                        <p className='most-white mb-14 text-xl'>{t('subtitle')}</p>
                        <h1 className='most-white text-6xl font-bold tracking-wider'>WAKARAN ENGLISH</h1>
                    </div>

                    {/* Navigation Links */}
                    <div className='mb-16 flex items-center justify-center gap-10'>
                        <a
                            href='#about'
                            className='most-white text-base transition-opacity hover:opacity-80'
                        >
                            {t('about')}
                        </a>
                        <a
                            href='#projects'
                            className='most-white text-base transition-opacity hover:opacity-80'
                        >
                            {t('projects')}
                        </a>
                        <a
                            href='#members'
                            className='most-white text-base transition-opacity hover:opacity-80'
                        >
                            {t('members')}
                        </a>
                        <a
                            href='#blogs'
                            className='most-white text-base transition-opacity hover:opacity-80'
                        >
                            {t('blogs')}
                        </a>
                        <a
                            href='#contact'
                            className='most-white text-base transition-opacity hover:opacity-80'
                        >
                            {t('contact')}
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className='mb-14 flex items-center justify-center gap-8'>
                        <a
                            href='https://youtube.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-opacity hover:opacity-80'
                        >
                            <Image
                                src='/images/icon(logo)/youtube-logo-light.svg'
                                alt={t('youtubeAlt')}
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
                                alt={t('instagramAlt')}
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className='text-center'>
                        <p className='most-white text-xs'>{t('copyright')}</p>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='block md:hidden'>
                    {/* Top Section */}
                    <div className='mb-6 text-left'>
                        <p className='most-white mb-2 text-base'>{t('subtitle')}</p>
                        <h1 className='most-white text-2xl font-bold tracking-wider'>WAKARAN ENGLISH</h1>
                    </div>

                    {/* Navigation Links & Copyright - Mobile Layout */}
                    <div className='flex items-end justify-between'>
                        {/* Navigation Links - Left Side */}
                        <div className='flex flex-col gap-2'>
                            <a
                                href='#about'
                                className='most-white text-base transition-opacity hover:opacity-80'
                            >
                                {t('about')}
                            </a>
                            <a
                                href='#projects'
                                className='most-white text-base transition-opacity hover:opacity-80'
                            >
                                {t('projects')}
                            </a>
                            <a
                                href='#members'
                                className='most-white text-base transition-opacity hover:opacity-80'
                            >
                                {t('members')}
                            </a>
                            <a
                                href='#blogs'
                                className='most-white text-base transition-opacity hover:opacity-80'
                            >
                                {t('blogs')}
                            </a>
                            <a
                                href='#contact'
                                className='most-white text-base transition-opacity hover:opacity-80'
                            >
                                {t('contact')}
                            </a>
                        </div>

                        {/* Copyright - Right Side */}
                        <div className='text-right'>
                            <p className='most-white text-xs'>{t('copyright')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
