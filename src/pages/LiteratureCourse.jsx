import { useEffect, useState } from 'react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import CourseGrid from '../components/course/CourseGrid.jsx'
import { getCoursesByCategory } from '../data/courses.js'

/**
 * Category-themed template: same CourseGrid/CourseCard components as
 * /courses, filtered to one category — confirms the course template is
 * data-driven, not forked per category (PRD §6.3).
 */
export default function LiteratureCourse() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCoursesByCategory('Literature').then(setCourses)
    }, [])

    return (
        <>
            <Seo
                path="/courses/literature"
                overrides={{
                    title: 'Literature Courses · TOTC',
                    description: 'Explore TOTC courses in the Literature category.',
                }}
            />
            <PageContainer className="py-12 md:py-16">
                <h1 className="font-display text-h2 font-bold text-heading">Literature Courses</h1>
                <p className="mt-2 text-text-body">
                    Hand-picked courses for readers, writers, and critical thinkers.
                </p>
                <div className="mt-8">
                    <CourseGrid courses={courses} />
                </div>
            </PageContainer>
        </>
    )
}