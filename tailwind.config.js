/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#011627",
      secondary: "#011221",
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      slate: colors.slate,
    },
  },
  plugins: [require("flowbite/plugin")],
};
