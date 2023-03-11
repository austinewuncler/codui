/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      rose: '#f43f5e',
      fuchsia: '#d946ef',
      violet: '#8b5cf6',
      neutral: { dark: '#171717', light: '#f5f5f5' },
      primary: { dark: '#DD006C', DEFAULT: '#EC4898', light: '#F8A0CB' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
