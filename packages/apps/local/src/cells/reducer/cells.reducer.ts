import {
  createEntityAdapter,
  createSlice,
  nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';

import { type RootState } from '~/common/providers';

import {
  type Cell,
  type CellsState,
  type InsertCellPayload,
} from './cells.types';

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
    onRemoveAllCells: ({ data }) => {
      cellsAdapter.removeAll(data);
    },
    onInsertCell: ({ data }, { payload }: PayloadAction<InsertCellPayload>) => {
      const { language, prevCellId } = payload;
      const cell: Cell = { id: nanoid(), language, code: '' };
      const { ids, entities } = data;
      entities[cell.id] = cell;
      const prevIndex = ids.findIndex((id) => id === prevCellId);

      if (prevIndex < 0) ids.unshift(cell.id);
      else ids.splice(prevIndex + 1, 0, cell.id);
    },
  },
});
export default cellsSlice.reducer;
export const { selectAll: selectCells } = cellsAdapter.getSelectors(
  ({ cells }: RootState) => cells.data
);
export const { onRemoveAllCells, onInsertCell } = cellsSlice.actions;
