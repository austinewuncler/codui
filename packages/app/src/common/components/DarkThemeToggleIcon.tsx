import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Props {
  mode: 'light' | 'dark';
}

const DarkThemeToggleIcon = ({ mode }: Props): JSX.Element => (
  <div className="grid h-5 w-5 place-content-center overflow-hidden">
    {mode === 'light' ? (
      <SunIcon className="h-4 w-4 -translate-x-full -rotate-180 text-black opacity-0 transition-all dark:translate-x-0 dark:rotate-0 dark:opacity-100" />
    ) : (
      <MoonIcon className="h-4 w-4 translate-x-0 rotate-0 text-white opacity-100 transition-all dark:translate-x-full dark:rotate-180 dark:opacity-0" />
    )}
  </div>
);

export default DarkThemeToggleIcon;
