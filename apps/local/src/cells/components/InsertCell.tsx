import { type EntityId } from '@reduxjs/toolkit';
import React from 'react';

import { JavaScriptIcon } from '~/common/components';
import { useTypedDispatch } from '~/common/providers';

import { type CellSyntax, onInsertCell } from '../reducer';

interface Props {
  prevCellId?: EntityId;
  alwaysVisible?: boolean;
}

const InsertCell = ({
  prevCellId,
  alwaysVisible = false,
}: Props): JSX.Element => {
  const dispatch = useTypedDispatch();

  const syntaxIcons: Record<CellSyntax, JSX.Element> = {
    javascript: <JavaScriptIcon height={36} width={36} />,
  };

  return (
    <div
      className={`flex justify-center transition-opacity ${
        alwaysVisible ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
    >
      {(Object.keys(syntaxIcons) as Array<keyof typeof syntaxIcons>).map(
        (syntax) => (
          <button
            key={syntax}
            type="button"
            title={`insert ${syntax} cell`}
            onClick={() => dispatch(onInsertCell({ prevCellId, syntax }))}
          >
            {syntaxIcons[syntax]}
          </button>
        )
      )}
    </div>
  );
};

export default InsertCell;
