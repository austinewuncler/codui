import { EditorView } from 'codemirror';

const background = '#fff';
const cursor = '#909090';

const lightTheme = EditorView.theme({
  '&': { color: '#3f3f3f', backgroundColor: background },
  '.cm-content': { caretColor: cursor },
  '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
  '&.cm-focused .cm-selectionBackground, ::selection': {
    backgroundColor: '#33333333',
  },
  '.cm-gutters': {
    backgroundColor: background,
    color: cursor,
    border: 'none',
  },
});

export default lightTheme;
