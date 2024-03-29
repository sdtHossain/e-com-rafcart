/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        primary: "#FD8F5F",
      },
    },
  },
  plugins: [],
};
