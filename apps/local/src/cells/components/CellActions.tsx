import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  TrashIcon,
} from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { type CellAction, onDeleteCell, onMoveCell } from '../reducer';

interface Props {
  cellId: EntityId;
}

const CellActions = ({ cellId }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  const actionMap: Record<
    CellAction,
    { action: VoidFunction; icon: JSX.Element }
  > = {
    moveCellUp: {
      action: () => {
        dispatch(onMoveCell({ cellId, direction: 'up' }));
      },
      icon: <ArrowUpCircleIcon className="h-6 w-6 text-violet" />,
    },
    moveCellDown: {
      action: () => {
        dispatch(onMoveCell({ cellId, direction: 'down' }));
      },
      icon: <ArrowDownCircleIcon className="h-6 w-6 text-fuchsia" />,
    },
    deleteCell: {
      action: () => {
        dispatch(onDeleteCell(cellId));
      },
      icon: <TrashIcon className="h-6 w-6 text-rose" />,
    },
  };

  return (
    <div className="flex gap-1">
      {(
        Object.entries(actionMap) as Array<
          [CellAction, typeof actionMap.deleteCell]
        >
      ).map(([actionType, { action, icon }]) => (
        <button
          key={actionType}
          type="button"
          title={`${actionType}(${cellId})`}
          className="grid aspect-square place-content-center"
          onClick={action}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default CellActions;
