import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import type { RootState } from '~/common/store';

import {
  onDeleteAllCells,
  onDeleteCell,
  onInsertCell,
  onMoveCell,
  onUpdateCellContent,
  selectCells,
} from '../reducers';
import { saveCells } from '../trpc';

const cellsMiddleware = createListenerMiddleware();

cellsMiddleware.startListening({
  matcher: isAnyOf(
    onInsertCell,
    onMoveCell,
    onDeleteCell,
    onDeleteAllCells,
    onUpdateCellContent
  ),
  effect: (_, { getState }) => {
    const cells = selectCells(getState() as RootState);
    setTimeout(() => {
      void saveCells.mutate({ cells });
    }, 1000);
  },
});

export default cellsMiddleware;
