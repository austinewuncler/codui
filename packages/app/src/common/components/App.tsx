import React from 'react';

import { Cells } from '~/cells/components';

import { DarkThemeProvider } from '../providers';
import DarkThemeToggle from './DarkThemeToggle';

const App = (): JSX.Element => (
  <DarkThemeProvider>
    <div className="h-screen bg-white text-slate-900 transition-colors dark:bg-black dark:text-slate-100">
      <header className="sticky inset-x-0 top-0">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          <button type="button" className="font-cursive text-6xl">
            co<span className="text-sky-500">&lt;&#124;</span>ui
          </button>
          <DarkThemeToggle />
        </div>
      </header>
      <main className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-thin scrollbar-track-sky-100 scrollbar-thumb-sky-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:scrollbar-track-sky-900">
        <div className="container mx-auto px-4 py-8 sm:px-0">
          <Cells />
        </div>
      </main>
    </div>
  </DarkThemeProvider>
);

export default App;
