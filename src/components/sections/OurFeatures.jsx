import { Calendar, Video, FileText, Send } from 'lucide-react'
import Section from '../layout/Section.jsx'
import IconBadge from '../ui/IconBadge.jsx'
import Button from '../ui/Button.jsx'

const SHOWCASE_FEATURES = [
    { icon: Calendar, color: 'orange-deep', title: 'Learning Calendar', body: 'Plan and track every class in one place.' },
    { icon: Video, color: 'blue', title: 'Live Meetings', body: 'Join virtual classrooms with your instructors.' },
    { icon: FileText, color: 'orange', title: 'Course Resources', body: 'Curriculum, notes, and materials per course.' },
    { icon: Send, color: 'pink', title: 'Community Feed', body: 'Discuss, ask questions, and share progress.' },
]

export default function OurFeatures() {
    return (
        <Section title="Our Features" className="bg-primary/5">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {SHOWCASE_FEATURES.map((feature) => (
                    <div key={feature.title} className="rounded-card bg-white p-6 shadow-card">
                        <IconBadge icon={feature.icon} color={feature.color} />
                        <h3 className="mt-4 font-display text-card-title font-bold text-text-dark">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-text-medium">{feature.body}</p>
                    </div>
                ))}
            </div>
            <div className="mt-10 text-center">
                <Button to="/courses" variant="outline">
                    See more features
                </Button>
            </div>
        </Section>
    )
}