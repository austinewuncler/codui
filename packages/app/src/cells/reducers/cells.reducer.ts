import {
  createEntityAdapter,
  createSlice,
  type EntityId,
  nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';
import invariant from 'tiny-invariant';

import type { RootState } from '~/common/store';

import type {
  Cell,
  InsertCellPayload,
  MoveCellPayload,
  UpdateCellContentPayload,
} from '../types';
import { formatCode, formatMarkdown } from '../utils';

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
    onUpdateCellContent: (
      state,
      { payload }: PayloadAction<UpdateCellContentPayload>
    ) => {
      const { cellId, content } = payload;

      if (content != null)
        cellsAdapter.updateOne(state, { id: cellId, changes: { content } });
      else {
        const cell = state.entities[cellId];
        invariant(cell);
        const { id, type, content: unformatted } = cell;
        cellsAdapter.updateOne(state, {
          id,
          changes: {
            content:
              type === 'code'
                ? formatCode(unformatted)
                : formatMarkdown(unformatted),
          },
        });
      }
    },
    onMoveCell: ({ ids }, { payload }: PayloadAction<MoveCellPayload>) => {
      const { cellId, direction } = payload;
      const srcIndex = ids.findIndex((id) => id === cellId);
      const destIndex = srcIndex + (direction === 'up' ? -1 : 1);

      if (destIndex >= 0 && destIndex < ids.length) {
        const destId = ids[destIndex];
        invariant(destId);
        ids.splice(srcIndex, 1, destId);
        ids.splice(destIndex, 1, cellId);
      }
    },
    onDeleteCell: (state, { payload }: PayloadAction<EntityId>) => {
      cellsAdapter.removeOne(state, payload);
    },
    onDeleteAllCells: (state) => {
      cellsAdapter.removeAll(state);
    },
  },
});

export default cellsSlice.reducer;
export const {
  onInsertCell,
  onUpdateCellContent,
  onMoveCell,
  onDeleteCell,
  onDeleteAllCells,
} = cellsSlice.actions;
export const { selectAll: selectCells, selectIds: selectCellIds } =
  cellsAdapter.getSelectors(({ cells }: RootState) => cells);
