import Image from 'next/image'

import { useTranslations } from 'next-intl'

interface BlogCardProps {
    title?: string
    description?: string
    imageUrl?: string
}

export default function BlogCard({ title, description, imageUrl }: BlogCardProps = {}) {
    const t = useTranslations('blog')

    return (
        <>
            <article className='most-white-bg most-white w-[calc(100%-64px)] flex-shrink-0 rounded-2xl px-2 pt-2 pb-4 md:w-1/3 md:flex-shrink'>
                <div className='aspect-[4/3] rounded-lg bg-gray-300'>
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
                    <h3 className='text-main-color mb-2 text-2xl font-semibold'>{title || t('blogTitle')}</h3>
                    <p className='text-sub-color text-base font-normal'>{description || t('blogDescription')}</p>
                </div>
                <button className='text-bg-color flex gap-x-2 rounded-[10px] px-12 py-3.5 md:rounded-xl md:px-10 md:py-3 md:text-base'>
                    {t('detailBtn')}
                    <Image
                        src='/images/next_btn.svg'
                        alt={t('nextBtnAlt')}
                        width={24}
                        height={24}
                    />
                </button>
            </article>
        </>
    )
}
