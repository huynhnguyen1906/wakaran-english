import Head from 'next/head'

import { JSONLDData } from '@/lib/structuredData'

interface SEOComponentProps {
    title?: string
    description?: string
    canonical?: string
    structuredData?: JSONLDData[]
    noindex?: boolean
}

export default function SEOComponent({
    title,
    description,
    canonical,
    structuredData = [],
    noindex = false,
}: SEOComponentProps) {
    return (
        <Head>
            {title && <title>{title}</title>}
            {description && (
                <meta
                    name='description'
                    content={description}
                />
            )}
            {canonical && (
                <link
                    rel='canonical'
                    href={canonical}
                />
            )}
            {noindex && (
                <meta
                    name='robots'
                    content='noindex,nofollow'
                />
            )}

            {/* Structured Data */}
            {structuredData.map((data, index) => (
                <script
                    key={index}
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(data),
                    }}
                />
            ))}

            {/* Preconnect to external domains for performance */}
            <link
                rel='preconnect'
                href='https://fonts.googleapis.com'
            />
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossOrigin='anonymous'
            />
            <link
                rel='preconnect'
                href='https://www.youtube-nocookie.com'
            />
            <link
                rel='preconnect'
                href='https://www.instagram.com'
            />

            {/* DNS prefetch for WordPress API */}
            <link
                rel='dns-prefetch'
                href='//api.wakaran-eng.com'
            />
        </Head>
    )
}
