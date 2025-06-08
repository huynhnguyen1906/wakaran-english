'use client'

import Image from 'next/image'

// 文章をjsonデータから取得して表示させる必要がある
// 全体写真とQRコードを後で差し替える
export default function Contact() {
    const snsLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string, windowName: string) => {
        event.preventDefault()
        window.open(href, windowName)
    }

    return (
        <div className='bg-[#E1D9D6] py-12'>
            <div className='mx-auto max-w-[1120px]'>
                <p className='mb-6 text-center text-2xl'>Contact</p>
                <h2 className='mb-4 text-center text-5xl font-semibold'>WAKARAN ENGLISHのSNSをぜひフォローしてね!</h2>
                <p className='mb-8 text-center text-lg'>
                    Lorem Ipsumは、印刷および型版画業界のダミーテキストです。 Lorem Ipsumは、
                    1500年代以来、業界の標準的なダミーテキストです。
                </p>
                <div className='flex gap-6'>
                    <Image
                        src='/images/wakaranenglogo1.png'
                        alt='メンバー全員とALTとの写真'
                        width={500}
                        height={400}
                        className='w-1/2 rounded-3xl border-2 border-gray-800 object-cover'
                    />
                    <div className='flex w-1/2 flex-col gap-6'>
                        <div className='flex gap-6'>
                            <Image
                                src='/images/wakaranenglogo1.png'
                                alt='InstagramのQRコード'
                                width={170}
                                height={170}
                                className='aspect-square rounded-2xl border-2 border-gray-800 object-cover'
                            />
                            <div className='flex flex-col justify-end'>
                                <a
                                    href='https://www.instagram.com/wakaran.eng/#'
                                    onClick={(event) =>
                                        snsLink(
                                            event,
                                            'https://www.instagram.com/wakaran.eng/#',
                                            'WAKARANENGLISHのinstagram'
                                        )
                                    }
                                >
                                    <Image
                                        src={'/images/instagram_logo.svg'}
                                        alt='Instagramのlogo'
                                        width={40}
                                        height={40}
                                        className='h-10 w-10 object-cover'
                                    />
                                </a>
                                <p className='text-2xl font-medium'>
                                    Instagramは、メインストリームソーシャルメディアアプリです。
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <Image
                                src='/images/wakaranenglogo1.png'
                                alt='YoutubeのQRコード'
                                width={170}
                                height={170}
                                className='aspect-square rounded-2xl border-2 border-gray-800 object-cover'
                            />
                            <div className='flex flex-col justify-end'>
                                <a
                                    href='https://www.youtube.com/@WakaranEnglish'
                                    onClick={(event) =>
                                        snsLink(
                                            event,
                                            'https://www.youtube.com/@WakaranEnglish',
                                            'WAKARANENGLISHのyoutube'
                                        )
                                    }
                                >
                                    <Image
                                        src={'/images/youtube_logo.svg'}
                                        alt='youtubeのlogo'
                                        width={40}
                                        height={40}
                                        className='h-10 w-10 object-cover'
                                    />
                                </a>
                                <p className='text-2xl font-medium'>
                                    Youtubeは、メインストリームソーシャルメディアアプリです。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
