module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: [`"Montserrat"`, "sans-serif"],
      },
      colors: {
        navy: "#1B528F",
        grey: "#7C7C7C",
        lightGrey: "#F2F5FA",
      },
    },
  },
  plugins: [],
};
