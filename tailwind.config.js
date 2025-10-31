/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "rgb(151, 17, 27) ",
        secondary: "#555",
        primaryBG: "rgb(250, 247, 245)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },
  plugins: [require("daisyui")],
};
