/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Techy / neon palette
        primary: '#06b6d4', // cyan (neon accent)
        secondary: '#0f172a', // deep navy
        accent: '#00ffd5', // neon teal
        background: '#071024', // very dark navy
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}