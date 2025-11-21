import Image from 'next/image'
import Link from 'next/link'

import { decodeHtmlEntities } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

interface BlogCardProps {
    title?: string
    description?: string
    imageUrl?: string
    slug?: string
}

export default function BlogCard({ title, description, imageUrl, slug }: BlogCardProps = {}) {
    const t = useTranslations('blog')

    const safeTitle = decodeHtmlEntities(title ?? t('blogTitle'))
    const safeDescription = decodeHtmlEntities(description ?? t('blogDescription'))

    return (
        <>
            <article className='most-white-bg most-white w-[calc(100%-64px)]  flex-shrink-0 rounded-2xl px-2 pt-2 pb-4 md:w-1/3 md:flex-shrink-0'>
                <div className='aspect-[4/3] rounded-lg'>
                    {imageUrl && (
                        <Image
                            src={imageUrl}
                            alt='Blog thumbnail'
                            width={400}
                            height={300}
                            className='h-full w-full rounded-lg object-cover'
                        />
                    )}
                </div>
                <div className='mt-2 mb-4 md:my-4'>
                    <h3 className='text-main-color mb-2 text-base font-semibold md:text-2xl max-h-[3.375rem] min-h-[4rem] [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden [-webkit-line-clamp:2]'>{safeTitle}</h3>
                    <p className='text-sub-color [display:-webkit-box] max-h-[3.375rem] min-h-[3.375rem] overflow-hidden text-sm leading-tight font-normal [-webkit-box-orient:vertical] [-webkit-line-clamp:3] md:max-h-[4.5rem] md:min-h-[4.5rem] md:text-base md:leading-normal'>
                        {safeDescription}
                    </p>
                </div>
                <Link
                    href={slug ? `/blogs/${slug}` : '#'}
                    className='text-bg-color inline-flex items-center gap-x-1 rounded-[10px] px-12 py-3.5 text-sm md:rounded-xl md:px-10 md:py-3 md:text-base'
                >
                    {t('detailBtn')}
                    <Image
                        src='/images/next_btn.svg'
                        alt={t('nextBtnAlt')}
                        width={24}
                        height={24}
                    />
                </Link>
            </article>
        </>
    )
}
