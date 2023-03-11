import { type EntityId, type EntityState } from '@reduxjs/toolkit';

export type CellSyntax = 'javascript';

export interface Cell {
  id: EntityId;
  syntax: CellSyntax;
  code: string;
}

export interface CellsState {
  isLoading: boolean;
  error: string | undefined;
  data: EntityState<Cell>;
}

export interface InsertCellPayload {
  prevCellId: EntityId | undefined;
  syntax: CellSyntax;
}

export interface MoveCellPayload {
  cellId: EntityId;
  direction: 'up' | 'down';
}
