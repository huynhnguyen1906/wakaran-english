import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'

import ClarityAnalytics from '@/components/Microsoft/ClarityAnalytics'

import { defaultSEO, generateMetadata as generateSEOMetadata } from '@/lib/metadata'

import './globals.css'
import './wp-blocks.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

// Generate metadata for the layout
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params
    const seoConfig = defaultSEO[locale] || defaultSEO['en']

    return {
        ...generateSEOMetadata(seoConfig, locale),
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
                { url: '/favicon.svg', type: 'image/svg+xml' },
            ],
            apple: '/apple-touch-icon.png',
        },
        manifest: '/site.webmanifest',
    }
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    // Ensure that the incoming `locale` is valid
    const { locale } = await params
    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    // Map internal locale to ISO 639-1 language code
    const htmlLang = locale === 'cn' ? 'zh-CN' : locale

    return (
        <html
            lang={htmlLang}
            className={poppins.className}
        >
            <body className='bg-bgcolor no-scroll-x'>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
                <ClarityAnalytics />
            </body>
        </html>
    )
}
