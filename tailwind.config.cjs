/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        dark: 'rgba(0, 0, 0, 0.80)',
        back: 'rgba(0, 0, 0, 0.75)',
        purple: '#7F5AF0',
        purpleSec: '#9747FF',
        paragraph: '#94A1B2',
        textSec: '#D1D1D1',
        productDiv: '#141415',
        productBack: 'rgba(0, 0, 0, 0.20)',
        about: '#242629',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
