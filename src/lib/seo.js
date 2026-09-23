export const routeMeta = {
  home: {
    title: 'E-Learning | Learn smarter, grow faster',
    description: 'Modern online learning platform with expert-led courses, mentoring, and career growth programs.',
  },
  about: {
    title: 'About Us | E-Learning',
    description: 'Learn about our mission, educators, and the learning experience behind E-Learning.',
  },
  courses: {
    title: 'Courses | E-Learning',
    description: 'Explore expert-led courses across design, development, marketing, and business skills.',
  },
  blog: {
    title: 'Blog | E-Learning',
    description: 'Insights, tips, and educational stories to help you build new skills and stay inspired.',
  },
  membership: {
    title: 'Membership | E-Learning',
    description: 'Get access to a growing library of premium classes, coaching, and exclusive learning perks.',
  },
  contact: {
    title: 'Contact | E-Learning',
    description: 'Reach out to our team for course support, student onboarding, and partnership inquiries.',
  },
  login: {
    title: 'Login | E-Learning',
    description: 'Sign in to continue your learning journey and manage your account.',
  },
  signup: {
    title: 'Create Account | E-Learning',
    description: 'Join E-Learning and start learning from expert-led courses and programs.',
  },
  dashboard: {
    title: 'Dashboard | E-Learning',
    description: 'Track your progress, access course materials, and manage learning goals in one place.',
  },
  checkout: {
    title: 'Checkout | E-Learning',
    description: 'Complete your secure purchase and unlock your next learning experience.',
  },
}

export function getSeo(path = '/', overrides = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const matchKey = normalizedPath === '/' ? 'home' : normalizedPath.replace(/\//g, '').split('?')[0] || 'home'
  const base = routeMeta[matchKey] || routeMeta.home

  return {
    title: overrides.title || base.title,
    description: overrides.description || base.description,
    url: `https://example.com${normalizedPath}`,
    siteName: 'E-Learning',
    image: 'https://example.com/og-image.jpg',
    ...overrides,
  }
}

