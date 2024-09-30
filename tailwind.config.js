/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors:{
        'body': '#ffff',
        'but': '#673de6',
        fontFamily: {
            verdana: ['verdana', 'sans-serif'], // Fallback font
        },
      }
    },
  },
  plugins: [],
}