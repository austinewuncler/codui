import React from 'react';

import { onRemoveAllCells } from '~/cells/reducer';

import { useTypedDispatch } from '../providers';

const Logo = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      type="button"
      className="font-cursive text-5xl text-black transition-colors dark:text-white"
      onClick={() => dispatch(onRemoveAllCells())}
    >
      &lt;<span className="text-primary">&lt;&gt;</span>&lt;&#47;ui
    </button>
  );
};

export default Logo;
