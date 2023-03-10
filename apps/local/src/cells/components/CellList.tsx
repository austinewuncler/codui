import React from 'react';

import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import InsertCell from './InsertCell';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell alwaysVisible={cells.length === 0} />
      </li>
      {cells.map(({ id, syntax }) => (
        <li key={id} className="flex flex-col gap-4">
          <article>
            {id} - {syntax}
          </article>
          <InsertCell prevCellId={id} />
        </li>
      ))}
    </ul>
  );
};

export default CellList;
