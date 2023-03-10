import React, { type PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import store from './store';

type Props = PropsWithChildren;

const StoreProvider = ({ children }: Props): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
