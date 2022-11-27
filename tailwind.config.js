/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Merriweather", ...defaultTheme.fontFamily.sans],
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#547404",
      secondary: "#eee",
      tertiary: "#e5ebb2",
      danger: "#ff6347",
      white: "#ffffff",
      black: "#000000",
      gray: "#a0a6b2",
    },
  },
  plugins: [],
};
