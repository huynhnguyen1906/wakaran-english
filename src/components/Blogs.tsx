'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useTranslations } from 'next-intl'

// ブログコンテンツができたら、ulの中身を変更する
export default function Blog() {
    const t = useTranslations('blog')

    return (
        <div className='rounded-t-[64px] bg-stone-300'>
            <div className='mx-auto max-w-[1120px] pt-20 pb-24'>
                <h2 className='mb-2 text-center text-5xl font-semibold'>BLOGS</h2>
                <p className='mb-14 text-center text-base'>{t('description')}</p>
                <section className='mb-8 flex gap-6'>
                    {/* blogの詳細ページが完成したら中身調整 */}
                    <article className='most-white aspect-[4/3] w-1/3 rounded-2xl px-2 pt-2 pb-4'>
                        <div className='aspect-[4/3] rounded-xl bg-gray-300'></div>
                        <div className='my-4 pr-8'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='text-bg-color rounded-xl px-10 py-3 text-base'>{t('detailBtn')}</button>
                            <button className='text-bg-color rounded-4xl p-3'>
                                <Image
                                    src='/images/next_btn.svg'
                                    alt={t('nextBtnAlt')}
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </article>
                    <article className='most-white aspect-[4/3] w-1/3 rounded-2xl px-2 pt-2 pb-4'>
                        <div className='aspect-[4/3] rounded-xl bg-gray-300'></div>
                        <div className='my-4 pr-8'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='text-bg-color rounded-xl px-10 py-3 text-base'>{t('detailBtn')}</button>
                            <button className='text-bg-color rounded-4xl p-3'>
                                <Image
                                    src='/images/next_btn.svg'
                                    alt={t('nextBtnAlt')}
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </article>
                    <article className='most-white aspect-[4/3] w-1/3 rounded-2xl px-2 pt-2 pb-4'>
                        <div className='aspect-[4/3] rounded-xl bg-gray-300'></div>
                        <div className='my-4 pr-8'>
                            <h3 className='text-main-color mb-2 text-2xl font-semibold'>{t('blogTitle')}</h3>
                            <p className='text-sub-color text-base font-normal'>{t('blogDescription')}</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='text-bg-color rounded-xl px-10 py-3 text-base'>{t('detailBtn')}</button>
                            <button className='text-bg-color rounded-4xl p-3'>
                                <Image
                                    src='/images/next_btn.svg'
                                    alt={t('nextBtnAlt')}
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </div>
                    </article>
                </section>
                <div className='text-end'>
                    <Link
                        href={'#'}
                        className='bg-[url("/images/more_btn.svg")] bg-contain bg-bottom bg-no-repeat pr-14 text-2xl font-normal'
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    )
}
