import { type PreloadedState } from '@reduxjs/toolkit';
import { render, type RenderOptions } from '@testing-library/react';
import React, { type PropsWithChildren, type ReactElement } from 'react';
import { Provider } from 'react-redux';

import {
  type AppStore,
  type RootState,
  setupStore,
  ThemeProvider,
} from '~/common/providers';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions
) => {
  const Wrapper = ({ children }: PropsWithChildren): JSX.Element => (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
