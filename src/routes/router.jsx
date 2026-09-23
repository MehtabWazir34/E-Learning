import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../components/layout/RootLayout.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

import Landing from '../pages/Landing.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import Courses from '../pages/Courses.jsx'
import CourseDetail from '../pages/CourseDetail.jsx'
import CourseFullView from '../pages/CourseFullView.jsx'
import LiteratureCourse from '../pages/LiteratureCourse.jsx'
import Blog from '../pages/Blog.jsx'
import BlogDetail from '../pages/BlogDetail.jsx'
import Membership from '../pages/Membership.jsx'
import Checkout from '../pages/Checkout.jsx'
import Calendar from '../pages/Calendar.jsx'
import CalendarCreate from '../pages/CalendarCreate.jsx'
import Meeting from '../pages/Meeting.jsx'
import Search from '../pages/Search.jsx'
import NotFound from '../pages/NotFound.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Landing /> },
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'courses', element: <Courses /> },
            { path: 'courses/literature', element: <LiteratureCourse /> },
            { path: 'courses/:courseId', element: <CourseDetail /> },
            { path: 'courses/:courseId/full-view', element: <CourseFullView /> },
            { path: 'blog', element: <Blog /> },
            { path: 'blog/:postId', element: <BlogDetail /> },
            { path: 'membership', element: <Membership /> },
            {
                path: 'checkout',
                element: (
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>
                ),
            },
            { path: 'calendar', element: <Calendar /> },
            { path: 'calendar/create', element: <CalendarCreate /> },
            { path: 'meeting', element: <Meeting /> },
            { path: 'search', element: <Search /> },
            { path: '404', element: <NotFound /> },
            { path: '*', element: <NotFound /> },
        ],
    },
])