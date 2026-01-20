import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SelfIntroduction from '@/components/SelfIntroduction'

// import LatestPosts from '@/components/LatestPosts'
import BlogCardLists from './BlogCardLists'
// import PopularBlog from './PopularBlog'
import Subscribe from './Subscribe'

// import Blog from '@/components/Blog'

const BlogList = async ({ 
    params,
    searchParams 
}: { 
    params: Promise<{ locale: string }>
    searchParams?: Promise<{ page?: string }> 
}) => {
    return (
        <div className='bg-[#EDECE8]'>
            <Header />
            <BlogCardLists params={params} searchParams={searchParams} />
            <Subscribe />
            <div className='my-[80px] md:my-[192px]'>
                <SelfIntroduction />
            </div>
            <Footer />
        </div>
    )
}

export default BlogList
