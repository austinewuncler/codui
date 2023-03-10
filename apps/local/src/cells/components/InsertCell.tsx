import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { JavaScriptIcon } from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { type CellSyntax, onInsertCell } from '../reducer';

const syntaxSet = new Set<CellSyntax>(['javascript']);

interface Props {
  prevCellId?: EntityId;
  alwaysVisible?: boolean;
}

const InsertCell = ({
  prevCellId,
  alwaysVisible = false,
}: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <div
      className={`flex justify-center transition-opacity ${
        alwaysVisible ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
    >
      {[...syntaxSet].map((syntax) => (
        <button
          key={syntax}
          type="button"
          title={`insert ${syntax} cell`}
          onClick={() => dispatch(onInsertCell({ prevCellId, syntax }))}
        >
          {syntax === 'javascript' ? (
            <JavaScriptIcon height={36} width={36} />
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default InsertCell;
