import { javascript } from '@codemirror/lang-javascript';
import { EditorState } from '@codemirror/state';
import { basicSetup, EditorView } from 'codemirror';
import { type RefObject } from 'react';
import { useEffectOnce } from 'usehooks-ts';

interface Props {
  ref: RefObject<HTMLDivElement>;
}

const useCodeEditor = ({ ref }: Props): void => {
  useEffectOnce(() => {
    let view: EditorView;
    if (ref.current != null) {
      view = new EditorView({
        state: EditorState.create({
          extensions: [basicSetup, javascript({ jsx: true })],
        }),
        parent: ref.current,
      });
    }

    return () => {
      view.destroy();
    };
  });
};

export default useCodeEditor;
