import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';

export const formatCode = (code: string): string =>
  prettier
    .format(code, {
      singleQuote: true,
      parser: 'babel',
      plugins: [babelParser],
    })
    .trim();
