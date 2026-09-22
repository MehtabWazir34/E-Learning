import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'Blog', to: '/blog' },
    { label: 'Membership', to: '/membership' },
]

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-surface-page/90 backdrop-blur-glass">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
            >
                Skip to content
            </a>
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
                <Link to="/" className="font-body text-logo font-bold tracking-[1.28px] text-heading">
                    TOTC
                </Link>

                <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `font-body text-nav tracking-[0.44px] transition-colors duration-hover ease-out ${isActive ? 'text-primary' : 'text-text-body hover:text-primary'
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className="rounded-pill border border-primary bg-white px-6 py-2.5 font-body text-button font-medium text-text-body shadow-nav-pill transition-all duration-hover ease-out hover:scale-[1.03] hover:bg-primary/5"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="rounded-pill bg-primary px-6 py-2.5 font-body text-button font-medium text-white shadow-nav-pill transition-all duration-hover ease-out hover:scale-[1.03] hover:bg-primary/90"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    )
}