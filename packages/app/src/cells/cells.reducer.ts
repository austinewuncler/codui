import {
  createEntityAdapter,
  createSlice,
  nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '~/common/store';

import type { Cell, InsertCellPayload } from './cells.type';

const cellsAdapter = createEntityAdapter<Cell>();
const initialState = cellsAdapter.getInitialState();
const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    onInsertCell: (
      { ids, entities },
      { payload }: PayloadAction<InsertCellPayload>
    ) => {
      const { prevCellId, type } = payload;
      const cell: Cell = { id: nanoid(), type, content: '' };
      entities[cell.id] = cell;
      const prevIndex = ids.findIndex((id) => id === prevCellId);
      if (prevIndex < 0) ids.unshift(cell.id);
      else ids.splice(prevIndex + 1, 0, cell.id);
    },
  },
});

export default cellsSlice.reducer;
export const { onInsertCell } = cellsSlice.actions;
export const { selectAll: selectCells } = cellsAdapter.getSelectors(
  ({ cells }: RootState) => cells
);
