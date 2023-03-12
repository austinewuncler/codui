import { javascript } from '@codemirror/lang-javascript';
import { type Extension } from '@codemirror/state';
import { type RefObject } from 'react';

import { darkTheme, lightTheme } from '../themes';
import { type Language, type Theme } from '../types';
import useCodeMirror from './useCodeMirror';

interface Props {
  ref: RefObject<HTMLDivElement>;
  language: Language;
  theme?: Theme;
}

const useCodeEditor = ({ language, ref, theme = 'light' }: Props): void => {
  const extensions: Extension[] = [];

  if (language === 'javascript') extensions.push(javascript({ jsx: true }));

  if (theme === 'light') extensions.push(lightTheme);
  else extensions.push(darkTheme);

  useCodeMirror(ref, extensions);
};

export default useCodeEditor;
