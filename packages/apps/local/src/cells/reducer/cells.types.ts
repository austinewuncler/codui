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
