'use client'

import Image from 'next/image'

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
        <div className='bg-[#E1D9D6] py-12'>
            <div className='text-main-color mx-auto max-w-[1120px]'>
                <p className='mb-6 text-center text-2xl'>{t('subtitle')}</p>
                <h2 className='mb-4 text-center text-5xl leading-16 font-semibold'>
                    {t('titleTop')}
                    <br />
                    {t('titleBottom')}
                </h2>
                <p className='text-sub-color mb-10 text-center text-lg font-normal'>
                    {t('descriptionTop')}
                    <br />
                    {t('descriptionBottom')}
                </p>
                <div className='flex gap-6'>
                    <div className='flex w-1/2 flex-col gap-6'>
                        {/* インスタグラム */}
                        <div className='flex gap-6'>
                            <Image
                                src='/images/instagram_qr.svg'
                                alt={t('instagramQr')}
                                width={170}
                                height={170}
                                className='aspect-square rounded-2xl'
                            />
                            <div className='flex flex-col justify-end gap-2'>
                                <a
                                    href='https://www.instagram.com/wakaran.eng/#'
                                    onClick={(event) =>
                                        snsLink(event, 'https://www.instagram.com/wakaran.eng/#', t('instagramAlt'))
                                    }
                                >
                                    <Image
                                        src={'/images/instagram_logo.svg'}
                                        alt={t('instagramLogoAlt')}
                                        width={40}
                                        height={40}
                                        className='h-10 w-10 object-cover'
                                    />
                                </a>
                                <p className='text-2xl font-medium'>{t('instagramDescription')}</p>
                            </div>
                        </div>
                        {/* YouTube */}
                        <div className='flex gap-6'>
                            <Image
                                src='/images/youtube_qr.svg'
                                alt={t('youtubeQr')}
                                width={170}
                                height={170}
                                className='aspect-square rounded-2xl object-cover'
                            />
                            <div className='flex flex-col justify-end gap-2'>
                                <a
                                    href='https://www.youtube.com/@WakaranEnglish'
                                    onClick={(event) =>
                                        snsLink(event, 'https://www.youtube.com/@WakaranEnglish', t('youtubeAlt'))
                                    }
                                >
                                    <Image
                                        src={'/images/youtube_logo.svg'}
                                        alt={t('youtubeLogoAlt')}
                                        width={40}
                                        height={40}
                                        className='h-10 w-10 object-cover'
                                    />
                                </a>
                                <p className='text-2xl font-medium'>{t('youtubeDescription')}</p>
                            </div>
                        </div>
                    </div>
                    <Image
                        src='/images/withiain.webp'
                        alt={t('withIain')}
                        width={500}
                        height={400}
                        className='w-1/2 rounded-3xl object-cover'
                    />
                </div>
            </div>
        </div>
    )
}
