import React from 'react';

import { DarkThemeProvider } from '../providers';
import DarkThemeToggle from './DarkThemeToggle';

const App = (): JSX.Element => (
  <DarkThemeProvider>
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-black dark:text-slate-100">
      <header>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
          <button type="button" className="font-cursive text-6xl">
            co<span className="text-sky-500">&lt;&#124;</span>ui
          </button>
          <DarkThemeToggle />
        </div>
      </header>
    </div>
  </DarkThemeProvider>
);

export default App;
