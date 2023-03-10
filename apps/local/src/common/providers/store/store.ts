import { configureStore } from '@reduxjs/toolkit';

import { cellsReducer } from '~/cells/reducer';

const store = configureStore({ reducer: { cells: cellsReducer } });

export default store;

export type TypedDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
