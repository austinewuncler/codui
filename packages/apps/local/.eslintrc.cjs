module.exports = {
  extends: ['@codui/react', '@codui/testing-react'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json',
  },
  ignorePatterns: ['*.d.ts', '*.cjs'],
};
