'use client'

import Image from 'next/image'

// 残り行うこと
// 1.各メンバーの写真を変更する
// 2.写真にドロップシャドウをつける
// 3.情報をmessage>jsonデータから取得するように変更する
// 4.liの文字色を白に変更する

export default function Members() {
    return (
        <div className='relative top-0 mx-auto max-w-[1120px]'>
            <div className='sticky top-0 z-50 flex flex-col items-center justify-center pt-48 text-center'>
                <p className='mb-6 text-2xl'>こんにちは</p>
                <h2 className='mb-4 text-4xl font-semibold'>愉快なメンバーたちの紹介</h2>
                <p className='mb-[18px] px-24 text-lg'>
                    We’re a team of passionate students, each bringing our own creativity and energy to Wakaran English.
                    Here’s a little about us:
                </p>
            </div>
            {/* aya */}
            <div className='box-border flex items-center justify-start pt-[30vh]'>
                <div className='w-[50%-60px]'>
                    <Image
                        src='/images/aya.webp'
                        alt='ayaの写真'
                        width={500}
                        height={500}
                        className='aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-2xl font-normal'>
                            aya
                            <span className='ml-2.5 text-base'>2005.02.21</span>
                        </h3>
                        <p className='text-base'>洋楽大好きでーす！ 海外にも行ってみたい！</p>
                        <ul className='flex gap-2'>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#兵庫県</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#女性</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#ESFJ-T</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ふうたま */}
            <div className='box-border flex items-center justify-end'>
                <div className='w-[50%-60px]'>
                    <Image
                        src='/images/aya.webp'
                        alt='ふうたまの写真(今はayaの写真)'
                        width={500}
                        height={500}
                        className='aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-2xl font-normal'>
                            ふうたま<span className='ml-2.5 text-base'>2005.09.11</span>
                        </h3>
                        <p className='text-base'>海外文化に興味があります!</p>
                        <ul className='flex gap-2'>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#兵庫県</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#男性</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#ENFP-T</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* いくちゃん */}
            <div className='box-border flex items-center justify-start'>
                <div className='w-[50%-60px]'>
                    <Image
                        src='/images/aya.webp'
                        alt='いくちゃんの写真(今はayaの写真)'
                        width={500}
                        height={500}
                        className='aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-2xl font-normal'>
                            いくちゃん<span className='ml-2.5 text-base'>2002.03.11</span>
                        </h3>
                        <p className='text-base'>ヨーロッパに行ってみたい!!!</p>
                        <ul className='flex gap-2'>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#沖縄県</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#男性</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#INFP-T</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* HuYnH */}
            <div className='box-border flex items-center justify-end'>
                <div className='w-[50%-60px]'>
                    <Image
                        src='/images/aya.webp'
                        alt='HuYnHの写真(今はayaの写真)'
                        width={500}
                        height={500}
                        className='aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-2xl font-normal'>
                            HuYnH<span className='ml-2.5 text-base'>2002.06.19</span>
                        </h3>
                        <p className='text-base'>日本で生活するのに精一杯です :((((</p>
                        <ul className='flex gap-2'>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>
                                #ベトナム
                            </li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#男性</li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#ENTP-A</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* ユキ a.k.a Alex */}
            <div className='box-border flex items-center justify-start pb-[80vh]'>
                <div className='w-[50%-60px]'>
                    <Image
                        src='/images/aya.webp'
                        alt='ユキの写真(今はayaの写真)'
                        width={500}
                        height={500}
                        className='aspect-square w-full object-cover object-center'
                    />
                    <div className='flex flex-col gap-2 pt-2 pb-12'>
                        <h3 className='text-2xl font-normal'>
                            ユキ a.k.a Alex<span className='ml-2.5 text-base'>1999.08.29</span>
                        </h3>
                        <p className='text-base'>言語を勉強する時に一番大事なのは「Speaking」です!</p>
                        <ul className='flex gap-2'>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>
                                #ミャンマー
                            </li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>
                                #Non-Binary
                            </li>
                            <li className='rounded-[80px] bg-[#43424A] px-5 py-1 text-base text-[#fefefe]'>#ENFJ</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
