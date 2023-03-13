import React from 'react';

import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import InsertCell from './InsertCell';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul>
      <li>
        <InsertCell alwaysVisible={cells.length === 0} />
      </li>
      {cells.map(({ id }) => (
        <li key={id}>
          <article>{id}</article>
          <InsertCell prevCellId={id} />
        </li>
      ))}
    </ul>
  );
};

export default CellList;
