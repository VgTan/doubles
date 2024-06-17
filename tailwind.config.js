/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      bungee: ["Bungee Outline", "sans-serif"],
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
  ],
}

