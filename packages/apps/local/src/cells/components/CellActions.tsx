import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  TrashIcon,
} from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { type CellAction, onMoveCell, onRemoveCell } from '../reducer';

interface Props {
  cellId: EntityId;
}

const CellActions = ({ cellId }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();
  const cellActions: Record<
    CellAction,
    { action: VoidFunction; icon: JSX.Element }
  > = {
    moveCellUp: {
      action: () => dispatch(onMoveCell({ cellId, direction: 'up' })),
      icon: <ArrowUpCircleIcon className="h-6 w-6 text-emerald" />,
    },
    moveCellDown: {
      action: () => dispatch(onMoveCell({ cellId, direction: 'down' })),
      icon: <ArrowDownCircleIcon className="h-6 w-6 text-orange" />,
    },
    removeCell: {
      action: () => dispatch(onRemoveCell(cellId)),
      icon: <TrashIcon className="h-6 w-6 text-rose" />,
    },
  };

  return (
    <div className="flex gap-1">
      {(
        Object.entries(cellActions) as Array<
          [
            keyof typeof cellActions,
            { action: VoidFunction; icon: JSX.Element }
          ]
        >
      ).map(([actionName, { action, icon }]) => (
        <button
          type="button"
          title={`${actionName}(${cellId})`}
          key={actionName}
          className="grid h-10 w-10 place-content-center transition-transform hover:scale-110 hover:drop-shadow-md"
          onClick={action}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default CellActions;
