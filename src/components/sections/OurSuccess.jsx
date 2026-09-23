import Section from '../layout/Section.jsx'

const STATS = [
    { label: 'Students', value: '250k+' },
    { label: 'Total Success', value: '98%' },
    { label: 'Main Questions', value: '24/7' },
    { label: 'Chief Experts', value: '120+' },
    { label: 'Years of Experience', value: '10+' },
]

export default function OurSuccess() {
    return (
        <Section title="Our Success">
            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
                {STATS.map((stat) => (
                    <div key={stat.label}>
                        <p className="font-display text-card-title font-extrabold text-primary">
                            {stat.value}
                        </p>
                        <p className="mt-1 text-small text-text-body">{stat.label}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}