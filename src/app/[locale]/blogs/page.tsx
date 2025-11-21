import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SelfIntroduction from '@/components/SelfIntroduction'

import BlogCardLists from './BlogCardLists'
import Subscribe from './Subscribe'

const BlogList = async ({ 
    params,
    searchParams 
}: { 
    params: Promise<{ locale: string }>
    searchParams: { page?: string }
}) => {
    return (
        <div className='bg-[#EDECE8]'>
            <Header />
            <BlogCardLists 
                params={params} 
                searchParams={searchParams} 
            />
            <Subscribe />
            <div className='my-[80px] md:my-[192px]'>
                <SelfIntroduction />
            </div>
            <Footer />
        </div>
    )
}

export default BlogList