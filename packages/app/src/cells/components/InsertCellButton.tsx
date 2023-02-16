import { CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import type { EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { useTypedDispatch } from '~/common/hooks';

import { onInsertCell } from '../cells.reducer';
import type { CellType } from '../cells.type';

interface Props {
  prevCellId: EntityId | null;
  type: CellType;
}

const InsertCellButton = ({ prevCellId, type }: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      className={`grid h-10 w-10 place-content-center rounded-full text-white transition-colors dark:text-black ${
        type === 'code' ? 'bg-secondary' : 'bg-accent'
      }`}
      onClick={() => dispatch(onInsertCell({ prevCellId, type }))}
    >
      {type === 'code' ? (
        <CodeBracketIcon className="h-6 w-6" />
      ) : (
        <DocumentTextIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default InsertCellButton;
