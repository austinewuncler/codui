import { CodeBracketIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import React from 'react';

import type { CellType } from '../types';

interface Props {
  cellType: CellType;
}

const InsertCellButton = ({ cellType }: Props): JSX.Element => (
  <button
    className={`grid h-10 w-10 place-content-center rounded-full text-white dark:text-black ${
      cellType === 'code' ? 'bg-orange-500' : 'bg-yellow-500'
    }`}
  >
    {cellType === 'code' ? (
      <CodeBracketIcon className="h-6 w-6" />
    ) : (
      <DocumentTextIcon className="h-6 w-6" />
    )}
  </button>
);

export default InsertCellButton;
