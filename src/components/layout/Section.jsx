import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import PageContainer from './PageContainer.jsx'

/** as="section" by default; renders <h2> when `title` is given. */
export default function Section({ as: Component = 'section', title, className = '', children, ...props }) {
    const { ref, isVisible } = useScrollReveal()

    return (
        <Component
            ref={ref}
            className={`py-16 md:py-24 ${isVisible ? 'animate-reveal-in' : 'opacity-0'} ${className}`}
            {...props}
        >
            <PageContainer>
                {title && (
                    <h2 className="mb-10 font-body text-h2 font-bold text-heading">{title}</h2>
                )}
                {children}
            </PageContainer>
        </Component>
    )
}