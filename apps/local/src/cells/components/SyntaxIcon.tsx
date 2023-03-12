import React from 'react';

import { JavaScriptIcon } from '~/common/components';

import { type CellSyntax } from '../reducer';

interface Props {
  syntax: CellSyntax;
}

const SyntaxIcon = ({ syntax }: Props): JSX.Element => {
  const syntaxIcons: Record<CellSyntax, JSX.Element> = {
    javascript: <JavaScriptIcon height={24} width={24} />,
  };

  return <div>{syntaxIcons[syntax]}</div>;
};

export default SyntaxIcon;
