export default function Badge({ children, tone = 'primary', className = '' }) {
    const tones = {
        primary: 'bg-primary/10 text-primary',
        coral: 'bg-accent-coral/10 text-accent-coral',
    }

    return (
        <span
            className={`inline-block rounded-badge px-3 py-1 font-body text-small font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}
        >
            {children}
        </span>
    )
}