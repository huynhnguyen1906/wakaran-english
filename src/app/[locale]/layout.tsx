import { Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'
import { NextIntlClientProvider, hasLocale } from 'next-intl'

import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
})

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

    return (
        <html
            lang={locale}
            className={poppins.className}
        >
            <body className='bg-bgcolor no-scroll-x'>
                <NextIntlClientProvider>{children}</NextIntlClientProvider>
            </body>
        </html>
    )
}
