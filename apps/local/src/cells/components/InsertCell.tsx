import { type EntityId } from '@reduxjs/toolkit';
import React, { useCallback } from 'react';

import { JSIcon } from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { type CellSyntax, onInsertCell } from '../reducer';
import InsertCellButton from './InsertCellButton';

const syntaxTuple: [CellSyntax] = ['javascript'];

interface Props {
  prevCellId?: EntityId;
  alwaysVisible?: boolean;
}

const InsertCell = ({
  prevCellId,
  alwaysVisible = false,
}: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  const insertCell = useCallback(
    (syntax: CellSyntax) => {
      dispatch(onInsertCell({ prevCellId, syntax }));
    },
    [dispatch, prevCellId]
  );

  return (
    <div
      className={`flex justify-center transition-opacity ${
        alwaysVisible ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
    >
      {syntaxTuple.map((syntax) => (
        <InsertCellButton key={syntax} syntax={syntax} onClick={insertCell}>
          {syntax === 'javascript' ? <JSIcon /> : null}
        </InsertCellButton>
      ))}
    </div>
  );
};

export default InsertCell;
