'use client'

import { useTranslations } from 'use-intl'

import MemberCard from './MemberCard'

export default function Members() {
    const t = useTranslations('members')

    return (
        <div
            id='members'
            className='mx-auto mt-12 mb-6 px-6 md:relative md:max-w-[1120px] md:pt-48 md:pb-24'
        >
            <div
                className='drop-shadow-light md:sticky md:top-1/2 md:z-20 md:flex md:-translate-y-1/2 md:flex-col md:items-center md:justify-center md:text-center'
                style={{ mixBlendMode: 'difference' }}
            >
                <p className='hidden text-white md:mb-6 md:block md:text-2xl'>{t('subtitle')}</p>
                <h2 className='mb-2 text-[32px] font-semibold text-white md:mb-4 md:text-5xl'>{t('title')}</h2>
                <p className='mb-4 text-base leading-8 text-white md:px-24 md:text-lg'>
                    {t('descriptionTop')}
                    <br className='hidden md:inline' />
                    {t('descriptionBottom')}
                </p>
            </div>

            <div className='md:relative md:block md:pb-[50vh]'>
                <MemberCard />
            </div>
        </div>
    )
}
