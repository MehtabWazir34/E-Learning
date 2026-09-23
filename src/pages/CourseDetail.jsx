import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import Button from '../components/ui/Button.jsx'
import { getCourseById } from '../data/courses.js'

export default function CourseDetail() {
    const { courseId } = useParams()
    const [course, setCourse] = useState(undefined) // undefined = loading, null = not found

    useEffect(() => {
        setCourse(undefined)
        getCourseById(courseId).then(setCourse)
    }, [courseId])

    if (course === undefined) {
        return (
            <PageContainer className="py-16">
                <p className="text-text-body">Loading…</p>
            </PageContainer>
        )
    }

    if (course === null) {
        return <Navigate to="/404" replace />
    }

    return (
        <>
            <Seo
                path={`/courses/${course.id}`}
                overrides={{ title: `${course.title} · TOTC`, description: course.summary }}
            />
            <PageContainer className="py-12 md:py-16">
                <p className="text-small font-semibold uppercase tracking-wider text-primary">
                    {course.category}
                </p>
                <h1 className="mt-2 font-display text-h2 font-bold text-heading">{course.title}</h1>
                <p className="mt-2 text-text-body">by {course.instructor}</p>

                <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3">
                    <article className="lg:col-span-2">
                        <img
                            src={course.thumbnail}
                            alt={`${course.title} thumbnail`}
                            className="mb-6 aspect-video w-full rounded-card object-cover"
                            onError={(event) => {
                                event.currentTarget.style.display = 'none'
                            }}
                        />
                        <h2 className="font-display text-card-title font-bold text-text-dark">
                            About this course
                        </h2>
                        <p className="mt-3 text-text-body">{course.summary}</p>

                        <h2 className="mt-8 font-display text-card-title font-bold text-text-dark">
                            Curriculum
                        </h2>
                        <ol className="mt-3 list-decimal space-y-2 pl-5 text-text-body">
                            <li>Getting started</li>
                            <li>Core concepts</li>
                            <li>Hands-on practice</li>
                            <li>Final project</li>
                        </ol>
                    </article>

                    <aside className="rounded-card bg-white p-6 shadow-card">
                        <p className="font-display text-card-title font-extrabold text-primary">
                            ${course.price}
                        </p>
                        <Button to="/checkout" className="mt-4 w-full">
                            Enroll Now
                        </Button>
                        <Link
                            to={`/courses/${course.id}/full-view`}
                            className="mt-4 block text-center text-small text-text-body hover:text-primary"
                        >
                            View full immersive layout
                        </Link>
                    </aside>
                </div>
            </PageContainer>
        </>
    )
}