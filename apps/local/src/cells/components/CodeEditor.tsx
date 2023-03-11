import { useCodeEditor } from '@codui/editor';
import React from 'react';

const CodeEditor = (): JSX.Element => {
  useCodeEditor();

  return <div className="h-full" />;
};

export default CodeEditor;
