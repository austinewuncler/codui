import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CellList } from '~/cells/components';
import { type CellsState } from '~/cells/reducer';
import { renderWithProviders } from '~/utils';

import Logo from './Logo';

describe('Logo', () => {
  const cells: CellsState = {
    isLoading: false,
    error: undefined,
    data: {
      ids: ['id1'],
      entities: { id1: { code: '', id: 'id1', syntax: 'javascript' } },
    },
  };

  it('should delete all cells when clicked', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(
      <>
        <Logo />
        <CellList />
      </>,
      { preloadedState: { cells } }
    );

    expect(screen.getAllByRole('article')).toBeInTheDocument();

    await click(screen.getByRole('button', { name: 'codui' }));
    await waitForElementToBeRemoved(() => screen.queryByRole('article'));

    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
