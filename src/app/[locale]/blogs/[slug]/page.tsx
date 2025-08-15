import Backbtn from '@/components/Backbtn'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RecommendPosts from '@/components/RecommendPosts'

interface BlogDetailProps {
    params: Promise<{
        locale: string
        slug: string
    }>
}

export default async function BlogDetail({ params }: BlogDetailProps) {
    const { locale, slug } = await params
    const blogId = parseInt(slug)

    return (
        <div>
            <Header />

            <div className='md mx-auto mt-[40px] mb-24 w-full max-w-[1120px] px-6'>
                {/* page-navigation-btn */}
                <div className='mb-[40px]'>
                    <Backbtn blogTitle={slug} />
                </div>

                {/* 以下ブログ内容 */}
            </div>

            <RecommendPosts currentPostId={blogId} />
            <Footer />
        </div>
    )
}
