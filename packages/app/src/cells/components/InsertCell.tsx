import { PlusSmallIcon } from '@heroicons/react/24/outline';
import type { EntityId } from '@reduxjs/toolkit';
import React from 'react';

import InsertCellButton from './InsertCellButton';

interface Props {
  prevCellId: EntityId | null;
  alwaysVisible?: boolean;
}

const InsertCell = ({
  prevCellId,
  alwaysVisible = false,
}: Props): JSX.Element => (
  <div
    className={`flex items-center justify-center gap-2 transition-opacity ${
      alwaysVisible ? 'opacity-100' : 'opacity-40 hover:opacity-100'
    }`}
  >
    <InsertCellButton prevCellId={prevCellId} type="code" />
    <PlusSmallIcon className="h-6 w-6" />
    <InsertCellButton prevCellId={prevCellId} type="markdown" />
  </div>
);

export default InsertCell;
