import { Resizable } from 're-resizable';
import React from 'react';

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
        defaultSize={{ width: '50%', height: 'auto' }}
        minWidth="25%"
        maxWidth="75%"
        enable={{ right: true }}
        handleStyles={{ right: { cursor: 'ew-resize' } }}
      >
        <div className="h-full" />
      </Resizable>
      <div className="flex-auto" />
    </Resizable>
  );
};

export default JavaScriptCell;
