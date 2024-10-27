/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: 
    {textStrokeWidth: {
      '1': '1px',
      '2': '2px',
      '3': '3px',
      // Add more as needed
    },
    textStrokeColor: {
      'white': '#FFFFFF',
      'black': '#000000',
      // Add more as needed
    },
  },
},
variants: {
  extend: {
    textStrokeWidth: ['hover', 'focus'],
  },
},
plugins: [
  function ({ addUtilities, theme }) {
    const newUtilities = {
      '.text-stroke': {
        '-webkit-text-stroke-width': theme('textStrokeWidth.1'),
        '-webkit-text-stroke-color': theme('textStrokeColor.black'),
      },
      '.text-stroke-2': {
        '-webkit-text-stroke-width': theme('textStrokeWidth.2'),
        '-webkit-text-stroke-color': theme('textStrokeColor.white'),
      },
      // Add more as needed
    }

    addUtilities(newUtilities, ['responsive', 'hover']);
  },
],
}
 
