import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchIcon } from 'lucide-react'
import Seo from '../components/layout/Seo.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'
import CourseGrid from '../components/course/CourseGrid.jsx'
import BlogGrid from '../components/blog/BlogGrid.jsx'
import { getCourses } from '../data/courses.js'
import { getBlogPosts } from '../data/blogPosts.js'

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('q') || ''
    const [courses, setCourses] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getCourses().then(setCourses)
        getBlogPosts().then(setPosts)
    }, [])

    const filteredCourses = useMemo(
        () =>
            query
                ? courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()))
                : courses,
        [courses, query],
    )

    const filteredPosts = useMemo(
        () =>
            query
                ? posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
                : posts,
        [posts, query],
    )

    return (
        <>
            <Seo path="/search" />
            <PageContainer className="py-12 md:py-16">
                <h1 className="font-display text-h2 font-bold text-heading">Search</h1>

                <label htmlFor="search-input" className="sr-only">
                    Search courses and articles
                </label>
                <div className="relative mt-6 max-w-xl">
                    <SearchIcon
                        size={18}
                        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-text-placeholder"
                    />
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search courses, blog posts…"
                        value={query}
                        onChange={(event) => setSearchParams(event.target.value ? { q: event.target.value } : {})}
                        className="h-[54px] w-full rounded-pill border border-primary bg-white pl-12 pr-5 font-body text-placeholder text-text-body placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    />
                </div>

                {filteredCourses.length > 0 && (
                    <div className="mt-10">
                        <h2 className="mb-4 font-display text-card-title font-bold text-text-dark">
                            Courses
                        </h2>
                        <CourseGrid courses={filteredCourses} />
                    </div>
                )}

                {filteredPosts.length > 0 && (
                    <div className="mt-10">
                        <h2 className="mb-4 font-display text-card-title font-bold text-text-dark">
                            Blog Posts
                        </h2>
                        <BlogGrid posts={filteredPosts} />
                    </div>
                )}

                {filteredCourses.length === 0 && filteredPosts.length === 0 && (
                    <p className="mt-10 text-text-body">No results for &ldquo;{query}&rdquo;.</p>
                )}
            </PageContainer>
        </>
    )
}