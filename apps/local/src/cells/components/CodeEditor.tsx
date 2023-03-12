import { useCodeEditor } from '@codui/editor';
import React, { useRef } from 'react';

import { type CellSyntax } from '../reducer';

interface Props {
  syntax: CellSyntax;
}

const CodeEditor = ({ syntax }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useCodeEditor({ ref, language: syntax });

  return <div ref={ref} className="h-full" />;
};

export default CodeEditor;
