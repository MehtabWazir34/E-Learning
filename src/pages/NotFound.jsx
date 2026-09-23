import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        The page you were looking for does not exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Back to home
      </Link>
    </main>
  )
}
