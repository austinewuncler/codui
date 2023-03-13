import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { JSIcon } from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { onInsertCell } from '../reducer';

interface Props {
  prevCellId?: EntityId;
  alwaysVisible?: boolean;
}

const InsertCell = ({
  prevCellId,
  alwaysVisible = false,
}: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <div
      className={`flex justify-center transition-opacity ${
        alwaysVisible ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
    >
      <button
        type="button"
        title={`insert javascript cell${
          prevCellId != null ? ` after ${prevCellId}` : ''
        }`}
        className="drop-shadow"
        onClick={() =>
          dispatch(onInsertCell({ language: 'javascript', prevCellId }))
        }
      >
        <JSIcon width={36} height={36} />
      </button>
    </div>
  );
};

export default InsertCell;
