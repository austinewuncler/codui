import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import setupStore from './store';

const store = setupStore();

type Props = PropsWithChildren;

const StoreProvider = ({ children }: Props): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
