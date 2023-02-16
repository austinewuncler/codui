import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
  mode: 'light' | 'dark';
}

const DarkModeToggleIcon = ({ mode }: Props): JSX.Element => (
  <div className="grid h-5 w-5 place-content-center">
    {mode === 'light' ? (
      <SunIcon className="h-4 w-4 text-white" />
    ) : (
      <MoonIcon className="h-4 w-4 text-black" />
    )}
  </div>
);

export default DarkModeToggleIcon;
