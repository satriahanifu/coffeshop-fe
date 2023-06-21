/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        slogan: ["Shadows Into Light", "cursive"],
        main: ["Just Another Hand", "cursive"],
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "300px",
        "3/4": "75%",
      },
    },
    screens: { lg: "1024px" },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
