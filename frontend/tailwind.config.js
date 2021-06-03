module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      padding: ['hover'],
      borderRadius: ["hover"],
      borderWidth: ["hover"],
      borderStyle: ["hover"],
      borderColor: ["hover"],
    }
  },
  plugins: []
}
