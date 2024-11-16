/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "light-black": "var(--light-black)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        "lighter-blue": "var(--lighter-blue)",
        "light-grey": "var(--light-grey)",
        "dark-grey": "var(--dark-grey)",
        "light-red": "var(--light-red)",
      },
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
