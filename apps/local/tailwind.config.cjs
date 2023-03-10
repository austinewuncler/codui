/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: { dark: '#DD006C', DEFAULT: '#EC4898', light: '#F8A0CB' },
    },
    transitionDuration: { DEFAULT: '300ms' },
  },
};
