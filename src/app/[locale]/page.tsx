import Abouts from '@/components/Abouts'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function HomePage() {
    return (
        <div className='w-full overflow-x-hidden'>
            <Header />
            <Hero />
            <Abouts />
            <Blogs />
            <Contact />
        </div>
    )
}
