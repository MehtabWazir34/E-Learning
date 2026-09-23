import { useEffect, useState } from 'react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import BlogGrid from '../components/blog/BlogGrid.jsx'
import { getBlogPosts } from '../data/blogPosts.js'

export default function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getBlogPosts().then(setPosts)
    }, [])

    return (
        <>
            <Seo path="/blog" />
            <PageContainer className="py-12 md:py-16">
                <h1 className="font-display text-h2 font-bold text-heading">Blog</h1>
                <p className="mt-2 text-text-body">News, resources, and press releases.</p>
                <div className="mt-8">
                    <BlogGrid posts={posts} />
                </div>
            </PageContainer>
        </>
    )
}