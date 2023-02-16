import React from 'react';

import DarkModeToggleIcon from './DarkModeToggleIcon';

const App = (): JSX.Element => (
  <div>
    <header>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-0">
        <button className="font-cursive text-6xl text-slate-900">
          co<span className="text-cyan-500">&lt;&#124;</span>ui
        </button>
        <button className="relative flex h-6 rounded-full bg-cyan-200 p-0.5 shadow-inner">
          <DarkModeToggleIcon mode="light" />
          <DarkModeToggleIcon mode="dark" />
          <div className="absolute inset-0 flex justify-start p-0.5">
            <div className="h-5 w-5 rounded-full bg-cyan-500 drop-shadow" />
          </div>
        </button>
      </div>
    </header>
  </div>
);

export default App;
