import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CellList } from '~/cells/components';
import { renderWithProviders } from '~/utils';

import Logo from './Logo';

describe('Logo', () => {
  it('should delete all cells when clicked', async () => {
    const { click } = userEvent.setup();

    renderWithProviders(
      <>
        <Logo />
        <CellList />
      </>,
      {
        preloadedState: {
          cells: {
            isLoading: false,
            error: undefined,
            data: {
              ids: ['id1'],
              entities: { id1: { code: '', id: 'id1', syntax: 'javascript' } },
            },
          },
        },
      }
    );

    expect(screen.getAllByRole('article')).toBeArrayOfSize(1);

    await click(screen.getByRole('button', { name: '< <> </ui' }));

    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
