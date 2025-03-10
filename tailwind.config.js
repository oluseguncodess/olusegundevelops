/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'c-dark': 'rgb(163, 163, 163)',
      },
      backgroundColor: {
        'btn-dark': 'rgb(39, 39, 42)', 
        'btn-white': 'rgb(228, 228, 231)',
      },
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}