import Abouts from '@/components/Abouts'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Members from '@/components/Members'

import { fetchPopularPosts } from '@/lib/fetchPopularPosts'

export default async function HomePage() {
    const blogPosts = await fetchPopularPosts()

    return (
        <div className='w-full'>
            <Header />
            <Hero />
            <Abouts />
            <Members />
            <Blog blogPosts={blogPosts} />
            <Contact />
            <Footer />
        </div>
    )
}
