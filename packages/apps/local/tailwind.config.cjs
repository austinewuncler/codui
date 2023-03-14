/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      emerald: '#10b981',
      rose: '#f43f5e',
      orange: '#f97316',
      neutral: {
        darkest: '#171717',
        dark: '#262626',
        light: '#e5e5e5',
        lightest: '#f5f5f5',
      },
      primary: { dark: '#916D00', DEFAULT: '#EAB308', light: '#FFD964' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
