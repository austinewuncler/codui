/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: { dark: '#036A96', DEFAULT: '#0EA7E9', light: '#65C4ED' },
      accent: '#FFB804',
      secondary: '#FF3404',
    },
    fontFamily: { cursive: ['Dr Sugiyama', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
};
