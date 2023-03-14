import { CodeEditor } from '@codui/editor';
import { type EntityId } from '@reduxjs/toolkit';
import { Resizable } from 're-resizable';
import React, { useCallback } from 'react';

import { useTheme, useTypedDispatch } from '~/common/providers';

import { onUpdateCellContent } from '../reducer';

interface Props {
  cellId: EntityId;
  code: string;
}

const JSCell = ({ cellId, code }: Props): JSX.Element => {
  const { isDarkMode } = useTheme();
  const dispatch = useTypedDispatch();

  const onChange = useCallback(
    (value: string) =>
      dispatch(onUpdateCellContent({ cellId, content: value })),
    [cellId, dispatch]
  );

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
        <CodeEditor isDarkMode={isDarkMode} onChange={onChange} value={code} />
      </Resizable>
      <div className="flex-auto"></div>
    </Resizable>
  );
};

export default JSCell;
