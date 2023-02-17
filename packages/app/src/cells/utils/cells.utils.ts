import prettier from 'prettier';
import babelParser from 'prettier/parser-babel';
import markdownParser from 'prettier/parser-markdown';

export const formatCode = (code: string): string =>
  prettier
    .format(code, {
      singleQuote: true,
      parser: 'babel',
      plugins: [babelParser],
    })
    .trim();

export const formatMarkdown = (markdown: string): string =>
  prettier
    .format(markdown, { parser: 'markdown', plugins: [markdownParser] })
    .trim();
