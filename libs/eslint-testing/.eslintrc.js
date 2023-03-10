module.exports = {
  env: { es2021: true, node: true },
  extends: [
    'standard-with-typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-extended/all',
    'plugin:jest-formatting/strict',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  ignorePatterns: ['*.js'],
};
