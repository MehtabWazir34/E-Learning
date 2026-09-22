import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        // Mocked: no backend, just acknowledge the submission.
        setSubmitted(true)
    }

    return (
        <footer className="border-t border-black/5 bg-surface-page">
            <div className="mx-auto max-w-[1600px] px-6 py-12 md:px-10">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link to="/" className="font-body text-logo font-bold tracking-[1.28px] text-heading">
                            TOTC
                        </Link>
                        <p className="mt-3 max-w-xs text-text-body">
                            An all-in-one e-learning community for students and instructors.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <h2 className="mb-3 font-body text-label font-semibold text-text-dark">Explore</h2>
                        <ul className="space-y-2">
                            <li><Link className="text-text-body hover:text-primary" to="/courses">Courses</Link></li>
                            <li><Link className="text-text-body hover:text-primary" to="/blog">Blog</Link></li>
                            <li><Link className="text-text-body hover:text-primary" to="/membership">Membership</Link></li>
                            <li><Link className="text-text-body hover:text-primary" to="/search">Search</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Legal">
                        <h2 className="mb-3 font-body text-label font-semibold text-text-dark">Legal</h2>
                        <ul className="space-y-2">
                            <li><Link className="text-text-body hover:text-primary" to="/">Privacy Policy</Link></li>
                            <li><Link className="text-text-body hover:text-primary" to="/">Terms of Service</Link></li>
                        </ul>
                    </nav>

                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-3 font-body text-label font-semibold text-text-dark">
                            Newsletter
                        </h2>
                        <label htmlFor="footer-email" className="sr-only">
                            Email address
                        </label>
                        <div className="flex gap-2">
                            <input
                                id="footer-email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-pill border border-primary bg-white px-4 py-2.5 text-placeholder text-text-body placeholder:text-text-placeholder focus-visible:outline-none"
                            />
                            <button
                                type="submit"
                                className="shrink-0 rounded-pill bg-primary px-5 py-2.5 font-body text-button font-medium text-white transition-all duration-hover ease-out hover:scale-[1.03] hover:bg-primary/90"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p role="status" className="mt-2 text-small text-text-body">
                            {submitted ? "Thanks — you're subscribed!" : ''}
                        </p>
                    </form>
                </div>

                <p className="mt-10 border-t border-black/5 pt-6 text-small text-text-placeholder">
                    © {new Date().getFullYear()} TOTC. All rights reserved.
                </p>
            </div>
        </footer>
    )
}