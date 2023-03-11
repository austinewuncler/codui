import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { setupStore } from './store';

type Props = PropsWithChildren;

const store = setupStore();

const StoreProvider = ({ children }: Props): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
