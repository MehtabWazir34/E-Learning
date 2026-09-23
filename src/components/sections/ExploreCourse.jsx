import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Section from '../layout/Section.jsx'
import CourseCard from '../course/CourseCard.jsx'
import { getCourses } from '../../data/courses.js'

export default function ExploreCourse() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(setCourses)
    }, [])

    const categories = useMemo(() => {
        const byCategory = new Map()
        courses.forEach((course) => {
            if (!byCategory.has(course.category)) byCategory.set(course.category, [])
            byCategory.get(course.category).push(course)
        })
        return Array.from(byCategory.entries())
    }, [courses])

    return (
        <Section title="Explore Course">
            <div className="flex flex-col gap-12">
                {categories.map(([category, categoryCourses]) => (
                    <div key={category}>
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="font-display text-card-title font-bold text-text-dark">
                                {category}
                            </h3>
                            <Link
                                to={category === 'Literature' ? '/courses/literature' : '/courses'}
                                className="font-body text-button text-primary hover:underline"
                            >
                                See All
                            </Link>
                        </div>
                        <div className="-mx-1 flex gap-6 overflow-x-auto px-1 pb-2">
                            {categoryCourses.map((course) => (
                                <div key={course.id} className="w-[280px] shrink-0">
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}