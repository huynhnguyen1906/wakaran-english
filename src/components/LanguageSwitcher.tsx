import { useState } from 'react'

import Image from 'next/image'

import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'

export default function LanguageSwitcher() {
    const t = useTranslations('header')
    const locale = useLocale()
    const [isOpen, setIsOpen] = useState(false)

    const languages = {
        en: 'English',
        ja: '日本語',
        vi: 'Tiếng Việt',
        cn: '中文',
    }

    // Ánh xạ locale → mã quốc gia dùng trong flagcdn
    const countryCodes: Record<string, string> = {
        en: 'us',
        ja: 'jp',
        vi: 'vn',
        cn: 'cn',
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='relative'>
            {/* Desktop Version */}
            <button
                onClick={toggleDropdown}
                className='hidden items-center rounded-full border border-gray-300 px-4 py-2 md:flex'
            >
                <span className='mr-2 flex items-center gap-2 text-base'>
                    <Image
                        src={`https://flagcdn.com/${countryCodes[locale]}.svg`}
                        alt={locale}
                        width={24}
                        height={18}
                        className='inline'
                    />
                    | {t('language')}
                </span>
                <svg
                    className='ml-2 h-4 w-4'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    ></path>
                </svg>
            </button>

            {/* Mobile Version */}
            <button
                onClick={toggleDropdown}
                className='flex w-full items-center justify-end px-2 py-1 md:hidden'
            >
                <span className='mr-1 flex items-center gap-2 text-xs font-bold'>{t('language')}</span>
                <svg
                    className='ml-2 h-3 w-3'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    ></path>
                </svg>
            </button>

            {/* Desktop Dropdown */}
            {isOpen && (
                <div className='absolute right-0 z-10 mt-2 hidden w-48 rounded-md bg-[#fefefe] py-2 shadow-lg md:block'>
                    {routing.locales.map((lang) => (
                        <Link
                            href='/'
                            key={lang}
                            locale={lang}
                            className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 ${
                                locale === lang ? 'font-bold' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            <Image
                                src={`https://flagcdn.com/${countryCodes[lang]}.svg`}
                                alt={lang}
                                width={20}
                                height={15}
                            />
                            | {languages[lang as keyof typeof languages]}
                        </Link>
                    ))}
                </div>
            )}

            {/* Mobile Dropdown */}
            <div
                className={`absolute right-0 z-10 mt-0 w-32 transform rounded-md py-1 transition-all duration-100 ease-out md:hidden ${
                    isOpen ?
                        'pointer-events-auto translate-y-0 opacity-100'
                    :   'pointer-events-none -translate-y-2 opacity-0'
                }`}
            >
                {routing.locales.map((lang) => (
                    <Link
                        href='/'
                        key={lang}
                        locale={lang}
                        className={`flex items-center justify-end gap-1 px-2 py-1 text-xs ${
                            locale === lang ? 'font-bold' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                    >
                        {languages[lang as keyof typeof languages]}
                    </Link>
                ))}
            </div>
        </div>
    )
}
