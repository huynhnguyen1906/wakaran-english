import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SelfIntroduction from '@/components/SelfIntroduction'

// import LatestPosts from '@/components/LatestPosts'
import BlogCardLists from './BlogCardLists'
// import PopularBlog from './PopularBlog'
import Subscribe from './Subscribe'

// import Blog from '@/components/Blog'

const BlogList = () => {
    return (
        <div className='bg-[#EDECE8]'>
            <Header />
            <BlogCardLists />
            {/* <Blog/> */}

            {/* <LatestPosts/> */}
            {/* <PopularBlog/> */}
            <Subscribe />
            <div className='md:my-[192px] my-[80px]'>
                <SelfIntroduction />
            </div>
            <Footer />
        </div>
    )
}

export default BlogList
