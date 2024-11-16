/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
