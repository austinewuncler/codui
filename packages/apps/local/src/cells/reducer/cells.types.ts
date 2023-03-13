import { type EntityId, type EntityState } from '@reduxjs/toolkit';

type Language = 'javascript';

export interface Cell {
  id: EntityId;
  language: Language;
  code: string;
}
export interface CellsState {
  isLoading: false;
  error: string | undefined;
  data: EntityState<Cell>;
}

export interface InsertCellPayload {
  prevCellId: EntityId | undefined;
  language: Language;
}

export interface MoveCellPayload {
  cellId: EntityId;
  direction: 'up' | 'down';
}

export type CellAction = 'moveCellUp' | 'moveCellDown' | 'removeCell';
