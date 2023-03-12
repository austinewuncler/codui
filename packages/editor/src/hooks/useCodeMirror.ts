import { indentWithTab } from '@codemirror/commands';
import { EditorState, type Extension } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { basicSetup, EditorView } from 'codemirror';
import { type RefObject } from 'react';
import { useEffectOnce } from 'usehooks-ts';

import { baseTheme } from '../themes';

const useCodeMirror = (
  ref: RefObject<HTMLDivElement>,
  extensions: Extension[] = []
): void => {
  useEffectOnce(() => {
    const state = EditorState.create({
      extensions: [
        baseTheme,
        basicSetup,
        keymap.of([indentWithTab]),
        EditorView.lineWrapping,
        ...extensions,
      ],
    });
    let view: EditorView;

    if (ref.current != null)
      view = new EditorView({
        state,
        parent: ref.current,
      });

    return () => {
      view.destroy();
    };
  });
};

export default useCodeMirror;
