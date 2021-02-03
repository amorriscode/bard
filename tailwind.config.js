module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#004346',
        secondary: '#81D2C7',
        snow: '#FFFAFB',
        platinum: '#E0E0E2',
        gunmetal: '#292F36',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['hover'],
      padding: ['first'],
    },
  },
  plugins: [],
}
