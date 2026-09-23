import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function RootLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-surface-page">
            <Header />
            <main id="main-content" className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    )
}