'use client'

import { useState } from 'react'

import { usePathname } from 'next/navigation'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

import LanguageSwitcher from './LanguageSwitcher'

export default function MobileHamburgerMenu() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const t = useTranslations('header')

    return (
        <div className='fixed top-0 z-50 flex h-[60px] w-full items-center justify-between bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.8)_60%,rgba(255,255,255,0.6)_70%,rgba(255,255,255,0.4)_85%,rgba(255,255,255,0)_100%)] px-6'>
            {/* Hamburger Button */}
            <h1 className='text-lg font-bold'>WAKARAN ENGLISH</h1>
            <button
                onClick={() => setOpen(!open)}
                className='fixed top-2 right-6 z-50 flex h-10 w-10 flex-col items-center justify-center space-y-1.5 text-black'
                aria-label='Toggle menu'
            >
                <span
                    className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                        open ? 'translate-y-2 rotate-45' : ''
                    }`}
                />
                <span
                    className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                        open ? 'opacity-0' : ''
                    }`}
                />
                <span
                    className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                        open ? '-translate-y-2 -rotate-45' : ''
                    }`}
                />
            </button>

            {/* Overlay */}
            {open && (
                <div
                    className='fixed inset-0 z-30 bg-transparent backdrop-blur-sm'
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Menu Panel */}
            <div
                className={`fixed inset-0 z-40 h-[100dvh] min-h-[100dvh] transform bg-[linear-gradient(90deg,rgba(254,254,254,0.7)_40%,#FEFEFE_70%)] backdrop-blur-sm transition-transform duration-300 ease-in-out ${
                    open ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex h-full flex-col items-end justify-between px-6 py-12'>
                    <div className='mt-[80px] flex flex-col gap-6 text-right text-base text-black'>
                        <Link
                            href='/'
                            onClick={() => setOpen(false)}
                            className={`relative transition-all duration-500 ease-out after:absolute after:right-0 after:bottom-0 after:h-px after:w-full after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-20 hover:text-gray-600 ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            } ${pathname === '/' ? 'font-bold' : ''}`}
                            style={{ transitionDelay: open ? '200ms' : '0ms' }}
                        >
                            {t('about')}
                        </Link>
                        <Link
                            href='/#projects'
                            onClick={() => setOpen(false)}
                            className={`relative transition-all duration-500 ease-out after:absolute after:right-0 after:bottom-0 after:h-px after:w-full after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-20 hover:text-gray-600 ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            } ${pathname === '/#projects' ? 'font-bold' : ''}`}
                            style={{ transitionDelay: open ? '250ms' : '0ms' }}
                        >
                            {t('projects')}
                        </Link>
                        <Link
                            href='/#members'
                            onClick={() => setOpen(false)}
                            className={`relative transition-all duration-500 ease-out after:absolute after:right-0 after:bottom-0 after:h-px after:w-full after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-20 hover:text-gray-600 ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            } ${pathname === '/#members' ? 'font-bold' : ''}`}
                            style={{ transitionDelay: open ? '300ms' : '0ms' }}
                        >
                            {t('members')}
                        </Link>
                        <Link
                            href='/blogs'
                            onClick={() => setOpen(false)}
                            className={`relative transition-all duration-500 ease-out after:absolute after:right-0 after:bottom-0 after:h-px after:w-full after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-20 hover:text-gray-600 ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            } ${pathname.startsWith('/blogs') ? 'font-bold' : ''}`}
                            style={{ transitionDelay: open ? '350ms' : '0ms' }}
                        >
                            {t('blogs')}
                        </Link>
                        <Link
                            href='/#contact'
                            onClick={() => setOpen(false)}
                            className={`relative transition-all duration-500 ease-out after:absolute after:right-0 after:bottom-0 after:h-px after:w-full after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-20 hover:text-gray-600 ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            } ${pathname === '/#contact' ? 'font-bold' : ''}`}
                            style={{ transitionDelay: open ? '400ms' : '0ms' }}
                        >
                            {t('contact')}
                        </Link>
                        <div
                            className={`transition-all duration-500 ease-out ${
                                open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                            }`}
                            style={{ transitionDelay: open ? '450ms' : '0ms' }}
                        >
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div className='flex flex-col items-end gap-8'>
                        <Link
                            href='/'
                            className='text-md text-black'
                        >
                            WAKARAN ENGLISH
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
