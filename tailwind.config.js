/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        c1: "#151515",
        c2: "#EEEEEE",
      },
      fontFamily: {
        EncodeSansSC: ["Encode Sans SC"],
        Merienda: ["Merienda"],
        Roboto: ["Roboto"],
        SpaceGrotesk: ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
