const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['__Mulish_aeca05', '__Mulish_Fallback_aeca05', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#020a19",
      },
      screens: {
        'xs': '468px', // Custom breakpoint for 468px
      },
    },
  },
  plugins: [],
};
