import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { renderWithProviders } from '~/utils';

import DarkModeToggle from './DarkModeToggle';

describe('DarkModeToggle', () => {
  it('should toggle the dark mode', async () => {
    const { click } = userEvent.setup();
    renderWithProviders(<DarkModeToggle />, {});

    expect(screen.getByTestId('sun-icon')).toHaveClass(
      '-translate-x-full',
      '-rotate-180',
      'opacity-0'
    );
    expect(screen.getByTestId('moon-icon')).toHaveClass(
      'translate-x-0',
      'rotate-0',
      'opacity-100'
    );
    expect(screen.getByTestId('toggle')).toHaveClass('justify-start');

    const toggleBtn = screen.getByRole('button', { name: 'dark mode toggle' });
    await click(toggleBtn);

    expect(screen.getByTestId('sun-icon')).toHaveClass(
      'translate-x-0',
      'rotate-0',
      'opacity-100'
    );
    expect(screen.getByTestId('moon-icon')).toHaveClass(
      'translate-x-full',
      'rotate-180',
      'opacity-0'
    );
    expect(screen.getByTestId('toggle')).toHaveClass('justify-end');

    await click(toggleBtn);

    expect(screen.getByTestId('sun-icon')).toHaveClass(
      '-translate-x-full',
      '-rotate-180',
      'opacity-0'
    );
    expect(screen.getByTestId('moon-icon')).toHaveClass(
      'translate-x-0',
      'rotate-0',
      'opacity-100'
    );
    expect(screen.getByTestId('toggle')).toHaveClass('justify-start');
  });
});
