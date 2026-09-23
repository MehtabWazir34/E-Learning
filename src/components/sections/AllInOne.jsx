import { Users, BookOpen, Award } from 'lucide-react'
import Section from '../layout/Section.jsx'
import IconBadge from '../ui/IconBadge.jsx'

const FEATURES = [
    { icon: Users, color: 'blue', title: 'Community Driven', body: 'Learn alongside thousands of active students.' },
    { icon: BookOpen, color: 'orange', title: 'Expert Courses', body: 'Curated content from real practitioners.' },
    { icon: Award, color: 'pink', title: 'Real Credentials', body: 'Finish courses with something to show for it.' },
]

export default function AllInOne() {
    return (
        <Section title="All-in-one">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {FEATURES.map((feature) => (
                    <div key={feature.title} className="rounded-card bg-white p-6 shadow-card">
                        <IconBadge icon={feature.icon} color={feature.color} />
                        <h3 className="mt-4 font-display text-card-title font-bold text-text-dark">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-text-medium">{feature.body}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}