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
        <div>
            <Header />
            <BlogCardLists />
            {/* <Blog/> */}

            {/* <LatestPosts/> */}
            {/* <PopularBlog/> */}
            <Subscribe />
            <div className='my-[192px]'>
                <SelfIntroduction />
            </div>
            <Footer />
        </div>
    )
}

export default BlogList
