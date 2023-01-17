

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif']},
  },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms')
  ]
}
