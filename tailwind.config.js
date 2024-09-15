/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body': '#ddd',
        'but': '#673de6',
        
      }
    },
  },
  plugins: [],
}