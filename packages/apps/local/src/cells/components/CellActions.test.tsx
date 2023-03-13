import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/common/utils';

import { type CellsState } from '../reducer';
import CellActions from './CellActions';
import CellList from './CellList';

describe('CellActions', () => {
  const cells: CellsState = {
    isLoading: false,
    error: undefined,
    data: {
      ids: ['id1', 'id2'],
      entities: {
        id1: { id: 'id1', language: 'javascript', code: '' },
        id2: { id: 'id2', language: 'javascript', code: '' },
      },
    },
  };

  it('should render all action buttons', () => {
    renderWithProviders(<CellActions cellId="id1" />);

    expect(
      screen.getByRole('button', { name: 'moveCellUp(id1)' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'moveCellDown(id1)' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'removeCell(id1)' })
    ).toBeInTheDocument();
  });

  describe('moveCellUp', () => {
    it('should move the cell up when clicked', async () => {
      const { click } = userEvent.setup();
      renderWithProviders(<CellList />, { preloadedState: { cells } });

      const originalCells = screen.getAllByRole('article');

      expect(originalCells).toBeArrayOfSize(2);

      await click(screen.getByRole('button', { name: 'moveCellUp(id2)' }));

      const newCells = screen.getAllByRole('article');

      expect(originalCells[0]).toBe(newCells[1]);
      expect(originalCells[1]).toBe(newCells[0]);
    });
  });

  describe('moveCellDown', () => {
    it('should move the cell down when clicked', async () => {
      const { click } = userEvent.setup();
      renderWithProviders(<CellList />, { preloadedState: { cells } });

      const originalCells = screen.getAllByRole('article');

      expect(originalCells).toBeArrayOfSize(2);

      await click(screen.getByRole('button', { name: 'moveCellDown(id1)' }));

      const newCells = screen.getAllByRole('article');

      expect(originalCells[0]).toBe(newCells[1]);
      expect(originalCells[1]).toBe(newCells[0]);
    });
  });

  describe('removeCell', () => {
    const cells: CellsState = {
      isLoading: false,
      error: undefined,
      data: {
        ids: ['id1'],
        entities: { id1: { id: 'id1', language: 'javascript', code: '' } },
      },
    };

    it('should remove the cell when clicked', async () => {
      const { click } = userEvent.setup();
      renderWithProviders(<CellList />, { preloadedState: { cells } });

      expect(screen.getByRole('article')).toBeInTheDocument();

      await click(screen.getByRole('button', { name: 'removeCell(id1)' }));

      await waitForElementToBeRemoved(() => screen.queryByRole('article'));

      expect(screen.queryByRole('article')).not.toBeInTheDocument();
    });
  });
});
