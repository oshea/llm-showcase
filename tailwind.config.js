/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.{html,js,json}"],
  theme: {
    extend: {
      colors: {
        cardBg: "#fffefc",
        head: {
          100: "#27272a",
          30: "#c8c8d2"
        }
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};
