import { NextResponse } from 'next/server'

import axios, { AxiosResponse } from 'axios'

interface YouTubeSearchResponseItem {
    id: { videoId: string }
}
interface YouTubeSearchResponse {
    items: YouTubeSearchResponseItem[]
}

interface YouTubeVideoContentDetails {
    duration: string
}
interface YouTubeVideoSnippet {
    title: string
    publishedAt: string
    thumbnails: { medium: { url: string } }
}
interface YouTubeVideosResponseItem {
    id: string
    snippet: YouTubeVideoSnippet
    contentDetails: YouTubeVideoContentDetails
}
interface YouTubeVideosResponse {
    items: YouTubeVideosResponseItem[]
}

type ShortVideo = {
    id: string
    title: string
    publishedAt: string
    thumbnail: string
}

function isoDurationToSeconds(dur: string): number {
    const m = dur.match(/PT(?:(\d+)M)?(?:(\d+)S)?/)
    if (!m) return 0
    const minutes = parseInt(m[1] ?? '0', 10)
    const seconds = parseInt(m[2] ?? '0', 10)
    return minutes * 60 + seconds
}

export async function GET() {
    const key = process.env.YOUTUBE_API_KEY!
    const channelId = process.env.CHANNEL_ID!
    const excludeId = process.env.EXCLUDE_VIDEO_ID!
    try {
        const searchRes: AxiosResponse<YouTubeSearchResponse> = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    key,
                    channelId,
                    part: 'id',
                    order: 'viewCount',
                    maxResults: 8,
                    type: 'video',
                    videoDuration: 'short',
                },
            }
        )
        const candidateIds = searchRes.data.items.map((i) => i.id.videoId).filter(Boolean)

        if (candidateIds.length === 0) {
            const dummy = Array.from({ length: 4 }, (_, i) => ({
                id: `coming-soon-${i}`,
                title: 'coming soon...',
                publishedAt: '',
                thumbnail: '/images/heroImg_phone.webp',
            }))
            return NextResponse.json({ shorts: dummy })
        }

        const infoRes: AxiosResponse<YouTubeVideosResponse> = await axios.get(
            'https://www.googleapis.com/youtube/v3/videos',
            {
                params: {
                    key,
                    id: candidateIds.join(','),
                    part: 'snippet,contentDetails',
                },
            }
        )

        const shortsOnly: ShortVideo[] = infoRes.data.items
            .filter((v) => isoDurationToSeconds(v.contentDetails.duration) <= 180)
            // ID を除外
            .filter((v) => v.id !== excludeId)
            .map((v) => ({
                id: v.id,
                title: v.snippet.title,
                publishedAt: v.snippet.publishedAt,
                thumbnail: v.snippet.thumbnails.medium.url,
            }))
            .slice(0, 4)

        while (shortsOnly.length < 4) {
            shortsOnly.push({
                id: `coming-soon-${shortsOnly.length}`,
                title: 'coming soon...',
                publishedAt: '',
                thumbnail: '/images/heroImg_phone.webp',
            })
        }

        return NextResponse.json({ shorts: shortsOnly })
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('YouTube API error:', {
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
            })
        } else {
            console.error('Unexpected error:', error)
        }
        return NextResponse.json({ error: 'YouTube API error' }, { status: 500 })
    }
}
