import React from 'react';

import { onDeleteAllCells } from '~/cells/cells.reducer';

import { useTypedDispatch } from '../hooks';

const Logo = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      type="button"
      className="font-cursive text-6xl"
      onClick={() => dispatch(onDeleteAllCells())}
    >
      co<span className="text-primary">&lt;&#124;</span>ui
    </button>
  );
};

export default Logo;
