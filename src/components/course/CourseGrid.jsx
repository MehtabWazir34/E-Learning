import CourseCard from './CourseCard.jsx'

export default function CourseGrid({ courses }) {
    if (!courses?.length) {
        return <p className="text-text-body">No courses found.</p>
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    )
}