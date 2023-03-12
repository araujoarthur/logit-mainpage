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
      darkerpetrol:'#0F3133',
      aquagreen:'#37745B',
      limegreen:'#8B9D77',
      limegreenFaded:'#6A785B',
      icewhite:'#E7EAEF',
      salmonpink:'#EDC5AB',
      pinky:'#E391D3',
      palidyellow:'#CFAF65',
    },
    fontFamily:{
      nunito: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  safelist:[
  'grid',
  {
    pattern:/z-[0-9]+/
  },
  {
    pattern:/drop-shadow-(sm|md|lg|xl)/,
    variants:['sm','md','lg','hover','focus']
  },
  {
    pattern: /grid-cols-[0-9]/,
    variants: ['sm','md', 'lg', 'xl']
  },
  {
    pattern:/gap-[0-9]/,
    variants: ['sm','md', 'lg', 'xl']
  },
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
    pattern: /(shadow|drop-shadow)-(ms|md|lg|xl|2xl|inner|none)/,
    variants:['hover', 'focus']
  },
  {
    pattern: /(bg|text|border|shadow)-(pureblack|petrol|darkpetrol|darkerpetrol|aquagreen|limegreen|limegreenFaded|icewhite|salmonpink|palidyellow)/,
    variants:['hover', 'focus']
  }]
}
