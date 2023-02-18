/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './public/*/*.html/',
    './public/**/*.html/'
  ],
  theme: {
    extend: {
      height: {
        '75': '40rem',
        '50': '25rem',
        '100': '50rem',
        '150': '100rem',
        '200': '200rem',
        '300': '300rem'
      },
      colors: {
        'cyan':colors.cyan,
        'yellow':colors.gray,
        'Slate':colors.Slate,
        'Zinc':colors.Zinc,
        'Neutral':colors.Neutral,
        'Stone':colors.Stone,
        'Red':colors.Red,
        'Green':colors.Green,
        'Blue':colors.Blue,
        'Purple':colors.Purple,
        'Rose':colors.Rose,
        gray:colors.gray,

      },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ]
}
