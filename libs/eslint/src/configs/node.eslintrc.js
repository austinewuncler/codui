module.exports = {
  env: { es2021: true, node: true },
  extends: ['standard-with-typescript', 'prettier'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
