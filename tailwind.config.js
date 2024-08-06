/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      Bebas: ["Bebas Neue", "sans-serif"],
      Satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      LayoutPink: "#A93D9D",
      DarkGray: "#28292A",
      textGray: "#878787",
      titleGray: "#3D3D3D",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
