/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      white: '#fff',
      slate: { light: '#f1f5f9' },
      primary: { DEFAULT: '#FF50FF', light: '#FFB2FF' },
    },
    fontFamily: { cursive: ['Rancho', 'cursive'] },
  },
};
