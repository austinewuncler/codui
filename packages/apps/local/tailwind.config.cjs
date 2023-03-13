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
      amber: '',
      slate: {
        lightest: '#f1f5f9',
        light: '#cbd5e1',
        dark: '#1e293b',
        darkest: '#0f172a',
      },
      primary: { dark: '#026C80', DEFAULT: '#06b6d4', light: '#59C9DE' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
