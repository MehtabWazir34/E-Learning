import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Section from '../layout/Section.jsx'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'
import { getTestimonials } from '../../data/testimonials.js'

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([])
    const [assessment, setAssessment] = useState('')
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        getTestimonials().then(setTestimonials)
    }, [])

    function handleSubmit(event) {
        event.preventDefault()
        // Mocked: no backend — just acknowledge locally.
        setSubmitted(true)
        setAssessment('')
    }

    return (
        <Section title="Testimonials" className="bg-primary/5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                    <blockquote key={testimonial.id} className="rounded-card bg-white p-6 shadow-card">
                        <div className="mb-2 flex gap-1" aria-hidden="true">
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <Star key={index} size={16} className="fill-accent-orange text-accent-orange" />
                            ))}
                        </div>
                        <p className="text-text-body">&ldquo;{testimonial.quote}&rdquo;</p>
                        <footer className="mt-4 font-body text-label font-semibold text-text-dark">
                            {testimonial.name}{' '}
                            <span className="font-normal text-text-placeholder">— {testimonial.role}</span>
                        </footer>
                    </blockquote>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl rounded-card bg-white p-6 shadow-card">
                <Input
                    label="Write your assessment"
                    placeholder="Share your experience with TOTC…"
                    value={assessment}
                    onChange={(event) => setAssessment(event.target.value)}
                />
                <Button as="button" type="submit" className="mt-4">
                    Submit
                </Button>
                {submitted && (
                    <p role="status" className="mt-3 text-small text-primary">
                        Thanks for sharing — your assessment was received.
                    </p>
                )}
            </form>
        </Section>
    )
}