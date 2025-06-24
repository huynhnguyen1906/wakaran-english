'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

// ブログコンテンツができたら、ulの中身を変更する
export default function Blog() {
    const t = useTranslations('blog')

    return (
        <div className='rounded-t-[64px] p-6 md:bg-stone-300 md:pt-24 md:pb-24'>
            <div className='mx-auto md:max-w-[1120px]'>
                <h2 className='mb-2 text-[32px] font-semibold md:text-center md:text-5xl'>BLOG</h2>
                <p className='hidden text-base md:mb-14 md:block md:text-center'>{t('description')}</p>
                <section className='mb-8 flex gap-x-4 overflow-x-auto scroll-smooth md:mb-14 md:gap-x-10 md:overflow-x-visible'>
                    {/* blogの詳細ページが完成したら中身調整 */}
                    <article className='most-white-bg most-white w-[calc(100%-64px)] flex-shrink-0 rounded-2xl px-2 pt-2 pb-4 md:w-1/3 md:flex-shrink'>
                        <div className='aspect-[4/3] rounded-lg bg-gray-300'></div>
                        <div className='mt-2 mb-4 md:my-4'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
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

                    <article className='most-white-bg most-white w-[calc(100%-64px)] flex-shrink-0 rounded-2xl px-2 pt-2 pb-4 md:w-1/3 md:flex-shrink'>
                        <div className='aspect-[4/3] rounded-lg bg-gray-300'></div>
                        <div className='mt-2 mb-4 md:my-4'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
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

                    <article className='most-white-bg most-white w-[calc(100%-64px)] flex-shrink-0 rounded-2xl px-2 pt-2 pb-4 md:w-1/3 md:flex-shrink'>
                        <div className='aspect-[4/3] rounded-lg bg-gray-300'></div>
                        <div className='mt-2 mb-4 md:my-4'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
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
                </section>
                <div className='text-end'>
                    <Link
                        href={'#'}
                        className='bg-[url("/images/more_btn.svg")] bg-contain bg-bottom bg-no-repeat pr-6 text-lg font-normal md:pr-14 md:text-2xl'
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    )
}
