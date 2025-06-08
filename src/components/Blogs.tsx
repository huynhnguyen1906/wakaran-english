'use client'

import Link from 'next/link'

// ブログコンテンツができたら、ulの中身を変更する
export default function Blogs() {
    return (
        <div className='mx-auto mb-24 max-w-[1120px]'>
            <h2 className='mb-8 text-center text-5xl font-semibold'>BLOGS</h2>
            <ul className='mb-8 flex gap-6'>
                <li className='aspect-[4/3] w-1/3 rounded-2xl bg-gray-300'></li>
                <li className='aspect-[4/3] w-1/3 rounded-2xl bg-gray-300'></li>
                <li className='aspect-[4/3] w-1/3 rounded-2xl bg-gray-300'></li>
            </ul>
            <div className='text-end'>
                <Link
                    href={'#'}
                    className='bg-[url("/images/more_btn.svg")] bg-contain bg-bottom bg-no-repeat pr-14 text-2xl font-normal'
                >
                    More
                </Link>
            </div>
        </div>
    )
}
