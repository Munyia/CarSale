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
        'body': '#ddd',
        'but': '#673de6',
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          dm: ['DM Sans', 'sans-serif'],
          open: ['Open Sans', 'sans-serif'],
        },
      }
    },
  },
  plugins: [],
}