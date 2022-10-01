const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../public/assets/bg-desktop-light.jpg')",
      }
    },
    fontFamily: {
      'sans': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}