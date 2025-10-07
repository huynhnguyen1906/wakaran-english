import Abouts from '@/components/Abouts'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Members from '@/components/Members'

import { fetchPopularPosts } from '@/lib/fetchPopularPosts'
import {
    generateEducationalOrganizationSchema,
    generateOrganizationSchema,
    generateWebsiteSchema,
} from '@/lib/structuredData'

export default async function HomePage() {
    const blogPosts = await fetchPopularPosts()

    // Generate structured data
    const organizationSchema = generateOrganizationSchema()
    const websiteSchema = generateWebsiteSchema()
    const educationalSchema = generateEducationalOrganizationSchema()

    return (
        <div className='w-full bg-[#EDECE8]'>
            {/* Structured Data */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(educationalSchema),
                }}
            />

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
