import { Resizable } from 're-resizable';
import React from 'react';

import CodeEditor from './CodeEditor';

const JavaScriptCell = (): JSX.Element => {
  return (
    <Resizable
      className="flex"
      minHeight={200}
      maxHeight={600}
      enable={{ bottom: true }}
      handleStyles={{ bottom: { cursor: 'ns-resize' } }}
    >
      <Resizable
        className="border-r border-neutral-light transition-all dark:border-neutral-dark"
        defaultSize={{ width: '50%', height: 'auto' }}
        minWidth="25%"
        maxWidth="75%"
        enable={{ right: true }}
        handleStyles={{ right: { cursor: 'ew-resize' } }}
      >
        <CodeEditor syntax="javascript" />
      </Resizable>
      <div className="flex-auto" />
    </Resizable>
  );
};

export default JavaScriptCell;
