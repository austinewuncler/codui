import { javascript } from '@codemirror/lang-javascript';
import { Compartment, type Extension } from '@codemirror/state';
import { type RefObject, useEffect, useMemo } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

import { darkTheme, lightTheme } from '../themes';
import { type OnChange } from '../types';
import { onUpdate } from '../utils';
import useCodeMirror from './useCodeMirror';

interface Props {
  ref: RefObject<HTMLDivElement>;
  isDarkMode: boolean;
  onChange: OnChange;
  value: string;
}

const useCodeEditor = ({ ref, isDarkMode, onChange, value }: Props): void => {
  const themeConf = useMemo(() => new Compartment(), []);
  const extensions: Extension[] = [
    javascript({ jsx: true }),
    themeConf.of(isDarkMode ? darkTheme : lightTheme),
    onUpdate(onChange),
  ];
  const view = useCodeMirror(ref, extensions);

  useEffect(() => {
    if (view != null) {
      const editorValue = view.state.sliceDoc();

      if (value !== editorValue)
        view.dispatch({ changes: { from: 0, insert: value } });
    }
  }, [value, view]);

  useUpdateEffect(() => {
    if (view != null)
      view.dispatch({
        effects: themeConf.reconfigure(isDarkMode ? darkTheme : lightTheme),
      });
  }, [isDarkMode]);
};

export default useCodeEditor;
