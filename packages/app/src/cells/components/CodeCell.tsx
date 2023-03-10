import { javascript } from '@codemirror/lang-javascript';
import type { EntityId } from '@reduxjs/toolkit';
import { solarizedDark, solarizedLight } from '@uiw/codemirror-theme-solarized';
import CodeEditor from '@uiw/react-codemirror';
import { Resizable } from 're-resizable';
import React, { useCallback } from 'react';

import { BundlePreview } from '~/bundler/components';
import { useDarkTheme, useTypedDispatch } from '~/common/hooks';

import { onUpdateCellContent } from '../reducers';

interface Props {
  cellId: EntityId;
  content: string;
}

const CodeCell = ({ cellId, content }: Props): JSX.Element => {
  const { isDarkTheme } = useDarkTheme();
  const dispatch = useTypedDispatch();

  const handleChange = useCallback(
    (value: string) =>
      dispatch(onUpdateCellContent({ cellId, content: value })),
    [cellId, dispatch]
  );

  return (
    <Resizable
      className="flex"
      minHeight={182}
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
        <CodeEditor
          className="h-full"
          theme={isDarkTheme ? solarizedDark : solarizedLight}
          height="100%"
          value={content}
          extensions={[javascript({ jsx: true })]}
          onChange={handleChange}
          basicSetup={{ foldGutter: false }}
        />
      </Resizable>
      <BundlePreview cellId={cellId} />
    </Resizable>
  );
};

export default CodeCell;
