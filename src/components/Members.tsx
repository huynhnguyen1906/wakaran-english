'use client'

import Image from 'next/image'

// 残り行うこと
// 3.情報をmessage>jsonデータから取得するように変更する

export default function Members() {
    return (
        <div className='relative mx-auto max-w-[1120px]'>
            <div className='sticky top-0 z-20 flex h-screen flex-col items-center justify-center text-center'>
                <p className='mb-6 text-2xl'>こんにちは</p>
                <h2 className='mb-4 text-4xl font-semibold'>愉快なメンバーたちの紹介</h2>
                <p className='mb-[18px] px-24 text-lg'>
                    We’re a team of passionate students, each bringing our own creativity and energy to Wakaran English.
                    Here’s a little about us:
                </p>
            </div>
            {/* aya */}
            <div className='box-border flex w-full items-center justify-start pt-[30vh]'>
                <div className='w-[calc(50%-6rem)]'>
                    <Image
                        src='/images/aya.webp'
                        alt='ayaの写真'
                        width={500}
                        height={500}
                        className='drop-shadow-light aspect-square w-full object-cover object-top'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-main-color text-2xl font-normal'>aya</h3>
                        <p className='text-main-color text-base'>洋楽大好きでーす！ 海外にも行ってみたい！</p>
                        <ul className='flex gap-2'>
                            <li className='on-color most-white rounded-[80px] px-5 py-1 text-base'>#ESFJ-T</li>
                            <li className='on-color most-white rounded-[80px] px-5 py-1 text-base'>#女性</li>
                            <li className='on-color most-white rounded-[80px] px-5 py-1 text-base'>#兵庫県</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ふうたま */}
            <div className='box-border flex w-full items-center justify-end'>
                <div className='w-[calc(50%-6rem)]'>
                    <Image
                        src='/images/futama.webp'
                        alt='ふうたまの写真'
                        width={500}
                        height={500}
                        className='drop-shadow-light aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-main-color text-2xl font-normal'>ふうたま</h3>
                        <p className='text-main-color text-base'>海外文化に興味があります!</p>
                        <ul className='flex gap-2'>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#兵庫県</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#男性</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#ENFP-T</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* いくちゃん */}
            <div className='box-border flex w-full items-center justify-start'>
                <div className='w-[calc(50%-6rem)]'>
                    <Image
                        src='/images/ikuchan.webp'
                        alt='いくちゃんの写真'
                        width={500}
                        height={500}
                        className='drop-shadow-light aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-main-color text-2xl font-normal'>いくちゃん</h3>
                        <p className='text-main-color text-base'>ヨーロッパに行ってみたい!!!</p>
                        <ul className='flex gap-2'>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#沖縄県</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#男性</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#INFP-T</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* HuYnH */}
            <div className='box-border flex w-full items-center justify-end'>
                <div className='w-[calc(50%-6rem)]'>
                    <Image
                        src='/images/huynh.webp'
                        alt='HuYnHの写真'
                        width={500}
                        height={500}
                        className='drop-shadow-light aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-main-color text-2xl font-normal'>HuYnH</h3>
                        <p className='text-main-color text-base'>日本で生活するのに精一杯です :((((</p>
                        <ul className='flex gap-2'>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#ベトナム</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#男性</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#ENTP-A</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ユキ a.k.a Alex */}
            <div className='box-border flex w-full items-center justify-start pb-[100vh]'>
                <div className='w-[calc(50%-6rem)]'>
                    <Image
                        src='/images/yuki.webp'
                        alt='ユキの写真'
                        width={500}
                        height={500}
                        className='drop-shadow-light aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-main-color text-2xl font-normal'>ユキ a.k.a Alex</h3>
                        <p className='text-main-color text-base'>言語を勉強する時に一番大事なのは「Speaking」です!</p>
                        <ul className='flex gap-2'>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#ミャンマー</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#Non-Binary</li>
                            <li className='tag-bg-color most-white rounded-[80px] px-5 py-1 text-base'>#ENFJ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
