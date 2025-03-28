/** @type {import('tailwindcss').Config} */

const {
  black,
  white,
  gray,
  emerald,
  indigo,
  yellow,
  red,
  slate,
  zinc,
  neutral,
  stone,
  orange,
  amber,
  lime,
  green,
  teal,
  cyan,
  sky,
  blue,
  primary,
  purple,
  fuchsia,
  pink,
  rose,
  violet,
} = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./node_modules/antd/**/*.css",
  ],

  safelist: {
    standard: ["html", "body", /^ant-/], // Safelist Ant Design classes
  },

  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "serif"], // Added Plus Jakarta Sans
      lexend: ["Lexend", "serif"], // Added Lexend
    },
    colors: {
      transparent: "transparent",
      current: "#101828",
      black: black,
      white: white,
      gray: gray,
      emerald: emerald,
      indigo: indigo,
      yellow: yellow,
      red: red,
      slate: slate,
      zinc: zinc,
      neutral: neutral,
      stone: stone,
      orange: orange,
      amber: amber,
      lime: lime,
      green: green,
      teal: teal,
      cyan: cyan,
      sky: sky,
      blue: blue,
      primary: primary,
      purple: purple,
      fuchsia: fuchsia,
      pink: pink,
      rose: rose,
      violet: violet,
      gray: "#717171",
      "light-gray": "#f2f2f2",
      primary: "#7F56D9",
      ghost: "#9A9AA9",
      cloud: "#fafafb",
      lavender: "#E3CEFA",
      vizard: "#E9E8FF",
      cyan: "#D0EFFF",
      turquoise: "#D1F5F9",
      "light-orange": "#FDEEEE",
      "purple-main": "#7D23E0",
      "grey-border": "#8D8D8D",
      "desc-gray": "#414141",
      deep_red: "#FF3A3A",
      light_red: "#FF5070",
      light_yellow: "#FFD130",
      light_green: "#1CC24A",
      deep_green: "#009E2B",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 2px 40px rgba(125, 35, 224, 0.15)",
        "4xl": "0px 0px 10px rgba(0, 0, 0, 0.15)",
        "5xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "left-purple": "rgba(125, 35, 224, 0.4) -3px 0px ",
      },
    },
  },
  backgroundImage: {
    bubbles: "url('./src/assets/aboutus/new Vectors/circles.png')",
  },
  variants: {
    extend: {},
  },

  plugins: [],
  important: true,
  corePlugins: {
    preflight: true,
  },
};
