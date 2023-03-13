import React from 'react';

import { removeAllCells } from '~/cells/reducer';

import { useTypedDispatch } from '../providers';

const Logo = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      type="button"
      className="font-cursive text-5xl text-black transition-colors dark:text-white"
      onClick={() => dispatch(removeAllCells())}
    >
      &lt;<span className="text-primary">&lt;&gt;</span>&lt;&#47;ui
    </button>
  );
};

export default Logo;
