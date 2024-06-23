/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "340px",
      xl: "840px",
    },
    extend: {
      colors: {
        AlmostWhite: "hsl(0, 0%, 98%)",
        MediumGray: "hsl(0, 0%, 41%)",
        AlmostBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
