import {
  createEntityAdapter,
  createSlice,
  type EntityId,
  type EntityState,
} from '@reduxjs/toolkit';

interface Cell {
  id: EntityId;
  syntax: 'javascript';
  code: string;
}

interface CellsState {
  isLoading: boolean;
  error: string | undefined;
  data: EntityState<Cell>;
}

const cellsAdapter = createEntityAdapter<Cell>();

const initialState: CellsState = {
  isLoading: false,
  error: undefined,
  data: cellsAdapter.getInitialState(),
};

const cellsSlice = createSlice({ name: 'cells', initialState, reducers: {} });

export default cellsSlice.reducer;
