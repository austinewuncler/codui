import React from 'react';

import { CellList } from '~/cells/components';

import { StoreProvider, ThemeProvider } from '../providers';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const App = (): JSX.Element => (
  <ThemeProvider>
    <StoreProvider>
      <header className="sticky inset-x-0 top-0 bg-white transition-colors dark:bg-black">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Logo />
          <DarkModeToggle />
        </div>
      </header>
      <main className="custom-scrollbar h-[calc(100vh-4rem)] overflow-auto">
        <div className="container mx-auto py-6">
          <CellList />
        </div>
      </main>
    </StoreProvider>
  </ThemeProvider>
);

export default App;
