import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Users, BookOpen, Award } from 'lucide-react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import Section from '../components/layout/Section.jsx'
import Button from '../components/ui/Button.jsx'
import IconBadge from '../components/ui/IconBadge.jsx'
import CourseGrid from '../components/course/CourseGrid.jsx'
import BlogGrid from '../components/blog/BlogGrid.jsx'
import { getCourses } from '../data/courses.js'
import { getBlogPosts } from '../data/blogPosts.js'
import { getTestimonials } from '../data/testimonials.js'

const FEATURES = [
    { icon: Users, title: 'Community Driven', body: 'Learn alongside thousands of active students.' },
    { icon: BookOpen, title: 'Expert Courses', body: 'Curated content from real practitioners.' },
    { icon: Award, title: 'Real Credentials', body: 'Finish courses with something to show for it.' },
]

const STATS = [
    { label: 'Students', value: '250k+' },
    { label: 'Total Success', value: '98%' },
    { label: 'Main Questions', value: '24/7' },
    { label: 'Chief Experts', value: '120+' },
    { label: 'Years of Experience', value: '10+' },
]

export default function Landing() {
    const [courses, setCourses] = useState([])
    const [posts, setPosts] = useState([])
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        getCourses().then(setCourses)
        getBlogPosts().then(setPosts)
        getTestimonials().then(setTestimonials)
    }, [])

    return (
        <>
            <Seo path="/" />

            {/* Hero */}
            <section className="relative overflow-hidden bg-primary/5 py-20 md:py-28">
                <PageContainer className="flex flex-col items-center gap-10 md:flex-row">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="font-display text-display font-extrabold text-heading">
                            All-in-one <span className="text-accent-orange-deep">Studying</span> Platform
                        </h1>
                        <p className="mt-6 font-display text-body-lg text-text-body">
                            Browse courses, join live meetings, and manage your learning calendar — all in one
                            community.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <Button to="/register" variant="primary" size="lg">
                                Join for free
                            </Button>
                            <Button as="button" type="button" variant="text" className="flex items-center gap-2">
                                <Play size={18} className="fill-current" /> Watch how it works
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex-1">
                        <div className="aspect-[4/3] w-full rounded-card bg-primary/20 shadow-hero-photo" />
                        <div className="absolute -bottom-6 -left-6 rounded-card bg-surface-glass p-4 backdrop-blur-glass">
                            <p className="font-display text-card-title font-bold text-heading">250k+</p>
                            <p className="font-display text-card-subtitle text-text-body">Active Students</p>
                        </div>
                    </div>
                </PageContainer>
            </section>

            {/* All-in-one feature cards */}
            <Section title="All-in-one">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {FEATURES.map((feature) => (
                        <div key={feature.title} className="rounded-card bg-white p-6 shadow-card">
                            <IconBadge icon={feature.icon} color="blue" />
                            <h3 className="mt-4 font-display text-card-title font-bold text-text-dark">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-text-medium">{feature.body}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* What is TOTC */}
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

            {/* Our Success stats */}
            <Section title="Our Success" className="bg-primary/5">
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

            {/* Explore Course */}
            <Section title="Explore Course">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-text-body">Popular picks across every category</p>
                    <Link to="/courses" className="font-body text-button text-primary hover:underline">
                        See All
                    </Link>
                </div>
                <CourseGrid courses={courses} />
            </Section>

            {/* Testimonials */}
            <Section title="Testimonials" className="bg-primary/5">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {testimonials.map((testimonial) => (
                        <blockquote key={testimonial.id} className="rounded-card bg-white p-6 shadow-card">
                            <p className="text-text-body">&ldquo;{testimonial.quote}&rdquo;</p>
                            <footer className="mt-4 font-body text-label font-semibold text-text-dark">
                                {testimonial.name} <span className="font-normal text-text-placeholder">— {testimonial.role}</span>
                            </footer>
                        </blockquote>
                    ))}
                </div>
            </Section>

            {/* Latest News */}
            <Section title="Latest News and Resources">
                <BlogGrid posts={posts} />
            </Section>
        </>
    )
}