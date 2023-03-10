module.exports = {
  extends: ['@codui/testing', '@codui/react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json',
  },
  ignorePatterns: ['*.d.ts'],
};
