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
      padding: ['hover'],
      borderRadius: ['hover'],
      borderWidth: ['hover'],
      borderStyle: ['hover'],
      borderColor: ['hover'],
      fontWeight: ['hover']
    }
  },
  plugins: []
}
