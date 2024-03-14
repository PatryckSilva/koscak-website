const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
      colors: {
        main_blue: "#06040F",
        main_yellow: "#E2C020",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
