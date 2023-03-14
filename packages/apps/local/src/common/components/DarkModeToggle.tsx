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
      <div className="-translate-x-full -rotate-180 p-1 text-white opacity-0 transition-all dark:translate-x-0 dark:rotate-0 dark:opacity-100">
        <SunIcon className="h-4 w-4" />
      </div>
      <div className="translate-x-0 rotate-0 p-1 text-black opacity-100 transition-all dark:translate-x-full dark:rotate-180 dark:opacity-0">
        <MoonIcon className="h-4 w-4" />
      </div>
      <div
        data-testid="toggle"
        className={`absolute inset-0 flex justify-start p-1 ${
          isDarkMode ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.div
          layout
          className="rounded-full bg-primary p-1 shadow transition-colors"
        >
          <div className="h-4 w-4" />
        </motion.div>
      </div>
    </button>
  );
};

export default DarkModeToggle;
