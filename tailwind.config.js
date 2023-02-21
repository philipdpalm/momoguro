/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        'momo-green': '#162a33',
        'momo-light-green': '#7fe3b0',
        'momo-yellow': '#ede16d',
        'momo-purple': '#c367eb',
      }
    },
  },
  plugins: [],
}
