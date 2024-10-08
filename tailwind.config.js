/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
        underlineOffset: {
          12: '12px', // Add custom offset of 12px
          16: '16px',
        },
        colors: {
        customOrange: '#FF3334',
        customBlue: '#0F1C40', // Add your custom color
      },
    },
  },
  plugins: [],
}

