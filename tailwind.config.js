/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#282532",
          light: "#646173",
          DEFAULT: "#858196",
          dark: "#181621",
          darkest: "#0F0E15",
        },
        purple: {
          DEFAULT: "#814BF6",
        },
        boxShadow: {
          box: "0px 5px 20px 0px rgba(0, 0, 0, 0.1)",
        },
        fontFamily: {
          inter: "var(--font-inter)",
        },
        fontSize: {
          sm: ["12px", "18px"],
          m: ["14px", "22px"],
          l: ["20px", "28px"],
        },
      },
    },
  },
  plugins: [],
};
