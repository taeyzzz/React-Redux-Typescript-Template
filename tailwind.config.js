const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['AdobeArabic', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
