const courses = [
    {
        id: 'intro-to-literature',
        title: 'Introduction to Literature',
        category: 'Literature',
        instructor: 'Dr. Amelia Hart',
        price: 49,
        rating: 4.8,
        thumbnail: '/assets/courses/literature.jpg',
        summary: 'A survey of classic and contemporary literary works and how to read them critically.',
    },
    {
        id: 'modern-web-design',
        title: 'Modern Web Design',
        category: 'Design',
        instructor: 'Jonah Reyes',
        price: 79,
        rating: 4.9,
        thumbnail: '/assets/courses/design.jpg',
        summary: 'Learn responsive, accessible, and beautiful interfaces from scratch.',
    },
    {
        id: 'data-science-basics',
        title: 'Data Science Basics',
        category: 'Technology',
        instructor: 'Priya Nair',
        price: 99,
        rating: 4.7,
        thumbnail: '/assets/courses/data-science.jpg',
        summary: 'Statistics, Python, and real datasets — a practical first course.',
    },
    {
        id: 'business-strategy-101',
        title: 'Business Strategy 101',
        category: 'Business',
        instructor: 'Marcus Bell',
        price: 59,
        rating: 4.6,
        thumbnail: '/assets/courses/business.jpg',
        summary: 'Frameworks for competitive strategy and decision-making.',
    },
]

/** Simulates an async data layer so pages can be written API-ready. */
export function getCourses() {
    return Promise.resolve(courses)
}

export function getCourseById(id) {
    return Promise.resolve(courses.find((course) => course.id === id) || null)
}

export function getCoursesByCategory(category) {
    return Promise.resolve(
        courses.filter((course) => course.category.toLowerCase() === category.toLowerCase()),
    )
}