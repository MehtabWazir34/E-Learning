import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import Badge from '../components/ui/Badge.jsx'
import { getBlogPostById } from '../data/blogPosts.js'

export default function BlogDetail() {
    const { postId } = useParams()
    const [post, setPost] = useState(undefined)

    useEffect(() => {
        setPost(undefined)
        getBlogPostById(postId).then(setPost)
    }, [postId])

    if (post === undefined) {
        return (
            <PageContainer className="py-16">
                <p className="text-text-body">Loading…</p>
            </PageContainer>
        )
    }

    if (post === null) {
        return <Navigate to="/404" replace />
    }

    return (
        <>
            <Seo
                path={`/blog/${post.id}`}
                overrides={{ title: `${post.title} · TOTC Blog`, description: post.excerpt, image: post.image }}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: post.title,
                        datePublished: post.date,
                        author: { '@type': 'Person', name: post.author },
                    })}
                </script>
            </Helmet>
            <PageContainer className="py-12 md:py-16">
                <article className="mx-auto max-w-3xl">
                    <Badge tone={post.category === 'NEWS' ? 'primary' : 'coral'}>{post.category}</Badge>
                    <h1 className="mt-3 font-display text-h2 font-bold text-heading">{post.title}</h1>
                    <p className="mt-2 text-small text-text-placeholder">
                        {post.author} · {new Date(post.date).toLocaleDateString()}
                    </p>
                    <img
                        src={post.image}
                        alt={`${post.title} cover`}
                        className="my-8 aspect-video w-full rounded-card object-cover"
                        onError={(event) => {
                            event.currentTarget.style.display = 'none'
                        }}
                    />
                    <p className="text-text-body">{post.content}</p>
                </article>
            </PageContainer>
        </>
    )
}