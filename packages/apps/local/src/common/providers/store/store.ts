import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from '@reduxjs/toolkit';

import { cellsReducer } from '~/cells/reducer';

const rootReducer = combineReducers({ cells: cellsReducer });

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState });
export default setupStore;

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
