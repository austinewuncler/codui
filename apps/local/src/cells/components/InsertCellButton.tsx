import React, { type PropsWithChildren } from 'react';

import { type CellSyntax } from '../reducer';

type Props = PropsWithChildren<{
  syntax: CellSyntax;
  onClick: (syntax: CellSyntax) => void;
}>;

const InsertCellButton = ({
  children,
  syntax,
  onClick,
}: Props): JSX.Element => {
  return (
    <button
      type="button"
      title={`insert ${syntax} cell`}
      className="shadow-md transition-shadow hover:shadow-lg"
      onClick={() => {
        onClick(syntax);
      }}
    >
      {children}
    </button>
  );
};

export default InsertCellButton;
