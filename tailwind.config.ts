/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    screens: {
      sm: { min: "0px", max: "766px" },
      md: { min: "767px", max: "1300px" },
      lg: { min: "1301px", max: "1920px" },
      xl: { min: "1921px", max: "2047px" },
      "2xl": { min: "2048px" },
    },
    borderRadius: {
      lg: ".6rem",
      xl: "1rem",
      "2xl": "30px",
    },
    extend: {
      colors: {
        gray: {
          800: "#212435",
        },
        green: {
          400: "#0BD88F",
        },
        cyan: {
          400: "#00F0FF",
        },
        purple: {
          600: "#4F08E680",
        },
        orange: {
          600: "#FF497580",
        },
      },
    },
  },
  plugins: [],
};
