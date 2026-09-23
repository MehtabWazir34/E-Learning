/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#49BBBD',
        'primary-light': '#AEF2F3',
        'primary-60': '#49BBBD99',
        'surface-page': '#F6F7FB',
        'surface-card': '#FFFFFF',
        heading: '#2F327D',
        'text-body': '#696984',
        'text-dark': '#252B42',
        'text-placeholder': '#8E8E8E',
        'text-muted': '#7A7A7A',
        'border-soft': '#E6E8F0',
        accent: '#F4B740',
      },
      fontFamily: {
        body: ['"Nunito Sans"', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 4vw, 5rem)', { lineHeight: '1.1' }],
        h1: ['3rem', { lineHeight: '1.2' }],
        h2: ['2.5rem', { lineHeight: '1.2' }],
        'card-title': ['1.5rem', { lineHeight: '1.4' }],
        'card-subtitle': ['1.125rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.8' }],
        button: ['0.875rem', { lineHeight: '1.25' }],
        label: ['0.875rem', { lineHeight: '1.25' }],
        small: ['0.75rem', { lineHeight: '1.5' }],
        logo: ['1.625rem', { lineHeight: '1.25' }],
        nav: ['0.875rem', { lineHeight: '1.2' }],
        placeholder: ['0.875rem', { lineHeight: '1.25' }],
      },
      boxShadow: {
        card: '0 20px 40px rgba(27, 31, 59, 0.08)',
        'hero-photo': '0 25px 50px rgba(73, 187, 189, 0.18)',
        'nav-pill': '0 8px 20px rgba(18, 18, 18, 0.08)',
      },
      borderRadius: {
        pill: '9999px',
        card: '24px',
        badge: '9999px',
      },
      backdropBlur: {
        glass: '14px',
      },
      transitionDuration: {
        hover: '200ms',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
