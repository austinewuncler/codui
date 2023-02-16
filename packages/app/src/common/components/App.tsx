import React from 'react';

import { Cells } from '~/cells/components';

import { DarkThemeProvider, StoreProvider } from '../providers';
import DarkThemeToggle from './DarkThemeToggle';

const App = (): JSX.Element => (
  <DarkThemeProvider>
    <div className="h-screen bg-white text-black transition-colors dark:bg-black dark:text-white">
      <StoreProvider>
        <header className="sticky inset-x-0 top-0">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
            <button type="button" className="font-cursive text-6xl">
              co<span className="text-primary">&lt;&#124;</span>ui
            </button>
            <DarkThemeToggle />
          </div>
        </header>
        <main className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-track-primary-light scrollbar-thumb-primary scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-primary-dark">
          <div className="container mx-auto px-4 py-8 sm:px-0">
            <Cells />
          </div>
        </main>
      </StoreProvider>
    </div>
  </DarkThemeProvider>
);

export default App;
