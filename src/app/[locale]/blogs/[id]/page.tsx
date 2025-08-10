import Image from 'next/image'

import Backbtn from '@/components/Backbtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendPosts from '@/components/RecommendPosts'

// ダミーブログデータ（実際のプロジェクトではAPIから取得）
const blogData = [
    {
        id: 1,
        title: 'WE ARE WAKARAN ENGLISH!',
        author: 'HuYnH',
        date: '2025/07/08',
        content: `
            <h2>Welcome to Wakaran English!</h2>
            <p>Hello everyone! We are excited to introduce our English learning community in Osaka. Our mission is to create a supportive environment where international students and Japanese learners can improve their English skills together.</p>
            
            <h3>What We Offer</h3>
            <p>At Wakaran English, we provide various activities and resources to help you on your English learning journey:</p>
            <ul>
                <li>Weekly conversation practice sessions</li>
                <li>Cultural exchange events</li>
                <li>Study groups for different proficiency levels</li>
                <li>One-on-one tutoring opportunities</li>
            </ul>
            
            <h3>Our Community</h3>
            <p>We believe that learning English should be fun and engaging. That's why we organize regular events where members can practice their English in real-life situations while making new friends and learning about different cultures.</p>
            
            <p>Join us and become part of our growing community of English learners in Osaka!</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 2,
        title: 'Learning English in Osaka',
        author: 'Yuki',
        date: '2025/07/07',
        content: `
            <h2>Tips for Learning English in Osaka</h2>
            <p>Osaka is a fantastic city for international students looking to improve their English while experiencing Japanese culture. Here are some practical tips for making the most of your English learning journey in this vibrant city.</p>
            
            <h3>Language Exchange Opportunities</h3>
            <p>Take advantage of the many language exchange meetups happening around the city. These events are perfect for practicing conversation skills with native speakers.</p>
            
            <h3>International Communities</h3>
            <p>Join international student groups and communities. Osaka has a large international population, making it easy to find English-speaking friends and study partners.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 3,
        title: 'Cultural Exchange Experience',
        author: 'Aya',
        date: '2025/07/06',
        content: `
            <h2>My Cultural Exchange Journey</h2>
            <p>As an international student in Osaka, I've had amazing opportunities to experience Japanese culture while sharing my own background with local students.</p>
            
            <h3>Building Bridges</h3>
            <p>Through our weekly meetups, I've learned that language learning is much more than just grammar and vocabulary - it's about connecting with people and understanding different perspectives.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 4,
        title: 'English Study Tips',
        author: 'Iain',
        date: '2025/07/05',
        content: `
            <h2>Effective English Study Methods</h2>
            <p>After years of teaching and learning languages, I've discovered some key strategies that can help accelerate your English learning process.</p>
            
            <h3>Daily Practice</h3>
            <p>Consistency is key. Even 15 minutes of daily practice can make a significant difference in your language development.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 5,
        title: 'Life in Japan as International Student',
        author: 'HuYnH',
        date: '2025/07/04',
        content: `
            <h2>Navigating Student Life in Japan</h2>
            <p>Moving to Japan as an international student can be both exciting and challenging. Here's what I've learned during my time here.</p>
            
            <h3>Essential Tips</h3>
            <p>From finding accommodation to understanding university culture, there are many aspects to consider when starting your journey in Japan.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 6,
        title: 'Japanese vs English Grammar',
        author: 'Yuki',
        date: '2025/07/03',
        content: `
            <h2>Understanding Grammar Differences</h2>
            <p>Comparing Japanese and English grammar structures can help both Japanese learners of English and English speakers learning Japanese.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 7,
        title: 'Best Places to Practice English',
        author: 'Aya',
        date: '2025/07/02',
        content: `
            <h2>Top Spots for English Practice in Osaka</h2>
            <p>Discover the best locations around Osaka where you can practice your English skills in natural, friendly environments.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 8,
        title: 'Language Exchange Events',
        author: 'Iain',
        date: '2025/07/01',
        content: `
            <h2>Making the Most of Language Exchange</h2>
            <p>Language exchange events are fantastic opportunities to practice speaking while making new friends from around the world.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 9,
        title: 'Motivation for Language Learning',
        author: 'HuYnH',
        date: '2025/06/30',
        content: `
            <h2>Staying Motivated in Your Language Journey</h2>
            <p>Language learning can be challenging, but with the right mindset and strategies, you can maintain motivation throughout your journey.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
    {
        id: 10,
        title: 'Common English Mistakes',
        author: 'Yuki',
        date: '2025/06/29',
        content: `
            <h2>Avoiding Common English Pitfalls</h2>
            <p>Learn about the most frequent mistakes Japanese speakers make when learning English and how to avoid them.</p>
        `,
        imageUrl: '/images/heroImg.jpg',
    },
]

interface BlogDetailProps {
    params: {
        id: string
        locale: string
    }
}

export default function BlogDetail({ params }: BlogDetailProps) {
    const blogId = parseInt(params.id)
    const blog = blogData.find((b) => b.id === blogId)

    if (!blog) {
        return (
            <div className='bg-[#edece8] md:bg-[#fefefe]'>
                <Header />
                <div className='mx-auto mt-[40px] mb-48 w-full max-w-[1120px] px-6 lg:px-0'>
                    <div className='mb-[40px]'>
                        <Backbtn />
                    </div>
                    <div className='text-center'>
                        <h1 className='mb-4 text-4xl font-bold text-red-500'>Blog Not Found</h1>
                        <p className='text-gray-600'>The requested blog post could not be found.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className='bg-[#edece8] md:bg-[#fefefe]'>
            <Header />

            <div className='md mx-auto mt-[40px] mb-24 w-full max-w-[1120px] px-6'>
                {/* page-navigation-btn */}
                <div className='mb-[40px]'>
                    <Backbtn blogTitle={blog.title} />
                </div>

                {/* Blog content */}
                <article className='mx-auto max-w-4xl'>
                    {/* Blog header */}
                    <header className='mb-8'>
                        <h1 className='text-main-color mb-4 text-4xl font-bold'>{blog.title}</h1>
                        <div className='mb-6 flex items-center gap-4 text-gray-600'>
                            <span>By {blog.author}</span>
                            <span>•</span>
                            <span>{blog.date}</span>
                        </div>
                    </header>

                    {/* Featured image */}
                    {blog.imageUrl && (
                        <div className='relative mb-8 h-[400px] w-full overflow-hidden rounded-lg'>
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                fill
                                className='object-cover'
                            />
                        </div>
                    )}

                    {/* Blog content */}
                    <div
                        className='prose prose-lg max-w-none'
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </article>
            </div>

            <RecommendPosts currentPostId={blogId} />
            <Footer />
        </div>
    )
}
