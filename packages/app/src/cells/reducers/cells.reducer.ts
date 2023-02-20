import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  type EntityId,
  nanoid,
  type PayloadAction,
} from '@reduxjs/toolkit';
import invariant from 'tiny-invariant';

import type { RootState } from '~/common/store';

import { defaultCells } from '../data';
import { readCells } from '../trpc';
import type {
  Cell,
  CellsState,
  InsertCellPayload,
  MoveCellPayload,
  UpdateCellContentPayload,
} from '../types';
import { formatCode, formatMarkdown } from '../utils';

const cellsAdapter = createEntityAdapter<Cell>();
const initialState: CellsState = {
  isLoading: false,
  error: undefined,
  data: cellsAdapter.getInitialState(),
};

export const onInitializeCells = createAsyncThunk<Cell[], null>(
  'cells/onInitializeCells',
  async () => await readCells.query()
);

const cellsSlice = createSlice({
  name: 'cells',
  initialState,
  reducers: {
    onInsertCell: ({ data }, { payload }: PayloadAction<InsertCellPayload>) => {
      const { prevCellId, type } = payload;
      const cell: Cell = { id: nanoid(), type, content: '' };
      const { ids, entities } = data;
      entities[cell.id] = cell;
      const prevIndex = ids.findIndex((id) => id === prevCellId);

      if (prevIndex < 0) ids.unshift(cell.id);
      else ids.splice(prevIndex + 1, 0, cell.id);
    },
    onUpdateCellContent: (
      { data },
      { payload }: PayloadAction<UpdateCellContentPayload>
    ) => {
      const { cellId, content } = payload;

      if (content != null)
        cellsAdapter.updateOne(data, { id: cellId, changes: { content } });
      else {
        const cell = data.entities[cellId];
        invariant(cell);
        const { id, type, content: unformatted } = cell;
        cellsAdapter.updateOne(data, {
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
    onMoveCell: ({ data }, { payload }: PayloadAction<MoveCellPayload>) => {
      const { cellId, direction } = payload;
      const { ids } = data;
      const srcIndex = ids.findIndex((id) => id === cellId);
      const destIndex = srcIndex + (direction === 'up' ? -1 : 1);

      if (destIndex >= 0 && destIndex < ids.length) {
        const destId = ids[destIndex];
        invariant(destId);
        ids.splice(srcIndex, 1, destId);
        ids.splice(destIndex, 1, cellId);
      }
    },
    onDeleteCell: ({ data }, { payload }: PayloadAction<EntityId>) => {
      cellsAdapter.removeOne(data, payload);
    },
    onDeleteAllCells: ({ data }) => {
      cellsAdapter.removeAll(data);
    },
  },
  extraReducers: ({ addCase }) =>
    addCase(onInitializeCells.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(onInitializeCells.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(onInitializeCells.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = cellsAdapter.addMany(
          state.data,
          payload.length > 0 ? payload : defaultCells
        );
      }),
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
  cellsAdapter.getSelectors(({ cells }: RootState) => cells.data);
