/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ REQUIRED for manual toggle
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
