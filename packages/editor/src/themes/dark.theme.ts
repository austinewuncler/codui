import { type Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';

const theme = EditorView.theme(
  {
    '&': { color: '#d6deeb', backgroundColor: '#011627' },
  },
  { dark: true }
);

const darkTheme: Extension = [theme];

export default darkTheme;
