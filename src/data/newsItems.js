const newsItems = [
    {
        id: 'n1',
        title: 'TOTC Partners With Five New Instructors',
        category: 'NEWS',
        date: '2026-08-02',
        image: '/assets/news/partners.jpg',
        excerpt: 'Expanding our catalog with experts across design, data, and business.',
    },
    {
        id: 'n2',
        title: 'Q3 Community Update',
        category: 'PRESS RELEASE',
        date: '2026-08-20',
        image: '/assets/news/q3-update.jpg',
        excerpt: 'A look back at growth, new features, and what is coming next.',
    },
]

export function getNewsItems() {
    return Promise.resolve(newsItems)
}