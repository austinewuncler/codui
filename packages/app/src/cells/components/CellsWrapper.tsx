import React from 'react';

import { useOnceEffect, useTypedDispatch } from '~/common/hooks';

import { onInitializeCells } from '../reducers';
import Cells from './Cells';

const CellsWrapper = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  useOnceEffect(() => {
    void dispatch(onInitializeCells(null));
  });

  return (
    <div>
      <Cells />
    </div>
  );
};

export default CellsWrapper;
