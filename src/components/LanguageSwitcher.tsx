import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const t = useTranslations('header');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    // Create language names mapping
    const languages = {
        en: 'English',
        ja: '日本語',
        vi: 'Tiếng Việt',
        cn: '中文',
    };

    // Handle dropdown toggle
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 border border-gray-300 rounded-full flex items-center"
            >
                <span className="mr-2">{t('language')}</span>
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    ></path>
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                    {routing.locales.map((lang) => (
                        <Link
                            href={'/'}
                            key={lang}
                            locale={lang}
                            className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                locale === lang ? 'font-bold' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {languages[lang as keyof typeof languages]}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
