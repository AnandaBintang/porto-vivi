/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bf5d93",
        "primary-light": "rgba(191,93,147,0.3)",
        cream: "#fefefa",
        "pink-soft": "#f7a1a9",
        "pink-muted": "#e3b6b6",
        "orange-warm": "#ecb360",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
