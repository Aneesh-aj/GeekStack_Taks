/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        instrumentSerif: ['"Instrument Serif"', 'serif'], // Add quotes around the multi-word font family name
        shrikhand: ['Shrikhand', 'cursive'],
        youngSerif: ['"Young Serif"', 'serif'], // Add quotes here as well
        clarkson: ['Clarkson', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        bitter: ['Bitter', 'serif'], // Add Bitter here as it's used
        newsreader: ['Newsreader', 'serif'], // Add Newsreader here as well
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
],
};

