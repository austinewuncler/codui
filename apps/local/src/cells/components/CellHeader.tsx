import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { TrashIcon } from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { onDeleteCell } from '../reducer';

interface Props {
  cellId: EntityId;
}

const CellHeader = ({ cellId }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <header className="flex h-10 justify-end bg-primary-light/20 px-4">
      <button
        className="grid aspect-square place-content-center"
        onClick={() => dispatch(onDeleteCell(cellId))}
      >
        <TrashIcon className="h-6 w-6 text-red" />
      </button>
    </header>
  );
};

export default CellHeader;
