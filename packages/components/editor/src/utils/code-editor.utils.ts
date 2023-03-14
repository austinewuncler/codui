import { type Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';

import { type OnChange } from '../types';

export const onUpdate = (onChange: OnChange): Extension =>
  EditorView.updateListener.of((viewUpdate) => {
    if (viewUpdate.docChanged) onChange(viewUpdate.state.sliceDoc());
  });
