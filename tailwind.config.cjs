/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      pureblack:'#000000',
      petrol:'#217074',
      darkpetrol:'#185154',
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
  safelist:[

  {
    pattern: /(mt|mb|mr|ml|my|mx|px|py|pt|pb|pl|pr)-[0-9]+/
  },
  {
    pattern: /flex-.*/
  },
  {
    pattern: /(bottom|right|top|left)-[0-9]+/
  },
  {
    pattern: /(w|h)-[0-9]+/
  },
  {
    pattern: /shadow-(ms|md|lg|xl|2xl|inner|none)/,
    variants:['hover', 'focus']
  },
  {
    pattern: /(bg|text|border|3shadow)-(pureblack|petrol|darkpetrol|aquagreen|limegreen|limegreenFaded|icewhite|salmonpink)/,
    variants:['hover', 'focus']
  }]
}
