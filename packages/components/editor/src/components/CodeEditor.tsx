import './code-editor.styles.css';

import React, { useRef } from 'react';

import { useCodeEditor } from '../hooks';

interface Props {
  isDarkMode?: boolean;
}

const CodeEditor = ({ isDarkMode = false }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useCodeEditor({ ref, isDarkMode });

  return <div ref={ref} style={{ height: '100%' }} />;
};
export default CodeEditor;
