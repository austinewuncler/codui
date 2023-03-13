import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '../utils';
import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle', () => {
  it('should render', () => {
    renderWithProviders(<DarkModeToggle />);

    expect(
      screen.getByRole('button', { name: 'dark mode toggle' })
    ).toBeInTheDocument();
  });

  it('toggles dark when clicked', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(<DarkModeToggle />);

    expect(screen.getByTestId('toggle')).toHaveClass('justify-start');

    const darkModeToggleButton = screen.getByRole('button', {
      name: 'dark mode toggle',
    });
    await click(darkModeToggleButton);

    expect(screen.getByTestId('toggle')).toHaveClass('justify-end');

    await click(darkModeToggleButton);

    expect(screen.getByTestId('toggle')).toHaveClass('justify-start');
  });
});
