'use client'

import { useState } from 'react'

import Image from 'next/image'

interface YouTubeEmbedProps {
    videoId: string
    title?: string
    thumbnail?: string
    className?: string
}

/**
 * Privacy-focused YouTube embed component
 * - Uses youtube-nocookie.com to minimize tracking
 * - Lazy loads iframe only when user clicks play
 * - Reduces third-party cookies and improves Lighthouse scores
 */
export default function YouTubeEmbed({
    videoId,
    title = 'YouTube video player',
    thumbnail,
    className = '',
}: YouTubeEmbedProps) {
    const [isIframeLoaded, setIsIframeLoaded] = useState(false)

    // Generate thumbnail URL if not provided
    const thumbnailUrl = thumbnail || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`

    const handlePlayClick = () => {
        setIsIframeLoaded(true)
    }

    return (
        <div className={`relative aspect-video w-full ${className}`}>
            {!isIframeLoaded ?
                <>
                    {/* Thumbnail */}
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        fill
                        className='object-cover object-center'
                        priority
                    />
                    {/* Play Button Overlay */}
                    <button
                        onClick={handlePlayClick}
                        className='absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90'
                        aria-label='Play video'
                    >
                        <Image
                            src='/images/playButton.png'
                            alt='Play button'
                            width={82}
                            height={58}
                            className='drop-shadow-playBtn max-md:h-[44px] max-md:w-[62px]'
                        />
                    </button>
                </>
            :   <iframe
                    width='560'
                    height='315'
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                    className='absolute inset-0 h-full w-full'
                />
            }
        </div>
    )
}
