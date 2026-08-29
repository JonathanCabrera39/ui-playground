/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },

      colors: {
        primary: "#232136",
        secondary: {
          100: "#eb6f92",
          200: "#d65a7a",
        },
      },
    },
  },
  plugins: [],
};
