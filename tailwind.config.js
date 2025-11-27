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
          DEFAULT: "#6366f1", // Indigo 500
          dark: "#4338ca",    // Indigo 700
          light: "#818cf8",   // Indigo 400
        },
        secondary: {
          DEFAULT: "#ec4899", // Pink 500
          dark: "#be185d",    // Pink 700
          light: "#f472b6",   // Pink 400
        },
        dark: {
          DEFAULT: "#0f172a", // Slate 900
          card: "#1e293b",    // Slate 800
          text: "#f8fafc",    // Slate 50
          muted: "#94a3b8",   // Slate 400
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
