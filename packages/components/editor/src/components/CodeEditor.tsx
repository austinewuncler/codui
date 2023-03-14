import './code-editor.styles.css';

import React, { useRef } from 'react';

import { useCodeEditor } from '../hooks';

interface Props {
  isDarkMode?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const CodeEditor = ({
  isDarkMode = false,
  onChange,
  value,
}: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useCodeEditor({ ref, isDarkMode, onChange, value });

  return <div ref={ref} style={{ height: '100%' }} />;
};
export default CodeEditor;
