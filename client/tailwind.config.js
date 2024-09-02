/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
    colors:{
      slate:'#1e293b',
      Navy:'#161D6F',
      Blue:'#16325B',
      Teal:'#98DED9',
      Mint:'#C7FFD8',
      Beige:'#FFF6EA',
      Purple:'#BF2EF0',
      Primary:'#16a34a',
      Secondary:'#227B94',
      Yellow:'#FFDC7F'
    }
  }
  },
  plugins: [],
}