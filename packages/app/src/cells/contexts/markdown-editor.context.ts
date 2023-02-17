import { createContext } from 'react';

import type { MarkdownEditorContext } from '../types';

const markdownEditorContext = createContext<MarkdownEditorContext>({
  isEditing: false,
  enableEditing: () => {},
});

export default markdownEditorContext;
