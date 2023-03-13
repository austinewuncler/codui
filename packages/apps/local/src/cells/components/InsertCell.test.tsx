import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/common/utils';

import CellList from './CellList';
import InsertCell from './InsertCell';

describe('InsertCell', () => {
  it('should render language buttons', () => {
    renderWithProviders(<InsertCell />);

    expect(
      screen.getByRole('button', { name: 'insert javascript cell' })
    ).toBeInTheDocument();
  });

  describe('insert cell button', () => {
    it('should insert a new cell', async () => {
      const { click } = userEvent.setup();
      renderWithProviders(<CellList />);

      expect(screen.queryByRole('article')).not.toBeInTheDocument();

      await click(
        screen.getByRole('button', { name: 'insert javascript cell' })
      );

      expect(screen.getByRole('article')).toBeInTheDocument();

      await click(
        screen.getByRole('button', {
          name: /^insert javascript cell after .+/,
        })
      );

      expect(screen.getAllByRole('article')).toBeArrayOfSize(2);
    });
  });
});
