import { motion } from 'framer-motion';
import React from 'react';

import { useDarkTheme } from '../hooks';
import DarkThemeToggleIcon from './DarkThemeToggleIcon';

const DarkThemeToggle = (): JSX.Element => {
  const { toggleDarkTheme } = useDarkTheme();

  return (
    <button
      type="button"
      title="dark theme toggle"
      className="relative flex h-6 rounded-full bg-secondary-light p-0.5 shadow-inner transition-colors dark:bg-secondary-dark"
      onClick={toggleDarkTheme}
    >
      <DarkThemeToggleIcon mode="light" />
      <DarkThemeToggleIcon mode="dark" />
      <div className="absolute inset-0 flex justify-start p-0.5 dark:justify-end">
        <motion.div
          layout
          className="h-5 w-5 rounded-full bg-primary-light drop-shadow transition-colors dark:bg-primary-dark"
        />
      </div>
    </button>
  );
};

export default DarkThemeToggle;
