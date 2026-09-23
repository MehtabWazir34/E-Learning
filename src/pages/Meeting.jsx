import Seo from '../components/layout/Seo.jsx'

export default function Meeting() {
  return (
    <>
      <Seo path="/meeting" />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">Live Meeting</h1>
        <p className="mt-3 text-slate-600">
          This page can host live lesson or classroom meeting details.
        </p>
      </main>
    </>
  )
}
