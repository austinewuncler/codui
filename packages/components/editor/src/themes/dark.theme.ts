import { EditorView } from 'codemirror';

const foreground = '#c8c8c8';
const background = '#000';
const cursor = '#ff50ff';
const activeLine = '#9696961a';
const searchMatch = '#969696';
const tooltipHighlight = '#282828';

const darkTheme = EditorView.theme(
  {
    '&': { color: foreground, backgroundColor: background },
    '.cm-content': { caretColor: cursor },
    '.cm-cursor, .cm-dropCursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection':
      { backgroundColor: activeLine },
    '.cm-searchMatch': { backgroundColor: '#96969633' },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: activeLine,
      outline: `1px solid ${searchMatch}`,
    },
    '.cm-activeLine': { backgroundColor: activeLine },
    '.cm-selectionMatch': { backgroundColor: '#96969659' },
    '&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket': {
      background: 'none',
      outline: '1px solid #787878',
    },
    '.cm-gutters': {
      backgroundColor: background,
      color: '#3c3c3c',
      border: 'none',
    },
    '.cm-activeLineGutter': { backgroundColor: background, color: searchMatch },
    '.cm-tooltip': {
      border: `1px solid ${tooltipHighlight}`,
      backgroundColor: '#141414',
      color: searchMatch,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: tooltipHighlight,
        color: foreground,
      },
    },
  },
  { dark: true }
);

export default darkTheme;
