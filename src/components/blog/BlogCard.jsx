import { Link } from 'react-router-dom'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'

export default function BlogCard({ post, variant = 'default' }) {
    const isFeatured = variant === 'featured'

    return (
        <Card as={Link} to={`/blog/${post.id}`} className={isFeatured ? 'md:flex' : ''}>
            <img
                src={post.image}
                alt={`${post.title} cover`}
                loading="lazy"
                className={isFeatured ? 'h-56 w-full object-cover md:h-auto md:w-1/2' : 'h-40 w-full object-cover'}
                onError={(event) => {
                    event.currentTarget.style.display = 'none'
                }}
            />
            <div className={`p-5 ${isFeatured ? 'md:w-1/2' : ''}`}>
                <Badge tone={post.category === 'NEWS' ? 'primary' : 'coral'}>{post.category}</Badge>
                <h3 className="mt-2 font-display text-card-title font-bold text-text-dark">
                    {post.title}
                </h3>
                <p className="mt-1 text-text-medium">{post.excerpt}</p>
                <p className="mt-3 text-small text-text-placeholder">
                    {post.author} · {new Date(post.date).toLocaleDateString()}
                </p>
            </div>
        </Card>
    )
}