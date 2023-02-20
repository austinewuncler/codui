import React from 'react';

import { onDeleteAllCells } from '~/cells/reducers';

import { useTypedDispatch } from '../hooks';

const Logo = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      type="button"
      className="font-cursive text-6xl text-neutral-dark transition-colors dark:text-neutral-light"
      onClick={() => dispatch(onDeleteAllCells())}
    >
      co
      <span className="text-primary-light transition-colors dark:text-primary-dark">
        &lt;&#124;
      </span>
      ui
    </button>
  );
};

export default Logo;
