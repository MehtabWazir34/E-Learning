import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element (fade + translate-y) the first time it enters the
 * viewport, then disconnects — never re-triggers on scroll back up.
 * Respects prefers-reduced-motion by revealing immediately, no animation.
 *
 * Usage:
 *   const { ref, isVisible } = useScrollReveal()
 *   <div ref={ref} className={isVisible ? 'animate-reveal-in' : 'opacity-0'}>
 */
export function useScrollReveal(options = {}) {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = options
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches

        if (prefersReducedMotion) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold, rootMargin },
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return { ref, isVisible }
}