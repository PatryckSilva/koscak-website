const svgToDataUri = require("mini-svg-data-uri");
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
        main_blue: {
          "50": "#ebf9ff",
          "100": "#d3f0ff",
          "200": "#b0e5ff",
          "300": "#7ad8ff",
          "400": "#3cbfff",
          "500": "#109dff",
          "600": "#0079ff",
          "700": "#0060ff",
          "800": "#004ed1",
          "900": "#0546a3",
          "950": "#082759",
        },

        main_yellow: {
          "50": "#fffbeb",
          "100": "#fff3c6",
          "200": "#ffe488",
          "300": "#ffd14a",
          "400": "#ffc02f",
          "500": "#f99907",
          "600": "#dd7202",
          "700": "#b74f06",
          "800": "#943c0c",
          "900": "#7a310d",
          "950": "#461802",
        },

        main_purple: {
          "50": "#f4f2fd",
          "100": "#e8e3fb",
          "200": "#c8c1f6",
          "300": "#978bee",
          "400": "#5d4de3",
          "500": "#3926d1",
          "600": "#2d18b1",
          "700": "#271490",
          "800": "#231577",
          "900": "#241763",
          "950": "#05030d",
        },
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5) ",
          },
          // rotate(90deg)
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1) ",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
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
