module.exports = {
  env: { browser: true },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    '@codui/node',
  ],
  plugins: ['react'],
  settings: { react: { version: 'detect' } },
};
