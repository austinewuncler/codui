import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  BoltIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import type { EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { useTypedDispatch } from '~/common/hooks';

import { onDeleteCell, onMoveCell, onUpdateCellContent } from '../reducers';
import type { CellAction } from '../types';

interface Props {
  cellId: EntityId;
  action: CellAction;
}

const CellActionButton = ({ cellId, action }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      className="grid h-10 w-10 place-content-center text-white transition-colors hover:text-primary"
      onClick={() => {
        if (action === 'formatCellContent')
          dispatch(onUpdateCellContent({ cellId }));
        else if (action === 'moveCellUp')
          dispatch(onMoveCell({ cellId, direction: 'up' }));
        else if (action === 'moveCellDown')
          dispatch(onMoveCell({ cellId, direction: 'down' }));
        else if (action === 'deleteCell') dispatch(onDeleteCell(cellId));
      }}
    >
      {action === 'formatCellContent' ? (
        <BoltIcon className="h-6 w-6" />
      ) : action === 'moveCellUp' ? (
        <ArrowUpCircleIcon className="h-6 w-6" />
      ) : action === 'moveCellDown' ? (
        <ArrowDownCircleIcon className="h-6 w-6" />
      ) : action === 'deleteCell' ? (
        <TrashIcon className="h-6 w-6" />
      ) : null}
    </button>
  );
};

export default CellActionButton;
