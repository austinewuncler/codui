import type { PropsWithChildren } from 'react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

const StoreProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
