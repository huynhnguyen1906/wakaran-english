'use client';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const t = useTranslations('header');
    const pathname = usePathname();

    return (
        <header className="w-full bg-gray-100">
            <div className="max-w-[1120px] mx-auto">
                {/* Top section with logo and title - 40px padding top */}
                <div className="pt-10 pb-6">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold tracking-wide">WAKARAN ENGLISH</h1>
                        <div className="ml-auto">
                            <Image
                                src="/images/wakaranenglogo1.png"
                                alt="Wakaran English Logo"
                                width={150}
                                height={150}
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Subtitle with 24px spacing */}
                    <div className="mt-6">
                        <p className="text-lg font-medium">{t('subtitle')}</p>
                    </div>
                </div>

                {/* Navigation bar with 24px spacing */}
                <div className="mt-6 pb-12 border-t border-gray-300">
                    <nav className="flex items-center justify-between pt-6">
                        <ul className="flex space-x-8">
                            <li className="text-base">
                                <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>
                                    {t('about')}
                                </Link>
                            </li>
                            <li className="text-base">
                                <Link href="/projects" className={pathname === '/projects' ? 'font-bold' : ''}>
                                    {t('projects')}
                                </Link>
                            </li>
                            <li className="text-base">
                                <Link href="/members" className={pathname === '/members' ? 'font-bold' : ''}>
                                    {t('members')}
                                </Link>
                            </li>
                            <li className="text-base">
                                <Link href="/blogs" className={pathname === '/blogs' ? 'font-bold' : ''}>
                                    {t('blogs')}
                                </Link>
                            </li>
                            <li className="text-base">
                                <Link href="/contact" className={pathname === '/contact' ? 'font-bold' : ''}>
                                    {t('contact')}
                                </Link>
                            </li>
                        </ul>
                        <LanguageSwitcher />
                    </nav>
                </div>
            </div>
        </header>
    );
}
