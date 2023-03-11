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

const CellHeader = ({ cellId }: Props): JSX.Element => {
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
    <header className="flex h-10 justify-end gap-2 bg-neutral-light px-4 dark:bg-neutral-dark">
      {(
        Object.entries(actionMap) as Array<
          [CellAction, typeof actionMap.deleteCell]
        >
      ).map(([actionType, { action, icon }]) => (
        <button
          key={actionType}
          type="button"
          title={actionType}
          className="grid aspect-square place-content-center"
          onClick={action}
        >
          {icon}
        </button>
      ))}
    </header>
  );
};

export default CellHeader;