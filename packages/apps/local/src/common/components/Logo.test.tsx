import { render, screen } from '@testing-library/react';
import React from 'react';

import Logo from './Logo';

describe('Logo', () => {
  it('should render', () => {
    render(<Logo />);

    expect(
      screen.getByRole('button', { name: '< <> </ui' })
    ).toBeInTheDocument();
  });
});
