/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html, js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c5f82a',
        grey: '#333333',
        dgrey: '#1f1f1f',
        black: '#141414',

      },
      fontFamily: {
         body: "Inter",
      },
    },
  },
  plugins: [],
}

