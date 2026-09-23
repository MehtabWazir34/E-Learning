export default function Card({ as: Component = 'div', className = '', children, ...props }) {
    return (
        <Component
            className={`overflow-hidden rounded-card bg-white shadow-card transition-transform duration-hover ease-out hover:scale-[1.02] ${className}`}
            {...props}
        >
            {children}
        </Component>
    )
}