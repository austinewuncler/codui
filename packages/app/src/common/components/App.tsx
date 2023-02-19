import React from 'react';

import { DarkThemeProvider, StoreProvider } from '../providers';
import DarkThemeToggle from './DarkThemeToggle';
import Logo from './Logo';
import MainContent from './MainContent';

const App = (): JSX.Element => (
  <DarkThemeProvider>
    <div className="h-screen bg-white font-sans text-black transition-colors dark:bg-black dark:text-white">
      <StoreProvider>
        <header className="sticky inset-x-0 top-0">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
            <Logo />
            <DarkThemeToggle />
          </div>
        </header>

        <MainContent />
      </StoreProvider>
    </div>
  </DarkThemeProvider>
);

export default App;
