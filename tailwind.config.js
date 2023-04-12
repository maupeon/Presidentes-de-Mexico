/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ...colors,
        mexicoGreen: "rgb(35,87,57)",
        mexicoRed: "rgb(172,0,37)",
      },
      backgroundImage: {
        tumble:
          "url('https://vignette4.wikia.nocookie.net/imaspeedrunner/images/3/3a/Orphan_tumbleweed.png/revision/latest?cb=20131006213006') no-repeat",
      },
      keyframes: {
        tumbleweed: {
          "0%": {
            transform: "translate(0%, 45px) rotate(0deg)",
          },
          "9%": {
            transform: "translate(15%, 5px) rotate(130deg)",
          },
          "17%": {
            transform: "translate(30%, 45px) rotate(250deg)",
          },
          "26%": {
            transform: "translate(45%, 15px) rotate(360deg)",
          },
          "34%": {
            transform: "translate(60%, 45px) rotate(490deg)",
          },
          "42%": {
            transform: "translate(80%, 30px) rotate(600deg)",
          },
          "50%": {
            transform: "translate(100%, 45px) rotate(720deg)",
          },
          "100%": {
            transform: "translate(100%, 45px) rotate(720deg)",
          },
        },
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        tumbleweed: "tumbleweed linear 3s infinite",
        // animation-iteration-count: infinite;
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
