import { configureStore } from '@reduxjs/toolkit';

import { cellsReducer } from '~/cells/reducer';

const store = configureStore({ reducer: { cells: cellsReducer } });

export default store;
