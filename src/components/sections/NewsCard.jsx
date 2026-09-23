import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'

export default function NewsCard({ item, variant = 'default' }) {
    const isFeatured = variant === 'featured'

    return (
        <Card className={isFeatured ? 'md:flex' : ''}>
            <img
                src={item.image}
                alt={`${item.title} cover`}
                loading="lazy"
                className={isFeatured ? 'h-56 w-full object-cover md:h-auto md:w-1/2' : 'h-40 w-full object-cover'}
                onError={(event) => {
                    event.currentTarget.style.display = 'none'
                }}
            />
            <div className={`p-5 ${isFeatured ? 'md:w-1/2' : ''}`}>
                <Badge tone={item.category === 'NEWS' ? 'primary' : 'coral'}>{item.category}</Badge>
                <h3 className="mt-2 font-display text-card-title font-bold text-text-dark">
                    {item.title}
                </h3>
                <p className="mt-1 text-text-medium">{item.excerpt}</p>
                <p className="mt-3 text-small text-text-placeholder">
                    {new Date(item.date).toLocaleDateString()}
                </p>
            </div>
        </Card>
    )
}