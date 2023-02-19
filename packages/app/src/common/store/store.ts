import { configureStore } from '@reduxjs/toolkit';

import { cellsMiddleware } from '~/cells/middleware';
import { cellsReducer } from '~/cells/reducers';

const store = configureStore({
  reducer: { cells: cellsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cellsMiddleware.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
