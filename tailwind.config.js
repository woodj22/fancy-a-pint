const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: "#ff6961",
      black: colors.black,
      white: colors.white
    },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'digitaldream': ["digitaldream"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
