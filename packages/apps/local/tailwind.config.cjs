/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      slate: { light: '#f1f5f9', dark: '#0f172a' },
      primary: { dark: '#FB00FB', DEFAULT: '#FF50FF', light: '#FFB2FF' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
