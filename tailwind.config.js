const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
        "28xl": "28rem",
        "13xl": "13rem",
      },
      fontFamily: {
        vesterbroPoster: [
          "VesterbroPoster",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      lineHeight: {
        32: "8rem",
      },
      skew: {
        10: "10deg",
        "-10": "-10deg",
      },
      spacing: {
        1.5: "0.6rem",
        2.5: "1rem",
        3.5: "1.4rem",
        4.5: "1.8rem",
        7: "2.8rem",
        9: "3.6rem",
        14: "5.6rem",
        15: "6rem",
        112: "28rem",
        120: "30rem",
        160: "40rem",
        180: "45rem",
        200: "50rem",
        220: "55rem",
        240: "60rem",
        260: "65rem",
        "6/25": "2.5rem",
        "7/50": "3rem",
        "8/50": "3.5rem",
        "12/25": "5rem",
        "9/10": "90%",
        nav: "156px",
        "120%": "120%",
      },
      width: {
        "30%": "30%",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    textColor: (theme) => ({
      ...theme("colors"),
      main: "#ff9e44",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      main: "#ff9e44",
      blackLighter: "#1A1A1A",
      hoverShadow: "#00000017",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      blackLighter: "#1A1A1A",
    }),
    zIndex: {
      60: "60",
      ...defaultTheme.zIndex,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
