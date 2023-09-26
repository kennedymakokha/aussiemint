/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Refinery_bg': "url('refinery-bg.png')",
        'price_bg': "url('pricebg.jpg')",
        'refining_bg1': "url('refinary1.jpeg')",
        'refining_bg2': "url('refinary2.jpeg')",
        
      
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

