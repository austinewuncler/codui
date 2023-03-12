import { useCodeEditor } from '@codui/editor';
import React, { useRef } from 'react';

import { useTheme } from '~/common/providers';

import { type CellSyntax } from '../reducer';

interface Props {
  syntax: CellSyntax;
}

const CodeEditor = ({ syntax }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  useCodeEditor({
    ref,
    language: syntax,
    theme: isDarkMode ? 'dark' : 'light',
  });

  return <div ref={ref} className="h-full" />;
};

export default CodeEditor;
