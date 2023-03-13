import React from 'react';

import { StoreProvider, ThemeProvider } from '../providers';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const App = (): JSX.Element => (
  <ThemeProvider>
    <StoreProvider>
      <header className="sticky inset-x-0 top-0 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Logo />
          <DarkModeToggle />
        </div>
      </header>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
