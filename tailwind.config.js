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
        'but': '#9754E6',
        'p1': '#9754E6',
        'p2': '#9853E2',
        'p3': '#9B52DD',
        'pk': '#B545A7',
        fontFamily: {
            verdana: ['verdana', 'sans-serif'], // Fallback font
        },
      }
    },
  },
  plugins: [],
}