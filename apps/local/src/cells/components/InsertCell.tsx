import { type EntityId } from '@reduxjs/toolkit';
import React, { type ComponentPropsWithoutRef } from 'react';

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

  const syntaxIcons: Record<
    CellSyntax,
    (props: ComponentPropsWithoutRef<'svg'>) => JSX.Element
  > = {
    javascript: JavaScriptIcon,
  };

  return (
    <div
      className={`flex justify-center transition-opacity ${
        alwaysVisible ? 'opacity-100' : 'opacity-20 hover:opacity-100'
      }`}
    >
      {Object.keys(syntaxIcons).map((syntax) => {
        const Icon = syntaxIcons[syntax as CellSyntax];

        return (
          <button
            key={syntax}
            type="button"
            title={`insert ${syntax} cell`}
            onClick={() =>
              dispatch(
                onInsertCell({ prevCellId, syntax: syntax as CellSyntax })
              )
            }
          >
            <Icon height={36} width={36} />
          </button>
        );
      })}
    </div>
  );
};

export default InsertCell;
