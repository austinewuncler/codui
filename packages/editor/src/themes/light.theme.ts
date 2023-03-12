import { type Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';

const background = '#FBFBFB';
const foreground = '#403f53';
const cursor = '#90A7B2';
const searchMatch = '#93A1A16c';

const theme = EditorView.theme({
  '&': { color: foreground, backgroundColor: background },
  '.cm-content': { caretColor: cursor },
  '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
  '&.cm-focused .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#E0E0E0',
  },
  '.cm-searchMatch': { backgroundColor: searchMatch },
  '.cm-searchMatch.cm-searchMatch-selected': { backgroundColor: searchMatch },
  '.cm-activeLine': { backgroundColor: '#F0F0F0' },
  '.cm-selectionMatch': { backgroundColor: '#339cec33' },
  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: '#d3e8f8',
    border: '1px solid #2AA298',
  },
  '.cm-gutters': { backgroundColor: background, color: cursor, border: 'none' },
  '.cm-activeLineGutter': { backgroundColor: background, color: foreground },
});

const lightTheme: Extension = [theme];

export default lightTheme;
