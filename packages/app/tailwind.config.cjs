/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  theme: {
    fontFamily: { cursive: ['Dr Sugiyama', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
};
