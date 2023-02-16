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
