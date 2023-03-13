import React, { useRef } from 'react';

import { useCodeEditor } from '../hooks';

const CodeEditor = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  useCodeEditor({ ref });

  return <div ref={ref} />;
};
export default CodeEditor;
