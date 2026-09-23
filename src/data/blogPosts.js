const blogPosts = [
    {
        id: 'welcome-to-totc',
        title: 'Welcome to TOTC',
        category: 'NEWS',
        author: 'TOTC Team',
        date: '2026-06-01',
        excerpt: 'A quick look at what TOTC is and how the community works.',
        image: '/assets/blog/welcome.jpg',
        content: 'Full article content goes here — replace with real copy.',
    },
    {
        id: 'new-course-catalog',
        title: 'A New Course Catalog Is Live',
        category: 'PRESS RELEASE',
        author: 'TOTC Team',
        date: '2026-07-14',
        excerpt: 'Dozens of new courses across design, tech, and business are now available.',
        image: '/assets/blog/catalog.jpg',
        content: 'Full article content goes here — replace with real copy.',
    },
]

export function getBlogPosts() {
    return Promise.resolve(blogPosts)
}

export function getBlogPostById(id) {
    return Promise.resolve(blogPosts.find((post) => post.id === id) || null)
}