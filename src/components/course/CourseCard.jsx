import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import Card from '../ui/Card.jsx'

export default function CourseCard({ course }) {
    return (
        <Card as={Link} to={`/courses/${course.id}`}>
            <img
                src={course.thumbnail}
                alt={`${course.title} thumbnail`}
                loading="lazy"
                className="h-40 w-full object-cover"
                onError={(event) => {
                    event.currentTarget.style.display = 'none'
                }}
            />
            <div className="p-5">
                <p className="text-small font-semibold uppercase tracking-wider text-primary">
                    {course.category}
                </p>
                <h3 className="mt-1 font-display text-card-title font-bold text-text-dark">
                    {course.title}
                </h3>
                <p className="mt-1 text-text-medium">{course.instructor}</p>
                <div className="mt-3 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-small text-text-body">
                        <Star size={14} className="fill-accent-orange text-accent-orange" />
                        {course.rating}
                    </span>
                    <span className="font-body font-semibold text-primary">${course.price}</span>
                </div>
            </div>
        </Card>
    )
}