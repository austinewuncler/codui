import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CellList } from '~/cells/components';
import { renderWithProviders } from '~/utils';

import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    renderWithProviders(<Logo />, {});
    expect(
      screen.getByRole('button', { name: '< <> </ui' })
    ).toBeInTheDocument();
  });

  it('should delete all cells', async () => {
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
    expect(screen.queryAllByRole('article')).toHaveLength(0);
  });
});
