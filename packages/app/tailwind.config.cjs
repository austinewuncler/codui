/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: { dark: '#0EA7E9', light: '#FF8904' },
      secondary: { dark: '#036996', light: '#FFB865' },
      neutral: { dark: '#0f172a', light: '#f1f5f9' },
      accent: { dark: '#FFE004', light: '#F70466' },
      red: '#ef4444',
    },
    fontFamily: {
      cursive: ['Dr Sugiyama', 'cursive'],
      mono: ['Fira Code', 'monospace'],
      sans: ['Open Sans', 'sans-serif'],
    },
    transitionDuration: { DEFAULT: '300ms' },
  },
};
