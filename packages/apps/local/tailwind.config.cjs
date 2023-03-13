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
      slate: { light: '#f1f5f9', dark: '#0f172a' },
      primary: { dark: '#BF03D9', DEFAULT: '#DA46EF', light: '#EEA2F9' },
      accent: { light: '#ecfccb', dark: '#365314' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
    transitionDuration: { DEFAULT: '300ms' },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
