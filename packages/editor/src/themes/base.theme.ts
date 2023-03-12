import { EditorView } from 'codemirror';

const baseTheme = EditorView.baseTheme({
  '&': { height: '100%' },
  '&.cm-focused': { outline: 'none' },
  '.cm-scroller': { fontFamily: 'JetBrains Mono, Consolas, monospace' },
});

export default baseTheme;
