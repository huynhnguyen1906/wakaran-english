'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

import { Link } from '@/i18n/navigation'

import { decodeHtmlEntities } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

type Post = {
    id: number
    title: string
    description: string
    imageUrl: string
    slug: string
}

type Props = {
    initialPosts: Post[]
}

export default function RecommendPostsClient({ initialPosts }: Props) {
    const t = useTranslations('recommendPosts')
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [posts, setPosts] = useState<Post[]>([])

    const checkScroll = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }

    const truncate = (s: string, max: number) => (s.length <= max ? s : s.slice(0, max) + '…')

    useEffect(() => {
        // サーバーから受け取ったデータを処理
        const processedPosts = [...initialPosts].slice(0, 4)

        // 4件未満の場合はダミーデータで埋める
        while (processedPosts.length < 4) {
            processedPosts.push({
                id: -processedPosts.length - 1,
                title: t('dummyTitle'),
                description: t('dummyDescription'),
                imageUrl: '/images/heroImg_phone.webp',
                slug: '', // dummy slug
            })
        }

        setPosts(processedPosts)
        setTimeout(checkScroll, 0)
    }, [initialPosts, t])

    useEffect(() => {
        checkScroll()
    }, [])

    const scrollByAmount = (amount: number) => {
        if (!scrollRef.current) return
        scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }

    return (
        <div className='mb-12 pl-6 md:mx-auto md:mt-[136px] md:mb-48 md:w-full md:px-6 lg:max-w-[1120px]'>
            <div className='text-sub-color mb-6 text-2xl font-semibold'>{t('title')}</div>
            <div className='relative mb-10 w-full overflow-hidden'>
                <div
                    className={`pointer-events-none absolute top-0 left-0 hidden h-full w-24 bg-gradient-to-r from-[#fefefe]/100 to-transparent transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'} md:block`}
                />
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className='scrollbar-hide flex gap-4 overflow-x-auto pr-6 md:pr-0'
                >
                    {posts.map((p, i) => {
                        const decodedTitle = decodeHtmlEntities(p.title || t('dummyTitle'))
                        const decodedDescription = decodeHtmlEntities(p.description || t('dummyDescription'))
                        const isPlaceholder = p.imageUrl?.endsWith('heroImg_phone.webp') || (p.id ?? 0) < 0
                        const fitClass = isPlaceholder ? 'object-contain' : 'object-cover object-center'

                        return (
                            <div
                                key={p.id ?? i}
                                className='w-[calc(100%-60px)] shrink-0 rounded-2xl bg-[#fefefe] px-2 pt-2 pb-4 md:w-[calc(100%/2.8)] md:rounded-none'
                            >
                                <div className='aspect-[4/3] rounded-lg bg-[#e1d9d6] md:rounded-none'>
                                    <Image
                                        src={p.imageUrl || '/images/heroImg.jpg'}
                                        alt=''
                                        width={400}
                                        height={300}
                                        style={{ width: '100%', height: '100%' }}
                                        className={fitClass}
                                    />
                                </div>
                                <div className='mt-4 w-full'>
                                    <p className='main-color mb-2 text-base font-semibold md:mb-4 md:text-2xl'>
                                        {decodedTitle}
                                    </p>
                                    <p className='text-sub-color [display:-webkit-box] max-h-[3.375rem] min-h-[3.375rem] overflow-hidden text-sm leading-tight font-normal [-webkit-box-orient:vertical] [-webkit-line-clamp:3] md:max-h-[4.5rem] md:min-h-[4.5rem] md:text-base md:leading-normal'>
                                        {truncate(decodedDescription, 60)}
                                    </p>
                                </div>
                                {p.slug ?
                                    <Link
                                        href={`/blogs/${p.slug}`}
                                        className='text-bg-color most-white inline-flex items-center gap-x-1 rounded-[10px] px-12 py-3.5 text-sm md:rounded-xl md:px-10 md:py-3 md:text-base'
                                    >
                                        {t('detailBtn')}
                                        <Image
                                            src='/images/next_btn.svg'
                                            alt={t('nextButton')}
                                            width={24}
                                            height={24}
                                            className='aspect-square w-5 md:w-6'
                                        />
                                    </Link>
                                :   <button className='text-bg-color most-white inline-flex items-center gap-x-1 rounded-[10px] px-12 py-3.5 text-sm md:rounded-xl md:px-10 md:py-3 md:text-base'>
                                        {t('detailBtn')}
                                        <Image
                                            src='/images/next_btn.svg'
                                            alt={t('nextButton')}
                                            width={24}
                                            height={24}
                                            className='aspect-square w-5 md:w-6'
                                        />
                                    </button>
                                }
                            </div>
                        )
                    })}
                </div>
                <div
                    className={`pointer-events-none absolute top-0 right-0 hidden h-full w-24 bg-gradient-to-l from-[#fefefe]/100 to-transparent transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'} md:block`}
                />
            </div>

            <div className='flex items-center justify-end gap-12 max-md:hidden md:pr-6 lg:gap-16 lg:pr-0'>
                <button
                    onClick={() => scrollByAmount(-430)}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white hover:cursor-pointer lg:h-18.5 lg:w-18.5 ${canScrollLeft ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'} `}
                    aria-label={t('previousButton')}
                >
                    &lt;
                </button>
                <button
                    onClick={() => scrollByAmount(430)}
                    className={`flex h-15 w-15 items-center justify-center rounded-full text-3xl text-white hover:cursor-pointer lg:h-18.5 lg:w-18.5 ${canScrollRight ? 'bg-[var(--color-on)]' : 'bg-[var(--color-off)]'} `}
                    aria-label={t('nextButton')}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
