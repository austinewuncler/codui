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
      slate: { dark: '#0f172a', light: '#f1f5f9' },
      accent: '#FFB804',
      secondary: '#FF3404',
      red: '#f43f5e',
    },
    fontFamily: {
      cursive: ['Dr Sugiyama', 'cursive'],
      mono: ['Fira Code', 'monospace'],
      sans: ['Open Sans', 'sans-serif'],
    },
    transitionDuration: { DEFAULT: '300ms' },
  },
};
