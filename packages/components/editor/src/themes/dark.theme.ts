import { EditorView } from 'codemirror';

const background = '#000';
const cursor = '#80a4c2';

const darkTheme = EditorView.theme(
  {
    '&': { color: '#c8c8c8', background },
    '.cm-content': { caretColor: cursor },
    '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground, ::selection': {
      backgroundColor: '#5f7e9779',
    },
    '.cm-gutters': {
      backgroundColor: background,
      color: '#4b6479',
      border: 'none',
    },
  },
  { dark: true }
);

export default darkTheme;
