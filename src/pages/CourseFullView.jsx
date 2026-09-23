import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Seo from '../components/layout/Seo.jsx'
import Button from '../components/ui/Button.jsx'
import { getCourseById } from '../data/courses.js'

export default function CourseFullView() {
    const { courseId } = useParams()
    const [course, setCourse] = useState(undefined)

    useEffect(() => {
        setCourse(undefined)
        getCourseById(courseId).then(setCourse)
    }, [courseId])

    if (course === undefined) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-text-body">Loading…</p>
            </div>
        )
    }

    if (course === null) {
        return <Navigate to="/404" replace />
    }

    return (
        <>
            <Seo
                path={`/courses/${course.id}/full-view`}
                overrides={{ title: `${course.title} — Full View · TOTC`, description: course.summary }}
            />
            <div className="relative min-h-[70vh] bg-heading text-white">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${course.thumbnail})` }}
                />
                <div className="relative mx-auto flex min-h-[70vh] max-w-[1200px] flex-col justify-center px-6 py-20 md:px-10">
                    <Link to={`/courses/${course.id}`} className="mb-6 text-small text-white/70 hover:text-white">
                        ← Back to course
                    </Link>
                    <p className="text-small font-semibold uppercase tracking-wider text-primary-light">
                        {course.category}
                    </p>
                    <h1 className="mt-2 max-w-2xl font-display text-display font-extrabold">
                        {course.title}
                    </h1>
                    <p className="mt-4 max-w-xl text-body-lg text-white/80">{course.summary}</p>
                    <Button to="/checkout" size="lg" className="mt-8 w-fit">
                        Enroll Now — ${course.price}
                    </Button>
                </div>
            </div>
        </>
    )
}