import { PlusSmallIcon } from '@heroicons/react/24/outline';
import React from 'react';

import InsertCellButton from './InsertCellButton';

const Cells = (): JSX.Element => (
  <ul>
    <li>
      <div className="flex items-center justify-center gap-2">
        <InsertCellButton cellType="code" />
        <PlusSmallIcon className="h-6 w-6" />
        <InsertCellButton cellType="markdown" />
      </div>
    </li>
  </ul>
);

export default Cells;
