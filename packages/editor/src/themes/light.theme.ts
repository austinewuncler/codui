import { type Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';

const theme = EditorView.theme({
  '&': { color: '#403f53', backgroundColor: '#FBFBFB' },
});

const lightTheme: Extension = [theme];

export default lightTheme;
