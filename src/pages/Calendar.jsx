import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import Button from '../components/ui/Button.jsx'

const MOCK_EVENTS = [
    { id: 'e1', date: '2026-09-25', title: 'Intro to Literature — Live Q&A' },
    { id: 'e2', date: '2026-09-27', title: 'Modern Web Design — Studio Session' },
    { id: 'e3', date: '2026-10-02', title: 'Data Science Basics — Office Hours' },
]

export default function Calendar() {
    return (
        <>
            <Seo path="/calendar" />
            <PageContainer className="py-12 md:py-16">
                <div className="flex items-center justify-between">
                    <h1 className="font-display text-h2 font-bold text-heading">Course Calendar</h1>
                    <Button to="/calendar/create">Create Event</Button>
                </div>

                <div className="mt-8 divide-y divide-black/5 rounded-card bg-white shadow-card">
                    {MOCK_EVENTS.map((event) => (
                        <div key={event.id} className="flex items-center justify-between p-5">
                            <div>
                                <p className="font-semibold text-text-dark">{event.title}</p>
                                <p className="text-small text-text-placeholder">
                                    {new Date(event.date).toLocaleDateString(undefined, {
                                        weekday: 'long',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </>
    )
}