import {
  createEntityAdapter,
  createSlice,
  type EntityId,
  nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';

import { type RootState } from '~/common/providers';

import {
  type Cell,
  type CellsState,
  type InsertCellPayload,
  type MoveCellPayload,
} from './cell.types';

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
    onInsertCell: ({ data }, { payload }: PayloadAction<InsertCellPayload>) => {
      const { prevCellId, syntax } = payload;
      const cell: Cell = { syntax, id: nanoid(), code: '' };
      const { entities, ids } = data;
      entities[cell.id] = cell;
      const prevIndex = ids.findIndex((id) => id === prevCellId);

      if (prevIndex < 0) ids.unshift(cell.id);
      else ids.splice(prevIndex + 1, 0, cell.id);
    },
    onMoveCell: ({ data }, { payload }: PayloadAction<MoveCellPayload>) => {
      const { cellId, direction } = payload;
      const { ids } = data;
      const srcIndex = ids.findIndex((id) => id === cellId);
      const destIndex = srcIndex + (direction === 'up' ? -1 : 1);

      if (destIndex >= 0 && destIndex < ids.length) {
        ids[srcIndex] = ids[destIndex];
        ids[destIndex] = cellId;
      }
    },
    onDeleteCell: ({ data }, { payload }: PayloadAction<EntityId>) => {
      cellsAdapter.removeOne(data, payload);
    },
    onDeleteAllCells: ({ data }) => {
      cellsAdapter.removeAll(data);
    },
  },
});

export default cellsSlice.reducer;
export const { onInsertCell, onMoveCell, onDeleteCell, onDeleteAllCells } =
  cellsSlice.actions;
export const { selectAll: selectCells } = cellsAdapter.getSelectors(
  ({ cells }: RootState) => cells.data
);
