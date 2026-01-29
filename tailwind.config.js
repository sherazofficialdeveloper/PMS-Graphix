/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router pages
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  darkMode: "class", // Enable manual dark mode toggling
  theme: {
    extend: {},
  },
  plugins: [],
};
