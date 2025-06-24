'use client'

import AboutUs from './AboutUs'
import Projects from './FeaturedProjects'
import Introduction from './SelfIntroduction'

export default function Abouts() {
    return (
        <div className='w-full'>
            <AboutUs />
            <Projects />
            <Introduction />
        </div>
    )
}
