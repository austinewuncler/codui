import type { EntityId } from '@reduxjs/toolkit';

export type CellType = 'code' | 'markdown';
export interface Cell {
  id: EntityId;
  type: CellType;
  content: string;
}
export interface InsertCellPayload {
  prevCellId: EntityId | null;
  type: CellType;
}

export interface UpdateCellContentPayload {
  cellId: EntityId;
  content?: string;
}

export type CellAction =
  | 'formatCellContent'
  | 'moveCellUp'
  | 'moveCellDown'
  | 'deleteCell';

export interface MoveCellPayload {
  cellId: EntityId;
  direction: 'up' | 'down';
}
