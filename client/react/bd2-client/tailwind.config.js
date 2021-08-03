const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      green: colors.lime,
      blue: colors.sky,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
