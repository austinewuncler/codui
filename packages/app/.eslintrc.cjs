module.exports = {
  extends: ['@codui/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json',
  },
  ignorePatterns: ['*.d.ts', '*.js'],
};
