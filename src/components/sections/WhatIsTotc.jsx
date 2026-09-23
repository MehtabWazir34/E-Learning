import Section from '../layout/Section.jsx'
import Button from '../ui/Button.jsx'

export default function WhatIsTOTC() {
    return (
        <Section title="What is TOTC">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-card bg-white p-8 shadow-card">
                    <h3 className="font-display text-card-title font-bold text-text-dark">
                        For Instructors
                    </h3>
                    <p className="mt-2 text-text-medium">
                        Publish courses, run live sessions, and grow a community around your expertise.
                    </p>
                    <Button to="/register" variant="outline" className="mt-6">
                        Start Teaching
                    </Button>
                </div>
                <div className="rounded-card bg-white p-8 shadow-card">
                    <h3 className="font-display text-card-title font-bold text-text-dark">
                        For Students
                    </h3>
                    <p className="mt-2 text-text-medium">
                        Learn at your own pace with structured courses and a supportive community.
                    </p>
                    <Button to="/courses" variant="outline" className="mt-6">
                        Browse Courses
                    </Button>
                </div>
            </div>
        </Section>
    )
}