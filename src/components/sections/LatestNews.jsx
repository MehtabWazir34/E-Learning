import { useEffect, useState } from 'react'
import Section from '../layout/Section.jsx'
import NewsCard from './NewsCard.jsx'
import { getNewsItems } from '../../data/newsItems.js'

export default function LatestNews() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getNewsItems().then(setItems)
    }, [])

    if (!items.length) return null

    const [featured, ...rest] = items

    return (
        <Section title="Latest News and Resources">
            <div className="flex flex-col gap-6">
                <NewsCard item={featured} variant="featured" />
                {rest.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {rest.map((item) => (
                            <NewsCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </Section>
    )
}