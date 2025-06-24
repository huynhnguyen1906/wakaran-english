import Abouts from '@/components/Abouts'
import Header from '@/components/Header'
import Members from '@/components/Members'

export default function HomePage() {
    return (
        <div className='w-full'>
            <Header />
            <Abouts />
            <Members />
        </div>
    )
}
