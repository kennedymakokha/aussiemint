/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Refinery_bg': "url('lg.jpg')",
      
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
      colors: {
     
        'gold': {
          light: '#67e8f9',
          DEFAULT: '#d2ac67',
          dark: '#0e7490',
        }
      },
    },
  },
  plugins: [],
}

