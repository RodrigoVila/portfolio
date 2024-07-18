/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        "saira": ["Saira", "sans-serif"],
        "lato": ["Lato", "sans-serif"],
      },
      colors: {
        black2: "#161616",
      }
    },
  },
  plugins: [],
}



