import { javascript } from '@codemirror/lang-javascript';
import { type Extension } from '@codemirror/state';
import { type RefObject } from 'react';

import { darkTheme, lightTheme } from '../themes';
import { type Language } from '../types';
import useCodeMirror from './useCodeMirror';

interface Props {
  ref: RefObject<HTMLDivElement>;
  language: Language;
  isDarkMode?: boolean;
}

const useCodeEditor = ({ ref, language, isDarkMode = false }: Props): void => {
  const extensions: Extension[] = [isDarkMode ? darkTheme : lightTheme];

  if (language === 'javascript') extensions.push(javascript({ jsx: true }));

  useCodeMirror(ref, extensions);
};

export default useCodeEditor;
