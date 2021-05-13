const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      peach: '#ffb997',
      salmon: '#f67e7d',
      black: '#0b032d',
      white: '#fdf2ee',
      purple: '#843b62'
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
