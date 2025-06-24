'use client'

import Image from 'next/image'

import { useTranslations } from 'next-intl'

export default function MemberCard() {
    const t = useTranslations('members')
    const memberKeys = ['aya', 'futama', 'ikuchan', 'huynh', 'yuki']

    return (
        <>
            {/* モバイル用グリッドレイアウト */}
            <div className='grid grid-cols-2 gap-6 md:hidden'>
                {memberKeys.map((memberKey) => (
                    <div
                        key={`mobile-${memberKey}`}
                        className='flex flex-col'
                    >
                        <div className='relative aspect-[3/4]'>
                            <Image
                                src={t(`memberList.${memberKey}.imgPath`)}
                                alt={t(`memberList.${memberKey}.imgAlt`)}
                                fill
                                className='drop-shadow-light rounded-lg object-cover object-center'
                            />
                        </div>
                        {/* 名前とメッセージ */}
                        <h3 className='text-main-color my-1.5 text-base font-normal'>
                            {t(`memberList.${memberKey}.name`)}
                        </h3>
                        <p className='on-color most-white rounded-3xl py-1 text-center text-[10px]'>
                            {t(`memberList.${memberKey}.mobileMsg`)}
                        </p>
                    </div>
                ))}
            </div>

            {/* PC・タブレット用レイアウト */}
            <div className='hidden md:block'>
                {memberKeys.map((memberKey, index) => {
                    const isOdd = index % 2 === 0
                    return (
                        <div
                            key={memberKey}
                            className={`md:box-border md:flex md:w-full md:items-center ${isOdd ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className='md:w-[calc(50%-6rem)]'>
                                <Image
                                    src={t(`memberList.${memberKey}.imgPath`)}
                                    alt={t(`memberList.${memberKey}.imgAlt`)}
                                    width={500}
                                    height={500}
                                    className='md:drop-shadow-light md:aspect-square md:w-full md:object-cover md:object-center'
                                />
                                <div className='md:flex md:flex-col md:gap-2 md:pt-2 md:pb-12'>
                                    <h3 className='md:text-main-color md:text-2xl md:font-normal'>
                                        {t(`memberList.${memberKey}.name`)}
                                    </h3>
                                    <p className='md:text-main-color md:text-base'>
                                        {t(`memberList.${memberKey}.msg`)}
                                    </p>
                                    <ul className='md:flex md:gap-2'>
                                        {t.raw(`memberList.${memberKey}.tags`).map((tag: string, tagIndex: number) => (
                                            <li
                                                key={tagIndex}
                                                className='on-color most-white md:rounded-[80px] md:px-5 md:py-1.5 md:text-base'
                                            >
                                                #{tag}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
