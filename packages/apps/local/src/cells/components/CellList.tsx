import React from 'react';

import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <div>
      {cells.map(({ id }) => (
        <article key={id}></article>
      ))}
    </div>
  );
};

export default CellList;
