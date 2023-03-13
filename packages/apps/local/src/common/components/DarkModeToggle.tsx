import React from 'react';

import { useTheme } from '../providers';
import { MoonIcon, SunIcon } from './icons';

const DarkModeToggle = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type="button"
      title="dark mode toggle"
      className="relative flex rounded-full bg-primary-light p-1 shadow-inner"
      onClick={toggleDarkMode}
    >
      <div className="p-1">
        <SunIcon className="h-4 w-4" />
      </div>
      <div className="p-1">
        <MoonIcon className="h-4 w-4" />
      </div>
      <div
        data-testid="toggle"
        className={`absolute inset-0 flex justify-start p-1 ${
          isDarkMode ? 'justify-end' : 'justify-start'
        }`}
      >
        <div className="rounded-full bg-primary p-1 shadow">
          <div className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
};

export default DarkModeToggle;
