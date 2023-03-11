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
});
