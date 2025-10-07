import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const imageUrl = searchParams.get('url')

    if (!imageUrl) {
        return new NextResponse('Missing URL parameter', { status: 400 })
    }

    try {
        // Fetch image from HTTP source
        const response = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Next.js Image Proxy)',
            },
        })

        if (!response.ok) {
            return new NextResponse('Failed to fetch image', { status: response.status })
        }

        const contentType = response.headers.get('content-type') || 'image/jpeg'
        const imageBuffer = await response.arrayBuffer()

        return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
                'Access-Control-Allow-Origin': '*',
            },
        })
    } catch (error) {
        console.error('Image proxy error:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
