/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#a69ce1",
          900: "#6a5acd",
          800: "#796bd2",
          700: "#887bd7",
          600: "#978cdc",
          500: "#a69ce1",
          400: "#b5ade6",
          300: "#c3bdeb",
          200: "#d2cef0",
          100: "#e1def5",
          50: "#f0effa",
        },
        dark: {
          DEFAULT: "#191919",
          900: "#191919",
          800: "#333333",
          700: "#4d4d4d",
          600: "#666666",
          500: "#808080",
        },
        accent: {
          DEFAULT: "#adaab3",
          500: "#908c98",
          400: "#9e9ba5",
          300: "#adaab3",
          200: "	#bbb9c0",
          100: "	#cac8ce",
        },
      },
      keyframes: {
        swivel: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%) rotateX(-180deg)",
          },
          "50%": {
            opacity: "50%",
            transform: "translateX(-50%) rotateX(-90deg)",
          },
          "100%": { opacity: "100%", transform: "translateX(0) rotateX(0)" },
        },
        zoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        zoom: "zoom 0.25s ease-in-out",
        "swivel-icon": "swivel 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
