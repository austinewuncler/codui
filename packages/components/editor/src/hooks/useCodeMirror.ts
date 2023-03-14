import { EditorState, type Extension } from '@codemirror/state';
import { basicSetup, EditorView } from 'codemirror';
import { type RefObject, useRef, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import { baseTheme } from '../themes';

const useCodeMirror = (
  ref: RefObject<HTMLDivElement>,
  extensions: Extension[]
): EditorView | undefined => {
  const hasSetView = useRef(false);
  const [view, setView] = useState<EditorView>();

  useEffectOnce(() => {
    if (!hasSetView.current && view === undefined && ref.current != null) {
      const currentView = new EditorView({
        state: EditorState.create({
          extensions: [basicSetup, baseTheme, ...extensions],
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

  return view;
};

export default useCodeMirror;
