import Abouts from '@/components/Abouts'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Members from '@/components/Members'

export default function HomePage() {
    return (
        <div className='w-full'>
            <Header />
            <Hero />
            <Abouts />
            <Members />
            <Abouts />
        </div>
    )
}
