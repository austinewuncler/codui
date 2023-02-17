import type { EntityId } from '@reduxjs/toolkit';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Resizable } from 're-resizable';
import React, { useCallback, useRef } from 'react';
import { useClickAnyWhere } from 'usehooks-ts';

import { useTypedDispatch } from '~/common/hooks';

import { useMarkdownEditor } from '../hooks';
import { onUpdateCellContent } from '../reducers';

interface Props {
  cellId: EntityId;
  content: string;
}

const MarkdownCell = ({ cellId, content }: Props): JSX.Element => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { isEditing, enableEditing } = useMarkdownEditor();
  const dispatch = useTypedDispatch();
  const handleChange = useCallback(
    (value: string) =>
      dispatch(onUpdateCellContent({ cellId, content: value })),
    [cellId, dispatch]
  );

  useClickAnyWhere(({ target }) => {
    if (previewRef.current?.contains(target as Node) === true) enableEditing();
  });

  return isEditing ? (
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
  ) : (
    <div ref={previewRef}>
      <MarkdownEditor.Markdown
        className="p-4"
        source={content.trim().length > 0 ? content : 'Click here to edit'}
      />
    </div>
  );
};

export default MarkdownCell;
