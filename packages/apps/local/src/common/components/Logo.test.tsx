import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { CellList } from '~/cells/components';

import { renderWithProviders } from '../utils';
import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    renderWithProviders(<Logo />);

    expect(
      screen.getByRole('button', { name: '< <> </ui' })
    ).toBeInTheDocument();
  });

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
              ids: ['id1', 'id2'],
              entities: {
                id1: { id: 'id1', language: 'javascript', code: '' },
                id2: { id: 'id2', language: 'javascript', code: '' },
              },
            },
          },
        },
      }
    );

    expect(screen.getAllByRole('article')).toBeArrayOfSize(2);

    await click(screen.getByRole('button', { name: '< <> </ui' }));

    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });
});
