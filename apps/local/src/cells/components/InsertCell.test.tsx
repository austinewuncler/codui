import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/utils';

import CellList from './CellList';

describe('InsertCell', () => {
  it('should add a new cell', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(<CellList />, {});

    expect(screen.queryByRole('article')).not.toBeInTheDocument();

    await click(
      screen.getByRole('button', {
        name: 'insert javascript cell',
      })
    );

    await waitFor(() => {
      expect(screen.getAllByRole('article')).toBeArrayOfSize(1);
    });
  });

  it('should add a cell after another cell', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(<CellList />, {
      preloadedState: {
        cells: {
          isLoading: false,
          error: undefined,
          data: {
            ids: ['id1', 'id2'],
            entities: {
              id1: { id: 'id1', syntax: 'javascript', code: '' },
              id2: { id: 'id2', syntax: 'javascript', code: '' },
            },
          },
        },
      },
    });

    expect(screen.getAllByRole('article')).toBeArrayOfSize(2);

    await click(
      screen.getByRole('button', {
        name: 'insert javascript cell after id1',
      })
    );

    await waitFor(() => {
      expect(screen.getAllByRole('article')).toBeArrayOfSize(3);
    });
  });
});
