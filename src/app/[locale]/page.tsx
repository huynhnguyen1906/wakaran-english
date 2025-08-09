import Abouts from '@/components/Abouts'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LatestPosts from '@/components/LatestPosts'
import Members from '@/components/Members'

export default function HomePage() {
    return (
        <div className='w-full'>
            <Header />
            <Hero />
            <Abouts />
            <Members />
            <Blog />
            <LatestPosts />
            <Contact />
            <Footer />
        </div>
    )
}
