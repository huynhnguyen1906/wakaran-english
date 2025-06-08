import Abouts from '@/components/Abouts'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function HomePage() {
    return (
        <div className='w-full'>
            <Header />
            <Hero />
            <Abouts />
        </div>
    )
}
