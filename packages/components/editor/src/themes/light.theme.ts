import { EditorView } from 'codemirror';

const background = '#fff';
const cursor = '#90A7B2';

const lightTheme = EditorView.theme({
  '&': { color: '#403f53', backgroundColor: background },
  '.cm-content': { caretColor: cursor },
  '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#339cec33',
  },
  '.cm-gutters': {
    backgroundColor: background,
    color: cursor,
    border: 'none',
  },
});

export default lightTheme;
