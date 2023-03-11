import { type EntityState } from '@reduxjs/toolkit';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/utils';

import { type Cell, type CellsState } from '../reducer';
import CellList from './CellList';

describe('CellList', () => {
  const cells: CellsState = {
    isLoading: false,
    error: undefined,
    data: { ids: [], entities: {} },
  };

  describe('CellActions', () => {
    const data: EntityState<Cell> = {
      ids: ['id1', 'id2'],
      entities: {
        id1: { id: 'id1', syntax: 'javascript', code: '' },
        id2: { id: 'id2', syntax: 'javascript', code: '' },
      },
    };

    describe('moveCellUp()', () => {
      it('should move cell up', async () => {
        const { click } = userEvent.setup();
        renderWithProviders(<CellList />, {
          preloadedState: { cells: { ...cells, data } },
        });
        const originalCells = screen.getAllByRole('article');

        await click(screen.getByRole('button', { name: 'moveCellUp(id2)' }));
        const newCells = screen.getAllByRole('article');

        expect(newCells[0]).toBe(originalCells[1]);
        expect(newCells[1]).toBe(originalCells[0]);
      });
    });

    describe('moveCellDown()', () => {
      it('should move cell down', async () => {
        const { click } = userEvent.setup();
        renderWithProviders(<CellList />, {
          preloadedState: { cells: { ...cells, data } },
        });
        const originalCells = screen.getAllByRole('article');

        await click(screen.getByRole('button', { name: 'moveCellDown(id1)' }));
        const newCells = screen.getAllByRole('article');

        expect(newCells[0]).toBe(originalCells[1]);
        expect(newCells[1]).toBe(originalCells[0]);
      });
    });

    describe('deleteCell()', () => {
      it('should delete a cell', async () => {
        const { click } = userEvent.setup();
        renderWithProviders(<CellList />, {
          preloadedState: {
            cells: {
              ...cells,
              data: {
                ids: ['id1'],
                entities: {
                  id1: { id: 'id1', syntax: 'javascript', code: '' },
                },
              },
            },
          },
        });

        expect(screen.getByRole('article')).toBeInTheDocument();

        await click(screen.getByRole('button', { name: 'deleteCell(id1)' }));
        await waitForElementToBeRemoved(() => screen.queryByRole('article'));

        expect(screen.queryByRole('article')).not.toBeInTheDocument();
      });
    });
  });
});
