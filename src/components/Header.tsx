'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import LanguageSwitcher from './LanguageSwitcher'
import MobileHamburgerMenu from './MobileHamburgerMenu'

export default function Header() {
    const t = useTranslations('header')
    const pathname = usePathname()

    return (
        <header className='w-full'>
            {/* Desktop Header */}
            <div className='relative mx-auto hidden max-w-[1120px] px-5 md:block lg:px-0'>
                <div className='top absolute right-0 h-[325px] w-[325px]'>
                    <Image
                        src='/images/wakaranenglogo1.png'
                        alt='Wakaran English Logo'
                        width={325}
                        height={325}
                        className='object-contain'
                    />
                </div>

                <div className='pt-10 pb-6'>
                    <h1 className='text-4xl font-bold tracking-wide'>WAKARAN ENGLISH</h1>
                    <div className='mt-6'>
                        <p className='text-lg font-medium'>{t('subtitle')}</p>
                    </div>
                </div>

                <div className='mt-6 border-t border-gray-300 pb-12'>
                    <nav className='flex items-center justify-between pt-6'>
                        <ul className='flex space-x-8'>
                            <li className='text-base hover:text-[#FF5E2D]'>
                                <Link
                                    href='/'
                                    className={pathname === '/' ? 'font-bold' : ''}
                                >
                                    {t('about')}
                                </Link>
                            </li>
                            <li className='text-base hover:text-[#FF5E2D]'>
                                <Link
                                    href='/projects'
                                    className={pathname === '/projects' ? 'font-bold' : ''}
                                >
                                    {t('projects')}
                                </Link>
                            </li>
                            <li className='text-base hover:text-[#FF5E2D]'>
                                <Link
                                    href='/members'
                                    className={pathname === '/members' ? 'font-bold' : ''}
                                >
                                    {t('members')}
                                </Link>
                            </li>
                            <li className='text-base hover:text-[#FF5E2D]'>
                                <Link
                                    href='/blogs'
                                    className={pathname === '/blogs' ? 'font-bold' : ''}
                                >
                                    {t('blogs')}
                                </Link>
                            </li>
                            <li className='text-base hover:text-[#FF5E2D]'>
                                <Link
                                    href='/contact'
                                    className={pathname === '/contact' ? 'font-bold' : ''}
                                >
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                        <LanguageSwitcher />
                    </nav>
                </div>
            </div>

            {/* Mobile Header */}
            <div className='block h-[60px] md:hidden'>
                <MobileHamburgerMenu />
            </div>
        </header>
    )
}
