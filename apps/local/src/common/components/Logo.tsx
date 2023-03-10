import React from 'react';

import { onDeleteAllCells } from '~/cells/reducer';

import { useTypedDispatch } from '../providers';

const Logo = (): JSX.Element => {
  const dispatch = useTypedDispatch();

  return (
    <button
      type="button"
      title="codui"
      className="font-cursive text-5xl"
      onClick={() => dispatch(onDeleteAllCells())}
    >
      &lt;<span className="text-primary">&lt;&gt;</span>&lt;&#47;ui
    </button>
  );
};

export default Logo;
