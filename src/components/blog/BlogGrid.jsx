import BlogCard from './BlogCard.jsx'

export default function BlogGrid({ posts }) {
    if (!posts?.length) {
        return <p className="text-text-body">No articles found.</p>
    }

    const [featured, ...rest] = posts

    return (
        <div className="flex flex-col gap-6">
            <BlogCard post={featured} variant="featured" />
            {rest.length > 0 && (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    )
}