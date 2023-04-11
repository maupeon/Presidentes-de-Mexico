/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      mexicoGreen: "rgb(35,87,57)",
      mexicoRed: "rgb(172,0,37)",
    },
    backgroundImage: {
      tumble:
        "url('https://vignette4.wikia.nocookie.net/imaspeedrunner/images/3/3a/Orphan_tumbleweed.png/revision/latest?cb=20131006213006') no-repeat",
    },
    keyframes: {
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
