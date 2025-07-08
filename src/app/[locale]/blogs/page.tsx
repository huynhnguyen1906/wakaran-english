import Header from '@/components/Header'
import React from 'react'
import PopularBlog from './PopularBlog'
import Subscribe from './Subscribe'
import Footer from '@/components/Footer'
import SelfIntroduction from '@/components/SelfIntroduction'
// import Blog from '@/components/Blog'

const BlogList = () => {
  return (
    <div>
      <Header/>
      {/* <Blog/> */}
      <PopularBlog/>
      <Subscribe/>
      <div className='my-[192px]'>
        <SelfIntroduction/>
      </div>
      <Footer/>
    </div>
  )
}

export default BlogList