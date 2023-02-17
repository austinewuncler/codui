import type { EntityId } from '@reduxjs/toolkit';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Resizable } from 're-resizable';
import React, { useCallback } from 'react';

import { useTypedDispatch } from '~/common/hooks';

import { onUpdateCellContent } from '../reducers';

interface Props {
  cellId: EntityId;
  content: string;
}

const MarkdownCell = ({ cellId, content }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  const handleChange = useCallback(
    (value: string) =>
      dispatch(onUpdateCellContent({ cellId, content: value })),
    [cellId, dispatch]
  );

  return (
    <Resizable defaultSize={{ width: 'auto', height: 'auto' }} minHeight={182}>
      <MarkdownEditor
        className="h-full"
        height="100%"
        minHeight="153px"
        visible
        value={content}
        onChange={handleChange}
        enableScroll
      />
    </Resizable>
  );
};

export default MarkdownCell;
