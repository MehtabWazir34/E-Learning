import { useEffect, useMemo, useState } from 'react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import CourseGrid from '../components/course/CourseGrid.jsx'
import CourseFilterBar from '../components/course/CourseFilterBar.jsx'
import { getCourses } from '../data/courses.js'

export default function Courses() {
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState('All')

    useEffect(() => {
        getCourses().then(setCourses)
    }, [])

    const filtered = useMemo(() => {
        if (category === 'All') return courses
        return courses.filter((course) => course.category === category)
    }, [courses, category])

    return (
        <>
            <Seo path="/courses" />
            <PageContainer className="py-12 md:py-16">
                <h1 className="font-display text-h2 font-bold text-heading">Courses</h1>
                <p className="mt-2 text-text-body">Browse the full TOTC catalog.</p>

                <div className="my-8">
                    <CourseFilterBar active={category} onChange={setCategory} />
                </div>

                <CourseGrid courses={filtered} />
            </PageContainer>
        </>
    )
}