import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/utils';

import CellList from './CellList';

describe('InsertCell', () => {
  it('should add a new cell', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(<CellList />, {});

    expect(screen.queryByRole('article')).not.toBeInTheDocument();

    const insertCell = screen.getByRole('button', {
      name: 'insert javascript cell',
    });

    await click(insertCell);

    expect(screen.getAllByRole('article')).toBeArrayOfSize(1);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toBeArrayOfSize(2);

    await click(buttons[1]);

    expect(screen.getAllByRole('article')).toBeArrayOfSize(2);
  });
});
