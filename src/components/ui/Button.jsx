import { Link } from 'react-router-dom'

const VARIANTS = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    coral: 'bg-accent-coral text-white hover:bg-accent-coral/90',
    ghost: 'bg-surface-ghost text-white hover:bg-white/40',
    outline: 'bg-white text-text-body border border-primary hover:bg-primary/5',
    text: 'bg-transparent text-text-body hover:text-primary px-0',
}

const SIZES = {
    sm: 'px-5 py-2 text-[16px]',
    md: 'px-6 py-2.5 text-[18px]',
    lg: 'px-8 py-3.5 text-[20px]',
}

/**
 * Renders a <button>, or a <Link>/<a> when `to`/`href` is given — every
 * interactive element must be a real semantic element (TRD §3).
 */
export default function Button({
    as,
    to,
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) {
    const classes = `inline-flex items-center justify-center gap-2 rounded-pill font-body font-medium shadow-nav-pill transition-all duration-hover ease-out hover:scale-[1.03] disabled:pointer-events-none disabled:opacity-50 ${VARIANTS[variant]} ${variant === 'text' ? '' : SIZES[size]} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        )
    }

    const Component = as || 'button'
    return (
        <Component type={as ? undefined : 'button'} className={classes} {...props}>
            {children}
        </Component>
    )
}