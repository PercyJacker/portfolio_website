/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      textStrokeColor: {
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textStrokeUtilities = Object.entries(theme("textStrokeWidth")).flatMap(([key, value]) => {
        return Object.entries(theme("textStrokeColor")).map(([colorName, colorValue]) => ({
          [`.text-stroke-${key}-${colorName}`]: {
            "-webkit-text-stroke-width": value,
            "-webkit-text-stroke-color": colorValue,
          },
        }));
      });

      const mergedUtilities = Object.assign({}, ...textStrokeUtilities);

      addUtilities(mergedUtilities, ["responsive", "hover"]);
    },
  ],
};
