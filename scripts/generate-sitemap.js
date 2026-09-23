import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = process.env.VITE_SITE_URL || 'https://totc.example.com'

// Static, crawlable routes only — dynamic detail routes (:courseId, :postId)
// are intentionally omitted since there's no backend to enumerate real ids
// from yet; swap in a real list here once content comes from an API.
const ROUTES = [
    '/',
    '/login',
    '/register',
    '/courses',
    '/courses/literature',
    '/blog',
    '/membership',
    '/checkout',
    '/calendar',
    '/calendar/create',
    '/meeting',
    '/search',
]

function buildSitemap() {
    const urls = ROUTES.map(
        (route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n  </url>`,
    ).join('\n')

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const outputPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outputPath, buildSitemap())
console.log(`sitemap.xml written to ${outputPath}`)