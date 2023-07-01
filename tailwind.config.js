/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      text: "#8C8F90",
      accent: "#8B3DFF",
      contrast: "#0E0E0E",
      stroke: "#1C1C1C",
    },
    container: {
      padding: "1.5rem",
    },
    extend: {
      objectPosition: {
        "center-top": "-28px -5px",
      },
      borderRadius: {
        btn: "3.125rem",
      },
    },
  },
  plugins: [],
};
