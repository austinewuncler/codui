import { javascript } from '@codemirror/lang-javascript';
import { Compartment, EditorState } from '@codemirror/state';
import { basicSetup, EditorView } from 'codemirror';
import { type RefObject, useMemo, useRef, useState } from 'react';
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts';

import { baseTheme, darkTheme, lightTheme } from '../themes';

interface Props {
  ref: RefObject<HTMLDivElement>;
  isDarkMode: boolean;
}

const useCodeEditor = ({ ref, isDarkMode }: Props): void => {
  const [view, setView] = useState<EditorView>();
  const hasSetView = useRef(false);
  const themeConf = useMemo(() => new Compartment(), []);

  useEffectOnce(() => {
    if (!hasSetView.current && view === undefined && ref.current != null) {
      const currentView = new EditorView({
        state: EditorState.create({
          extensions: [
            basicSetup,
            javascript({ jsx: true }),
            baseTheme,
            themeConf.of(isDarkMode ? darkTheme : lightTheme),
          ],
        }),
        parent: ref.current,
      });
      setView(currentView);
      hasSetView.current = true;
    }

    return () => {
      view?.destroy();
    };
  });

  useUpdateEffect(() => {
    if (isDarkMode)
      view?.dispatch({ effects: themeConf.reconfigure(darkTheme) });
    else view?.dispatch({ effects: themeConf.reconfigure(lightTheme) });
  }, [isDarkMode]);
};

export default useCodeEditor;
