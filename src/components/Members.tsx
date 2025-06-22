'use client'

import Image from 'next/image'

import { useTranslations } from 'use-intl'

// 残り行うこと
// 完了: 情報をmessage>jsonデータから取得するように変更する
// 完了: tagsを配列として正しく表示する

export default function Members() {
    const t = useTranslations('members')
    const aya = useTranslations('aya')
    const futama = useTranslations('futama')
    const ikuchan = useTranslations('ikuchan')
    const huynh = useTranslations('huynh')
    const yuki = useTranslations('yuki')

    return (
        <div className='relative mx-auto max-w-[1120px] pt-48 pb-24'>
            <div className='sticky top-1/2 z-20 flex -translate-y-1/2 flex-col items-center justify-center text-center'>
                <p className='mb-6 text-2xl'>{t('subtitle')}</p>
                <h2 className='mb-4 text-5xl font-semibold'>{t('title')}</h2>
                <p className='px-24 text-lg'>
                    {t('descriptionTop')}
                    <br />
                    {t('descriptionBottom')}
                </p>
            </div>

            <div className='relative'>
                {/* aya */}
                <div className='box-border flex w-full items-center justify-start pt-[50vh]'>
                    <div className='w-[calc(50%-6rem)]'>
                        <Image
                            src='/images/aya.webp'
                            alt={aya('imgAlt')}
                            width={500}
                            height={500}
                            className='drop-shadow-light aspect-square w-full object-cover object-top'
                        />
                        <div className='flex flex-col gap-2 pt-2 pb-12'>
                            <h3 className='text-main-color text-2xl font-normal'>{aya('name')}</h3>
                            <p className='text-main-color text-base'>{aya('msg')}</p>
                            <ul className='flex gap-2'>
                                {aya.raw('tags').map((tag: string, index: number) => (
                                    <li
                                        key={index}
                                        className='on-color most-white rounded-[80px] px-5 py-1 text-base'
                                    >
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ふうたま */}
                <div className='box-border flex w-full items-center justify-end'>
                    <div className='w-[calc(50%-6rem)]'>
                        <Image
                            src='/images/futama.webp'
                            alt={futama('imgAlt')}
                            width={500}
                            height={500}
                            className='drop-shadow-light aspect-square w-full object-cover object-center'
                        />
                        <div className='flex flex-col gap-2 pt-2 pb-12'>
                            <h3 className='text-main-color text-2xl font-normal'>{futama('name')}</h3>
                            <p className='text-main-color text-base'>{futama('msg')}</p>
                            <ul className='flex gap-2'>
                                {futama.raw('tags').map((tag: string, index: number) => (
                                    <li
                                        key={index}
                                        className='on-color most-white rounded-[80px] px-5 py-1 text-base'
                                    >
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* いくちゃん */}
                <div className='box-border flex w-full items-center justify-start'>
                    <div className='w-[calc(50%-6rem)]'>
                        <Image
                            src='/images/ikuchan.webp'
                            alt={ikuchan('imgAlt')}
                            width={500}
                            height={500}
                            className='drop-shadow-light aspect-square w-full object-cover object-center'
                        />
                        <div className='flex flex-col gap-2 pt-2 pb-12'>
                            <h3 className='text-main-color text-2xl font-normal'>{ikuchan('name')}</h3>
                            <p className='text-main-color text-base'>{ikuchan('msg')}</p>
                            <ul className='flex gap-2'>
                                {ikuchan.raw('tags').map((tag: string, index: number) => (
                                    <li
                                        key={index}
                                        className='on-color most-white rounded-[80px] px-5 py-1 text-base'
                                    >
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* HuYnH */}
                <div className='box-border flex w-full items-center justify-end'>
                    <div className='w-[calc(50%-6rem)]'>
                        <Image
                            src='/images/huynh.webp'
                            alt={huynh('imgAlt')}
                            width={500}
                            height={500}
                            className='drop-shadow-light aspect-square w-full object-cover object-center'
                        />
                        <div className='flex flex-col gap-2 pt-2 pb-12'>
                            <h3 className='text-main-color text-2xl font-normal'>{huynh('name')}</h3>
                            <p className='text-main-color text-base'>{huynh('msg')}</p>
                            <ul className='flex gap-2'>
                                {huynh.raw('tags').map((tag: string, index: number) => (
                                    <li
                                        key={index}
                                        className='on-color most-white rounded-[80px] px-5 py-1 text-base'
                                    >
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* ユキ a.k.a Alex */}
                <div className='box-border flex w-full items-center justify-start pb-[100vh]'>
                    <div className='w-[calc(50%-6rem)]'>
                        <Image
                            src='/images/yuki.webp'
                            alt={yuki('imgAlt')}
                            width={500}
                            height={500}
                            className='drop-shadow-light aspect-square w-full object-cover object-center'
                        />
                        <div className='flex flex-col gap-2 pt-2 pb-12'>
                            <h3 className='text-main-color text-2xl font-normal'>{yuki('name')}</h3>
                            <p className='text-main-color text-base'>{yuki('msg')}</p>
                            <ul className='flex gap-2'>
                                {yuki.raw('tags').map((tag: string, index: number) => (
                                    <li
                                        key={index}
                                        className='on-color most-white rounded-[80px] px-5 py-1 text-base'
                                    >
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
