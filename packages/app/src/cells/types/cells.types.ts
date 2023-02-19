import type { CellsRouter } from '@codui/server';
import type { EntityId, EntityState } from '@reduxjs/toolkit';
import type { inferRouterOutputs } from '@trpc/server';

export type Cell = inferRouterOutputs<CellsRouter>['readCells'][0];
export interface CellsState {
  isLoading: boolean;
  error: string | undefined;
  data: EntityState<Cell>;
}
export type CellType = Cell['type'];
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
