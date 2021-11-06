const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      fontFamily: {
        vesterbroPoster: [
          'VesterbroPoster',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      spacing: {
        112: '28rem',
        120: '30rem',
        160: '40rem',
        180: '45rem',
        200: '50rem',
        220: '55rem',
        240: '60rem',
      },
      width: {
        '30%': '30%',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blackLighter: '#1A1A1A',
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      blackLighter: '#1A1A1A',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
