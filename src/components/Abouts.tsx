import { fetchFeaturedProjects } from '@/lib/fetchFeaturedProjects'

import AboutUs from './AboutUs'
import Projects from './FeaturedProjects'
import Introduction from './SelfIntroduction'

export default async function Abouts() {
    const projects = await fetchFeaturedProjects()

    return (
        <div className='w-full'>
            <AboutUs />
            <Projects projects={projects} />
            <Introduction />
        </div>
    )
}
