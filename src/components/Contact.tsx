'use client'

import Image from 'next/image'

import { renderTextWithLineBreaks } from '@/utils/textUtils'
import { useTranslations } from 'next-intl'

// 文章をjsonデータから取得して表示させる必要がある
// 全体写真とQRコードを後で差し替える
export default function Contact() {
    const t = useTranslations('contact')

    const snsLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string, windowName: string) => {
        event.preventDefault()
        window.open(href, windowName)
    }

    return (
        <div className='bg-[#E1D9D6] p-6 md:py-12'>
            <div className='text-main-color mx-auto md:max-w-[1120px]'>
                <p className='hidden md:mb-6 md:block md:text-center md:text-2xl'>{t('subtitle')}</p>
                <h2 className='mb-2 text-2xl font-semibold md:mb-4 md:text-center md:text-4xl lg:text-5xl lg:leading-16'>
                    {t('titleTop')}
                    <br />
                    {t('titleBottom')}
                </h2>
                <p className='text-sub-color mb-4 text-xs md:mb-10 md:text-center md:text-lg md:font-normal'>
                    {t('descriptionTop')}
                    <br />
                    {t('descriptionBottom')}
                </p>
                <div className='md:flex md:gap-6'>
                    <div className='mb-4 flex flex-col gap-y-4 md:w-1/2 md:gap-6'>
                        {/* インスタグラム */}
                        <div className='md:flex md:gap-6'>
                            <Image
                                src='/images/instagram_qr.svg'
                                alt={t('instagramQr')}
                                width={170}
                                height={170}
                                className='hidden rounded-2xl md:block md:aspect-square md:rounded-2xl'
                            />
                            <div className='flex flex-col gap-y-2 md:justify-end md:gap-2'>
                                <a
                                    href='https://www.instagram.com/wakaran.eng/#'
                                    onClick={(event) =>
                                        snsLink(event, 'https://www.instagram.com/wakaran.eng/#', t('instagramAlt'))
                                    }
                                    className='block'
                                >
                                    <Image
                                        src={'/images/instagram_logo.svg'}
                                        alt={t('instagramLogoAlt')}
                                        width={40}
                                        height={40}
                                        className='h-6 w-6 md:h-10 md:w-10 md:object-cover'
                                    />
                                </a>
                                <p className='hidden md:block md:text-lg md:font-medium lg:text-2xl'>
                                    {renderTextWithLineBreaks(t('instagramDescription'))}
                                </p>
                                <p className='text-xs md:hidden lg:hidden'>
                                    {renderTextWithLineBreaks(t('instagramDescriptionMobile'))}
                                </p>
                            </div>
                        </div>
                        {/* YouTube */}
                        <div className='md:flex md:gap-6'>
                            <Image
                                src='/images/youtube_qr.svg'
                                alt={t('youtubeQr')}
                                width={170}
                                height={170}
                                className='hidden rounded-2xl md:block md:aspect-square md:rounded-2xl'
                            />
                            <div className='md:flex md:flex-col md:justify-end md:gap-2'>
                                <a
                                    href='https://www.youtube.com/@WakaranEnglish'
                                    onClick={(event) =>
                                        snsLink(event, 'https://www.youtube.com/@WakaranEnglish', t('youtubeAlt'))
                                    }
                                    className='block'
                                >
                                    <Image
                                        src={'/images/youtube_logo.svg'}
                                        alt={t('youtubeLogoAlt')}
                                        width={40}
                                        height={40}
                                        className='h-6 w-6 md:h-10 md:w-10 md:object-cover'
                                    />
                                </a>
                                <p className='hidden md:block md:text-lg md:font-medium lg:text-2xl'>
                                    {renderTextWithLineBreaks(t('youtubeDescription'))}
                                </p>
                                <p className='text-xs md:hidden lg:hidden'>
                                    {renderTextWithLineBreaks(t('youtubeDescriptionMobile'))}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src='/images/withiain.webp'
                        alt={t('withIain')}
                        width={500}
                        height={400}
                        className='w-full rounded-[8px] object-cover md:w-1/2 md:rounded-3xl'
                    />
                </div>
            </div>
        </div>
    )
}
