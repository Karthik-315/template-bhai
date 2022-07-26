const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "full-width": "1920px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#0d0d0d",
        secondary: "#fff",
        popping: colors.orange[500],
      },

      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
};
