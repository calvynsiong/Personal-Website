const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    },
    extend: {}
  },
  variants: {
    extend: {
      padding: ['hover', "focus"],
      borderRadius: ['hover', "focus"],
      borderWidth: ['hover', "focus"],
      borderStyle: ['hover', "focus"],
      borderColor: ['hover', "focus"],
      fontWeight: ['hover', "focus"],
      animation: ['hover', "focus"],
    }
  },
  plugins: []
}
