const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = ({
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif']},
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        cyan:colors.cyan,
        teal:colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography')
  ],
})
