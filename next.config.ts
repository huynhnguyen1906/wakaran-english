import { NextConfig } from 'next'

import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    images: {
        domains: ['flagcdn.com', 'api.wakaran-eng.com', 'i.ytimg.com', 'click.ecc.ac.jp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'api.wakaran-eng.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.wakaran-eng.com',
                port: '',
                pathname: '/**',
            },
        ],
        // Allow mixed content for development/production
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Additional config for mixed content
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "img-src 'self' data: http: https:; media-src 'self' http: https:;",
                    },
                ],
            },
        ]
    },
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

export default withNextIntl(nextConfig)
