const COLORS = {
    orange: 'bg-accent-orange',
    'orange-deep': 'bg-accent-orange-deep',
    blue: 'bg-accent-blue',
    pink: 'bg-accent-pink shadow-badge-pink',
}

/** color: 'orange' | 'orange-deep' | 'blue' | 'pink'; size in px (default 48). */
export default function IconBadge({ icon: Icon, color = 'blue', size = 48, className = '' }) {
    return (
        <span
            className={`inline-flex items-center justify-center rounded-icon ${COLORS[color]} ${className}`}
            style={{ width: size, height: size }}
            aria-hidden="true"
        >
            <Icon size={Math.round(size * 0.52)} className="text-white" strokeWidth={2} />
        </span>
    )
}