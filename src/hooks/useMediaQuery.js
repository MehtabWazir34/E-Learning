import { useEffect, useState } from 'react'

/**
 * Wraps matchMedia. Use sparingly — Tailwind responsive classes are
 * preferred; this is only for structural layout swaps that CSS alone
 * can't express cleanly (e.g. Login layout restructuring on mobile).
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(query).matches,
    )

    useEffect(() => {
        const mql = window.matchMedia(query)
        const handler = (event) => setMatches(event.matches)

        setMatches(mql.matches)
        mql.addEventListener('change', handler)

        return () => mql.removeEventListener('change', handler)
    }, [query])

    return matches
}