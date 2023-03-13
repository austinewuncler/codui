import { EditorView } from 'codemirror';

const darkTheme = EditorView.theme(
  {
    '&': {
      color: '#c8c8c8',
      background: '#000',
    },
  },
  { dark: true }
);

export default darkTheme;
