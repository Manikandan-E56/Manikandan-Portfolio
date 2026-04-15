/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7c3aed",
          dark: "#5b21b6",
          light: "#a78bfa",
        },
        cyan: {
          accent: "#06b6d4",
          light: "#67e8f9",
        },
        space: {
          DEFAULT: "#050816",
          card: "#0d1224",
          border: "#1a2040",
          muted: "#8892b0",
          light: "#ccd6f6",
        },
        dark: {
          DEFAULT: "#050816",
          card: "#0d1224",
          text: "#e2e8f0",
          muted: "#8892b0",
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin-reverse 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'aurora': 'aurora 12s ease-in-out infinite',
        'aurora-2': 'aurora 16s ease-in-out infinite reverse',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'typewriter': 'typewriter 3s steps(30) infinite',
        'slide-in-left': 'slideInLeft 0.5s ease forwards',
        'scroll-indicator': 'scrollIndicator 1.5s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(5%, 10%) scale(1.1)', opacity: '0.8' },
          '66%': { transform: 'translate(-5%, 5%) scale(0.9)', opacity: '0.5' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.8), 0 0 60px rgba(6, 182, 212, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-violet': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)',
        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 20px 60px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}
