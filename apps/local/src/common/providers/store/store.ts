import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from '@reduxjs/toolkit';

import { cellsReducer } from '~/cells/reducer';

const rootReducer = combineReducers({ cells: cellsReducer });

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type TypedDispatch = AppStore['dispatch'];
