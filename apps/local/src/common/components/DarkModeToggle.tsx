import { motion } from 'framer-motion';
import React from 'react';

import { useTheme } from '../providers';
import { MoonIcon, SunIcon } from './icons';

const DarkModeToggle = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type="button"
      title="dark mode toggle"
      className="relative flex overflow-hidden rounded-full bg-primary-light p-1 shadow-inner transition-colors dark:bg-primary-dark"
      onClick={toggleDarkMode}
    >
      <div
        className={`grid h-6 w-6 place-content-center rounded-full text-white transition-all ${
          isDarkMode
            ? 'translate-x-0 rotate-0 opacity-100'
            : '-translate-x-full -rotate-180 opacity-0'
        }`}
      >
        <SunIcon className="h-4 w-4" />
      </div>
      <div
        className={`grid h-6 w-6 place-content-center rounded-full text-black transition-all ${
          isDarkMode
            ? 'translate-x-full rotate-180 opacity-0'
            : 'translate-x-0 rotate-0 opacity-100'
        }`}
      >
        <MoonIcon className="h-4 w-4" />
      </div>
      <div
        className={`absolute inset-0 flex rounded-full p-1  ${
          isDarkMode ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.div layout className="h-6 w-6 rounded-full bg-primary shadow" />
      </div>
    </button>
  );
};

export default DarkModeToggle;
