/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      petrol:'#217074',
      aquagreen:'#37745B',
      limegreen:'#8B9D77',
      limegreenFaded:'#6A785B',
      icewhite:'#E7EAEF',
      salmonpink:'#EDC5AB',
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
