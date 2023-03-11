import React, { type PropsWithChildren, useMemo } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './store';

type Props = PropsWithChildren;

const StoreProvider = ({ children }: Props): JSX.Element => {
  const store = useMemo(() => setupStore(), []);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
