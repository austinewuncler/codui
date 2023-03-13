import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { type RootState } from '~/common/providers';

import { type Cell, type CellsState } from './cells.types';

const cellsAdapter = createEntityAdapter<Cell>();

const initialState: CellsState = {
  isLoading: false,
  error: undefined,
  data: cellsAdapter.getInitialState(),
};

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    removeAllCells: ({ data }) => {
      cellsAdapter.removeAll(data);
    },
  },
});
export default cellsSlice.reducer;
export const { selectAll: selectCells } = cellsAdapter.getSelectors(
  ({ cells }: RootState) => cells.data
);
export const { removeAllCells } = cellsSlice.actions;
