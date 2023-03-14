import { CodeEditor } from '@codui/editor';
import { Resizable } from 're-resizable';
import React from 'react';

import { useTheme } from '~/common/providers';

const JSCell = (): JSX.Element => {
  const { isDarkMode } = useTheme();

  return (
    <Resizable
      className="flex"
      defaultSize={{ width: 'auto', height: 'auto' }}
      minHeight={200}
      enable={{ bottom: true }}
      handleStyles={{ bottom: { cursor: 'ns-resize' } }}
    >
      <Resizable
        className="border-r border-neutral-light dark:border-neutral-dark"
        defaultSize={{ width: '50%', height: 'auto' }}
        minWidth="25%"
        maxWidth="75%"
        enable={{ right: true }}
        handleStyles={{ right: { cursor: 'ew-resize' } }}
      >
        <CodeEditor isDarkMode={isDarkMode} />
      </Resizable>
      <div className="flex-auto"></div>
    </Resizable>
  );
};

export default JSCell;
