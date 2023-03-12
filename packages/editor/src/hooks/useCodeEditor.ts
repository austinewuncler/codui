import { javascript } from '@codemirror/lang-javascript';
import { type Extension } from '@codemirror/state';
import { type RefObject } from 'react';

import { type Language } from '../types';
import useCodeMirror from './useCodeMirror';

interface Props {
  ref: RefObject<HTMLDivElement>;
  language: Language;
}

const useCodeEditor = ({ language, ref }: Props): void => {
  const extensions: Extension[] = [];

  if (language === 'javascript') extensions.push(javascript({ jsx: true }));

  useCodeMirror(ref, extensions);
};

export default useCodeEditor;
