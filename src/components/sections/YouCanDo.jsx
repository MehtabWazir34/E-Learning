import { useState } from 'react'
import { Play } from 'lucide-react'
import Section from '../layout/Section.jsx'

const CAPABILITIES = [
    'Enroll in live and self-paced courses',
    'Join virtual classrooms with instructors',
    'Track everything on one learning calendar',
    'Read community blog posts and news',
]

export default function YouCanDo() {
    const [playing, setPlaying] = useState(false)

    return (
        <Section title="You Can Do With TOTC">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden rounded-card bg-heading shadow-card">
                    {playing ? (
                        <div className="flex h-full w-full items-center justify-center text-white">
                            <p className="text-small text-white/70">
                                Video playback is mocked — no real media source is wired up.
                            </p>
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            aria-label="Play overview video"
                            className="flex h-full w-full items-center justify-center bg-black/20 transition-colors duration-hover ease-out hover:bg-black/30"
                        >
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-card transition-transform duration-hover ease-out hover:scale-110">
                                <Play size={24} className="fill-current" />
                            </span>
                        </button>
                    )}
                </div>

                <ul className="space-y-4">
                    {CAPABILITIES.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                            <span className="text-text-body">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}