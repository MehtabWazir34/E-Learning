const testimonials = [
    {
        id: 't1',
        name: 'Sara Malik',
        role: 'Design Student',
        quote: 'TOTC made it easy to learn at my own pace while staying connected to a real community.',
        avatar: '/assets/testimonials/sara.jpg',
        rating: 5,
    },
    {
        id: 't2',
        name: 'Ahmed Raza',
        role: 'Software Engineer',
        quote: 'The course quality and instructor support here are genuinely excellent.',
        avatar: '/assets/testimonials/ahmed.jpg',
        rating: 5,
    },
]

export function getTestimonials() {
    return Promise.resolve(testimonials)
}