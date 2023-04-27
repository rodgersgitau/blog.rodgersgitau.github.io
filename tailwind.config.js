/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["content/**/*.mdx", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3F3D56",
          50: "#B6B4CA",
          100: "#A8A5C0",
          200: "#8B88AA",
          300: "#6B6892",
          400: "#555374",
          500: "#3F3D56",
          600: "#323145",
          700: "#252433",
          800: "#1A1924",
          900: "#0D0D12",
          950: "#070609",
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
      },
      animation: {
        "swivel-icon": "swivel 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
