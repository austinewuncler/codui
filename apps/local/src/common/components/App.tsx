import React from 'react';

import { StoreProvider, ThemeProvider } from '../providers';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const App = (): JSX.Element => (
  <ThemeProvider>
    <StoreProvider>
      <header className="sticky inset-x-0 top-0 bg-white text-black transition-colors dark:bg-black dark:text-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          <Logo />
          <DarkModeToggle />
        </div>
      </header>
      <main className="custom-scrollbar h-[calc(100vh-4rem)] overflow-auto py-6">
        <div className="container mx-auto px-4 sm:px-0">Main</div>
      </main>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
