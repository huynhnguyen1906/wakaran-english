import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function HomePage() {
    return (
        <div className='w-full'>
            <Header />
            <Blogs />
            <Contact />
        </div>
    )
}
