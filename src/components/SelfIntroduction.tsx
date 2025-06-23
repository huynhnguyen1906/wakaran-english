'use client'

import Image from 'next/image'
import Link from 'next/link'

import { renderTextWithLineBreaks } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

export default function SelfIntroduction() {
    const t = useTranslations('selfIntroduction')

    return (
        <div className='mx-auto w-full max-w-[1120px] max-md:px-6'>
            <h2 className='mb-6 text-center text-2xl max-md:hidden'>{t('greeting')}</h2>
            {/* PC用h3 */}
            <h3 className='mb-4 hidden text-center text-5xl font-semibold md:block'>
                {t('title')} <span className='main-color'>{t('titleHighlight')}</span>
            </h3>
            {/* スマホ用h3 */}
            <h3 className='text-left text-[32px] leading-12 font-semibold md:hidden'>
                {t('title')}
                <br />
                <span className='main-color'>{t('titleHighlight')}</span>
            </h3>
            <p className='text-sub-color mx-auto mb-4 w-4/5 text-center text-base leading-8 max-md:w-full max-md:text-left'>
                {renderTextWithLineBreaks(t('description'))}
            </p>
            <div className='w-full'>
                <div className='relative h-[510px] w-full overflow-hidden rounded-2xl max-md:h-[194px]'>
                    <Image
                        src='/images/introductionThumb.jpg'
                        alt={t('thumbnailAlt')}
                        fill
                        className='object-cover object-center'
                    />
                    <Link href=''>
                        <Image
                            src='/images/playButton.png'
                            alt={t('playButtonAlt')}
                            width={82}
                            height={58}
                            className='drop-shadow-playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center max-md:h-[44px] max-md:w-[62px]'
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
