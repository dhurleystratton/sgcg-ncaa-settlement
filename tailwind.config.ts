import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#0A0A0A',
        'gold': '#D4AF37',
        'gold-dark': '#B8941F',
        'gold-light': '#E6C757',
        'ocean': '#0A423B',
        'crimson': '#DC143C',
        'carbon': '#1A1A1A',
        'graphite': '#2D2D2D',
        'silver': '#C0C0C0',
        'platinum': '#E5E4E2',
        'pearl': '#FAFAFA',
        'brand-teal': '#439aa3',
        'brand-dark-teal': '#0a423b',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'Impact', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'teko': ['Teko', 'sans-serif'],
      },
      fontSize: {
        'hero-mobile': '3rem',
        'hero-desktop': '7.5rem',
        'arena': 'clamp(4rem, 15vw, 12.5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config