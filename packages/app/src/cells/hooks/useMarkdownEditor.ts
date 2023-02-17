import { useContext } from 'react';

import { markdownEditorContext } from '../contexts';
import type { MarkdownEditorContext } from '../types';

const useMarkdownEditor = (): MarkdownEditorContext =>
  useContext(markdownEditorContext);

export default useMarkdownEditor;
