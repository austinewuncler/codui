import { indentWithTab } from '@codemirror/commands';
import { EditorState, type Extension } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { basicSetup, EditorView } from 'codemirror';
import { type RefObject, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import { baseTheme } from '../themes';

const useCodeMirror = (
  ref: RefObject<HTMLDivElement>,
  extensions: Extension[] = []
): void => {
  const [view, setView] = useState<EditorView>();

  useEffectOnce(() => {
    if (ref.current != null) {
      const view = new EditorView({
        state: EditorState.create({
          extensions: [
            baseTheme,
            basicSetup,
            keymap.of([indentWithTab]),
            EditorView.lineWrapping,
            ...extensions,
          ],
        }),
        parent: ref.current,
      });
      setView(view);
    }

    return () => {
      view?.destroy();
      setView(undefined);
    };
  });
};

export default useCodeMirror;
