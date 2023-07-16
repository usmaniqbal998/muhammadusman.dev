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
      card: "#0F0F0F",
      nav: "rgba(26, 26, 26, 0.60)",
      navStroke: "#2D2D2D",
    },
    container: {
      padding: "1.5rem",
    },
    extend: {
      screens: {
        sm: "500px",
      },
      height: {
        93: "23.25rem",
        53: "13.25rem",
      },
      width: {
        102: "25.5rem",
      },
      objectPosition: {
        "center-top": "-28px -5px",
      },
      backgroundImage: {
        pattern:
          "linear-gradient(222.95deg, #8B3DFF -4.55%, rgba(139, 61, 255, 0) 82.35%);",
        og: "background: linear-gradient(137deg, #8C1F9D 0%, rgba(59, 56, 234, 0.52) 66.41%, rgba(178, 47, 210, 0.50) 100%)",
      },
      borderRadius: {
        btn: "3.125rem",
        input: "2.062rem",
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
