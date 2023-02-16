import { configureStore } from '@reduxjs/toolkit';

import cellsReducer from '~/cells/cells.reducer';

const store = configureStore({ reducer: { cells: cellsReducer } });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
