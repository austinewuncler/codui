import React from 'react';

import { ThemeProvider } from '../providers';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <header>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          <Logo />
          <DarkModeToggle />
        </div>
      </header>
    </ThemeProvider>
  );
};

export default App;
