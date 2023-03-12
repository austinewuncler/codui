import { type Extension } from '@codemirror/state';
import { EditorView } from 'codemirror';

const background = '#011627';
const cursor = '#80a4c2';
const searchMatch = '#5f7e9779';

const theme = EditorView.theme({
  '&': { color: '#d6deeb', backgroundColor: background },
  '.cm-content': { caretColor: cursor },
  '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
  '&.cm-focused .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: '#1d3b53',
  },
  '.cm-searchMatch': { backgroundColor: '#1085bb5d' },
  '.cm-searchMatch.cm-searchMatch-selected': { backgroundColor: searchMatch },
  '.cm-activeLine': { backgroundColor: '#0003' },
  '.cm-selectionMatch': { backgroundColor: searchMatch },
  '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
    backgroundColor: '#5f7e974d',
  },
  '.cm-gutters': {
    backgroundColor: background,
    color: '#4b6479',
    border: 'none',
  },
  '.cm-activeLineGutter': { backgroundColor: background, color: '#C5E4FD' },
});

const darkTheme: Extension = [theme];

export default darkTheme;
